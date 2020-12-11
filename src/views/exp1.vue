<template>
  <div>
    <div>
      <label>时间片</label>
      <el-input-number size="mini" v-model="timeslice" :min="1"></el-input-number>
      <label>多级队列</label>
      <el-input-number size="mini" v-model="maxLevel" :min="1"></el-input-number>
    </div>
    <el-input v-model="data" placeholder="p0,0,5" style="width:200px;margin:0 10px;"></el-input>
    <el-button @click="add" size="small" type="primary">增加</el-button>
    <el-button @click="remove" size="small" type="danger">删除</el-button>
    <el-button @click="run1" size="small">简单轮转</el-button>
    <el-button @click="run2" size="small">多级反馈队列</el-button>
    <h4>进程序列</h4>
    <el-table :data="progress"  highlight-current-row  ref="table" @row-click="handlerRowClick">
      <el-table-column align="center" prop="id" label="id"></el-table-column>
      <el-table-column align="center" prop="arriveTime" label="到达时间"></el-table-column>
      <el-table-column align="center" prop="runTime" label="服务时间"></el-table-column>
    </el-table>
    <h4>进程调度过程</h4>
    <el-table :data="output" :row-class-name="tableRowClassName" show-summary :summary-method="getSummaries">
      <el-table-column align="center" prop="id" label="id"></el-table-column>
      <el-table-column align="center" prop="arriveTime" label="到达时间"></el-table-column>
      <el-table-column align="center" prop="runTime" label="服务时间"></el-table-column>
      <el-table-column align="center" prop="thisTime" label="本次时间"></el-table-column>
      <el-table-column align="center" prop="endTime" label="完成时间"></el-table-column>
      <el-table-column align="center" prop="cycleTime" label="周转时间"></el-table-column>
      <el-table-column align="center" prop="weightCycleTime" label="带权周转时间"></el-table-column>
    </el-table>
  </div>
</template>

<script>
/* eslint-disable no-unreachable */
export default {
  data(){
    return {
      progress:[{ 
        id: "p1",
        arriveTime: 0,
        runTime: 5,
        done: 0,
        status:"coming" 
      }, {
        id: "p2",
        arriveTime: 2,
        runTime: 4,
        done: 0 ,
        status:"coming"
      }, { 
        id: "p3",
        arriveTime: 4,
        runTime: 1,
        done: 0,
        status:"coming"
      }, { 
        id: "p4",
        arriveTime: 5,
        runTime: 6,
        done: 0 ,
        status:"coming"
      }],
      timeslice: 2,
      maxLevel:3,
      output:[],
      data:"",
    }
  },
  methods:{
    /**
     * 简单轮转
     */
    run1(){
      const progress = JSON.parse(JSON.stringify(this.progress));
      const finish = [];
      const output = [];
      const work = [];
      const time = this.timeslice;
      let currentTime = 0;
      // eslint-disable-next-line no-constant-condition
      while (true) {
        let cnt = 0;
        // 取进程队列中到达的进程并加入就绪队列
        progress.forEach(p => {
          if (p.status === "coming") {
            cnt++;
            if( currentTime >= p.arriveTime){
              p.status = "ready";
              work.push(p);
            }
          }
        });
        // 如果就绪队列为空且全部到达，循环结束
        if(!work.length && !cnt){
          break;
        }
        // 就绪队列为空，时间增加
        // 就绪队列不为空，取就绪队列队头执行
        if(work.length){
          const current = work.shift();
          // 执行时间大于一个时间片 => 未完成
          if (current.runTime > time + current.done) {
            current.done += time;
            currentTime += time;
            current.thisTime = time;
            progress.forEach(p => {
              if (p.status === "coming") {
                cnt++;
                if( currentTime >= p.arriveTime){
                  p.status = "ready";
                  work.push(p);
                }
              }
            });
            // 推入就绪队列列尾
            work.push(current);
          } else if(current.runTime > current.done){
            // 执行时间小于等于一个时间片 => 进程完成
            currentTime += current.runTime - current.done;
            current.thisTime = current.runTime - current.done;
            current.done = current.runTime;
            current.endTime = currentTime;
            current.cycleTime  = current.endTime - current.arriveTime;
            current.weightCycleTime  = (current.cycleTime / current.runTime).toFixed(2);
            finish.push(current)
          }
          // 记录过程
          output.push(JSON.parse(JSON.stringify(current)));
        }else currentTime++;
      }
      this.output = output;
      this.$message({
        message: '执行简单轮转完毕',
        type: 'success',
        duration: 500,
        showClose: true,
      });
    },
    /**
     * 多级反馈队列
     */
    run2(){
      const progress = JSON.parse(JSON.stringify(this.progress));
      const maxLevel = this.maxLevel; // 三级
      const time = [];
      let currentTime = 0;
      let finish = [];
      const output = [];
      const work = []; // 多级队列
      // 初始化队列及各队列时间片
      for (let i = 0; i < maxLevel; i++) {
        work.push([]);
        time.push((i+1)*this.timeslice);
      }
      // eslint-disable-next-line no-constant-condition
      while(true){
        let cnt = 0;
        let coming = 0;
        // 取进程队列中到达的进程并加入就绪队列
        progress.forEach(p => {
          if (p.status === "coming") {
            coming ++;
            if(currentTime >= p.arriveTime){
              p.status = "ready";
              work[0].push(p);
            }
          }
        });
        // 统计多级队列中进程数量
        work.forEach(arr => {
          cnt += arr.length;
        });
        // 如果多级队列中已经不存在进程且无进程到达，则说明已经完成
        if (!cnt && !coming) {
          break;
        }
        let current = null;
        let next = 0;
        let curIndex = 0;
        // 取多级队列中最前面一个
        for (let i = 0; i < maxLevel; i++) {
          if (work[i].length > 0) {
            current = work[i].shift();
            curIndex = i;
            next = i + 2 > maxLevel ? maxLevel - 1 : i + 1;
            break;
          }
        }
        // 执行时间超过一个时间片 => 未完成
        if (current.runTime > time[curIndex] + current.done) {
          current.done += time[curIndex];
          currentTime += time[curIndex];
          current.thisTime = time[curIndex];
          progress.forEach(p => {
            if (p.status === "coming") {
              coming ++;
              if(currentTime >= p.arriveTime){
                p.status = "ready";
                work[0].push(p);
              }
            }
          });
          // 推入下一级队尾
          work[next].push(current);
        } else{
          // 执行时间不满足一个时间片 => 进程完成
          currentTime += current.runTime - current.done;
          current.thisTime = current.runTime - current.done;
          current.done = current.runTime;
          current.endTime = currentTime;
          current.cycleTime  = current.endTime - current.arriveTime;
          current.weightCycleTime  = (current.cycleTime / current.runTime).toFixed(2);
          finish.push(current);
        }
        // 记录过程
        output.push(JSON.parse(JSON.stringify(current)));
      }
      this.output = output;
      this.$message({
        message: '执行多级反馈队列完毕',
        type: 'success',
        duration: 500,
        showClose: true,
      });
    },
    tableRowClassName({row}) {
      if (row.endTime) {
        return 'success-row';
      }
      return '';
    },
    getSummaries(param) {
      const { columns, data } = param;
      const sums = [];
      columns.forEach((column, index) => {
        if (index <= 3) {
          sums[index] = ' - ';
          return;
        }
        const values = data.map(item => Number(item[column.property]));
        if (!values.every(value => isNaN(value))) {
          let cnt = 0;
          sums[index] = values.reduce((prev, curr) => {
            const value = Number(curr);
            if (!isNaN(value)){
              cnt++;
              return prev + curr;
            } else {
              return prev;
            }
          }, 0);
          sums[index] = (sums[index]/cnt).toFixed(2);
        } else {
          sums[index] = 'N/A';
        }
      });
      return sums;
    },
    add(){
      const data = this.data;
      if(!this.data.includes(",") || this.data === ""){
        return;
      }else this.data = "";
      const obj ={ 
        id: data.split(",")[0],
        arriveTime: parseInt(data.split(",")[1]),
        runTime: parseInt(data.split(",")[2]),
        done: 0,
        status:"coming" 
      }
      this.progress.push(obj)
    },
    remove(){
      if(this.currentRow === -1){
        return;
      }else{
        this.progress.splice(this.currentRow,1);
        this.currentRow = -1;
      }
    },
    handlerRowClick(row){
      this.currentRow = this.progress.findIndex(e => e.id === row.id);
    }
  }
}
</script>

<style>
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
</style>
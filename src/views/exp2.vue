<template>
  <div>
    <el-input v-model="data" placeholder="a,p0,0,5" style="width:200px;margin:0 10px;"></el-input>
    <el-button @click="add" size="small" type="primary">增加</el-button>
    <el-button @click="remove" size="small" type="danger">删除</el-button>
    <el-button @click="fcfs" size="small">先来先服务</el-button>
    <el-button @click="sjf" size="small">最短作业优先</el-button>
    <el-button @click="hrrn" size="small">高响应比</el-button>

    <h4>作业序列</h4>
    <el-table :data="jobs"  highlight-current-row  ref="table"  @row-click="handlerRowClick">
      <el-table-column align="center" prop="userName" label="用户名"></el-table-column>
      <el-table-column align="center" prop="jobName" label="作业名"></el-table-column>
      <el-table-column align="center" prop="arriveTime" label="到达时间"></el-table-column>
      <el-table-column align="center" prop="runTime" label="服务时间"></el-table-column>
    </el-table>
    <h4>作业调度过程</h4>
    <el-table :data="output" :row-class-name="tableRowClassName" show-summary :summary-method="getSummaries">
      <el-table-column align="center" prop="userName" label="用户名"></el-table-column>
      <el-table-column align="center" prop="jobName" label="作业名"></el-table-column>
      <el-table-column align="center" prop="arriveTime" label="到达时间"></el-table-column>
      <el-table-column align="center" prop="runTime" label="服务时间"></el-table-column>
      <el-table-column align="center" prop="endTime" label="完成时间"></el-table-column>
      <el-table-column align="center" prop="waitTime" label="等待时间"></el-table-column>
      <el-table-column align="center" prop="cycleTime" label="周转时间"></el-table-column>
      <el-table-column align="center" prop="weightCycleTime" label="带权周转时间"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data(){
    return{
      jobs:[{
        userName:"A",
        jobName:"JOB1",
        status:"coming",
        arriveTime:0,
        runTime:15,
        need:[20,2]
      },{
        userName:"B",
        jobName:"JOB2",
        status:"coming",
        arriveTime:20,
        runTime:30,
        need:[60,1]
      },{
        userName:"C",
        jobName:"JOB3",
        status:"coming",
        arriveTime:30,
        runTime:9,
        need:[45,3]
      },{
        userName:"D",
        jobName:"JOB4",
        status:"coming",
        arriveTime:35,
        runTime:12,
        need:[10,2]
      },{
        userName:"E",
        jobName:"JOB5",
        status:"coming",
        arriveTime:45,
        runTime:6,
        need:[25,3]
      }],
      output:[],
      data:"",
      currentRow:-1
    }
  },
  methods:{
    /**
     * 先来先服务
     */
    fcfs(){
      const jobs = JSON.parse(JSON.stringify(this.jobs));
      const output = [];
      const work = [];
      let currentTime = 0;
      // eslint-disable-next-line no-constant-condition
      while(true){
        let cnt = 0;
        // 把到时间的作业推进就绪队列
        jobs.forEach(job =>{
          if(job.status === "coming"){
            cnt++;
            if(job.arriveTime <= currentTime){
              job.status = "ready";
              work.push(job);
            }
          }
        });
        // 如果没有作业到达且作业已完成，退出循环
        if(!work.length&& !cnt){
          break;
        }
        if(work.length){
          // 取到达的作业队头
          const current = work.shift();
          if(current.arriveTime > currentTime){
            currentTime = current.arriveTime;
          }
          current.startTime = currentTime;
          current.endTime = currentTime + current.runTime;
          current.waitTime = currentTime - current.arriveTime;
          current.allTime = current.waitTime + current.runTime;
          current.cycleTime  = current.endTime - current.arriveTime;
          current.weightCycleTime  = (current.cycleTime / current.runTime).toFixed(2);
          currentTime = current.endTime;
          // 记录过程
          output.push(current);
        }else currentTime++;

      }
      this.output = output;
      this.$message({
        message: '执行先来先服务调度算法（FCFS）完毕',
        type: 'success',
        duration: 500,
        showClose: true,
      });
    },
    /**
     * 短作业优先
     */
    sjf(){
      const jobs = JSON.parse(JSON.stringify(this.jobs));
      const output = [];
      let work = [];
      let length = jobs.length;
      let currentTime = 0;
      // eslint-disable-next-line no-constant-condition
      while(true){
        if(!length){
          break;
        }
        // 到达
        jobs.forEach(job =>{
          if(job.arriveTime <= currentTime && job.status === "coming"){
            job.status = "ready";
            work.push(job);
          }
        });
        if(work.length){
          // 服务时间递增排序，每次执行最短服务时间的
          work.sort((a,b) => a.runTime - b.runTime);
          const current = work.shift();
          current.startTime = currentTime;
          current.endTime = currentTime + current.runTime;
          current.waitTime = currentTime - current.arriveTime;
          current.allTime = current.waitTime + current.runTime;
          current.cycleTime  = current.endTime - current.arriveTime;
          current.weightCycleTime  = (current.cycleTime / current.runTime).toFixed(2);
          current.status = "done";
          currentTime = current.endTime;
          length --;
          output.push(current);
        }else currentTime ++;
      }
      this.output = output;
      this.$message({
        message: '执行最短作业优先调度算法（SJF）完毕',
        type: 'success',
        duration: 500,
        showClose: true,
      });
    },
    /**
     * 高响应比
     */
    hrrn(){
      const jobs = JSON.parse(JSON.stringify(this.jobs));
      const output = [];
      let work = [];
      let length = jobs.length;
      let currentTime = 0;
      // eslint-disable-next-line no-constant-condition
      while(true){
        if(!length){
          break;
        }
        // 到达
        jobs.forEach(job =>{
          if(job.arriveTime <= currentTime && job.status === "coming"){
            job.status = "ready";
            work.push(job);
          }
        });
        if(work.length){
          // 按响应比递减排序
          work.sort((a,b) => {
            (currentTime - b.arriveTime + b.runTime)/b.runTime -
            (currentTime - a.arriveTime + a.runTime)/a.runTime
          });
          const current = work.shift();
          current.startTime = currentTime;
          current.endTime = currentTime + current.runTime;
          current.waitTime = currentTime - current.arriveTime;
          current.allTime = current.waitTime + current.runTime;
          current.cycleTime  = current.endTime - current.arriveTime;
          current.weightCycleTime  = (current.cycleTime / current.runTime).toFixed(2);
          current.status = "done";
          currentTime = current.endTime;
          length --;
          output.push(current);
        }else currentTime ++;
      }
      this.output = output;
      this.$message({
        message: '执行高响应比优先调度算法（HRRN）完毕',
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
        if (index <= 4) {
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
        userName:data.split(",")[0],
        jobName:data.split(",")[1],
        status:"coming",
        arriveTime:parseInt(data.split(",")[2]),
        runTime:parseInt(data.split(",")[3]),
        need:[20,2]
      }
      this.jobs.push(obj)
    },
    remove(){
      if(this.currentRow === -1){
        return;
      }else{
        this.jobs.splice(this.currentRow,1);
        this.currentRow = -1;
      }
    },
    handlerRowClick(row){
      this.currentRow = this.jobs.findIndex(e => e.jobName === row.jobName);
    }
  }
}
</script>

<style>

</style>
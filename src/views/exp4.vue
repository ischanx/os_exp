<template>
  <div>
    <el-input v-model="data" placeholder="输入p0:0,0,0;0,0,0;0,0,0" style="width:250px;margin:0 10px;"></el-input>
    <el-button @click="add" size="small" type="primary">增加</el-button>
    <el-button @click="remove" size="small" type="danger">删除</el-button>
    <el-input v-model="requestText" placeholder="输入p0:0,0,0" style="width:150px;margin:0 10px;"></el-input>
    <el-button @click="init" :disabled="firstSafe" size="small">初始状态</el-button>
    <el-button @click="request" :disabled="!firstSafe" size="small">请求</el-button>
    <h4>当前状态</h4>
    <strong>当前可用资源:<span v-for="(item,index) in avaliable" :key="item + index + Math.random()*100">{{item + " "}}</span></strong>
   <el-table :data="progress" highlight-current-row ref="table"  @row-click="handlerRowClick">
      <el-table-column align="center" prop="name" label="进程"></el-table-column>
      <el-table-column align="center" label="Max">
        <template slot-scope="scope">
          <span v-for="(item,index) in scope.row.max" :key="item + index + Math.random()*100">{{item + " "}}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="Allocation">
        <template slot-scope="scope">
          <span v-for="(item,index) in scope.row.allocation" :key="item + index + Math.random()*100">{{item + " "}}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="Need">
        <template slot-scope="scope">
          <span v-for="(item,index) in scope.row.need" :key="item + index + Math.random()*100">{{item + " "}}</span>
        </template>
      </el-table-column>
    </el-table>

    <h4>安全序列</h4>
    <el-table :data="runingData">
      <el-table-column align="center" prop="name" label="进程"></el-table-column>
      <el-table-column align="center" label="Work">
        <template slot-scope="scope">
          <span v-for="(item,index) in scope.row.work" :key="item + index + Math.random()*100">{{item + " "}}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="Need">
        <template slot-scope="scope">
          <span v-for="(item,index) in scope.row.need" :key="item + index + Math.random()*100">{{item + " "}}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="Allocation">
        <template slot-scope="scope">
          <span v-for="(item,index) in scope.row.allocation" :key="item + index + Math.random()*100">{{item + " "}}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="Work + Allocation">
        <template slot-scope="scope">
          <span v-for="(item,index) in scope.row.afterWork" :key="item + index + Math.random()*100">{{item + " "}}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data(){
    return{
      firstSafe:false,
      progress:[{
        name:"P0",
        max:[7,5,3],
        allocation:[0,1,0],
        need:[7,4,3]
      },{
        name:"P1",
        max:[3,2,2],
        allocation:[2,0,0],
        need:[1,2,2]
      },{
        name:"P2",
        max:[9,0,2],
        allocation:[3,0,2],
        need:[6,0,0]
      },{
        name:"P3",
        max:[2,2,2],
        allocation:[2,1,1],
        need:[0,1,1]
      },{
        name:"P4",
        max:[4,3,3],
        allocation:[0,0,2],
        need:[4,3,1]
      }],
      avaliable:[3,3,2],
      runingData:[],
      data:"",
      requestText:"",
      currentRow:-1
    }
  },
  methods:{
    /**
     * 初始状态检测
     */
    init(){
      if(this.isSafe()){
        this.firstSafe = true;
        this.$message({
          message: '初始状态系统是安全的',
          type: 'success',
          duration: 800,
          showClose: true,
        });
      }else{
        this.$message({
          message: '初始状态系统是不安全的',
          type: 'error',
          duration: 800,
          showClose: true,
        });
      }
    },
    /**
     * 读取输入框数据并请求资源
     */
    request(){
      const requestText = this.requestText;
      this.requestText = "";
      if(!requestText.includes(":")||requestText === "")
        return;
      const newReq = {
        name:requestText.split(":")[0],
        request:[...requestText.split(":")[1].split(",").map(e => parseInt(e))]
      };
      // 满足条件则尝试分配资源，否则进程阻塞
      const pro = this.progress.find(e => e.name === newReq.name);
      if(newReq.request.every((e,index) => e <= pro.need[index] && e <= this.avaliable[index])){
        // 假设资源分配
        this.avaliable = this.avaliable.map((e,index) => e - newReq.request[index]);
        pro.allocation = pro.allocation.map((e,index) => e + newReq.request[index]);
        pro.need = pro.need.map((e,index) => e - newReq.request[index]);
      }else{
        this.$message({
          message: '无法完成请求，进程阻塞',
          type: 'error',
          duration: 800,
          showClose: true,
        });
        this.runingData = [];
        return;
      }
      // 进行安全性检查
      if(this.isSafe()){
        this.$message({
          message: '系统是安全的',
          type: 'success',
          duration: 800,
          showClose: true,
        });
      }else{
        this.$message({
          message: '系统是不安全的',
          type: 'error',
          duration: 800,
          showClose: true,
        });
        this.avaliable = this.avaliable.map((e,index) => e + newReq.request[index]);
        pro.allocation = pro.allocation.map((e,index) => e - newReq.request[index]);
        pro.need = pro.need.map((e,index) => e + newReq.request[index]);
      }
    },
    /**
     * 安全性检查，返回是否安全
     * 会同步安全队列去runningData
     */
    isSafe(){
      let allFinish = 0;
      let cnt = 0;
      const sequence = [];
      const progress = JSON.parse(JSON.stringify(this.progress));
      let work = JSON.parse(JSON.stringify(this.avaliable));
      const length = progress.length;
      while(allFinish != length && cnt <= length){
        progress.forEach(e => {
          if(!e.finish && e.need.every((need,index) => need <= work[index])){
            e.finish = true;
            e.work = work;
            allFinish++;
            work = work.map((workElement,index) => {
              return workElement + e.allocation[index];
            })
            e.afterWork = work
            sequence.push(e);
          }
        });
        cnt++;
      }
      this.runingData = JSON.parse(JSON.stringify(sequence));
      if(sequence.length === length)
        return true;
      else return false;
    },
    add(){
      const data = this.data;
      if(!this.data.includes(":")||!this.data.includes(",") || this.data === ""){
        return;
      }else this.data = "";
      const other = data.split(":")[1].split(";");
      const obj ={
        name:data.split(":")[0],
        max:[...other[0].split(",").map(e => parseInt(e))],
        allocation:[...other[1].split(",").map(e => parseInt(e))],
        need:[...other[2].split(",").map(e => parseInt(e))]
      }
      this.progress.push(obj);
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
      this.currentRow = this.progress.findIndex(e => e.name === row.name);
    }
  }
}
</script>

<style>

</style>
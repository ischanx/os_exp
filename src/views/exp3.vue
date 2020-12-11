<template>
  <div>
    <div>
      <label>空闲分区</label>
      <el-input v-model="data" placeholder="addr,size" style="width:200px;margin:0 10px;"></el-input>
      <el-button @click="add" size="small" type="primary">增加</el-button>
      <el-button @click="remove" size="small" type="danger">删除</el-button>
    </div>
    <label>作业名</label>
    <el-input v-model="jobName" placeholder="请输入作业名" style="width:100px;margin:0 10px;"></el-input>
    <label>占用空间</label>
    <el-input v-model="jobSize" placeholder="请输入所需空间" style="width:100px;margin:0 10px;"></el-input>
    <el-button @click="handler" size="small">分配</el-button>
    <el-button @click="recover" size="small">回收</el-button>
    <el-radio-group v-model="type" @change="changeMethod" size="small" style="margin:0 10px;">
      <el-radio-button label="1">首次适应</el-radio-button>
      <el-radio-button label="2">循环首次适应</el-radio-button>
      <el-radio-button label="3">最佳适应</el-radio-button>
    </el-radio-group>
    <h4>空闲分区表</h4>
    <el-table :data="memory"  highlight-current-row ref="table"  @row-click="handlerRowClick">
      <el-table-column align="center" prop="num" label="分区号"></el-table-column>
      <el-table-column align="center" prop="addr" label="起始地址"></el-table-column>
      <el-table-column align="center" prop="size" label="分区大小"></el-table-column>
    </el-table>
    <h4>信息</h4>
    <el-table :data="all">
      <el-table-column align="center" prop="num" label="分区号"></el-table-column>
      <el-table-column align="center" prop="name" label="作业名"></el-table-column>
      <el-table-column align="center" prop="addr" label="起始地址"></el-table-column>
      <el-table-column align="center" prop="size" label="占用空间大小"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data(){
    return{
      type:"1",
      memory:[{
        num:0,
        size:600,
        addr:40,
        name:"未分配"
      }],
      jobName:"1",
      jobSize:10,
      all:[],
      jobs:[{
        name:"系统占用",
        size:40,
        addr:0
      }],
      lastAddr:40,
      data:"",
      currentRow:-1
    }
  },
  mounted(){
    this.setOutput();
  },
  methods:{
    changeMethod(){
      this.$message({
        message: '切换算法，数据重置',
        type: 'info',
        duration: 1000,
        showClose: true,
      });
      this.memory = [{
        num:0,
        size:600,
        addr:40,
        name:"未分配"
      }];
      this.all = [];
      this.jobs = [{
        name:"系统占用",
        size:40,
        addr:0
      }];
      this.jobName = "1";
      this.jobSize = 10;
      this.lastAddr = 40;
      this.setOutput();
      if(this.type === "3"){
        this.memory.sort((a,b) => a.size - b.size);
      }else this.memory.sort((a,b) => a.addr - b.addr);
    },
    handler(){
      const type = parseInt(this.type);
      const job = {
        name: this.jobName,
        size: parseInt(this.jobSize),
      }
      const exist = this.jobs.some(e =>{
        if(e.name === this.jobName)
          return true;
        else return false;
      });
      if(exist){
        this.$message({
          message: '分配失败',
          type: 'error',
          duration: 500,
          showClose: true,
        });
        return;
      }
      if(type === 1){
        this.ff(job);
      }else if(type === 2){
        this.nf(job);
      }else if(type === 3){
        this.bf(job);
      }
    },
    ff(job){
      // 空闲区按起始地址递增排序
      this.memory.sort((a,b) => a.addr - b.addr);
      let index = -1;
      // 取第一个满足的空闲区
      for(let i = 0;i < this.memory.length;i++){
        if(this.memory[i].size > job.size){
          this.memory[i].size -=  job.size;
          job.addr = this.memory[i].addr;
          this.memory[i].addr += job.size;
          this.jobs.push(JSON.parse(JSON.stringify(job)));
          index = -2;
          break;
        }else if(this.memory[i].size === job.size){
          job.addr = this.memory[i].addr;
          this.jobs.push(JSON.parse(JSON.stringify(job)));
          index = i;
          break;
        }
      }
      if(index === -1){
        this.$message({
          message: '分配失败',
          type: 'error',
          duration: 500,
          showClose: true,
        });
        return;
      }else{
        if(index>=0)
          this.memory.splice(index,1);
        this.$message({
          message: '分配成功',
          type: 'success',
          duration: 500,
          showClose: true,
        });
      }
      this.setOutput();
    },
    nf(job){
      // 空闲区按起始地址递增排序
      this.memory.sort((a,b) => a.addr - b.addr);
      let index = -1;
      const last = this.memory.findIndex(e => e.addr > this.lastAddr);
      // 从上次起始地址后开始查，取第一个满足的空闲区
      for(let i = last === -1 ? 0 : last;i<this.memory.length;i++){
        if(this.memory[i].size > job.size){
          this.lastAddr = this.memory[i].addr + this.memory[i].size;
          this.memory[i].size -=  job.size;
          job.addr = this.memory[i].addr;
          this.memory[i].addr += job.size;
          this.jobs.push(JSON.parse(JSON.stringify(job)));
          index = -2;
          break;
        }else if(this.memory[i].size === job.size){
          this.lastAddr = this.memory[i].addr + this.memory[i].size;
          job.addr = this.memory[i].addr;
          this.jobs.push(JSON.parse(JSON.stringify(job)));
          index = i;
          break;
        }
      }
      if(index === -1){
        this.$message({
          message: '分配失败',
          type: 'error',
          duration: 500,
          showClose: true,
        });
        return;
      }else{
        if(index>=0)
          this.memory.splice(index,1);
        this.$message({
          message: '分配成功',
          type: 'success',
          duration: 500,
          showClose: true,
        });
      }
      this.setOutput();
    },
    bf(job){
      // 空闲区按大小递增排序
      this.memory.sort((a,b) => a.size - b.size);
      let index = -1;
      // 取第一个满足的空闲区
      for(let i = 0;i<this.memory.length;i++){
        if(this.memory[i].size > job.size){
          this.memory[i].size -=  job.size;
          job.addr = this.memory[i].addr;
          this.memory[i].addr += job.size;
          this.jobs.push(JSON.parse(JSON.stringify(job)));
          index = -2;
          break;
        }else if(this.memory[i].size === job.size){
          job.addr = this.memory[i].addr;
          this.jobs.push(JSON.parse(JSON.stringify(job)));
          index = i;
          break;
        }
      }
      if(index === -1){
        this.$message({
          message: '分配失败',
          type: 'error',
          duration: 500,
          showClose: true,
        });
        return;
      }else{
        if(index>=0)
          this.memory.splice(index,1);
        this.$message({
          message: '分配成功',
          type: 'success',
          duration: 500,
          showClose: true,
        });
      }
      this.setOutput();
    },
    setOutput(){
      const all = [...this.memory,...this.jobs];
      all.sort((a,b)=>{
        return a.addr - b.addr
      });
      all.forEach((e,index)=>{
        e.num = index;
      })
      this.all = all;
    },
    recover(){
      this.memory.sort((a,b) => a.addr - b.addr);
      const jobName = this.jobName;
      const allIndex = this.all.findIndex(e => e.name === jobName);
      const length = this.all.length;
      if((allIndex === length -1 && this.all[allIndex-2].name != "未分配")||
        (allIndex === 0 && this.all[allIndex+1].name != "未分配")||
        (allIndex > 0 && allIndex < length -1 && this.all[allIndex-1].name != "未分配" && this.all[allIndex+1].name != "未分配")
      ){
        const jobIndex = this.jobs.findIndex(e => e.addr === this.all[allIndex].addr);
        const job = this.jobs.splice(jobIndex,1)[0];
        job.name = "未分配";
        this.memory.push(job);
      }else if(allIndex > 0&& allIndex < length - 1&& this.all[allIndex-1].name === "未分配" && this.all[allIndex+1].name === "未分配"){
        const jobIndex = this.jobs.findIndex(e => e.addr === this.all[allIndex].addr);
        const job = this.jobs.splice(jobIndex,1)[0];
        const memIndex = this.memory.findIndex(e => e.addr === this.all[allIndex+1].addr);
        this.memory[memIndex -1].size += job.size + this.memory[memIndex].size;
        this.memory.splice(memIndex,1);
      }else if(allIndex > 0 && this.all[allIndex - 1].name === "未分配"){
         const jobIndex = this.jobs.findIndex(e => e.addr === this.all[allIndex].addr);
         const job = this.jobs.splice(jobIndex,1)[0];
         this.all[allIndex - 1].size += job.size;
      }else if(allIndex < length - 1 && this.all[allIndex + 1].name === "未分配"){
         const jobIndex = this.jobs.findIndex(e => e.addr === this.all[allIndex].addr);
         const job = this.jobs.splice(jobIndex,1)[0];
         this.all[allIndex + 1].size += job.size;
         this.all[allIndex + 1].addr = job.addr;
      }
      this.setOutput();
    },
    add(){
      const data = this.data;
      if(!this.data.includes(",") || this.data === ""){
        return;
      }else this.data = "";
      const obj ={
        num:0,
        size:parseInt(data.split(",")[1]),
        addr:parseInt(data.split(",")[0]),
        name:"未分配"
      }
      this.memory.push(obj);
      this.setOutput();
    },
    remove(){
      if(this.currentRow === -1){
        return;
      }else{
        this.memory.splice(this.currentRow,1);
        this.currentRow = -1;
        this.setOutput();
      }
    },
    handlerRowClick(row){
      this.currentRow = this.memory.findIndex(e => e.addr === row.addr);
    }
  }
}
</script>

<style>

</style>
(function(e){function t(t){for(var a,s,l=t[0],o=t[1],u=t[2],m=0,d=[];m<l.length;m++)s=l[m],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&d.push(i[s][0]),i[s]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a]);c&&c(t);while(d.length)d.shift()();return n.push.apply(n,u||[]),r()}function r(){for(var e,t=0;t<n.length;t++){for(var r=n[t],a=!0,l=1;l<r.length;l++){var o=r[l];0!==i[o]&&(a=!1)}a&&(n.splice(t--,1),e=s(s.s=r[0]))}return e}var a={},i={app:0},n=[];function s(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=a,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(r,a,function(t){return e[t]}.bind(null,a));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var c=o;n.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";r("85ec")},"1eb6":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/"}},[e._v("实验1")]),e._v(" | "),r("router-link",{attrs:{to:"/exp2"}},[e._v("实验2")]),e._v(" | "),r("router-link",{attrs:{to:"/exp3"}},[e._v("实验3")]),e._v(" | "),r("router-link",{attrs:{to:"/exp4"}},[e._v("实验4")])],1),r("router-view",{attrs:{id:"router"}})],1)},n=[],s=(r("034f"),r("2877")),l={},o=Object(s["a"])(l,i,n,!1,null,null,null),u=o.exports,c=r("8c4f"),m=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",[r("label",[e._v("时间片")]),r("el-input-number",{attrs:{size:"mini",min:1},model:{value:e.timeslice,callback:function(t){e.timeslice=t},expression:"timeslice"}}),r("label",[e._v("多级队列")]),r("el-input-number",{attrs:{size:"mini",min:1},model:{value:e.maxLevel,callback:function(t){e.maxLevel=t},expression:"maxLevel"}})],1),r("el-input",{staticStyle:{width:"200px",margin:"0 10px"},attrs:{placeholder:"p0,0,5"},model:{value:e.data,callback:function(t){e.data=t},expression:"data"}}),r("el-button",{attrs:{size:"small",type:"primary"},on:{click:e.add}},[e._v("增加")]),r("el-button",{attrs:{size:"small",type:"danger"},on:{click:e.remove}},[e._v("删除")]),r("el-button",{attrs:{size:"small"},on:{click:e.run1}},[e._v("简单轮转")]),r("el-button",{attrs:{size:"small"},on:{click:e.run2}},[e._v("多级反馈队列")]),r("h4",[e._v("进程序列")]),r("el-table",{ref:"table",attrs:{data:e.progress,"highlight-current-row":""},on:{"row-click":e.handlerRowClick}},[r("el-table-column",{attrs:{align:"center",prop:"id",label:"id"}}),r("el-table-column",{attrs:{align:"center",prop:"arriveTime",label:"到达时间"}}),r("el-table-column",{attrs:{align:"center",prop:"runTime",label:"服务时间"}})],1),r("h4",[e._v("进程调度过程")]),r("el-table",{attrs:{data:e.output,"row-class-name":e.tableRowClassName,"show-summary":"","summary-method":e.getSummaries}},[r("el-table-column",{attrs:{align:"center",prop:"id",label:"id"}}),r("el-table-column",{attrs:{align:"center",prop:"arriveTime",label:"到达时间"}}),r("el-table-column",{attrs:{align:"center",prop:"runTime",label:"服务时间"}}),r("el-table-column",{attrs:{align:"center",prop:"thisTime",label:"本次时间"}}),r("el-table-column",{attrs:{align:"center",prop:"endTime",label:"完成时间"}}),r("el-table-column",{attrs:{align:"center",prop:"cycleTime",label:"周转时间"}}),r("el-table-column",{attrs:{align:"center",prop:"weightCycleTime",label:"带权周转时间"}})],1)],1)},d=[],h=(r("a623"),r("c740"),r("4160"),r("caad"),r("d81d"),r("13d5"),r("a434"),r("a9e3"),r("b680"),r("ac1f"),r("2532"),r("1276"),r("159b"),{data:function(){return{progress:[{id:"p1",arriveTime:0,runTime:5,done:0,status:"coming"},{id:"p2",arriveTime:2,runTime:4,done:0,status:"coming"},{id:"p3",arriveTime:4,runTime:1,done:0,status:"coming"},{id:"p4",arriveTime:5,runTime:6,done:0,status:"coming"}],timeslice:2,maxLevel:3,output:[],data:""}},methods:{run1:function(){var e=JSON.parse(JSON.stringify(this.progress)),t=[],r=[],a=[],i=this.timeslice,n=0,s=function(){var s=0;if(e.forEach((function(e){"coming"===e.status&&(s++,n>=e.arriveTime&&(e.status="ready",a.push(e)))})),!a.length&&!s)return"break";if(a.length){var l=a.shift();l.runTime>i+l.done?(l.done+=i,n+=i,l.thisTime=i,e.forEach((function(e){"coming"===e.status&&(s++,n>=e.arriveTime&&(e.status="ready",a.push(e)))})),a.push(l)):l.runTime>l.done&&(n+=l.runTime-l.done,l.thisTime=l.runTime-l.done,l.done=l.runTime,l.endTime=n,l.cycleTime=l.endTime-l.arriveTime,l.weightCycleTime=(l.cycleTime/l.runTime).toFixed(2),t.push(l)),r.push(JSON.parse(JSON.stringify(l)))}else n++};while(1){var l=s();if("break"===l)break}this.output=r,this.$message({message:"执行简单轮转完毕",type:"success",duration:500,showClose:!0})},run2:function(){for(var e=JSON.parse(JSON.stringify(this.progress)),t=this.maxLevel,r=[],a=0,i=[],n=[],s=[],l=0;l<t;l++)s.push([]),r.push((l+1)*this.timeslice);var o=function(){var l=0,o=0;if(e.forEach((function(e){"coming"===e.status&&(o++,a>=e.arriveTime&&(e.status="ready",s[0].push(e)))})),s.forEach((function(e){l+=e.length})),!l&&!o)return"break";for(var u=null,c=0,m=0,d=0;d<t;d++)if(s[d].length>0){u=s[d].shift(),m=d,c=d+2>t?t-1:d+1;break}u.runTime>r[m]+u.done?(u.done+=r[m],a+=r[m],u.thisTime=r[m],e.forEach((function(e){"coming"===e.status&&(o++,a>=e.arriveTime&&(e.status="ready",s[0].push(e)))})),s[c].push(u)):(a+=u.runTime-u.done,u.thisTime=u.runTime-u.done,u.done=u.runTime,u.endTime=a,u.cycleTime=u.endTime-u.arriveTime,u.weightCycleTime=(u.cycleTime/u.runTime).toFixed(2),i.push(u)),n.push(JSON.parse(JSON.stringify(u)))};while(1){var u=o();if("break"===u)break}this.output=n,this.$message({message:"执行多级反馈队列完毕",type:"success",duration:500,showClose:!0})},tableRowClassName:function(e){var t=e.row;return t.endTime?"success-row":""},getSummaries:function(e){var t=e.columns,r=e.data,a=[];return t.forEach((function(e,t){if(t<=3)a[t]=" - ";else{var i=r.map((function(t){return Number(t[e.property])}));if(i.every((function(e){return isNaN(e)})))a[t]="N/A";else{var n=0;a[t]=i.reduce((function(e,t){var r=Number(t);return isNaN(r)?e:(n++,e+t)}),0),a[t]=(a[t]/n).toFixed(2)}}})),a},add:function(){var e=this.data;if(this.data.includes(",")&&""!==this.data){this.data="";var t={id:e.split(",")[0],arriveTime:parseInt(e.split(",")[1]),runTime:parseInt(e.split(",")[2]),done:0,status:"coming"};this.progress.push(t)}},remove:function(){-1!==this.currentRow&&(this.progress.splice(this.currentRow,1),this.currentRow=-1)},handlerRowClick:function(e){this.currentRow=this.progress.findIndex((function(t){return t.id===e.id}))}}}),p=h,f=(r("8f8d"),Object(s["a"])(p,m,d,!1,null,null,null)),b=f.exports,v=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-input",{staticStyle:{width:"200px",margin:"0 10px"},attrs:{placeholder:"a,p0,0,5"},model:{value:e.data,callback:function(t){e.data=t},expression:"data"}}),r("el-button",{attrs:{size:"small",type:"primary"},on:{click:e.add}},[e._v("增加")]),r("el-button",{attrs:{size:"small",type:"danger"},on:{click:e.remove}},[e._v("删除")]),r("el-button",{attrs:{size:"small"},on:{click:e.fcfs}},[e._v("先来先服务")]),r("el-button",{attrs:{size:"small"},on:{click:e.sjf}},[e._v("最短作业优先")]),r("el-button",{attrs:{size:"small"},on:{click:e.hrrn}},[e._v("高响应比")]),r("h4",[e._v("作业序列")]),r("el-table",{ref:"table",attrs:{data:e.jobs,"highlight-current-row":""},on:{"row-click":e.handlerRowClick}},[r("el-table-column",{attrs:{align:"center",prop:"userName",label:"用户名"}}),r("el-table-column",{attrs:{align:"center",prop:"jobName",label:"作业名"}}),r("el-table-column",{attrs:{align:"center",prop:"arriveTime",label:"到达时间"}}),r("el-table-column",{attrs:{align:"center",prop:"runTime",label:"服务时间"}})],1),r("h4",[e._v("作业调度过程")]),r("el-table",{attrs:{data:e.output,"row-class-name":e.tableRowClassName,"show-summary":"","summary-method":e.getSummaries}},[r("el-table-column",{attrs:{align:"center",prop:"userName",label:"用户名"}}),r("el-table-column",{attrs:{align:"center",prop:"jobName",label:"作业名"}}),r("el-table-column",{attrs:{align:"center",prop:"arriveTime",label:"到达时间"}}),r("el-table-column",{attrs:{align:"center",prop:"runTime",label:"服务时间"}}),r("el-table-column",{attrs:{align:"center",prop:"endTime",label:"完成时间"}}),r("el-table-column",{attrs:{align:"center",prop:"waitTime",label:"等待时间"}}),r("el-table-column",{attrs:{align:"center",prop:"cycleTime",label:"周转时间"}}),r("el-table-column",{attrs:{align:"center",prop:"weightCycleTime",label:"带权周转时间"}})],1)],1)},g=[],y={data:function(){return{jobs:[{userName:"A",jobName:"JOB1",status:"coming",arriveTime:0,runTime:15,need:[20,2]},{userName:"B",jobName:"JOB2",status:"coming",arriveTime:20,runTime:30,need:[60,1]},{userName:"C",jobName:"JOB3",status:"coming",arriveTime:30,runTime:9,need:[45,3]},{userName:"D",jobName:"JOB4",status:"coming",arriveTime:35,runTime:12,need:[10,2]},{userName:"E",jobName:"JOB5",status:"coming",arriveTime:45,runTime:6,need:[25,3]}],output:[],data:"",currentRow:-1}},methods:{fcfs:function(){var e=JSON.parse(JSON.stringify(this.jobs)),t=[],r=[],a=0,i=function(){var i=0;if(e.forEach((function(e){"coming"===e.status&&(i++,e.arriveTime<=a&&(e.status="ready",r.push(e)))})),!r.length&&!i)return"break";if(r.length){var n=r.shift();n.arriveTime>a&&(a=n.arriveTime),n.startTime=a,n.endTime=a+n.runTime,n.waitTime=a-n.arriveTime,n.allTime=n.waitTime+n.runTime,n.cycleTime=n.endTime-n.arriveTime,n.weightCycleTime=(n.cycleTime/n.runTime).toFixed(2),a=n.endTime,t.push(n)}else a++};while(1){var n=i();if("break"===n)break}this.output=t,this.$message({message:"执行先来先服务调度算法（FCFS）完毕",type:"success",duration:500,showClose:!0})},sjf:function(){var e=JSON.parse(JSON.stringify(this.jobs)),t=[],r=[],a=e.length,i=0;while(1){if(!a)break;if(e.forEach((function(e){e.arriveTime<=i&&"coming"===e.status&&(e.status="ready",r.push(e))})),r.length){r.sort((function(e,t){return e.runTime-t.runTime}));var n=r.shift();n.startTime=i,n.endTime=i+n.runTime,n.waitTime=i-n.arriveTime,n.allTime=n.waitTime+n.runTime,n.cycleTime=n.endTime-n.arriveTime,n.weightCycleTime=(n.cycleTime/n.runTime).toFixed(2),n.status="done",i=n.endTime,a--,t.push(n)}else i++}this.output=t,this.$message({message:"执行最短作业优先调度算法（SJF）完毕",type:"success",duration:500,showClose:!0})},hrrn:function(){var e=JSON.parse(JSON.stringify(this.jobs)),t=[],r=[],a=e.length,i=0;while(1){if(!a)break;if(e.forEach((function(e){e.arriveTime<=i&&"coming"===e.status&&(e.status="ready",r.push(e))})),r.length){r.sort((function(e,t){t.arriveTime,t.runTime,t.runTime,e.arriveTime,e.runTime,e.runTime}));var n=r.shift();n.startTime=i,n.endTime=i+n.runTime,n.waitTime=i-n.arriveTime,n.allTime=n.waitTime+n.runTime,n.cycleTime=n.endTime-n.arriveTime,n.weightCycleTime=(n.cycleTime/n.runTime).toFixed(2),n.status="done",i=n.endTime,a--,t.push(n)}else i++}this.output=t,this.$message({message:"执行高响应比优先调度算法（HRRN）完毕",type:"success",duration:500,showClose:!0})},tableRowClassName:function(e){var t=e.row;return t.endTime?"success-row":""},getSummaries:function(e){var t=e.columns,r=e.data,a=[];return t.forEach((function(e,t){if(t<=4)a[t]=" - ";else{var i=r.map((function(t){return Number(t[e.property])}));if(i.every((function(e){return isNaN(e)})))a[t]="N/A";else{var n=0;a[t]=i.reduce((function(e,t){var r=Number(t);return isNaN(r)?e:(n++,e+t)}),0),a[t]=(a[t]/n).toFixed(2)}}})),a},add:function(){var e=this.data;if(this.data.includes(",")&&""!==this.data){this.data="";var t={userName:e.split(",")[0],jobName:e.split(",")[1],status:"coming",arriveTime:parseInt(e.split(",")[2]),runTime:parseInt(e.split(",")[3]),need:[20,2]};this.jobs.push(t)}},remove:function(){-1!==this.currentRow&&(this.jobs.splice(this.currentRow,1),this.currentRow=-1)},handlerRowClick:function(e){this.currentRow=this.jobs.findIndex((function(t){return t.jobName===e.jobName}))}}},T=y,w=Object(s["a"])(T,v,g,!1,null,null,null),_=w.exports,k=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",[r("label",[e._v("空闲分区")]),r("el-input",{staticStyle:{width:"200px",margin:"0 10px"},attrs:{placeholder:"addr,size"},model:{value:e.data,callback:function(t){e.data=t},expression:"data"}}),r("el-button",{attrs:{size:"small",type:"primary"},on:{click:e.add}},[e._v("增加")]),r("el-button",{attrs:{size:"small",type:"danger"},on:{click:e.remove}},[e._v("删除")])],1),r("label",[e._v("作业名")]),r("el-input",{staticStyle:{width:"100px",margin:"0 10px"},attrs:{placeholder:"请输入作业名"},model:{value:e.jobName,callback:function(t){e.jobName=t},expression:"jobName"}}),r("label",[e._v("占用空间")]),r("el-input",{staticStyle:{width:"100px",margin:"0 10px"},attrs:{placeholder:"请输入所需空间"},model:{value:e.jobSize,callback:function(t){e.jobSize=t},expression:"jobSize"}}),r("el-button",{attrs:{size:"small"},on:{click:e.handler}},[e._v("分配")]),r("el-button",{attrs:{size:"small"},on:{click:e.recover}},[e._v("回收")]),r("el-radio-group",{staticStyle:{margin:"0 10px"},attrs:{size:"small"},on:{change:e.changeMethod},model:{value:e.type,callback:function(t){e.type=t},expression:"type"}},[r("el-radio-button",{attrs:{label:"1"}},[e._v("首次适应")]),r("el-radio-button",{attrs:{label:"2"}},[e._v("循环首次适应")]),r("el-radio-button",{attrs:{label:"3"}},[e._v("最佳适应")])],1),r("h4",[e._v("空闲分区表")]),r("el-table",{ref:"table",attrs:{data:e.memory,"highlight-current-row":""},on:{"row-click":e.handlerRowClick}},[r("el-table-column",{attrs:{align:"center",prop:"num",label:"分区号"}}),r("el-table-column",{attrs:{align:"center",prop:"addr",label:"起始地址"}}),r("el-table-column",{attrs:{align:"center",prop:"size",label:"分区大小"}})],1),r("h4",[e._v("信息")]),r("el-table",{attrs:{data:e.all}},[r("el-table-column",{attrs:{align:"center",prop:"num",label:"分区号"}}),r("el-table-column",{attrs:{align:"center",prop:"name",label:"作业名"}}),r("el-table-column",{attrs:{align:"center",prop:"addr",label:"起始地址"}}),r("el-table-column",{attrs:{align:"center",prop:"size",label:"占用空间大小"}})],1)],1)},x=[],N=(r("99af"),r("45fc"),r("b0c0"),r("2909")),j={data:function(){return{type:"1",memory:[{num:0,size:600,addr:40,name:"未分配"}],jobName:"1",jobSize:10,all:[],jobs:[{name:"系统占用",size:40,addr:0}],lastAddr:40,data:"",currentRow:-1}},mounted:function(){this.setOutput()},methods:{changeMethod:function(){this.$message({message:"切换算法，数据重置",type:"info",duration:1e3,showClose:!0}),this.memory=[{num:0,size:600,addr:40,name:"未分配"}],this.all=[],this.jobs=[{name:"系统占用",size:40,addr:0}],this.jobName="1",this.jobSize=10,this.lastAddr=40,this.setOutput(),"3"===this.type?this.memory.sort((function(e,t){return e.size-t.size})):this.memory.sort((function(e,t){return e.addr-t.addr}))},handler:function(){var e=this,t=parseInt(this.type),r={name:this.jobName,size:parseInt(this.jobSize)},a=this.jobs.some((function(t){return t.name===e.jobName}));a?this.$message({message:"分配失败",type:"error",duration:500,showClose:!0}):1===t?this.ff(r):2===t?this.nf(r):3===t&&this.bf(r)},ff:function(e){this.memory.sort((function(e,t){return e.addr-t.addr}));for(var t=-1,r=0;r<this.memory.length;r++){if(this.memory[r].size>e.size){this.memory[r].size-=e.size,e.addr=this.memory[r].addr,this.memory[r].addr+=e.size,this.jobs.push(JSON.parse(JSON.stringify(e))),t=-2;break}if(this.memory[r].size===e.size){e.addr=this.memory[r].addr,this.jobs.push(JSON.parse(JSON.stringify(e))),t=r;break}}-1!==t?(t>=0&&this.memory.splice(t,1),this.$message({message:"分配成功",type:"success",duration:500,showClose:!0}),this.setOutput()):this.$message({message:"分配失败",type:"error",duration:500,showClose:!0})},nf:function(e){var t=this;this.memory.sort((function(e,t){return e.addr-t.addr}));for(var r=-1,a=this.memory.findIndex((function(e){return e.addr>t.lastAddr})),i=-1===a?0:a;i<this.memory.length;i++){if(this.memory[i].size>e.size){this.lastAddr=this.memory[i].addr+this.memory[i].size,this.memory[i].size-=e.size,e.addr=this.memory[i].addr,this.memory[i].addr+=e.size,this.jobs.push(JSON.parse(JSON.stringify(e))),r=-2;break}if(this.memory[i].size===e.size){this.lastAddr=this.memory[i].addr+this.memory[i].size,e.addr=this.memory[i].addr,this.jobs.push(JSON.parse(JSON.stringify(e))),r=i;break}}-1!==r?(r>=0&&this.memory.splice(r,1),this.$message({message:"分配成功",type:"success",duration:500,showClose:!0}),this.setOutput()):this.$message({message:"分配失败",type:"error",duration:500,showClose:!0})},bf:function(e){this.memory.sort((function(e,t){return e.size-t.size}));for(var t=-1,r=0;r<this.memory.length;r++){if(this.memory[r].size>e.size){this.memory[r].size-=e.size,e.addr=this.memory[r].addr,this.memory[r].addr+=e.size,this.jobs.push(JSON.parse(JSON.stringify(e))),t=-2;break}if(this.memory[r].size===e.size){e.addr=this.memory[r].addr,this.jobs.push(JSON.parse(JSON.stringify(e))),t=r;break}}-1!==t?(t>=0&&this.memory.splice(t,1),this.$message({message:"分配成功",type:"success",duration:500,showClose:!0}),this.setOutput()):this.$message({message:"分配失败",type:"error",duration:500,showClose:!0})},setOutput:function(){var e=[].concat(Object(N["a"])(this.memory),Object(N["a"])(this.jobs));e.sort((function(e,t){return e.addr-t.addr})),e.forEach((function(e,t){e.num=t})),this.all=e},recover:function(){var e=this;this.memory.sort((function(e,t){return e.addr-t.addr}));var t=this.jobName,r=this.all.findIndex((function(e){return e.name===t})),a=this.all.length;if(r===a-1&&"未分配"!=this.all[r-2].name||0===r&&"未分配"!=this.all[r+1].name||r>0&&r<a-1&&"未分配"!=this.all[r-1].name&&"未分配"!=this.all[r+1].name){var i=this.jobs.findIndex((function(t){return t.addr===e.all[r].addr})),n=this.jobs.splice(i,1)[0];n.name="未分配",this.memory.push(n)}else if(r>0&&r<a-1&&"未分配"===this.all[r-1].name&&"未分配"===this.all[r+1].name){var s=this.jobs.findIndex((function(t){return t.addr===e.all[r].addr})),l=this.jobs.splice(s,1)[0],o=this.memory.findIndex((function(t){return t.addr===e.all[r+1].addr}));this.memory[o-1].size+=l.size+this.memory[o].size,this.memory.splice(o,1)}else if(r>0&&"未分配"===this.all[r-1].name){var u=this.jobs.findIndex((function(t){return t.addr===e.all[r].addr})),c=this.jobs.splice(u,1)[0];this.all[r-1].size+=c.size}else if(r<a-1&&"未分配"===this.all[r+1].name){var m=this.jobs.findIndex((function(t){return t.addr===e.all[r].addr})),d=this.jobs.splice(m,1)[0];this.all[r+1].size+=d.size,this.all[r+1].addr=d.addr}this.setOutput()},add:function(){var e=this.data;if(this.data.includes(",")&&""!==this.data){this.data="";var t={num:0,size:parseInt(e.split(",")[1]),addr:parseInt(e.split(",")[0]),name:"未分配"};this.memory.push(t),this.setOutput()}},remove:function(){-1!==this.currentRow&&(this.memory.splice(this.currentRow,1),this.currentRow=-1,this.setOutput())},handlerRowClick:function(e){this.currentRow=this.memory.findIndex((function(t){return t.addr===e.addr}))}}},S=j,z=Object(s["a"])(S,k,x,!1,null,null,null),O=z.exports,J=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-input",{staticStyle:{width:"250px",margin:"0 10px"},attrs:{placeholder:"输入p0:0,0,0;0,0,0;0,0,0"},model:{value:e.data,callback:function(t){e.data=t},expression:"data"}}),r("el-button",{attrs:{size:"small",type:"primary"},on:{click:e.add}},[e._v("增加")]),r("el-button",{attrs:{size:"small",type:"danger"},on:{click:e.remove}},[e._v("删除")]),r("el-input",{staticStyle:{width:"150px",margin:"0 10px"},attrs:{placeholder:"输入p0:0,0,0"},model:{value:e.requestText,callback:function(t){e.requestText=t},expression:"requestText"}}),r("el-button",{attrs:{disabled:e.firstSafe,size:"small"},on:{click:e.init}},[e._v("初始状态")]),r("el-button",{attrs:{disabled:!e.firstSafe,size:"small"},on:{click:e.request}},[e._v("请求")]),r("h4",[e._v("当前状态")]),r("strong",[e._v("当前可用资源:"),e._l(e.avaliable,(function(t,a){return r("span",{key:t+a+100*Math.random()},[e._v(e._s(t+" "))])}))],2),r("el-table",{ref:"table",attrs:{data:e.progress,"highlight-current-row":""},on:{"row-click":e.handlerRowClick}},[r("el-table-column",{attrs:{align:"center",prop:"name",label:"进程"}}),r("el-table-column",{attrs:{align:"center",label:"Max"},scopedSlots:e._u([{key:"default",fn:function(t){return e._l(t.row.max,(function(t,a){return r("span",{key:t+a+100*Math.random()},[e._v(e._s(t+" "))])}))}}])}),r("el-table-column",{attrs:{align:"center",label:"Allocation"},scopedSlots:e._u([{key:"default",fn:function(t){return e._l(t.row.allocation,(function(t,a){return r("span",{key:t+a+100*Math.random()},[e._v(e._s(t+" "))])}))}}])}),r("el-table-column",{attrs:{align:"center",label:"Need"},scopedSlots:e._u([{key:"default",fn:function(t){return e._l(t.row.need,(function(t,a){return r("span",{key:t+a+100*Math.random()},[e._v(e._s(t+" "))])}))}}])})],1),r("h4",[e._v("安全序列")]),r("el-table",{attrs:{data:e.runingData}},[r("el-table-column",{attrs:{align:"center",prop:"name",label:"进程"}}),r("el-table-column",{attrs:{align:"center",label:"Work"},scopedSlots:e._u([{key:"default",fn:function(t){return e._l(t.row.work,(function(t,a){return r("span",{key:t+a+100*Math.random()},[e._v(e._s(t+" "))])}))}}])}),r("el-table-column",{attrs:{align:"center",label:"Need"},scopedSlots:e._u([{key:"default",fn:function(t){return e._l(t.row.need,(function(t,a){return r("span",{key:t+a+100*Math.random()},[e._v(e._s(t+" "))])}))}}])}),r("el-table-column",{attrs:{align:"center",label:"Allocation"},scopedSlots:e._u([{key:"default",fn:function(t){return e._l(t.row.allocation,(function(t,a){return r("span",{key:t+a+100*Math.random()},[e._v(e._s(t+" "))])}))}}])}),r("el-table-column",{attrs:{align:"center",label:"Work + Allocation"},scopedSlots:e._u([{key:"default",fn:function(t){return e._l(t.row.afterWork,(function(t,a){return r("span",{key:t+a+100*Math.random()},[e._v(e._s(t+" "))])}))}}])})],1)],1)},C=[],R=(r("7db0"),{data:function(){return{firstSafe:!1,progress:[{name:"P0",max:[7,5,3],allocation:[0,1,0],need:[7,4,3]},{name:"P1",max:[3,2,2],allocation:[2,0,0],need:[1,2,2]},{name:"P2",max:[9,0,2],allocation:[3,0,2],need:[6,0,0]},{name:"P3",max:[2,2,2],allocation:[2,1,1],need:[0,1,1]},{name:"P4",max:[4,3,3],allocation:[0,0,2],need:[4,3,1]}],avaliable:[3,3,2],runingData:[],data:"",requestText:"",currentRow:-1}},methods:{init:function(){this.isSafe()?(this.firstSafe=!0,this.$message({message:"初始状态系统是安全的",type:"success",duration:800,showClose:!0})):this.$message({message:"初始状态系统是不安全的",type:"error",duration:800,showClose:!0})},request:function(){var e=this,t=this.requestText;if(this.requestText="",t.includes(":")&&""!==t){var r={name:t.split(":")[0],request:Object(N["a"])(t.split(":")[1].split(",").map((function(e){return parseInt(e)})))},a=this.progress.find((function(e){return e.name===r.name}));if(!r.request.every((function(t,r){return t<=a.need[r]&&t<=e.avaliable[r]})))return this.$message({message:"无法完成请求，进程阻塞",type:"error",duration:800,showClose:!0}),void(this.runingData=[]);this.avaliable=this.avaliable.map((function(e,t){return e-r.request[t]})),a.allocation=a.allocation.map((function(e,t){return e+r.request[t]})),a.need=a.need.map((function(e,t){return e-r.request[t]})),this.isSafe()?this.$message({message:"系统是安全的",type:"success",duration:800,showClose:!0}):(this.$message({message:"系统是不安全的",type:"error",duration:800,showClose:!0}),this.avaliable=this.avaliable.map((function(e,t){return e+r.request[t]})),a.allocation=a.allocation.map((function(e,t){return e-r.request[t]})),a.need=a.need.map((function(e,t){return e+r.request[t]})))}},isSafe:function(){var e=0,t=0,r=[],a=JSON.parse(JSON.stringify(this.progress)),i=JSON.parse(JSON.stringify(this.avaliable)),n=a.length;while(e!=n&&t<=n)a.forEach((function(t){!t.finish&&t.need.every((function(e,t){return e<=i[t]}))&&(t.finish=!0,t.work=i,e++,i=i.map((function(e,r){return e+t.allocation[r]})),t.afterWork=i,r.push(t))})),t++;return this.runingData=JSON.parse(JSON.stringify(r)),r.length===n},add:function(){var e=this.data;if(this.data.includes(":")&&this.data.includes(",")&&""!==this.data){this.data="";var t=e.split(":")[1].split(";"),r={name:e.split(":")[0],max:Object(N["a"])(t[0].split(",").map((function(e){return parseInt(e)}))),allocation:Object(N["a"])(t[1].split(",").map((function(e){return parseInt(e)}))),need:Object(N["a"])(t[2].split(",").map((function(e){return parseInt(e)})))};this.progress.push(r)}},remove:function(){-1!==this.currentRow&&(this.progress.splice(this.currentRow,1),this.currentRow=-1)},handlerRowClick:function(e){this.currentRow=this.progress.findIndex((function(t){return t.name===e.name}))}}}),$=R,I=Object(s["a"])($,J,C,!1,null,null,null),E=I.exports;a["default"].use(c["a"]);var q=[{path:"/",name:"Exp1",component:b},{path:"/exp2",name:"Exp2",component:_},{path:"/exp3",name:"Exp3",component:O},{path:"/exp4",name:"Exp4",component:E}],M=new c["a"]({routes:q}),P=M,A=r("5c96"),F=r.n(A);r("0fae");a["default"].use(F.a),a["default"].config.productionTip=!1,new a["default"]({router:P,render:function(e){return e(u)}}).$mount("#app")},"85ec":function(e,t,r){},"8f8d":function(e,t,r){"use strict";r("1eb6")}});
//# sourceMappingURL=app.4d951cb0.js.map
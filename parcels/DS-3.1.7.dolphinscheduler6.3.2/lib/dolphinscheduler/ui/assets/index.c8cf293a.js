import{u as b,b5 as z,a as u,bq as _,t as s,d as S,at as k,w as C,e as D,ba as R,c as o,z as P,ak as U}from"./index.ccaa682a.js";import{u as T}from"./index.cb24df24.js";import{m as V,n as j}from"./index.97c7c8f2.js";import{D as v,C as i,c as I}from"./column-width-config.d330f121.js";import{E as O}from"./EditOutlined.84f6aa5d.js";import{D as W}from"./DeleteOutlined.b64cb1c2.js";import{N as y}from"./Tooltip.14e7654c.js";import{N as f}from"./Button.3394f0e3.js";import{N as F}from"./Popconfirm.b8629776.js";import{N as c}from"./Space.f435ce00.js";import{C as N}from"./index.76253dc2.js";import L from"./function-modal.2d921522.js";import{S as q}from"./SearchOutlined.2201cd30.js";import{N as x}from"./Input.f12e0137.js";import{N as M}from"./Icon.808259cb.js";import{N as E,a as A}from"./DataTable.f685dba1.js";import"./service.ae1ed8a7.js";import"./lodash.02988b15.js";import"./Popover.b48d5d17.js";import"./index.99c68204.js";import"./flatten.995f807f.js";import"./Scrollbar.0dc514b7.js";import"./fade-in.cssr.ac08f6bb.js";import"./VResizeObserver.c3d2397d.js";import"./utils.381519a7.js";import"./format-length.a0cbed4d.js";import"./resolve-slot.d8d7b3cb.js";import"./use-compitable.d1fd83c6.js";import"./next-frame-once.e5ee25e8.js";import"./is-browser.f4bc45cf.js";import"./use-rtl.d43d8217.js";import"./use-locale.ca4c738c.js";import"./keysOf.10525521.js";import"./get-slot.7f666ba0.js";import"./index.7a579f81.js";import"./Card.915ef7d2.js";import"./index.c665300e.js";import"./index.c1fd473c.js";import"./fade-in-scale-up.cssr.5995d390.js";import"./CloudUploadOutlined.bf33e501.js";import"./Form.b41344c3.js";import"./FormItem.6b297844.js";import"./RadioGroup.8830dbe4.js";import"./Radio.0f909e72.js";import"./InputGroup.06ea3463.js";import"./TreeSelect.8a08df17.js";import"./Checkbox.ff1b56b7.js";import"./Selection.57d091a8.js";import"./Suffix.584d00eb.js";import"./Upload.06fb34f9.js";import"./Add.57f827bb.js";import"./Image.bab30061.js";import"./ArrowDown.c45c82c0.js";import"./Dropdown.16d7f975.js";import"./ChevronRight.efc71575.js";import"./use-keyboard.db487137.js";import"./Ellipsis.31968545.js";import"./Select.a0f44759.js";import"./Forward.6cc09413.js";function B(){const{t:e}=b(),n=_(),t=z({columns:[],tableWidth:v,row:{},tableData:[],id:u(Number(n.currentRoute.value.params.id)||-1),page:u(1),pageSize:u(10),searchVal:u(),totalPage:u(1),showRef:u(!1),loadingRef:u(!1)}),a=r=>{r.columns=[{title:"#",key:"id",render:(l,p)=>p+1,...i.index},{title:e("resource.function.udf_function_name"),key:"funcName",...i.name},{title:e("resource.function.user_name"),...i.userName,key:"userName"},{title:e("resource.function.class_name"),key:"className",...i.name},{title:e("resource.function.type"),key:"type",...i.type},{title:e("resource.function.description"),key:"description",...i.note},{title:e("resource.function.jar_package"),key:"resourceName",...i.name},{title:e("resource.function.update_time"),key:"updateTime",...i.time},{title:e("resource.function.operation"),key:"operation",...i.operation(2),render:l=>s(c,null,{default:()=>[s(y,{},{trigger:()=>s(f,{circle:!0,type:"info",size:"tiny",class:"btn-edit",onClick:()=>{h(l)}},{icon:()=>s(O)}),default:()=>e("resource.function.edit")}),s(F,{onPositiveClick:()=>{g(l.id)}},{trigger:()=>s(y,{},{trigger:()=>s(f,{circle:!0,type:"error",size:"tiny",class:"btn-delete"},{icon:()=>s(W)}),default:()=>e("resource.function.delete")}),default:()=>e("resource.function.delete_confirm")})]})}],r.tableWidth&&(r.tableWidth=I(r.columns))},m=r=>{if(t.loadingRef)return;t.loadingRef=!0;const{state:l}=T(V({...r}).then(p=>{t.totalPage=p.totalPage,t.tableData=p.totalList.map(d=>({...d})),t.loadingRef=!1}),{total:0,table:[]});return l},h=r=>{t.showRef=!0,t.row=r},g=r=>{t.tableData.length===1&&t.page>1&&(t.page-=1),j(r).then(()=>m({id:t.id,pageSize:t.pageSize,pageNo:t.page,searchVal:t.searchVal}))};return{variables:t,createColumns:a,getTableData:m}}const G="_table_h4zft_17",H={table:G};function X(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!U(e)}const $e=S({name:"function-manage",setup(){var d;const{variables:e,createColumns:n,getTableData:t}=B(),a=()=>{t({id:e.id,pageSize:e.pageSize,pageNo:e.page,searchVal:e.searchVal})},m=()=>{a()},h=()=>{e.page=1,a()},g=()=>{e.page=1,a()},r=w=>{w.value=!0},l=()=>{e.row={},r(P(e,"showRef"))},p=(d=k())==null?void 0:d.appContext.config.globalProperties.trim;return C(b().locale,()=>{n(e)}),D(()=>{n(e),a()}),{requestData:a,handleSearch:g,handleUpdateList:m,handleCreateFolder:l,handleChangePageSize:h,...R(e),trim:p}},render(){let e;const{t:n}=b(),{loadingRef:t}=this;return o(c,{vertical:!0},{default:()=>[o(N,null,{default:()=>[o(c,{justify:"space-between"},{default:()=>[o(f,{type:"primary",size:"small",onClick:this.handleCreateFolder,class:"btn-create-udf-function"},X(e=n("resource.function.create_udf_function"))?e:{default:()=>[e]}),o(c,null,{default:()=>[o(x,{allowInput:this.trim,size:"small",placeholder:n("resource.function.enter_keyword_tips"),value:this.searchVal,"onUpdate:value":a=>this.searchVal=a},null),o(f,{type:"primary",size:"small",onClick:this.handleSearch},{default:()=>[o(M,null,{default:()=>[o(q,null,null)]})]})]})]})]}),o(N,{title:n("resource.function.udf_function")},{default:()=>[o(c,{vertical:!0},{default:()=>[o(E,{loading:t,columns:this.columns,data:this.tableData,striped:!0,size:"small",class:H.table,"row-class-name":"items",scrollX:this.tableWidth},null),o(c,{justify:"center"},{default:()=>[o(A,{page:this.page,"onUpdate:page":a=>this.page=a,"page-size":this.pageSize,"onUpdate:page-size":a=>this.pageSize=a,"page-count":this.totalPage,"show-size-picker":!0,"page-sizes":[10,30,50],"show-quick-jumper":!0,onUpdatePage:this.requestData,onUpdatePageSize:this.handleChangePageSize},null)]})]})]}),o(L,{row:this.row,"onUpdate:row":a=>this.row=a,show:this.showRef,"onUpdate:show":a=>this.showRef=a,onUpdateList:this.handleUpdateList},null)]})}});export{$e as default};

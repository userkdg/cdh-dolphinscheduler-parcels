import{d as c,at as f,w as h,n as w,ba as F,u as C,c as o,cm as N}from"./index.ccaa682a.js";import{M as b}from"./index.c665300e.js";import{u as R,a as _}from"./use-modal.1d6719d6.js";import{N as I}from"./Form.b41344c3.js";import{N as a}from"./FormItem.6b297844.js";import{N as s}from"./Input.f12e0137.js";import"./index.c1fd473c.js";import"./Button.3394f0e3.js";import"./is-browser.f4bc45cf.js";import"./use-rtl.d43d8217.js";import"./resolve-slot.d8d7b3cb.js";import"./keysOf.10525521.js";import"./Card.915ef7d2.js";import"./index.7a579f81.js";import"./index.99c68204.js";import"./flatten.995f807f.js";import"./Scrollbar.0dc514b7.js";import"./fade-in.cssr.ac08f6bb.js";import"./VResizeObserver.c3d2397d.js";import"./fade-in-scale-up.cssr.5995d390.js";import"./utils.381519a7.js";import"./Space.f435ce00.js";import"./get-slot.7f666ba0.js";import"./file.4d291ef4.js";import"./index.97c7c8f2.js";import"./service.ae1ed8a7.js";import"./lodash.02988b15.js";import"./format-length.a0cbed4d.js";import"./use-locale.ca4c738c.js";import"./Suffix.584d00eb.js";const M={row:{type:Object,default:{}},show:{type:Boolean,default:!1}},oe=c({name:"ResourceFileFolder",props:M,emits:["update:show","updateList"],setup(e,t){var i;const{folderState:r}=R(),{handleCreateResource:m,handleRenameResource:n}=_(r,t),d=()=>{t.emit("update:show")},l=()=>{m()},p=()=>{n(e.row.id)},u=(i=f())==null?void 0:i.appContext.config.globalProperties.trim;return h(()=>e.row,()=>{r.folderForm.name=e.row.alias,r.folderForm.description=e.row.description}),{fileEdit:w(()=>e.row.id&&!e.row.directory),hideModal:d,handleCreate:l,handleRename:p,...F(r),trim:u}},render(){const{t:e}=C();return o(b,{show:this.$props.show,title:this.row.id?e("resource.udf.edit"):e("resource.udf.create_folder"),onCancel:this.hideModal,onConfirm:this.row.id?this.handleRename:this.handleCreate,confirmClassName:"btn-submit",cancelClassName:"btn-cancel",confirmLoading:this.saving},{default:()=>[o(I,{rules:this.rules,ref:"folderFormRef"},{default:()=>[o(a,{label:this.fileEdit?e("resource.udf.file_name"):e("resource.udf.folder_name"),path:"name"},{default:()=>[o(s,{allowInput:this.fileEdit?this.trim:N,value:this.folderForm.name,"onUpdate:value":t=>this.folderForm.name=t,placeholder:e("resource.udf.enter_name_tips"),class:"input-directory-name"},null)]}),o(a,{label:e("resource.udf.description"),path:"description"},{default:()=>[o(s,{allowInput:this.trim,type:"textarea",value:this.folderForm.description,"onUpdate:value":t=>this.folderForm.description=t,placeholder:e("resource.udf.enter_description_tips"),class:"input-description"},null)]})]})]})}});export{oe as default};

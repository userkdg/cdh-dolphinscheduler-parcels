import{d,a as l,n as c,e as u,ba as f,u as h,c as e}from"./index.ccaa682a.js";import{M as y}from"./index.c665300e.js";import{u as w,a as j}from"./use-modal.3beefbd6.js";import{b as C}from"./index.fd192f71.js";import{N as M}from"./Form.b41344c3.js";import{N as v}from"./FormItem.6b297844.js";import{a as F}from"./Select.a0f44759.js";import"./index.c1fd473c.js";import"./Button.3394f0e3.js";import"./is-browser.f4bc45cf.js";import"./use-rtl.d43d8217.js";import"./resolve-slot.d8d7b3cb.js";import"./keysOf.10525521.js";import"./Card.915ef7d2.js";import"./index.7a579f81.js";import"./index.99c68204.js";import"./flatten.995f807f.js";import"./Scrollbar.0dc514b7.js";import"./fade-in.cssr.ac08f6bb.js";import"./VResizeObserver.c3d2397d.js";import"./fade-in-scale-up.cssr.5995d390.js";import"./utils.381519a7.js";import"./Space.f435ce00.js";import"./get-slot.7f666ba0.js";import"./lodash.02988b15.js";import"./index.ea22358f.js";import"./service.ae1ed8a7.js";import"./index.db4740c8.js";import"./index.8f0bc55d.js";import"./index.10c5a06c.js";import"./index.126e1851.js";import"./common.0c468cf3.js";import"./SettingOutlined.675e55ec.js";import"./PauseCircleOutlined.f81cacab.js";import"./CloseCircleOutlined.7f4d3411.js";import"./CheckCircleOutlined.b6132804.js";import"./EditOutlined.84f6aa5d.js";import"./index.15a20265.js";import"./format-length.a0cbed4d.js";import"./use-locale.ca4c738c.js";import"./use-compitable.d1fd83c6.js";import"./Selection.57d091a8.js";import"./Popover.b48d5d17.js";import"./next-frame-once.e5ee25e8.js";import"./Suffix.584d00eb.js";const N={show:{type:Boolean,default:!1},codes:{type:Array,default:[]}},yo=d({name:"workflowDefinitionCopy",props:N,emits:["update:show","update:row","updateList"],setup(o,t){const{copyState:p}=w(),{handleBatchCopyDefinition:m}=j(p,t),a=()=>{t.emit("update:show")},s=()=>{m(o.codes)},i=l([]),n=c(()=>i.value.map(r=>({label:r.name,value:r.code})));return u(()=>{C().then(r=>{i.value=r})}),{hideModal:a,handleCopy:s,projectOptions:n,...f(p)}},render(){const{t:o}=h();return e(y,{show:this.$props.show,title:o("project.workflow.related_items"),onCancel:this.hideModal,onConfirm:this.handleCopy,confirmLoading:this.saving},{default:()=>[e(M,{rules:this.copyRules,ref:"copyFormRef"},{default:()=>[e(v,{label:o("project.workflow.project_name"),path:"projectCode"},{default:()=>[e(F,{options:this.projectOptions,value:this.copyForm.projectCode,"onUpdate:value":t=>this.copyForm.projectCode=t,placeholder:o("project.workflow.project_tips")},null)]})]})]})}});export{yo as default};

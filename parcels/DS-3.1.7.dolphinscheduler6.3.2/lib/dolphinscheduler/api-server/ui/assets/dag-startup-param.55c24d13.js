import{_ as m}from"./lodash.02988b15.js";import{d as k,u as P,a as f,n as u,e as x,c as t,ah as n}from"./index.ccaa682a.js";import{l as G}from"./index.10c5a06c.js";import{q as j}from"./index.db4740c8.js";import{b as v,w as T}from"./common.0c468cf3.js";import"./service.ae1ed8a7.js";import"./SettingOutlined.675e55ec.js";import"./PauseCircleOutlined.f81cacab.js";import"./CloseCircleOutlined.7f4d3411.js";import"./CheckCircleOutlined.b6132804.js";import"./EditOutlined.84f6aa5d.js";import"./index.15a20265.js";const N="_box_33xsv_17",L="_tab_33xsv_26",S="_content_33xsv_31",r={box:N,"box-bd":"_box-bd_33xsv_20",tab:L,content:S},D={startupParam:{type:Object,require:!0}},z=k({name:"dag-start-param",props:D,setup(a){var d;const{t:c}=P(),s=f([]),l=f([]),w=JSON.parse(((d=a.startupParam)==null?void 0:d.commandParam)||"{}"),b=()=>{G().then(e=>{s.value=e})},_=()=>{j().then(e=>{l.value=e})},g=u(()=>(m.filter(v(c),e=>{var o;return e.code===((o=a.startupParam)==null?void 0:o.commandType)})[0]||{}).desc),h=u(()=>{var p;const e=(p=a.startupParam)==null?void 0:p.warningType,o=m.filter(T,i=>i.id===e);return o&&o.length?c(o[0].code):"-"}),y=u(()=>{var p;const e=(p=a.startupParam)==null?void 0:p.warningGroupId;if(!s.value||!s.value.length)return"-";const o=m.filter(s.value,i=>i.id===e);return o&&o.length?o[0].groupName:"-"});return x(()=>{b(),_()}),{t:c,alertGroupListRef:s,workerGroupListRef:l,commandParam:w,runType:g,warningType:h,alertGroupName:y}},render(){var c,s,l;const{t:a}=this;return t("div",{class:r.box},[t("ul",{class:r["box-bd"]},[t("li",null,[t("span",{class:r.tab},[a("project.workflow.startup_type"),n(":")]),t("span",{class:r.content},[this.runType])]),t("li",null,[t("span",{class:r.tab},[a("project.workflow.complement_range"),n(":")]),this.commandParam&&this.commandParam.complementStartDate?t("span",{class:r.content},[this.commandParam.complementStartDate,n("-"),this.commandParam.complementEndDate]):"-"]),t("li",null,[t("span",{class:r.tab},[a("project.workflow.failure_strategy"),n(":")]),t("span",{class:r.content},[((c=this.startupParam)==null?void 0:c.failureStrategy)==="END"?a("project.workflow.end"):a("project.workflow.continue")])]),t("li",null,[t("span",{class:r.tab},[a("project.workflow.workflow_priority"),n(":")]),t("span",{class:r.content},[(s=this.startupParam)==null?void 0:s.processInstancePriority])]),t("li",null,[t("span",{class:r.tab},[a("project.workflow.worker_group"),n(":")]),t("span",{class:r.content},[this.workerGroupListRef.length?(l=this.startupParam)==null?void 0:l.workerGroup:"-"])]),t("li",null,[t("span",{class:r.tab},[a("project.workflow.notification_strategy"),n(":")]),t("span",{class:r.content},[this.warningType])]),t("li",null,[t("span",{class:r.tab},[a("project.workflow.alarm_group"),n(":")]),t("span",{class:r.content},[this.alertGroupName])])])])}});export{z as default};

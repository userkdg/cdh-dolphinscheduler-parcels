import{bJ as p,d as c,c as o}from"./index.ccaa682a.js";import{u as m}from"./index.cb24df24.js";import{c as u}from"./index.f226e50b.js";import{B as D}from"./Bar.297befd4.js";import{C as f}from"./index.76253dc2.js";import"./service.ae1ed8a7.js";import"./lodash.02988b15.js";import"./index.b6b88472.js";import"./Card.915ef7d2.js";import"./use-rtl.d43d8217.js";import"./resolve-slot.d8d7b3cb.js";import"./index.7a579f81.js";import"./keysOf.10525521.js";function d(){const e=p();return{getProcessDefinition:()=>{const{state:r}=m(u({projectCode:Number(e.params.projectCode)}).then(s=>{const n=s.userList.map(i=>i.userName),a=s.userList.map(i=>i.count);return{xAxisData:n,seriesData:a}}),{xAxisData:[],seriesData:[]});return r}}}const x={title:{type:String}},J=c({name:"DefinitionCard",props:x,setup(){const{getProcessDefinition:e}=d();return{processDefinition:e()}},render(){const{title:e,processDefinition:t}=this;return t.xAxisData.length>0&&t.seriesData.length>0&&o(f,{title:e},{default:()=>o(D,{xAxisData:t.xAxisData,seriesData:t.seriesData},null)})}});export{J as default};

import{ah as a,V as p,ai as y}from"./index.ccaa682a.js";function t(f,n=!0,i=[]){return f.forEach(r=>{if(r!==null){if(typeof r!="object"){(typeof r=="string"||typeof r=="number")&&i.push(a(String(r)));return}if(Array.isArray(r)){t(r,n,i);return}if(r.type===p){if(r.children===null)return;Array.isArray(r.children)&&t(r.children,n,i)}else r.type!==y&&i.push(r)}}),i}export{t as f};

import{h as m}from"./utils.381519a7.js";import{b5 as y,o as h,b,r as w,w as v}from"./index.ccaa682a.js";import{a as f,o as c}from"./Scrollbar.0dc514b7.js";function B(p={},n){const t=y({ctrl:!1,command:!1,win:!1,shift:!1,tab:!1}),{keydown:i,keyup:u}=p,s=e=>{switch(e.key){case"Control":t.ctrl=!0;break;case"Meta":t.command=!0,t.win=!0;break;case"Shift":t.shift=!0;break;case"Tab":t.tab=!0;break}i!==void 0&&Object.keys(i).forEach(o=>{if(o!==e.key)return;const a=i[o];if(typeof a=="function")a(e);else{const{stop:d=!1,prevent:l=!1}=a;d&&e.stopPropagation(),l&&e.preventDefault(),a.handler(e)}})},r=e=>{switch(e.key){case"Control":t.ctrl=!1;break;case"Meta":t.command=!1,t.win=!1;break;case"Shift":t.shift=!1;break;case"Tab":t.tab=!1;break}u!==void 0&&Object.keys(u).forEach(o=>{if(o!==e.key)return;const a=u[o];if(typeof a=="function")a(e);else{const{stop:d=!1,prevent:l=!1}=a;d&&e.stopPropagation(),l&&e.preventDefault(),a.handler(e)}})},k=()=>{(n===void 0||n.value)&&(c("keydown",document,s),c("keyup",document,r)),n!==void 0&&v(n,e=>{e?(c("keydown",document,s),c("keyup",document,r)):(f("keydown",document,s),f("keyup",document,r))})};return m()?(h(k),b(()=>{(n===void 0||n.value)&&(f("keydown",document,s),f("keyup",document,r))})):k(),w(t)}export{B as u};

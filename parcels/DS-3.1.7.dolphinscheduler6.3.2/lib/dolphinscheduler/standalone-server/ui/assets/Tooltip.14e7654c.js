import{N as p,p as i}from"./Popover.b48d5d17.js";import{d as n,l as t,a,n as l,t as h,b3 as m}from"./index.ccaa682a.js";const c=Object.assign(Object.assign({},i),t.props),O=n({name:"Tooltip",props:c,__popover__:!0,setup(e){const o=t("Tooltip","-tooltip",void 0,m,e),s=a(null);return Object.assign(Object.assign({},{syncPosition(){s.value.syncPosition()},setShow(r){s.value.setShow(r)}}),{popoverRef:s,mergedTheme:o,popoverThemeOverrides:l(()=>o.value.self)})},render(){const{mergedTheme:e,internalExtraClass:o}=this;return h(p,Object.assign(Object.assign({},this.$props),{theme:e.peers.Popover,themeOverrides:e.peerOverrides.Popover,builtinThemeOverrides:this.popoverThemeOverrides,internalExtraClass:o.concat("tooltip"),ref:"popoverRef"}),this.$slots)}});export{O as N};

"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[91506],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),d=o,f=u["".concat(i,".").concat(d)]||u[d]||m[d]||a;return r?n.createElement(f,c(c({ref:t},p),{},{components:r})):n.createElement(f,c({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,c[1]=s;for(var l=2;l<a;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},29003:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const a={id:"casbin",title:"Casbin","example-tags":["antd","access-control"]},c=void 0,s={unversionedId:"examples/access-control/casbin",id:"examples/access-control/casbin",title:"Casbin",description:"Access Control is a complex topic with a variety of sophisticated solutions that provide numerous functions. This example demonstrates how to use refine and Casbin to simplify access control management throughout your application.",source:"@site/docs/examples/access-control/casbin.md",sourceDirName:"examples/access-control",slug:"/examples/access-control/casbin",permalink:"/docs/examples/access-control/casbin",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/examples/access-control/casbin.md",tags:[],version:"current",lastUpdatedBy:"Necati \xd6zmen",lastUpdatedAt:1678956562,formattedLastUpdatedAt:"Mar 16, 2023",frontMatter:{id:"casbin",title:"Casbin","example-tags":["antd","access-control"]},sidebar:"someSidebar",previous:{title:"RealWorld Example",permalink:"/docs/examples/real-world-refine-example"},next:{title:"Cerbos",permalink:"/docs/examples/access-control/cerbos"}},i={},l=[],p=(m="CodeSandboxExample",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var m;const u={toc:l};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Access Control is a complex topic with a variety of sophisticated solutions that provide numerous functions. This example demonstrates how to use ",(0,o.kt)("strong",{parentName:"p"},"refine")," and ",(0,o.kt)("a",{parentName:"p",href:"https://casbin.org/"},"Casbin")," to simplify access control management throughout your application."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/accessControl-provider/"},"Refer to the refine Access Control Provider documentation for more information. \u2192")),(0,o.kt)(p,{path:"access-control-casbin",mdxType:"CodeSandboxExample"}))}d.isMDXComponent=!0}}]);
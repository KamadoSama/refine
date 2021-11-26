"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4443],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),i=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=i(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=i(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||c;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var i=2;i<c;i++)o[i]=n[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},25994:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return i},toc:function(){return p},default:function(){return d}});var r=n(87462),a=n(63366),c=(n(67294),n(3905)),o=["components"],s={id:"can-access",title:"<CanAccess>",siderbar_label:"<CanAccess>"},l=void 0,i={unversionedId:"api-references/components/accessControl/can-access",id:"api-references/components/accessControl/can-access",isDocsHomePage:!1,title:"<CanAccess>",description:"` is a wrapper component that uses useCan to check for access control. It takes the parameters that can method takes and also a fallback. It renders its children if the access control returns true and if access control returns false renders fallback` if provided.",source:"@site/docs/api-references/components/accessControl/canAccess.md",sourceDirName:"api-references/components/accessControl",slug:"/api-references/components/accessControl/can-access",permalink:"/docs/next/api-references/components/accessControl/can-access",editUrl:"https://github.com/pankod/refine/tree/master/documentation/docs/api-references/components/accessControl/canAccess.md",tags:[],version:"current",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1637934058,formattedLastUpdatedAt:"11/26/2021",frontMatter:{id:"can-access",title:"<CanAccess>",siderbar_label:"<CanAccess>"},sidebar:"someSidebar",previous:{title:"<Authenticated>",permalink:"/docs/next/api-references/components/auth/authenticated"},next:{title:"List",permalink:"/docs/next/api-references/components/buttons/list-button"}},p=[{value:"API Reference",id:"api-reference",children:[{value:"Properties",id:"properties",children:[],level:3}],level:2}],u={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,c.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,(0,c.kt)("inlineCode",{parentName:"p"},"<CanAccess />")," is a wrapper component that uses ",(0,c.kt)("inlineCode",{parentName:"p"},"useCan")," to check for access control. It takes the parameters that ",(0,c.kt)("inlineCode",{parentName:"p"},"can")," method takes and also a ",(0,c.kt)("inlineCode",{parentName:"p"},"fallback"),". It renders its children if the access control returns true and if access control returns false renders ",(0,c.kt)("inlineCode",{parentName:"p"},"fallback")," if provided."),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-tsx"},'<CanAccess\n    resource="posts"\n    action="edit"\n    params={{ id: 1 }}\n    fallback={<CustomFallback />}\n>\n    <YourComponent />\n</CanAccess>\n')),(0,c.kt)("h2",{id:"api-reference"},"API Reference"),(0,c.kt)("h3",{id:"properties"},"Properties"),(0,c.kt)("table",null,(0,c.kt)("thead",{parentName:"table"},(0,c.kt)("tr",{parentName:"thead"},(0,c.kt)("th",{parentName:"tr",align:null},"Property"),(0,c.kt)("th",{parentName:"tr",align:null},"Description"),(0,c.kt)("th",{parentName:"tr",align:null},"Type"),(0,c.kt)("th",{parentName:"tr",align:null},"Default"))),(0,c.kt)("tbody",{parentName:"table"},(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:null},(0,c.kt)("div",{className:"required-block"},(0,c.kt)("div",null,"resource")," ",(0,c.kt)("div",{className:" required"},"Required"))),(0,c.kt)("td",{parentName:"tr",align:null},"Resource name for API data interactions"),(0,c.kt)("td",{parentName:"tr",align:null},(0,c.kt)("inlineCode",{parentName:"td"},"string")),(0,c.kt)("td",{parentName:"tr",align:null})),(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:null},"action ",(0,c.kt)("div",{className:"required"},"Required")),(0,c.kt)("td",{parentName:"tr",align:null},"Intenden action on resource"),(0,c.kt)("td",{parentName:"tr",align:null},(0,c.kt)("inlineCode",{parentName:"td"},"string")),(0,c.kt)("td",{parentName:"tr",align:null})),(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:null},"params"),(0,c.kt)("td",{parentName:"tr",align:null},"Parameters associated with the resource"),(0,c.kt)("td",{parentName:"tr",align:null},(0,c.kt)("inlineCode",{parentName:"td"},"any")),(0,c.kt)("td",{parentName:"tr",align:null})),(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:null},"fallback"),(0,c.kt)("td",{parentName:"tr",align:null},"Content to show if access control returns false"),(0,c.kt)("td",{parentName:"tr",align:null},(0,c.kt)("inlineCode",{parentName:"td"},"ReactNode")),(0,c.kt)("td",{parentName:"tr",align:null})))))}d.isMDXComponent=!0}}]);
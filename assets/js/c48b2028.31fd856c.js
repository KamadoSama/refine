"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[17284],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(n),h=a,m=c["".concat(l,".").concat(h)]||c[h]||u[h]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),a=n(86010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>h});var r=n(87462),a=n(67294),o=n(86010),i=n(72389),s=n(67392),l=n(7094),d=n(12466);const p="tabList__CuJ",u="tabItem_LNqP";function c(e){var t;const{lazy:n,block:i,defaultValue:c,values:h,groupId:m,className:f}=e,g=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=h??g.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),k=(0,s.l)(v,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const w=null===c?c:c??(null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)??g[0].props.value;if(null!==w&&!v.some((e=>e.value===w)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${w}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:b}=(0,l.U)(),[R,I]=(0,a.useState)(w),N=[],{blockElementScrollPositionUntilNextRender:C}=(0,d.o5)();if(null!=m){const e=y[m];null!=e&&e!==R&&v.some((t=>t.value===e))&&I(e)}const P=e=>{const t=e.currentTarget,n=N.indexOf(t),r=v[n].value;r!==R&&(C(t),I(r),null!=m&&b(m,String(r)))},x=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=N.indexOf(e.currentTarget)+1;n=N[t]??N[0];break}case"ArrowLeft":{const t=N.indexOf(e.currentTarget)-1;n=N[t]??N[N.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",p)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":i},f)},v.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:R===t?0:-1,"aria-selected":R===t,key:t,ref:e=>N.push(e),onKeyDown:x,onFocus:P,onClick:P},i,{className:(0,o.Z)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":R===t})}),n??t)}))),n?(0,a.cloneElement)(g.filter((e=>e.props.value===R))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==R})))))}function h(e){const t=(0,i.Z)();return a.createElement(c,(0,r.Z)({key:String(t)},e))}},16959:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>d,toc:()=>u});var r=n(87462),a=(n(67294),n(3905)),o=n(65488),i=n(85162);const s={id:"generate-crud-pages",title:"4. Generate CRUD pages automatically with Inferencer",tutorial:{prev:"tutorial/getting-started/{preferredUI}/create-project",next:"tutorial/getting-started/store-your-repository"}},l=void 0,d={unversionedId:"tutorial/getting-started/headless/generate-crud-pages",id:"tutorial/getting-started/headless/generate-crud-pages",title:"4. Generate CRUD pages automatically with Inferencer",description:"Inferencer",source:"@site/docs/tutorial/1-getting-started/headless/3-generate-crud-pages.md",sourceDirName:"tutorial/1-getting-started/headless",slug:"/tutorial/getting-started/headless/generate-crud-pages",permalink:"/docs/tutorial/getting-started/headless/generate-crud-pages",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/tutorial/1-getting-started/headless/3-generate-crud-pages.md",tags:[],version:"current",lastUpdatedBy:"Necati \xd6zmen",lastUpdatedAt:1678956562,formattedLastUpdatedAt:"Mar 16, 2023",sidebarPosition:3,frontMatter:{id:"generate-crud-pages",title:"4. Generate CRUD pages automatically with Inferencer",tutorial:{prev:"tutorial/getting-started/{preferredUI}/create-project",next:"tutorial/getting-started/store-your-repository"}}},p={},u=[{value:"Inferencer",id:"inferencer",level:2},{value:"Why use Inferencer?",id:"why-use-inferencer",level:4},{value:"Learn Inferencer",id:"learn-inferencer",level:4},{value:"How to use Inferencer",id:"how-to-use-inferencer",level:2},{value:"Preview the auto-generated pages",id:"preview-the-auto-generated-pages",level:2},{value:"List Page",id:"list-page",level:3},{value:"Create Page",id:"create-page",level:3},{value:"Edit Page",id:"edit-page",level:3},{value:"Show Page",id:"show-page",level:3}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},h=c("Checklist"),m=c("ChecklistItem"),f={toc:u};function g(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"inferencer"},"Inferencer"),(0,a.kt)("p",null,"Inferencer is a powerful tool in the ",(0,a.kt)("strong",{parentName:"p"},"refine")," ecosystem that helps developers quickly generate CRUD (create, read, update, delete) pages for their data model. It analyzes your data model based on the resource scheme and automatically creates the pages with required forms and tables for CRUD operations."),(0,a.kt)("h4",{id:"why-use-inferencer"},"Why use Inferencer?"),(0,a.kt)("p",null,"There are several benefits:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The goal of Inferencer is to reduce the amount of time spent on creating views for resources by generating the code automatically. This can save developers a significant amount of time and effort, especially on large projects with many resources.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Inferencer generates code that is easy to customize. Instead of starting from scratch, you can use the auto-generated code as a starting point and make changes to fit your specific needs. This allows you to quickly iterate and get your project up and running faster.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"By using Inferencer, you can avoid common mistakes that can arise when building CRUD pages manually. This can help you avoid bugs and other issues that can arise during development."))),(0,a.kt)("p",null,"Overall, using Inferencer can greatly speed up development time and reduce the amount of code that needs to be written manually. It helps ensure that your CRUD pages are consistent and adhere to best practices, freeing you up to focus on more complex tasks."),(0,a.kt)("h4",{id:"learn-inferencer"},"Learn Inferencer"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Learn about ",(0,a.kt)("a",{parentName:"li",href:"/docs/packages/documentation/inferencer"},"how Inferencer works"),"."),(0,a.kt)("li",{parentName:"ul"},"Learn about ",(0,a.kt)("a",{parentName:"li",href:"/docs/api-reference/core/components/inferencer/"},"how to use headless Inferencer"),".")),(0,a.kt)("h2",{id:"how-to-use-inferencer"},"How to use Inferencer"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"@refinedev/inferencer")," package provides the ",(0,a.kt)("inlineCode",{parentName:"p"},"<HeadlessInferencer/>")," component, which can be imported from ",(0,a.kt)("inlineCode",{parentName:"p"},"@refinedev/inferencer/headless"),". It used to generate CRUD pages based on your API response."),(0,a.kt)("p",null,"Before we start using Inferencer, we need to add ",(0,a.kt)("inlineCode",{parentName:"p"},"@refinedev/react-hook-form")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"@refinedev/react-table")," packages to our project. Since these packages are used by Inferencer to generate forms and tables, they need to be installed in our project."),(0,a.kt)(o.Z,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"pnpm",value:"pnpm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @refinedev/react-table @refinedev/react-hook-form\n"))),(0,a.kt)(i.Z,{value:"pnpm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm i @refinedev/react-table @refinedev/react-hook-form\n"))),(0,a.kt)(i.Z,{value:"yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @refinedev/react-table @refinedev/react-hook-form\n")))),(0,a.kt)("p",null,"Then, we need to add the ",(0,a.kt)("inlineCode",{parentName:"p"},"<HeadlessInferencer/>")," component is used by passing to appropriate values in the ",(0,a.kt)("inlineCode",{parentName:"p"},"resources")," prop of the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Refine/>")," component in ",(0,a.kt)("inlineCode",{parentName:"p"},"App.tsx")," as shown below:"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"In ",(0,a.kt)("a",{parentName:"p",href:"/docs/tutorial/understanding-resources/index"},"Unit 4"),", the resources concept will be explained in detail. For now, you can assume that the resource is a collection of data on your API used in the app.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'import { Refine } from "@refinedev/core";\nimport routerBindings, {\n    UnsavedChangesNotifier,\n} from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\nimport { BrowserRouter, Route, Routes } from "react-router-dom";\n//highlight-next-line\nimport { HeadlessInferencer } from "@refinedev/inferencer/headless";\n\nconst App = () => {\n    return (\n        <BrowserRouter>\n            <Refine\n                routerProvider={routerBindings}\n                dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n                resources={[\n                    {\n                        name: "products",\n                        list: "/products",\n                        show: "/products/show/:id",\n                        create: "/products/create",\n                        edit: "/products/edit/:id",\n                    },\n                ]}\n                options={{\n                    syncWithLocation: true,\n                    warnWhenUnsavedChanges: true,\n                }}\n            >\n                <Routes>\n                    {/* highlight-start */}\n                    <Route path="products">\n                        <Route index element={<HeadlessInferencer />} />\n                        <Route\n                            path="show/:id"\n                            element={<HeadlessInferencer />}\n                        />\n                        <Route\n                            path="edit/:id"\n                            element={<HeadlessInferencer />}\n                        />\n                        <Route path="create" element={<HeadlessInferencer />} />\n                    </Route>\n                    {/* highlight-end */}\n                </Routes>\n                <UnsavedChangesNotifier />\n            </Refine>\n        </BrowserRouter>\n    );\n};\nexport default App;\n')),(0,a.kt)("p",null,"At this point, ",(0,a.kt)("strong",{parentName:"p"},"refine")," will automatically generate the CRUD pages for the ",(0,a.kt)("inlineCode",{parentName:"p"},"products")," resource based on the API response."),(0,a.kt)("h2",{id:"preview-the-auto-generated-pages"},"Preview the auto-generated pages"),(0,a.kt)("p",null,"So far we have added complete CRUD pages by utilizing Inferencer feature to the project. Let's take a look at the auto-generated CRUD pages that Inferencer handles for us."),(0,a.kt)("p",null,"Before we start, let's understand the API that we will be using in this tutorial. We will be using the ",(0,a.kt)("a",{parentName:"p",href:"https://api.fake-rest.refine.dev"},"https://api.fake-rest.refine.dev")," API. This API is created by the ",(0,a.kt)("strong",{parentName:"p"},"refine")," team and is used for demo purposes. It is a simple REST API that contains some resources like ",(0,a.kt)("inlineCode",{parentName:"p"},"products"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"categories"),", etc."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"In ",(0,a.kt)("a",{parentName:"p",href:"/docs/tutorial/understanding-dataprovider/index"},"Unit 3"),", it will be explained in detail how ",(0,a.kt)("strong",{parentName:"p"},"refine")," apps communicate with the API via the ",(0,a.kt)("inlineCode",{parentName:"p"},"dataProvider"),".")),(0,a.kt)("p",null,'You can view the code generated by Inferencer by clicking the "Show Code" button in the right corner of the live preview below.'),(0,a.kt)("h3",{id:"list-page"},"List Page"),(0,a.kt)("p",null,"To preview the list page, go back to your browser and open the ",(0,a.kt)("a",{href:"localhost:3000",rel:"noopener noreferrer nofollow"},"localhost:3000")," address."),(0,a.kt)("p",null,"You should see the list page for the ",(0,a.kt)("inlineCode",{parentName:"p"},"products")," resource that was generated by Inferencer like below:"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"When you navigate to the ",(0,a.kt)("inlineCode",{parentName:"p"},"localhost:3000"),", ",(0,a.kt)("strong",{parentName:"p"},"refine")," will redirect you to the initial resource's list page registered to ",(0,a.kt)("inlineCode",{parentName:"p"},"<Refine/>")," component like ",(0,a.kt)("inlineCode",{parentName:"p"},"localhost:3000/products"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewOnly previewHeight=600px url=http://localhost:3000/products",live:!0,previewOnly:!0,previewHeight:"600px",url:"http://localhost:3000/products"},'setInitialRoutes(["/products"]);\n\nimport { Refine } from "@refinedev/core";\nimport routerBindings, {\n    NavigateToResource,\n    UnsavedChangesNotifier,\n} from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\nimport { BrowserRouter, Route, Routes } from "react-router-dom";\n//highlight-next-line\nimport { HeadlessInferencer } from "@refinedev/inferencer/headless";\n\nconst App = () => {\n    return (\n        <BrowserRouter>\n            <Refine\n                routerProvider={routerBindings}\n                dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n                resources={[\n                    {\n                        name: "products",\n                        list: "/products",\n                        show: "/products/show/:id",\n                        create: "/products/create",\n                        edit: "/products/edit/:id",\n                    },\n                ]}\n                options={{\n                    syncWithLocation: true,\n                    warnWhenUnsavedChanges: true,\n                }}\n            >\n                <Routes>\n                    {/* highlight-start */}\n                    <Route\n                        index\n                        element={<NavigateToResource resource="products" />}\n                    />\n                    <Route path="products">\n                        <Route index element={<HeadlessInferencer />} />\n                        <Route\n                            path="show/:id"\n                            element={<HeadlessInferencer />}\n                        />\n                        <Route\n                            path="edit/:id"\n                            element={<HeadlessInferencer />}\n                        />\n                        <Route path="create" element={<HeadlessInferencer />} />\n                    </Route>\n                    {/* highlight-end */}\n                </Routes>\n                <UnsavedChangesNotifier />\n            </Refine>\n        </BrowserRouter>\n    );\n};\n\nrender(<App />);\n')),(0,a.kt)("h3",{id:"create-page"},"Create Page"),(0,a.kt)("p",null,"To preview the create page, go back to your browser and open the ",(0,a.kt)("a",{href:"localhost:3000/products/create",rel:"noopener noreferrer nofollow"},"localhost:3000/products/create"),' address or click the "Create" button on the list page.'),(0,a.kt)("p",null,"You should see the create page for the ",(0,a.kt)("inlineCode",{parentName:"p"},"products")," resource that was generated by Inferencer like below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewOnly previewHeight=600px url=http://localhost:3000/products/create",live:!0,previewOnly:!0,previewHeight:"600px",url:"http://localhost:3000/products/create"},'setInitialRoutes(["/products/create"]);\n\nimport { Refine } from "@refinedev/core";\nimport { HeadlessInferencer } from "@refinedev/inferencer/headless";\nimport routerBindings, {\n    UnsavedChangesNotifier,\n} from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\nimport { BrowserRouter, Route, Routes } from "react-router-dom";\n\nconst App = () => {\n    return (\n        <BrowserRouter>\n            <Refine\n                routerProvider={routerBindings}\n                dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n                resources={[\n                    {\n                        name: "products",\n                        list: "/products",\n                        show: "/products/show/:id",\n                        create: "/products/create",\n                        edit: "/products/edit/:id",\n                    },\n                ]}\n                options={{\n                    syncWithLocation: true,\n                    warnWhenUnsavedChanges: true,\n                }}\n            >\n                <Routes>\n                    {/* highlight-start */}\n                    <Route path="products">\n                        <Route index element={<HeadlessInferencer />} />\n                        <Route\n                            path="show/:id"\n                            element={<HeadlessInferencer />}\n                        />\n                        <Route\n                            path="edit/:id"\n                            element={<HeadlessInferencer />}\n                        />\n                        <Route path="create" element={<HeadlessInferencer />} />\n                    </Route>\n                    {/* highlight-end */}\n                </Routes>\n                <UnsavedChangesNotifier />\n            </Refine>\n        </BrowserRouter>\n    );\n};\nrender(<App />);\n')),(0,a.kt)("h3",{id:"edit-page"},"Edit Page"),(0,a.kt)("p",null,"To preview the edit page, go back to your browser and open the ",(0,a.kt)("a",{href:"localhost:3000/products/edit/123",rel:"noopener noreferrer nofollow"},"localhost:3000/products/edit/123"),' address or click the "Edit" button on the record in the list page.'),(0,a.kt)("p",null,"You should see the edit page for the ",(0,a.kt)("inlineCode",{parentName:"p"},"products")," resource with the id ",(0,a.kt)("inlineCode",{parentName:"p"},"123")," that was generated by Inferencer like below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewOnly previewHeight=600px url=http://localhost:3000/products/edit/123",live:!0,previewOnly:!0,previewHeight:"600px",url:"http://localhost:3000/products/edit/123"},'setInitialRoutes(["/products/edit/123"]);\n\nimport { Refine } from "@refinedev/core";\nimport { HeadlessInferencer } from "@refinedev/inferencer/headless";\nimport routerBindings, {\n    UnsavedChangesNotifier,\n} from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\nimport { BrowserRouter, Route, Routes } from "react-router-dom";\n\nconst App = () => {\n    return (\n        <BrowserRouter>\n            <Refine\n                routerProvider={routerBindings}\n                dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n                resources={[\n                    {\n                        name: "products",\n                        list: "/products",\n                        show: "/products/show/:id",\n                        create: "/products/create",\n                        edit: "/products/edit/:id",\n                    },\n                ]}\n                options={{\n                    syncWithLocation: true,\n                    warnWhenUnsavedChanges: true,\n                }}\n            >\n                <Routes>\n                    {/* highlight-start */}\n                    <Route path="products">\n                        <Route index element={<HeadlessInferencer />} />\n                        <Route\n                            path="show/:id"\n                            element={<HeadlessInferencer />}\n                        />\n                        <Route\n                            path="edit/:id"\n                            element={<HeadlessInferencer />}\n                        />\n                        <Route path="create" element={<HeadlessInferencer />} />\n                    </Route>\n                    {/* highlight-end */}\n                </Routes>\n                <UnsavedChangesNotifier />\n            </Refine>\n        </BrowserRouter>\n    );\n};\nrender(<App />);\n')),(0,a.kt)("h3",{id:"show-page"},"Show Page"),(0,a.kt)("p",null,"To preview the show page, go back to your browser and open the ",(0,a.kt)("a",{href:"localhost:3000/products/show/123",rel:"noopener noreferrer nofollow"},"localhost:3000/products/show/123"),' address or click the "Show" button on the record in the list page.'),(0,a.kt)("p",null,"You should see the show page for the ",(0,a.kt)("inlineCode",{parentName:"p"},"products")," resource with the id ",(0,a.kt)("inlineCode",{parentName:"p"},"123")," that was generated by Inferencer like below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewOnly previewHeight=600px url=http://localhost:3000/products/show/123",live:!0,previewOnly:!0,previewHeight:"600px",url:"http://localhost:3000/products/show/123"},'setInitialRoutes(["/products/show/123"]);\n\nimport { Refine } from "@refinedev/core";\nimport { HeadlessInferencer } from "@refinedev/inferencer/headless";\nimport routerBindings, {\n    UnsavedChangesNotifier,\n} from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\nimport { BrowserRouter, Route, Routes } from "react-router-dom";\n\nconst App = () => {\n    return (\n        <BrowserRouter>\n            <Refine\n                routerProvider={routerBindings}\n                dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n                resources={[\n                    {\n                        name: "products",\n                        list: "/products",\n                        show: "/products/show/:id",\n                        create: "/products/create",\n                        edit: "/products/edit/:id",\n                    },\n                ]}\n                options={{\n                    syncWithLocation: true,\n                    warnWhenUnsavedChanges: true,\n                }}\n            >\n                <Routes>\n                    {/* highlight-start */}\n                    <Route path="products">\n                        <Route index element={<HeadlessInferencer />} />\n                        <Route\n                            path="show/:id"\n                            element={<HeadlessInferencer />}\n                        />\n                        <Route\n                            path="edit/:id"\n                            element={<HeadlessInferencer />}\n                        />\n                        <Route path="create" element={<HeadlessInferencer />} />\n                    </Route>\n                    {/* highlight-end */}\n                </Routes>\n                <UnsavedChangesNotifier />\n            </Refine>\n        </BrowserRouter>\n    );\n};\nrender(<App />);\n')),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("p",null,"In ",(0,a.kt)("a",{parentName:"p",href:"/docs/tutorial/adding-crud-pages/headless/index"},"Unit 5"),", you will learn how to create CRUD pages manually using the code generated by Inferencer as a reference."),(0,a.kt)(h,{mdxType:"Checklist"},(0,a.kt)(m,{id:"generated-headless-crud-pages",mdxType:"ChecklistItem"},"I understood what is Inferencer, how it works and how Inferencer make my work easier."),(0,a.kt)(m,{id:"generated-headless-crud-pages-2",mdxType:"ChecklistItem"},(0,a.kt)("p",null,"I inspected the auto-generated ",(0,a.kt)("inlineCode",{parentName:"p"},"list"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"create"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"edit"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"show")," pages."))))}g.isMDXComponent=!0}}]);
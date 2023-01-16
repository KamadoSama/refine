"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[52938],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),u=r,h=d["".concat(l,".").concat(u)]||d[u]||m[u]||s;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<s;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},11172:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const s={title:"Memoization in React - How useCallback Works",description:"Improve the APP performance with React useCallback() hook",slug:"react-usecallback-guide",authors:"abdullah_numan",tags:["react","memoization","usecallback","performance"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-20-react-use-callback/social.png",hide_table_of_contents:!1},o=void 0,i={permalink:"/blog/react-usecallback-guide",source:"@site/blog/2022-09-20-react-use-callback.md",title:"Memoization in React - How useCallback Works",description:"Improve the APP performance with React useCallback() hook",date:"2022-09-20T00:00:00.000Z",formattedDate:"September 20, 2022",tags:[{label:"react",permalink:"/blog/tags/react"},{label:"memoization",permalink:"/blog/tags/memoization"},{label:"usecallback",permalink:"/blog/tags/usecallback"},{label:"performance",permalink:"/blog/tags/performance"}],readingTime:5.37,hasTruncateMarker:!1,authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],frontMatter:{title:"Memoization in React - How useCallback Works",description:"Improve the APP performance with React useCallback() hook",slug:"react-usecallback-guide",authors:"abdullah_numan",tags:["react","memoization","usecallback","performance"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-20-react-use-callback/social.png",hide_table_of_contents:!1},prevItem:{title:"OTP Authentication with Supabase and Twilio in React",permalink:"/blog/supabase-twilio-otp-authentication-in-react"},nextItem:{title:"Redirect in React Router V6 with useNavigate hook",permalink:"/blog/usenavigate-react-router-redirect"},relatedPosts:[{title:"Top React Component Libraries and Frameworks Every Developer Should Know",permalink:"/blog/top-react-component-libraries-and-frameworks-every-developer-should-know",formattedDate:"April 29, 2022",authors:[{name:"Salih \xd6zdemir",title:"Software Developer",url:"https://github.com/salihozdemir",imageURL:"https://github.com/salihozdemir.png",key:"salih"}],readingTime:4.8,date:"2022-04-29T00:00:00.000Z"},{title:"When to use dangerouslySetInnerHTML in React?",permalink:"/blog/use-react-dangerouslysetinnerhtml",formattedDate:"September 25, 2022",authors:[{name:"Clara Ekekenta",title:"Software Engineer",imageURL:"/img/generic-profile.png",key:"clara_ekekenta"}],readingTime:5.35,date:"2022-09-25T00:00:00.000Z"},{title:"Creating a Responsive React Navbar with Tailwind CSS",permalink:"/blog/react-navbar-responsive-tailwind",formattedDate:"October 7, 2022",authors:[{name:"Muhammed  Sarwar",title:"Software Engineer",url:"https://twitter.com/arslans171",imageURL:"/img/generic-profile.png",key:"muhammed_arslan"}],readingTime:8.485,date:"2022-10-07T00:00:00.000Z"}],authorPosts:[{title:"A Detailed Guide on TypeScript Pick Type",permalink:"/blog/typescript-pick-utility-type",formattedDate:"September 30, 2022",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:6.53,date:"2022-09-30T00:00:00.000Z"},{title:"How to Use JavaScript Array some",permalink:"/blog/javascript-some-method",formattedDate:"October 25, 2022",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:8.015,date:"2022-10-25T00:00:00.000Z"},{title:"How to use JavaScript Ternary Operator?",permalink:"/blog/javascript-ternary-operator",formattedDate:"November 15, 2022",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:4.105,date:"2022-11-15T00:00:00.000Z"}]},l={authorsImageUrls:[void 0]},c=[{value:"Introduction",id:"introduction",level:2},{value:"Project Content Overview",id:"project-content-overview",level:3},{value:"Pass Callback from Parent to Child",id:"pass-callback-from-parent-to-child",level:2},{value:"Referential Integrity",id:"referential-integrity",level:2},{value:"Memoizing Event Listeners with <code>useCallback()</code>",id:"memoizing-event-listeners-with-usecallback",level:2},{value:"Other Cases",id:"other-cases",level:2},{value:"Conclusion",id:"conclusion",level:2},{value:"Example",id:"example",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},m=p("PromotionBanner"),d=p("StackblitzExample"),u={toc:c};function h(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"This post is about using the ",(0,r.kt)("inlineCode",{parentName:"p"},"useCallback()")," hook in React. This is the third part of the series titled Memoization in React."),(0,r.kt)("p",null,"In React, callback functions like event handlers inside a component are re-created as unique function objects at every re-render of the component. When a callback is passed from a parent to a child as a prop, the child component re-renders just because of the absence of referential integrity of the callback. ",(0,r.kt)("inlineCode",{parentName:"p"},"useCallback()")," helps maintain the callback's referential integrity and prevent these re-renders."),(0,r.kt)("p",null,"We'll look at the details of the ",(0,r.kt)("inlineCode",{parentName:"p"},"useCallback()")," hook with an example demonstrated in the previous post titled ",(0,r.kt)("a",{parentName:"p",href:"https://refine.dev/blog/react-usememo/"},"Memoization in React - How ",(0,r.kt)("inlineCode",{parentName:"a"},"useMemo()")," Works"),". "),(0,r.kt)("p",null,"Steps we'll cover:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#pass-callback-from-parent-to-child"},"Pass Callback from Parent to Child")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#referential-integrity"},"Referential Integrity")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#memoizing-event-listeners-with-usecallback"},"Memoizing Event Listeners with ",(0,r.kt)("inlineCode",{parentName:"a"},"useCallback()"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#other-cases"},"Other Cases"))),(0,r.kt)("h3",{id:"project-content-overview"},"Project Content Overview"),(0,r.kt)("p",null,"The app is based on the idea of a list of posts on a blog."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"#live-stackblitz-example"},"The example app live code")),(0,r.kt)("p",null,"The discussion of this article is focused on optimizing performance by memoizing callback functions that are passed as a prop from a parent component to a child. We are going to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"useCallback()")," hook for this."),(0,r.kt)("h2",{id:"pass-callback-from-parent-to-child"},"Pass Callback from Parent to Child"),(0,r.kt)("p",null,"In this example, we'll consider the ",(0,r.kt)("inlineCode",{parentName:"p"},"<UserPostsIndex />"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"<UserPostsList />")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"<UserPosts />")," components."),(0,r.kt)("p",null,"As you can see below, ",(0,r.kt)("inlineCode",{parentName:"p"},"<UserPostsIndex />")," fetches and sets ",(0,r.kt)("inlineCode",{parentName:"p"},"userPosts")," when the compnent renders:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="components/UserPostIndex.jsx"',title:'"components/UserPostIndex.jsx"'},'import React, { useEffect, useState } from "react";\nimport fetchUserPosts from "../fetch/fetchUserPosts";\nimport UserPostsList from "./UserPostsList";\n\nconst UserPostsIndex = ({ signedIn }) => {\n  const [userPosts, setUserPosts] = useState([]);\n\n  const deletePost = e => {\n    const { postId } = e.currentTarget.dataset;\n    const remainingPosts = userPosts.filter(post => post.id !== parseInt(postId));\n    setUserPosts(remainingPosts);\n  };\n\n  useEffect(() => {\n    const posts = fetchUserPosts();\n    setUserPosts(posts);\n  }, []);\n\n\n  return (\n    <div className="my-1 p-2 box">\n      <div className="m-1 py-1">\n        <h2 className="heading-md">Your Posts</h2>\n        <p className="m-1 p-1">{signedIn ? `Signed in`: `Signed out `}</p>\n        {\n          userPosts &&\n          (\n            <div className="px-1">\n              {\n                <UserPostsList userPosts={userPosts}\n                  deletePost={deletePost}\n                />\n              }\n            </div>\n          )\n        }\n      </div>\n    </div>\n  );\n};\n\nexport default React.memo(UserPostsIndex);\n')),(0,r.kt)("p",null,"In the JSX, we have a ",(0,r.kt)("inlineCode",{parentName:"p"},"deletePost()")," function passed on to ",(0,r.kt)("inlineCode",{parentName:"p"},"<UserPostsList />")," component, along with ",(0,r.kt)("inlineCode",{parentName:"p"},"userPosts"),". Prior to that, ",(0,r.kt)("inlineCode",{parentName:"p"},"<UserPostsIndex>")," receives ",(0,r.kt)("inlineCode",{parentName:"p"},"signedIn")," as a prop from ",(0,r.kt)("inlineCode",{parentName:"p"},"<Blog />"),"."),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"<UserPostsList />")," component, we receive ",(0,r.kt)("inlineCode",{parentName:"p"},"userPosts")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"deletePost()")," function and display a ",(0,r.kt)("inlineCode",{parentName:"p"},"<UserPost />")," for each post in ",(0,r.kt)("inlineCode",{parentName:"p"},"userPosts")," array:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="components/UserPostList.jsx"',title:'"components/UserPostList.jsx"'},"import React from 'react';\nimport UserPost from './UserPost';\n\nconst UserPostsList = ({ userPosts, deletePost }) => {\n\n  console.log('Rendering UserPostsList component');\n\n  return (\n    (\n      <div className=\"px-1\">\n        {\n          userPosts.map(post => (\n            <div key={post.id} className=\"my-1 box flex-row\">\n              <UserPost post={post} />\n              <button className=\"btn btn-danger\" data-post-id={post.id} onClick={deletePost}>Delete</button>\n            </div>\n        ))\n        }\n      </div>\n    )\n  );\n};\n\nexport default React.memo(UserPostsList);\n")),(0,r.kt)("p",null,"Inside ",(0,r.kt)("inlineCode",{parentName:"p"},"<UserPostsList />"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"deletePost()")," is used to remove an item from the list."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"<UserPost />")," is just a presentational component where we display the title as a link. Feel free to go over it in your editor."),(0,r.kt)("p",null,"Now let's add following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="components/UserPostIndex.jsx"',title:'"components/UserPostIndex.jsx"'},"console.log('Rendering UserPostsIndex component');\n")),(0,r.kt)("p",null,"and this one in ",(0,r.kt)("inlineCode",{parentName:"p"},"<UserPostsList />"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="components/UserPostList.jsx"',title:'"components/UserPostList.jsx"'},"console.log('Rendering UserPostsList component');\n")),(0,r.kt)("p",null,"If we check our console, we can see the logs for the inital rendering of the components.",(0,r.kt)("br",{parentName:"p"}),"\n","Then if we click the ",(0,r.kt)("inlineCode",{parentName:"p"},"SignOut")," button on the navbar, we see batches of renders from ",(0,r.kt)("inlineCode",{parentName:"p"},"<UserPostsIndex />"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"<UserPostsList />")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"<UserPost />"),":"),(0,r.kt)("div",{class:"img-container","align-items":"center"},(0,r.kt)("img",{style:{alignSelf:"center",width:"400px"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-20-react-use-callback/usecallback1.png",alt:"usecallback1"})),(0,r.kt)("br",null),(0,r.kt)("p",null,"We can account for the re-render of ",(0,r.kt)("inlineCode",{parentName:"p"},"<UserPostsIndex />")," because the value of the ",(0,r.kt)("inlineCode",{parentName:"p"},"signedIn")," prop changed. However, re-rendering ",(0,r.kt)("inlineCode",{parentName:"p"},"<UserPostsList />")," does not make sense because ",(0,r.kt)("inlineCode",{parentName:"p"},"userPosts")," does not change with the change in the value of ",(0,r.kt)("inlineCode",{parentName:"p"},"signedIn"),".  "),(0,r.kt)("p",null,"We already memoized ",(0,r.kt)("inlineCode",{parentName:"p"},"<UserPostsList />")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"React.memo()"),". We don't see any reason why it should re-render due changes in any ancestor's state."),(0,r.kt)("p",null," Does ",(0,r.kt)("inlineCode",{parentName:"p"},"deletePost()")," change ?"),(0,r.kt)("hr",null),(0,r.kt)(m,{title:"Building a side project?",image:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/generic_banner.png",mdxType:"PromotionBanner"}),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"referential-integrity"},"Referential Integrity"),(0,r.kt)("p",null,"Well, ",(0,r.kt)("inlineCode",{parentName:"p"},"deletePost()")," changes, and it changes due to breaking of ",(0,r.kt)("strong",{parentName:"p"},"referential integrity"),". And this change triggers a re-render in ",(0,r.kt)("inlineCode",{parentName:"p"},"<UserPostsList />")," which we don't expect to see."),(0,r.kt)("p",null,"In React, a function passed to a component as a prop fails to maintain referential integrity because a new function object is created at every render from a function declared inside a parent component. So the value of the prop in the receiver component is different at every re-render of the parent. As a result, the receiver also re-renders, unexpectedly."),(0,r.kt)("p",null,"In our example, ",(0,r.kt)("inlineCode",{parentName:"p"},"<UserPostsList />")," is not expected to be re-rendered, but it does because referential integrity fails as ",(0,r.kt)("inlineCode",{parentName:"p"},"deletePost()")," is a different function object at every re-render of ",(0,r.kt)("inlineCode",{parentName:"p"},"<UserPostsIndex />"),", i.e. they are not equal. So, when we change ",(0,r.kt)("inlineCode",{parentName:"p"},"signedIn"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"<UserPostsIndex />")," re-renders, and so ",(0,r.kt)("inlineCode",{parentName:"p"},"<UserPostsList />")," also re-renders."),(0,r.kt)("h2",{id:"memoizing-event-listeners-with-usecallback"},"Memoizing Event Listeners with ",(0,r.kt)("inlineCode",{parentName:"h2"},"useCallback()")),(0,r.kt)("p",null,"Now, memoizing ",(0,r.kt)("inlineCode",{parentName:"p"},"deletePost()")," produces the same function at every re-render. Let's memoize it with ",(0,r.kt)("inlineCode",{parentName:"p"},"useCallback()")," by making the following changes in ",(0,r.kt)("inlineCode",{parentName:"p"},"<UserPostsIndex />"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="components/UserPostIndex.jsx"',title:'"components/UserPostIndex.jsx"'},'  // highlight-next-line\nimport React, { useCallback, useEffect, useState } from "react";\n\nconst UserPostsIndex = ({ signedIn }) => {\n\n// highlight-next-line\n  const deletePost = useCallback(e => {\n    const { postId } = e.currentTarget.dataset;\n    const remainingPosts = userPosts.filter(post => post.id !== parseInt(postId));\n    setUserPosts(remainingPosts);\n    // highlight-next-line\n  }, [userPosts]);\n\n  ...\n\n};\n\nexport default React.memo(UserPostsIndex);\n')),(0,r.kt)("p",null,"Now, if we click the ",(0,r.kt)("inlineCode",{parentName:"p"},"Sign Out")," button a few times, we'll see in the console that ",(0,r.kt)("inlineCode",{parentName:"p"},"<UserPostsIndex />")," is re-rendered, but ",(0,r.kt)("inlineCode",{parentName:"p"},"<UserPostsList />")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"<UserPost />")," is not:"),(0,r.kt)("div",{class:"img-container","align-items":"center"},(0,r.kt)("img",{style:{alignSelf:"center",width:"400px"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-20-react-use-callback/usecallback2.png",alt:"usecallback2"})),(0,r.kt)("br",null),(0,r.kt)("p",null,"This is because ",(0,r.kt)("inlineCode",{parentName:"p"},"useCallback()")," caches and produces the same copy of ",(0,r.kt)("inlineCode",{parentName:"p"},"deletePost()")," at every render of ",(0,r.kt)("inlineCode",{parentName:"p"},"<UserPostsList />"),", until its dependencies change. "),(0,r.kt)("p",null,"Here, a change in ",(0,r.kt)("inlineCode",{parentName:"p"},"userPosts")," triggers renewal of the memo of the function, so everytime the value of ",(0,r.kt)("inlineCode",{parentName:"p"},"userPosts")," changes, ",(0,r.kt)("inlineCode",{parentName:"p"},"<UserPostsList />")," will be re-rendered."),(0,r.kt)("br",null),(0,r.kt)("div",null,(0,r.kt)("a",{href:"https://discord.gg/refine"},(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/discord_big_blue.png",alt:"discord banner"}))),(0,r.kt)("h2",{id:"other-cases"},"Other Cases"),(0,r.kt)("p",null,"Memoized callbacks are very important to maintain referential integrity so that the same function object is made available every time a component re-renders. ",(0,r.kt)("inlineCode",{parentName:"p"},"useCallback()")," is also used to cache callbacks in debouncing, as well as dependencies in hooks like ",(0,r.kt)("inlineCode",{parentName:"p"},"useEffect()"),"."),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"In this article, we looked at how re-renders of a parent component lead to violation of referential integrity of callback functions passed in as props to child components, which causes unnecessary re-renders of a child. ",(0,r.kt)("inlineCode",{parentName:"p"},"useCallback()")," helps us produce the same function object at every re-render of the parent, and be pass it to the child. This prevents the unnecessary re-renders of child components."),(0,r.kt)("br",null),(0,r.kt)("div",null,(0,r.kt)("a",{href:"https://discord.gg/refine"},(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/discord-banner.png",alt:"discord banner"}))),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)(d,{path:"blog-react-memoization-memo",mdxType:"StackblitzExample"}))}h.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[62489],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),g=s(n),u=i,c=g["".concat(p,".").concat(u)]||g[u]||d[u]||o;return n?a.createElement(c,r(r({ref:t},m),{},{components:n})):a.createElement(c,r({ref:t},m))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=g;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},12489:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(87462),i=(n(67294),n(3905));const o={title:"Nextjs image optimization with examples",description:"Built-in image optimization using next image component",slug:"using-next-image",authors:"michael",tags:["nextjs","img","image","next-image","image-optimization"],image:"https://refine.dev/img/refine_social.png",hide_table_of_contents:!1},r=void 0,l={permalink:"/blog/using-next-image",source:"@site/blog/2022-08-17-using-next-image.md",title:"Nextjs image optimization with examples",description:"Built-in image optimization using next image component",date:"2022-08-17T00:00:00.000Z",formattedDate:"August 17, 2022",tags:[{label:"nextjs",permalink:"/blog/tags/nextjs"},{label:"img",permalink:"/blog/tags/img"},{label:"image",permalink:"/blog/tags/image"},{label:"next-image",permalink:"/blog/tags/next-image"},{label:"image-optimization",permalink:"/blog/tags/image-optimization"}],readingTime:13.225,hasTruncateMarker:!0,authors:[{name:"Michael Hungbo",title:"Software Developer",url:"https://github.com/Mich45",imageURL:"https://pbs.twimg.com/profile_images/1476736258340794392/p7d1de3k_400x400.jpg",key:"michael"}],frontMatter:{title:"Nextjs image optimization with examples",description:"Built-in image optimization using next image component",slug:"using-next-image",authors:"michael",tags:["nextjs","img","image","next-image","image-optimization"],image:"https://refine.dev/img/refine_social.png",hide_table_of_contents:!1},prevItem:{title:"NextAuth - Google And GitHub Authentications for Nextjs",permalink:"/blog/nextauth-google-github-authentication-nextjs"},nextItem:{title:"Mocking API calls in React Tests with Nock",permalink:"/blog/mocking-api-calls-in-react"}},p={authorsImageUrls:[void 0]},s=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Preparing your images for optimization",id:"preparing-your-images-for-optimization",level:2},{value:"The NextJS image component",id:"the-nextjs-image-component",level:2},{value:"Using the <code>&lt;Image/&gt;</code> component",id:"using-the-image-component",level:2},{value:"The image component properties",id:"the-image-component-properties",level:2},{value:"<code>next/image</code> required props",id:"nextimage-required-props",level:3},{value:"<strong><code>src</code></strong>",id:"src",level:3},{value:"<strong><code>width</code> and <code>height</code></strong>",id:"width-and-height",level:3},{value:"<code>next/image</code> optional props",id:"nextimage-optional-props",level:2},{value:"<strong><code>layout</code></strong>",id:"layout",level:3},{value:"<strong><code>loader</code></strong>",id:"loader",level:3},{value:"<strong><code>placeholder</code></strong>",id:"placeholder",level:3},{value:"<strong><code>priority</code></strong>",id:"priority",level:3},{value:"<strong><code>quality</code></strong>",id:"quality",level:3},{value:"<strong><code>sizes</code></strong>",id:"sizes",level:3},{value:"<code>next/image</code> advanced props",id:"nextimage-advanced-props",level:3},{value:"<strong><code>blurDataURL</code></strong>",id:"blurdataurl",level:3},{value:"<strong><code>loading</code></strong>",id:"loading",level:3},{value:"<strong><code>objectFit</code></strong>",id:"objectfit",level:3},{value:"<strong><code>objectPosition</code></strong>",id:"objectposition",level:3},{value:"<strong><code>onLoadingComplete</code></strong>",id:"onloadingcomplete",level:3},{value:"<strong><code>style</code></strong>",id:"style",level:3},{value:"<code>next/image</code> configuration options",id:"nextimage-configuration-options",level:2},{value:"<strong><code>loader</code></strong>",id:"loader-1",level:3},{value:"<strong><code>domains</code></strong>",id:"domains",level:3},{value:"Conclusion",id:"conclusion",level:2},{value:"Build your React-based CRUD applications without constraints",id:"build-your-react-based-crud-applications-without-constraints",level:2}],m={toc:s};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Images are a significant part of modern-day web application development. Depending on how you use them, they can either make or mar your applications' developer and user experiences. Images impact user experience and are equally crucial in Search Engine Optimization (SEO) ranking when used right.\nTraditionally, images are added to web pages with the HTML ",(0,i.kt)("inlineCode",{parentName:"p"},"img")," tag. This might prove to be efficient for simple use-cases, but things quickly get untidy when dealing with a sizable amount of images. "),(0,i.kt)("p",null,"NextJS introduced a solution for delivering performant images on the web in v.10. It features a new Image component and built-in automatic image optimization. In the coming sections, you'll learn how to leverage this solution for optimizing and developing performant applications, thereby improving developer and end-user experiences.  "),(0,i.kt)("p",null,"Steps we'll cover: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#preparing-your-images-for-optimization"},"Preparing Your Images for Optimization")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#the-nextjs-image-component"},"The NextJS Image Component")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#using-the-image-component"},"Using the ",(0,i.kt)("inlineCode",{parentName:"a"},"<Image/>")," component")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#the-image-component-properties"},"The Image Component Properties")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#optional-props"},"Optional next/image Props")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#configuration-options"},"Configuration Options"))),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"This article contains code samples, so a good background in coding in JavaScript and React is essential to proceed with the article. "),(0,i.kt)("h2",{id:"preparing-your-images-for-optimization"},"Preparing your images for optimization"),(0,i.kt)("p",null,"Before you dive into using the Image component, it's important to prepare your images in order to achieve optimum performance results. If you are dealing with a dynamic and large amount of images, you may want to consider a Content Delivery Network (CDN) such as Cloudinary to host your images. CDNs provide many images and application performance benefits such as automatic caching, file compression, and image resizing on the fly."),(0,i.kt)("p",null,"Here is a non-exhaustive list of things you should consider before serving your images to end-users:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Choose the right format")," "),(0,i.kt)("p",{parentName:"li"},"The three most popular image formats on the web are JPEG, PNG, and WebP. Of all three, WebP is highly recommended due to its many advantages and performance benefits."),(0,i.kt)("p",{parentName:"li"},"WebP is a modern image format that provides superior lossy and lossless image compression for web images without compromising quality. It provides faster load times and is widely supported by browsers. ",(0,i.kt)("a",{parentName:"p",href:"https://webp-converter.com/"},"WebP-Converter")," is a good tool for converting your images to WebP.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Resize images")),(0,i.kt)("p",{parentName:"li"},"Serving the right images for the right device sizes is a vital part of image optimization on the web. Serving a huge 1080x800 image for users with 100x100 device sizes will lead to your users downloading unnecessary bandwidth, which can slow down page loads and hurt performance metrics. The ",(0,i.kt)("a",{parentName:"p",href:"https://responsivebreakpoints.com"},"Responsive Breakpoints Generator")," tool by Cloudinary is a good tool for generating multiple image file sizes for different screen sizes.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Compress images")),(0,i.kt)("p",{parentName:"li"},"A good rule of thumb for image optimization is to keep your images below 1 Mb. Large file sizes should be reduced to a reasonable threshold without sacrificing image quality. Tools such as ",(0,i.kt)("a",{parentName:"p",href:"https://tinypng.com"},"TinyPNG"),", ",(0,i.kt)("a",{parentName:"p",href:"https://compressor.io"},"Compressor.io")," are great for image compression."))),(0,i.kt)("p",null,"Once you're done optimizing your images manually, you can now proceed to use the NextJS Image component for maximum image optimization benefits. "),(0,i.kt)("h2",{id:"the-nextjs-image-component"},"The NextJS image component"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://nextjs.org/docs/api-reference/next/image"},(0,i.kt)("inlineCode",{parentName:"a"},"<Image />"))," component is a batteries-included modern solution for serving images in NextJS applications. It's similar to the native HTML ",(0,i.kt)("inlineCode",{parentName:"p"},"<img/>")," element but has a few differences."),(0,i.kt)("p",null,"The major difference between the two is the out-of-the-box image optimization, performance benefits that come with the NextJS ",(0,i.kt)("inlineCode",{parentName:"p"},"<Image/>")," component, and a number of other useful features, which we'll explore in the coming sections. The Image component usage is the same as using any other component in NextJS and can be used and re-used depending on your needs."),(0,i.kt)("h2",{id:"using-the-image-component"},"Using the ",(0,i.kt)("inlineCode",{parentName:"h2"},"<Image/>")," component"),(0,i.kt)("p",null,"To get started, you'll need to import the ",(0,i.kt)("inlineCode",{parentName:"p"},"<Image />")," component from ",(0,i.kt)("inlineCode",{parentName:"p"},"next/image")," like so: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import Image from 'next/image'\n")),(0,i.kt)("p",null,"And then use the component as shown below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import Image from 'next/image'\nimport profilePic from '../public/profile.webp'\n\nconst Profile = () => {\n    return (\n        <>\n            <h1> User Profile </h1>\n            <Image\n                src={profilePic}\n                alt='user profile picture'\n            />\n        </>\n    )\n}\n")),(0,i.kt)("p",null,"What's interesting to note is that ",(0,i.kt)("inlineCode",{parentName:"p"},"next/image")," automatically generates ",(0,i.kt)("inlineCode",{parentName:"p"},"width"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"height"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"blurDataURL")," values for statically imported images. These values are used to prevent ",(0,i.kt)("a",{parentName:"p",href:"https://web.dev/cls/"},"Cummulative Layout Shift")," (CLS) before the image is finally loaded. It's also possible to pass these values explicitly."),(0,i.kt)("p",null,"Alternatively, you can pass a remote image string value to the ",(0,i.kt)("inlineCode",{parentName:"p"},"src")," prop by using either relative or absolute URLs: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import Image from 'next/image'\n\nconst Profile = () => {\n    return (\n        <>\n            <h1> User Profile </h1>\n            <Image\n                // Absolute URL\n                src='https://unsplash.com/photos/XV1qykwu82c'\n                alt='User profile picture'\n                width={300}\n                height={300}\n            />\n        </>\n    )\n}\n")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"You ",(0,i.kt)("strong",{parentName:"p"},"should")," always add the ",(0,i.kt)("inlineCode",{parentName:"p"},"width")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"height")," props in the image component when using remote images because NextJS cannot determine the images dimension during the build process for proper page rendering to prevent layout shifts.")),(0,i.kt)("br",null),(0,i.kt)("div",null,(0,i.kt)("a",{href:"https://github.com/pankod/refine"},(0,i.kt)("img",{src:"https://refine.dev/img/github-support-banner.png",alt:"github support banner"}))),(0,i.kt)("h2",{id:"the-image-component-properties"},"The image component properties"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"<Image />")," component accepts a number of properties (props) that enhance its performance. Basically, there are three kinds of properties that can be passed to the component. These include: ",(0,i.kt)("strong",{parentName:"p"},"required,")," ",(0,i.kt)("strong",{parentName:"p"},"optional"),", and ",(0,i.kt)("strong",{parentName:"p"},"advanced")," props. Let's walk through them one by one."),(0,i.kt)("h3",{id:"nextimage-required-props"},(0,i.kt)("inlineCode",{parentName:"h3"},"next/image")," required props"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"<Image />"),"  component requires three kinds of properties in its most basic usage. The ",(0,i.kt)("inlineCode",{parentName:"p"},"src"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"width"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"height")," props."),(0,i.kt)("h3",{id:"src"},(0,i.kt)("strong",{parentName:"h3"},(0,i.kt)("inlineCode",{parentName:"strong"},"src"))),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"src")," props accept two types of values: a statically imported local image object or a path string to an external absolute or relative image URL. In the previous examples, we saw how to import local static images from the ",(0,i.kt)("inlineCode",{parentName:"p"},"public")," folder and how to pass an absolute URL string."),(0,i.kt)("p",null,"For relative external URL strings, e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"user.png"),", a ",(0,i.kt)("inlineCode",{parentName:"p"},"domains")," configuration is required in ",(0,i.kt)("inlineCode",{parentName:"p"},"next.config.js")," to provide a list of allowed hostnames to which the relative URL will resolve. This is to prevent the abuse of external URLs by malicious users. We'll come to how to configure the ",(0,i.kt)("inlineCode",{parentName:"p"},"domains")," object later in the article. "),(0,i.kt)("h3",{id:"width-and-height"},(0,i.kt)("strong",{parentName:"h3"},(0,i.kt)("inlineCode",{parentName:"strong"},"width")," and ",(0,i.kt)("inlineCode",{parentName:"strong"},"height"))),(0,i.kt)("p",null," The ",(0,i.kt)("inlineCode",{parentName:"p"},"width")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"height")," props basically determine how much space an image takes up on a page or how scaled it is in relation to its container.\nThe ",(0,i.kt)("inlineCode",{parentName:"p"},"width")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"height")," props can represent either the image's ",(0,i.kt)("em",{parentName:"p"},"rendered")," or ",(0,i.kt)("em",{parentName:"p"},"original")," width, depending on the value of ",(0,i.kt)("inlineCode",{parentName:"p"},"layout"),"."),(0,i.kt)("p",null,"  Using ",(0,i.kt)("inlineCode",{parentName:"p"},'layout="intrinsic"')," or ",(0,i.kt)("inlineCode",{parentName:"p"},'layout="fixed"'),", the ",(0,i.kt)("inlineCode",{parentName:"p"},"width")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"height")," props refers to the ",(0,i.kt)("em",{parentName:"p"},"rendered")," width and height values in pixels. This will affect how large the image appears."),(0,i.kt)("p",null,"  Using ",(0,i.kt)("inlineCode",{parentName:"p"},'layout="responsive"')," or ",(0,i.kt)("inlineCode",{parentName:"p"},'layout="fill"'),", the ",(0,i.kt)("inlineCode",{parentName:"p"},"width")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"height")," props refers to the image's ",(0,i.kt)("em",{parentName:"p"},"original")," dimensions in pixel, so this will affect the aspect ratio (i.e. how scaled the image is in relation to its container)."),(0,i.kt)("h2",{id:"nextimage-optional-props"},(0,i.kt)("inlineCode",{parentName:"h2"},"next/image")," optional props"),(0,i.kt)("p",null,"In addition to the required props, the ",(0,i.kt)("inlineCode",{parentName:"p"},"<Image />"),"  component accepts a number of commonly-used optional properties."),(0,i.kt)("h3",{id:"layout"},(0,i.kt)("strong",{parentName:"h3"},(0,i.kt)("inlineCode",{parentName:"strong"},"layout"))),(0,i.kt)("p",null,"Accepts a string value that determines how images react to changes in viewport sizes. Defaults to ",(0,i.kt)("inlineCode",{parentName:"p"},"intrinsic")," and its four possible values include: "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"intrinsic"))," - default value for the ",(0,i.kt)("inlineCode",{parentName:"li"},"layout")," prop. Gives the image enough space to render using its ",(0,i.kt)("em",{parentName:"li"},"original")," width and height dimension. Try out a demo ",(0,i.kt)("a",{parentName:"li",href:"https://image-component.nextjs.gallery/layout-intrinsic"},"here"),".")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"fixed"))," - sizes the image to fit the exact ",(0,i.kt)("inlineCode",{parentName:"p"},"width")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"height")," props values. Generates a ",(0,i.kt)("inlineCode",{parentName:"p"},"srcSet")," with pixel density descriptors of 1x and 2x. Try it out ",(0,i.kt)("a",{parentName:"p",href:"https://image-component.nextjs.gallery/layout-fixed"},"here"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"fill"))," - causes an image to expand in ",(0,i.kt)("em",{parentName:"p"},"width and height")," to fill its parent element's width and height. Ensure you add ",(0,i.kt)("inlineCode",{parentName:"p"},"position: relative")," to the parent element. This value is usually used with the ",(0,i.kt)("inlineCode",{parentName:"p"},"objectFit")," property and is recommended for images in which you don't know their sizes in advance. Check out a demo ",(0,i.kt)("a",{parentName:"p",href:"https://image-component.nextjs.gallery/layout-fill"},"here"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"responsive"))," - scales the image to fit the ",(0,i.kt)("em",{parentName:"p"},"width")," of its parent container. Ensure you add ",(0,i.kt)("inlineCode",{parentName:"p"},"display: block")," to the parent container. Try out a demo ",(0,i.kt)("a",{parentName:"p",href:"https://image-component.nextjs.gallery/layout-responsive"},"here"),"."))),(0,i.kt)("h3",{id:"loader"},(0,i.kt)("strong",{parentName:"h3"},(0,i.kt)("inlineCode",{parentName:"strong"},"loader"))),(0,i.kt)("p",null,"This is a custom function that resolves external image URLs. It can be passed as a prop or set in the ",(0,i.kt)("inlineCode",{parentName:"p"},"images")," section of ",(0,i.kt)("inlineCode",{parentName:"p"},"next.config.js"),". When used inline as a prop, it supersedes the one defined in ",(0,i.kt)("inlineCode",{parentName:"p"},"next.config.js"),". The function basically resolves the ",(0,i.kt)("inlineCode",{parentName:"p"},"src"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"width"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"quality")," parameters into a URL string as a path for an external image. An example is shown below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'import Image from \'next/image\'\n\nconst customLoader = ({ src, width, quality }) => {\n  return `https://s3.amazonaws.com/demo/image/${src}?w=${width}&q=${quality || 75}`\n}\n\nconst MyImage = (props) => {\n  return (\n    <Image\n        src="profilePic.webp" // This will resolve into: https://s3.amazonaws.com/demo/image/profilePic.webp?width=300&q=80\n        width={300}\n        height={300}\n        alt="User profile picture"\n        quality={80}\n        loader={customLoader}\n    />\n  )\n}\n')),(0,i.kt)("h3",{id:"placeholder"},(0,i.kt)("strong",{parentName:"h3"},(0,i.kt)("inlineCode",{parentName:"strong"},"placeholder"))),(0,i.kt)("p",null,"Defines a placeholder to use before the original image is fully loaded. Possible values are ",(0,i.kt)("inlineCode",{parentName:"p"},"blur")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"empty"),". Defaults to ",(0,i.kt)("inlineCode",{parentName:"p"},"empty"),"."),(0,i.kt)("p",null,"When ",(0,i.kt)("inlineCode",{parentName:"p"},"empty"),", an empty space is shown until the original image is fully loaded."),(0,i.kt)("p",null,"When set to ",(0,i.kt)("inlineCode",{parentName:"p"},"blur"),", the ",(0,i.kt)("inlineCode",{parentName:"p"},"blurDataURL")," value will be used as a placeholder. If ",(0,i.kt)("inlineCode",{parentName:"p"},"src")," is a statically imported image and the image format is any of ",(0,i.kt)("inlineCode",{parentName:"p"},".jpg"),", ",(0,i.kt)("inlineCode",{parentName:"p"},".png"),", ",(0,i.kt)("inlineCode",{parentName:"p"},".webp"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},".avf"),", an automatically generated image will be passed as a value to the ",(0,i.kt)("inlineCode",{parentName:"p"},"blurDataURL")," prop: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import Image from 'next/image'\nimport cat from '../public/cat.webp'\n\n<Image\n    src={cat}\n    alt=\"A picture of white cats\"\n    width={500}\n    height={450}\n    placeholder=\"blur\"\n/>\n")),(0,i.kt)("h3",{id:"priority"},(0,i.kt)("strong",{parentName:"h3"},(0,i.kt)("inlineCode",{parentName:"strong"},"priority"))),(0,i.kt)("p",null,"This prop is particularly useful for images visible above the fold - i.e, the portion of a web page that is visible without scrolling. Images visible above the fold, such as images on a landing page, should use the ",(0,i.kt)("inlineCode",{parentName:"p"},"priority")," prop for the performance boost. This prop tells the browser to preload the image as it's considered a high priority. Lazy loading will be automatically disabled for images using ",(0,i.kt)("inlineCode",{parentName:"p"},"priority"),". It takes a Boolean value and defaults to false: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'<Image\n    src="user.webp"\n    alt="User profile photo"\n    width={300}\n    height={300}\n    priority\n/>\n')),(0,i.kt)("h3",{id:"quality"},(0,i.kt)("strong",{parentName:"h3"},(0,i.kt)("inlineCode",{parentName:"strong"},"quality"))),(0,i.kt)("p",null,"An integer that specifies the quality of the optimized image. Its values range between ",(0,i.kt)("inlineCode",{parentName:"p"},"1")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"100")," where ",(0,i.kt)("inlineCode",{parentName:"p"},"100")," is the best quality. Defaults to ",(0,i.kt)("inlineCode",{parentName:"p"},"75"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'<Image\n    src="user.webp"\n    alt="User profile photo"\n    width={300}\n    height={300}\n    quality={80}\n/>\n')),(0,i.kt)("h3",{id:"sizes"},(0,i.kt)("strong",{parentName:"h3"},(0,i.kt)("inlineCode",{parentName:"strong"},"sizes"))),(0,i.kt)("p",null," One effective way to dramatically reduce ",(0,i.kt)("a",{parentName:"p",href:"https://web.dev/cls/"},"Cummulative Layout Shift")," is by sizing images responsively. This helps the browser to allocate enough space for the image before it's fully loaded, so it doesn't distort the page's layout.  "),(0,i.kt)("p",null,"One powerful feature of ",(0,i.kt)("inlineCode",{parentName:"p"},"next/image")," Image component is automatic source set generation. This means NextJS can internally generate different sizes of an image and determine which of the images to download for a specific viewport size."),(0,i.kt)("p",null," ",(0,i.kt)("inlineCode",{parentName:"p"},"next/image")," uses the ",(0,i.kt)("inlineCode",{parentName:"p"},"deviceSizes")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"imageSizes")," properties in ",(0,i.kt)("inlineCode",{parentName:"p"},"next.config.js")," to generate a ",(0,i.kt)("inlineCode",{parentName:"p"},"srcSet")," to improve image delivery and performance metrics. You can optionally configure the ",(0,i.kt)("inlineCode",{parentName:"p"},"deviceSizes")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"imageSizes")," properties if you have specific use-cases."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"sizes")," prop only works for images with ",(0,i.kt)("inlineCode",{parentName:"p"},'layout="responsive"')," or ",(0,i.kt)("inlineCode",{parentName:"p"},'layout="fill"'),". The ",(0,i.kt)("inlineCode",{parentName:"p"},"sizes")," property lets us define a set of media conditions (e.g., viewport width) and slot width to tell the browser what size of image to download from the automatically-generated source set when a certain media condition is true.\nBelow is an example from the next/image ",(0,i.kt)("a",{parentName:"p",href:"https://nextjs.org/docs/api-reference/next/image#sizes"},"docs")," showing how this works."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'import Image from \'next/image\'\n\nconst Example = () => (\n    <div >\n        <Image\n            src="/mock.png"\n            layout="fill"\n            sizes="(min-width: 60em) 24vw,\n                    (min-width: 28em) 45vw,\n                    100vw"\n        />\n    </div>\n)\n')),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"You can learn more about the ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-srcset"},"srcset")," and ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-sizes"},"sizes")," attributes on MDN.")),(0,i.kt)("h3",{id:"nextimage-advanced-props"},(0,i.kt)("inlineCode",{parentName:"h3"},"next/image")," advanced props"),(0,i.kt)("p",null,"There are use-cases where you may need to customize the image's behavior. Find below some of the advanced props you can use on the ",(0,i.kt)("inlineCode",{parentName:"p"},"<Image />")," component."),(0,i.kt)("h3",{id:"blurdataurl"},(0,i.kt)("strong",{parentName:"h3"},(0,i.kt)("inlineCode",{parentName:"strong"},"blurDataURL"))),(0,i.kt)("p",null,"A base64-encoded image ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URLs"},"DATA URL")," to be used as a placeholder image before the ",(0,i.kt)("inlineCode",{parentName:"p"},"src")," image fully loads. It will be enlarged and blurred, so a very small image of 10px or less is recommended. Only takes effect when combined with ",(0,i.kt)("inlineCode",{parentName:"p"},'placeholder="blur"'),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'<Image\n    src="https://unsplash.com/photos/XV1qykwu82c"\n    alt="Cover photo"\n    width={700}\n    height={500}\n    blurDataURL=\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADA...\'\n    placeholder="blur"\n/>\n')),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("a",{parentName:"p",href:"https://plaiceholder.co/"},"Plaiceholder")," is a good tool for generating base64-encoded images. ")),(0,i.kt)("h3",{id:"loading"},(0,i.kt)("strong",{parentName:"h3"},(0,i.kt)("inlineCode",{parentName:"strong"},"loading"))),(0,i.kt)("p",null,"Specifies the loading behavior of the image. Accepts two possible values ",(0,i.kt)("inlineCode",{parentName:"p"},"lazy")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"eager"),". Defaults to ",(0,i.kt)("inlineCode",{parentName:"p"},"lazy"),"."),(0,i.kt)("p",null,"When set to ",(0,i.kt)("inlineCode",{parentName:"p"},"lazy"),", loading the image is deferred until it reaches a calculated distance from the viewport. This value should be used for images that are below the fold."),(0,i.kt)("p",null,"When set to ",(0,i.kt)("inlineCode",{parentName:"p"},"eager"),", load the image immediately as soon as the page is mounted. Beware of using the ",(0,i.kt)("inlineCode",{parentName:"p"},"eager")," prop as it's turned out to hurt performance drastically."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'<Image\n    src="/background.webp"\n    alt="Page background photo"\n    width={800}\n    height={750}\n    loading=\'lazy\'\n/>\n')),(0,i.kt)("h3",{id:"objectfit"},(0,i.kt)("strong",{parentName:"h3"},(0,i.kt)("inlineCode",{parentName:"strong"},"objectFit"))),(0,i.kt)("p",null,"Sets how an image should be sized to its parent element when using ",(0,i.kt)("inlineCode",{parentName:"p"},'layout="fill"'),". This value is passed to the ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit"},"object-fit CSS property")," for the src image. Its possible values are ",(0,i.kt)("inlineCode",{parentName:"p"},"fill"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"cover"),", or ",(0,i.kt)("inlineCode",{parentName:"p"},"contain"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'<Image\n    src="/user.webp"\n    alt="User profile photo"\n    width={300}\n    height={300}\n    objectFit="cover"\n/>\n')),(0,i.kt)("h3",{id:"objectposition"},(0,i.kt)("strong",{parentName:"h3"},(0,i.kt)("inlineCode",{parentName:"strong"},"objectPosition"))),(0,i.kt)("p",null,"Specifies the alignment of the image contents within the image's box. This value is passed to the ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/object-position"},"object-position CSS property")," applied to the image. Defaults to ",(0,i.kt)("inlineCode",{parentName:"p"},"50% 50%"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'<Image\n    src="/user.webp"\n    alt="User profile photo"\n    width={300}\n    height={300}\n    objectPosition="right bottom"\n/>\n')),(0,i.kt)("h3",{id:"onloadingcomplete"},(0,i.kt)("strong",{parentName:"h3"},(0,i.kt)("inlineCode",{parentName:"strong"},"onLoadingComplete"))),(0,i.kt)("p",null,"When the original image is fully loaded, the callback function is triggered. The function accepts one parameter, an object with the properties:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/naturalHeight"},(0,i.kt)("inlineCode",{parentName:"a"},"naturalHeight"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/naturalWidth"},(0,i.kt)("inlineCode",{parentName:"a"},"naturalWidth")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'const MyProfile = (props) => {\n\nconst handleImageLoad = ({naturalWidth, naturalHeight}) => {\n    console.log(naturalWidth, naturalHeight)\n}\n\n  return (\n    <Image\n        src="profilePic.webp" \n        width={300}\n        height={300}\n        alt="User profile picture"\n        onLoadingComplete={handleImageLoad}\n    />\n  )\n}\n')),(0,i.kt)("h3",{id:"style"},(0,i.kt)("strong",{parentName:"h3"},(0,i.kt)("inlineCode",{parentName:"strong"},"style"))),(0,i.kt)("p",null,"Lets you add custom CSS styles to the underlying image element. To enable custom styling on the ",(0,i.kt)("inlineCode",{parentName:"p"},"<Image />")," component, you can also target the image with ",(0,i.kt)("inlineCode",{parentName:"p"},"className"),". Note that styles applied by the ",(0,i.kt)("inlineCode",{parentName:"p"},"layout")," prop will take precedence over the ",(0,i.kt)("inlineCode",{parentName:"p"},"style")," prop. Also, if you modify an image's width using the ",(0,i.kt)("inlineCode",{parentName:"p"},"style")," prop, you must set ",(0,i.kt)("inlineCode",{parentName:"p"},'height="auto"')," or the image will be distorted."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'<Image\n    src="/background.webp"\n    alt="Waterfall"\n    width={800}\n    height={800}\n    style={{ opacity: 0.5 }}\n    className="user_photo"\n    />\n')),(0,i.kt)("h2",{id:"nextimage-configuration-options"},(0,i.kt)("inlineCode",{parentName:"h2"},"next/image")," configuration options"),(0,i.kt)("p",null,"In order to use external images, a configuration is required to protect your application from malicious users. You can do so using the ",(0,i.kt)("inlineCode",{parentName:"p"},"domains")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"loader")," properties in ",(0,i.kt)("inlineCode",{parentName:"p"},"next.config.js"),"."),(0,i.kt)("h3",{id:"loader-1"},(0,i.kt)("strong",{parentName:"h3"},(0,i.kt)("inlineCode",{parentName:"strong"},"loader"))),(0,i.kt)("p",null,"You may want to use a cloud provider to optimize images instead of using Next.js' built-in Image Optimization API. You can configure the ",(0,i.kt)("inlineCode",{parentName:"p"},"loader")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"path")," prefix in your ",(0,i.kt)("inlineCode",{parentName:"p"},"next.config.js")," file, which will allow you to use relative URLs (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},'"me.webp"'),") in the ",(0,i.kt)("inlineCode",{parentName:"p"},"src")," prop. The loader will then transform the relative URLs into absolute URLs. You can configure it like so: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"module.exports = {\n  images: {\n    loader: 'amazon',\n    path: 'https://s3.amazonaws.com/demoapp/'\n  },\n}\n")),(0,i.kt)("h3",{id:"domains"},(0,i.kt)("strong",{parentName:"h3"},(0,i.kt)("inlineCode",{parentName:"strong"},"domains"))),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"domains")," configuration can be used to provide a list of allowed hostnames for external images. This helps to prevent your application from malicious users. For example, the following configuration will ensure your external images starts with ",(0,i.kt)("inlineCode",{parentName:"p"},"s3.amazonaws.com"),". Any other protocol or unmatched hostname will respond with 400 Bad Request."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"module.exports = {\n    images: {\n    domains: ['s3.amazonaws.com']\n  },\n}\n")),(0,i.kt)("br",null),(0,i.kt)("div",null,(0,i.kt)("a",{href:"https://discord.gg/refine"},(0,i.kt)("img",{src:"https://refine.dev/img/discord-banner.png",alt:"discord banner"}))),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"Congratulations if you made it this far! In this article, you learned how to use ",(0,i.kt)("inlineCode",{parentName:"p"},"next/image")," to deliver optimized images in NextJS through automatic lazy-loading, preloading of critical images, automatic sizing across devices, automatic support for modern image formats, and how to improve the performance of your application metrics using the ",(0,i.kt)("inlineCode",{parentName:"p"},"<Image />")," component."),(0,i.kt)("p",null,"We hope this article helps you get started with building amazing developer and user experiences by leveraging the numerous customization options and features of the Image component to score good performance points."),(0,i.kt)("h2",{id:"build-your-react-based-crud-applications-without-constraints"},"Build your React-based CRUD applications without constraints"),(0,i.kt)("p",null,"Low-code React frameworks are great for gaining development speed but they often fall short of flexibility if you need extensive styling and customization for your project."),(0,i.kt)("p",null,"Check out ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/pankod/refine"},"refine"),", if you are interested in a headless framework you can use with any custom design or UI-Kit for 100% control over styling."),(0,i.kt)("div",null,(0,i.kt)("a",{href:"https://github.com/pankod/refine"},(0,i.kt)("img",{src:"https://refine.dev/img/refine_blog_logo_1.png",alt:"refine blog logo"}))),(0,i.kt)("br",null),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"refine")," is a React-based framework for building CRUD applications ",(0,i.kt)("strong",{parentName:"p"},"without constraints."),"\nIt can speed up your development time up to ",(0,i.kt)("strong",{parentName:"p"},"3X")," without compromising freedom on ",(0,i.kt)("strong",{parentName:"p"},"styling"),", ",(0,i.kt)("strong",{parentName:"p"},"customization")," and ",(0,i.kt)("strong",{parentName:"p"},"project workflow.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"refine")," is headless by design and it connects ",(0,i.kt)("strong",{parentName:"p"},"30+")," backend services out-of-the-box including custom REST and GraphQL API\u2019s."),(0,i.kt)("p",null,"Visit ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/pankod/refine"},"refine GitHub repository")," for more information, demos, tutorials and example projects."))}d.isMDXComponent=!0}}]);
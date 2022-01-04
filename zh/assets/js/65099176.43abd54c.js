"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[37724],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),h=l(n),f=o,d=h["".concat(u,".").concat(f)]||h[f]||p[f]||a;return n?r.createElement(d,i(i({ref:t},s),{},{components:n})):r.createElement(d,i({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=h;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},39281:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return u},assets:function(){return l},toc:function(){return s},default:function(){return h}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i={title:"Using the Apache APISIX OpenID Connect Plugin for Okta Centralized Authentication",author:"Peter Zhu",authorURL:"https://github.com/starsz",authorImageURL:"https://avatars.githubusercontent.com/u/25628854?v=4",keywords:["API gateway","APISIX","Apache APISIX","Okta","Centralized Authentication"],description:"This blog shows the procedures of using Apache APISIX OpenID Connect Plugin for Okta Centralized Authentication.  This blog contains conceptual introductions of Apache APISIX and Okta Centralized Authentication, and detailed step-by-step instructions.",tags:["Practical Case"]},c=void 0,u={permalink:"/zh/blog/2021/08/16/Using-the-Apache-APISIX-OpenID-Connect-Plugin-for-Centralized-Authentication",source:"@site/blog/2021/08/16/Using-the-Apache-APISIX-OpenID-Connect-Plugin-for-Centralized-Authentication.md",title:"Using the Apache APISIX OpenID Connect Plugin for Okta Centralized Authentication",description:"This blog shows the procedures of using Apache APISIX OpenID Connect Plugin for Okta Centralized Authentication.  This blog contains conceptual introductions of Apache APISIX and Okta Centralized Authentication, and detailed step-by-step instructions.",date:"2021-08-16T00:00:00.000Z",formattedDate:"2021\u5e748\u670816\u65e5",tags:[{label:"Practical Case",permalink:"/zh/blog/tags/practical-case"}],readingTime:10.25,truncated:!0,authors:[{name:"Peter Zhu",url:"https://github.com/starsz",imageURL:"https://avatars.githubusercontent.com/u/25628854?v=4"}],prevItem:{title:"Apache APISIX \u5728 Airwallex \u7684\u5e94\u7528 | \u4e13\u8bbf Airwallex \u6280\u672f\u5e73\u53f0\u8d1f\u8d23\u4eba\u674e\u6768",permalink:"/zh/blog/2021/08/17/interview-airwallex"},nextItem:{title:"\u8d21\u732e\u8005\uff0c\u662f\u8861\u91cf\u5f00\u6e90\u9879\u76ee\u7684\u91d1\u6307\u6807",permalink:"/zh/blog/2021/08/14/contributors-the-golden-metric-of-openSource-projects"}},l={authorsImageUrls:[void 0]},s=[],p={toc:s};function h(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This blog shows the procedures of using Apache APISIX OpenID Connect Plugin for Okta Centralized Authentication. This blog contains conceptual introductions of Apache APISIX and Okta Centralized Authentication, and detailed step-by-step instructions.")))}h.isMDXComponent=!0}}]);
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6299],{3905:function(n,e,t){t.d(e,{Zo:function(){return s},kt:function(){return m}});var i=t(67294);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,i)}return t}function a(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function c(n,e){if(null==n)return{};var t,i,r=function(n,e){if(null==n)return{};var t,i,r={},o=Object.keys(n);for(i=0;i<o.length;i++)t=o[i],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(i=0;i<o.length;i++)t=o[i],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var p=i.createContext({}),u=function(n){var e=i.useContext(p),t=e;return n&&(t="function"==typeof n?n(e):a(a({},e),n)),t},s=function(n){var e=u(n.components);return i.createElement(p.Provider,{value:e},n.children)},l={inlineCode:"code",wrapper:function(n){var e=n.children;return i.createElement(i.Fragment,{},e)}},f=i.forwardRef((function(n,e){var t=n.components,r=n.mdxType,o=n.originalType,p=n.parentName,s=c(n,["components","mdxType","originalType","parentName"]),f=u(t),m=r,g=f["".concat(p,".").concat(m)]||f[m]||l[m]||o;return t?i.createElement(g,a(a({ref:e},s),{},{components:t})):i.createElement(g,a({ref:e},s))}));function m(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var o=t.length,a=new Array(o);a[0]=f;var c={};for(var p in e)hasOwnProperty.call(e,p)&&(c[p]=e[p]);c.originalType=n,c.mdxType="string"==typeof n?n:r,a[1]=c;for(var u=2;u<o;u++)a[u]=t[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}f.displayName="MDXCreateElement"},85994:function(n,e,t){t.r(e),t.d(e,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return l}});var i=t(87462),r=t(63366),o=(t(67294),t(3905)),a={title:"Customize Nginx configuration"},c=void 0,p={unversionedId:"customize-nginx-configuration",id:"customize-nginx-configuration",isDocsHomePage:!1,title:"Customize Nginx configuration",description:"\x3c!--",source:"@site/docs/apisix/customize-nginx-configuration.md",sourceDirName:".",slug:"/customize-nginx-configuration",permalink:"/docs/apisix/next/customize-nginx-configuration",editUrl:"https://github.com/apache/apisix/edit/master/docs/en/latest/customize-nginx-configuration.md",tags:[],version:"current",frontMatter:{title:"Customize Nginx configuration"},sidebar:"docs",previous:{title:"gRPC Proxy",permalink:"/docs/apisix/next/grpc-proxy"},next:{title:"Certificate",permalink:"/docs/apisix/next/certificate"}},u=[],s={toc:u};function l(n){var e=n.components,t=(0,r.Z)(n,["components"]);return(0,o.kt)("wrapper",(0,i.Z)({},s,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Nginx configuration used by APISIX is generated via the template file ",(0,o.kt)("inlineCode",{parentName:"p"},"apisix/cli/ngx_tpl.lua")," and the options from ",(0,o.kt)("inlineCode",{parentName:"p"},"conf/config-default.yaml")," / ",(0,o.kt)("inlineCode",{parentName:"p"},"conf/config.yaml"),"."),(0,o.kt)("p",null,"You can take a look at the generated Nginx configuration in ",(0,o.kt)("inlineCode",{parentName:"p"},"conf/nginx.conf")," after running ",(0,o.kt)("inlineCode",{parentName:"p"},"./bin/apisix start"),"."),(0,o.kt)("p",null,"If you want to customize the Nginx configuration, please read through the ",(0,o.kt)("inlineCode",{parentName:"p"},"nginx_config")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"conf/config-default.yaml"),". You can override the default value in the ",(0,o.kt)("inlineCode",{parentName:"p"},"conf/config.yaml"),". For instance, you can inject some snippets in the ",(0,o.kt)("inlineCode",{parentName:"p"},"conf/nginx.conf")," via configuring the ",(0,o.kt)("inlineCode",{parentName:"p"},"xxx_snippet")," entries:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'...\n# put this in config.yaml:\nnginx_config:\n    main_configuration_snippet: |\n        daemon on;\n    http_configuration_snippet: |\n        server\n        {\n            listen 45651;\n            server_name _;\n            access_log off;\n\n            location /ysec_status {\n                req_status_show;\n                allow 127.0.0.1;\n                deny all;\n            }\n        }\n\n        chunked_transfer_encoding on;\n\n    http_server_configuration_snippet: |\n        set $my "var";\n    http_admin_configuration_snippet: |\n        log_format admin "$request_time $pipe";\n    http_end_configuration_snippet: |\n        server_names_hash_bucket_size 128;\n    stream_configuration_snippet: |\n        tcp_nodelay off;\n...\n')))}l.isMDXComponent=!0}}]);
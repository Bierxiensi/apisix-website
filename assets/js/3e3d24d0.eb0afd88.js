"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[61007],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),l=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return i.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||a;return n?i.createElement(f,o(o({ref:t},p),{},{components:n})):i.createElement(f,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},52484:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return l},default:function(){return m}});var i=n(87462),r=n(63366),a=(n(67294),n(3905)),o={title:"Certificate"},c=void 0,s={unversionedId:"certificate",id:"version-2.11/certificate",isDocsHomePage:!1,title:"Certificate",description:"\x3c!--",source:"@site/docs-apisix_versioned_docs/version-2.11/certificate.md",sourceDirName:".",slug:"/certificate",permalink:"/docs/apisix/certificate",editUrl:"https://github.com/apache/apisix/edit/release/2.11/docs/en/latest/certificate.md",tags:[],version:"2.11",frontMatter:{title:"Certificate"},sidebar:"version-2.11/docs",previous:{title:"Customize Nginx configuration",permalink:"/docs/apisix/customize-nginx-configuration"},next:{title:"Batch Processor",permalink:"/docs/apisix/batch-processor"}},l=[{value:"Single SNI",id:"single-sni",children:[]},{value:"wildcard SNI",id:"wildcard-sni",children:[]},{value:"multiple domain",id:"multiple-domain",children:[]},{value:"multiple certificates for a single domain",id:"multiple-certificates-for-a-single-domain",children:[]}],p={toc:l};function m(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"APISIX")," supports to load multiple SSL certificates by TLS extension Server Name Indication (SNI)."),(0,a.kt)("h3",{id:"single-sni"},"Single SNI"),(0,a.kt)("p",null,"It is most common for an SSL certificate to contain only one domain. We can create an ",(0,a.kt)("inlineCode",{parentName:"p"},"ssl")," object. Here is a simple case, creates a ",(0,a.kt)("inlineCode",{parentName:"p"},"ssl")," object and ",(0,a.kt)("inlineCode",{parentName:"p"},"route")," object."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"cert"),": PEM-encoded public certificate of the SSL key pair."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"key"),": PEM-encoded private key of the SSL key pair."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"snis"),": Hostname(s) to associate with this certificate as SNIs. To set this attribute this certificate must have a valid private key associated with it.")),(0,a.kt)("p",null,"We will use the Python script below to simplify the example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'#!/usr/bin/env python\n# coding: utf-8\n# save this file as ssl.py\nimport sys\n# sudo pip install requests\nimport requests\n\nif len(sys.argv) <= 3:\n    print("bad argument")\n    sys.exit(1)\nwith open(sys.argv[1]) as f:\n    cert = f.read()\nwith open(sys.argv[2]) as f:\n    key = f.read()\nsni = sys.argv[3]\napi_key = "edd1c9f034335f136f87ad84b625c8f1"\nresp = requests.put("http://127.0.0.1:9080/apisix/admin/ssl/1", json={\n    "cert": cert,\n    "key": key,\n    "snis": [sni],\n}, headers={\n    "X-API-KEY": api_key,\n})\nprint(resp.status_code)\nprint(resp.text)\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'# create SSL object\n./ssl.py t.crt t.key test.com\n\n# create Router object\ncurl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -i -d \'\n{\n    "uri": "/hello",\n    "hosts": ["test.com"],\n    "methods": ["GET"],\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n\n# make a test\n\ncurl --resolve \'test.com:9443:127.0.0.1\' https://test.com:9443/hello  -vvv\n* Added test.com:9443:127.0.0.1 to DNS cache\n* About to connect() to test.com port 9443 (#0)\n*   Trying 127.0.0.1...\n* Connected to test.com (127.0.0.1) port 9443 (#0)\n* Initializing NSS with certpath: sql:/etc/pki/nssdb\n* skipping SSL peer certificate verification\n* SSL connection using TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384\n* Server certificate:\n*   subject: CN=test.com,O=iresty,L=ZhuHai,ST=GuangDong,C=CN\n*   start date: Jun 24 22:18:05 2019 GMT\n*   expire date: May 31 22:18:05 2119 GMT\n*   common name: test.com\n*   issuer: CN=test.com,O=iresty,L=ZhuHai,ST=GuangDong,C=CN\n> GET /hello HTTP/1.1\n> User-Agent: curl/7.29.0\n> Host: test.com:9443\n> Accept: */*\n')),(0,a.kt)("h3",{id:"wildcard-sni"},"wildcard SNI"),(0,a.kt)("p",null,"Sometimes, one SSL certificate may contain a wildcard domain like ",(0,a.kt)("inlineCode",{parentName:"p"},"*.test.com"),",\nthat means it can accept more than one domain, eg: ",(0,a.kt)("inlineCode",{parentName:"p"},"www.test.com")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"mail.test.com"),"."),(0,a.kt)("p",null,"Here is an example, note that the value we pass as ",(0,a.kt)("inlineCode",{parentName:"p"},"sni")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"*.test.com"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'./ssl.py t.crt t.key \'*.test.com\'\n\ncurl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -i -d \'\n{\n    "uri": "/hello",\n    "hosts": ["*.test.com"],\n    "methods": ["GET"],\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n\n# make a test\n\ncurl --resolve \'www.test.com:9443:127.0.0.1\' https://www.test.com:9443/hello  -vvv\n* Added test.com:9443:127.0.0.1 to DNS cache\n* About to connect() to test.com port 9443 (#0)\n*   Trying 127.0.0.1...\n* Connected to test.com (127.0.0.1) port 9443 (#0)\n* Initializing NSS with certpath: sql:/etc/pki/nssdb\n* skipping SSL peer certificate verification\n* SSL connection using TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384\n* Server certificate:\n*   subject: CN=test.com,O=iresty,L=ZhuHai,ST=GuangDong,C=CN\n*   start date: Jun 24 22:18:05 2019 GMT\n*   expire date: May 31 22:18:05 2119 GMT\n*   common name: test.com\n*   issuer: CN=test.com,O=iresty,L=ZhuHai,ST=GuangDong,C=CN\n> GET /hello HTTP/1.1\n> User-Agent: curl/7.29.0\n> Host: test.com:9443\n> Accept: */*\n')),(0,a.kt)("h3",{id:"multiple-domain"},"multiple domain"),(0,a.kt)("p",null,"If your SSL certificate may contain more than one domain, like ",(0,a.kt)("inlineCode",{parentName:"p"},"www.test.com"),"\nand ",(0,a.kt)("inlineCode",{parentName:"p"},"mail.test.com"),", then you can add them into the ",(0,a.kt)("inlineCode",{parentName:"p"},"snis")," array. For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "snis": ["www.test.com", "mail.test.com"]\n}\n')),(0,a.kt)("h3",{id:"multiple-certificates-for-a-single-domain"},"multiple certificates for a single domain"),(0,a.kt)("p",null,"If you want to configure multiple certificate for a single domain, for\ninstance, supporting both the\n",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Elliptic-curve_cryptography"},"ECC"),"\nand RSA key-exchange algorithm, then just configure the extra certificates (the\nfirst certificate and private key should be still put in ",(0,a.kt)("inlineCode",{parentName:"p"},"cert")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"key"),") and\nprivate keys by ",(0,a.kt)("inlineCode",{parentName:"p"},"certs")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"keys"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"certs"),": PEM-encoded certificate array."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"keys"),": PEM-encoded private key array.")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"APISIX")," will pair certificate and private key with the same indice as a SSL key\npair. So the length of ",(0,a.kt)("inlineCode",{parentName:"p"},"certs")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"keys")," must be same."))}m.isMDXComponent=!0}}]);
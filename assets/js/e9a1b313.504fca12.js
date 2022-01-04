"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6119],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),h=a,d=m["".concat(l,".").concat(h)]||m[h]||u[h]||o;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},18797:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return l},assets:function(){return c},toc:function(){return p},default:function(){return m}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i={title:"Monitoring APISIX Ingress Controller with Prometheus",authors:[{name:"Chao Zhang",title:"Author",url:"https://github.com/tokers",image_url:"https://avatars.githubusercontent.com/u/10428333?v=4"},{name:"Sylvia",title:"Technical Writer",url:"https://github.com/SylviaBABY",image_url:"https://avatars.githubusercontent.com/u/39793568?v=4"}],keywords:["Apache APISIX","APISIX Ingress Controller","Prometheus","Metrics","Grafana"],description:"This article introduces the relevant steps of how to use Prometheus to monitor APISIX Ingress Controller and the display effect of some indicators.",tags:["Technology"]},s=void 0,l={permalink:"/blog/2021/12/13/monitor-apisix-ingress-controller-with-prometheus",source:"@site/blog/2021/12/13/monitor-apisix-ingress-controller-with-prometheus.md",title:"Monitoring APISIX Ingress Controller with Prometheus",description:"This article introduces the relevant steps of how to use Prometheus to monitor APISIX Ingress Controller and the display effect of some indicators.",date:"2021-12-13T00:00:00.000Z",formattedDate:"December 13, 2021",tags:[{label:"Technology",permalink:"/blog/tags/technology"}],readingTime:4.18,truncated:!0,authors:[{name:"Chao Zhang",title:"Author",url:"https://github.com/tokers",image_url:"https://avatars.githubusercontent.com/u/10428333?v=4",imageURL:"https://avatars.githubusercontent.com/u/10428333?v=4"},{name:"Sylvia",title:"Technical Writer",url:"https://github.com/SylviaBABY",image_url:"https://avatars.githubusercontent.com/u/39793568?v=4",imageURL:"https://avatars.githubusercontent.com/u/39793568?v=4"}],prevItem:{title:"How to Easily Deploy Apache APISIX in Kubernetes",permalink:"/blog/2021/12/15/deploy-apisix-in-kubernetes"},nextItem:{title:"How to Integrate Keycloak for Authentication with Apache APISIX",permalink:"/blog/2021/12/10/integrate-keycloak-auth-in-apisix"}},c={authorsImageUrls:[void 0,void 0]},p=[{value:"Step 1: Install APISIX Ingress Controller",id:"step-1-install-apisix-ingress-controller",children:[]},{value:"Step 2: Enable the Prometheus Plugin",id:"step-2-enable-the-prometheus-plugin",children:[{value:"Installing Prometheus and Grafana",id:"installing-prometheus-and-grafana",children:[]}]},{value:"Step 3: Configuring Grafana",id:"step-3-configuring-grafana",children:[]},{value:"Addendum: Monitoring Metrics Explained",id:"addendum-monitoring-metrics-explained",children:[]},{value:"Summary",id:"summary",children:[]}],u={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This article introduces the relevant steps of how to use Prometheus to monitor APISIX Ingress Controller and the display effect of some indicators.")),(0,o.kt)("p",null,'Whether in the days of monolithic applications or today\'s cloud-native era, "monitoring functions" have always played a very important role. A good monitoring system can help engineers quickly understand the status of services running in production environments, and quickly locate problems or warn of anomalies when they occur.'),(0,o.kt)("p",null,"Apache APISIX Ingress Controller has been enhanced to support Prometheus Metrics in recent releases. In this article, we will introduce how to use Prometheus to collect Metrics data from APISIX Ingress Controller and subsequently visualize it through Grafana."),(0,o.kt)("h2",{id:"step-1-install-apisix-ingress-controller"},"Step 1: Install APISIX Ingress Controller"),(0,o.kt)("p",null,"First we deploy Apache APISIX, ETCD and APISIX Ingress Controller to the local Kubernetes cluster via ",(0,o.kt)("a",{parentName:"p",href:"https://helm.sh/"},"Helm"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"helm repo add apisix https://charts.apiseven.com\nhelm repo update\nkubectl create namespace ingress-apisix\nhelm install apisix apisix/apisix --namespace ingress-apisix \\\n --set ingress-controller.enabled=true\n")),(0,o.kt)("p",null,"After installation, please wait until all services are up and running. Specific status confirmation can be checked with the following command."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get all -n ingress-apisix\n")),(0,o.kt)("h2",{id:"step-2-enable-the-prometheus-plugin"},"Step 2: Enable the Prometheus Plugin"),(0,o.kt)("p",null,"In most cases, the monitoring function must involve more than just the APISIX Ingress Controller component. If you need to monitor Apache APISIX at the same time, you can create the following ",(0,o.kt)("inlineCode",{parentName:"p"},"ApisixClusterConfig")," resource."),(0,o.kt)("h3",{id:"installing-prometheus-and-grafana"},"Installing Prometheus and Grafana"),(0,o.kt)("p",null,"Next, we will enable the Prometheus service through the Prometheus Operator, so you will need to install the Prometheus Operator first."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The following command will also install Grafana."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"helm repo add prometheus-community https://prometheus-community.github.io/helm-charts\nheml repo update\nkubectl create namespace prometheus\nhelm install prometheus prometheus-community/kube-prometheus-stack -n prometheus\n")),(0,o.kt)("p",null,"After installation, you need to prepare the RBAC configuration for the Prometheus instance. This configuration gives Prometheus the ability to obtain Pod and Service resources from the Kubernetes API Server."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: ServiceAccount\nmetadata:\n  name: ingress-apisix\n  namespace: ingress-apisix\n---\napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRole\nmetadata:\n  name: ingress-apisix\nrules:\n- apiGroups: [""]\n  resources:\n  - nodes\n  - nodes/metrics\n  - services\n  - endpoints\n  - pods\n  verbs: ["get", "list", "watch"]\n- apiGroups: [""]\n  resources:\n  - configmaps\n  verbs: ["get"]\n- apiGroups:\n  - networking.k8s.io\n  resources:\n  - ingresses\n  verbs: ["get", "list", "watch"]\n- nonResourceURLs: ["/metrics"]\n  verbs: ["get"]\n---\napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRoleBinding\nmetadata:\n  name: ingress-apisix\nroleRef:\n  apiGroup: rbac.authorization.k8s.io\n  kind: ClusterRole\n  name: ingress-apisix\nsubjects:\n- kind: ServiceAccount\n  name: ingress-apisix\n  namespace: ingress-apisix\n')),(0,o.kt)("p",null,"After completing the above instance configuration, PodMonitor needs to be defined, or you can choose to use ServiceMonior depending on the scenario requirements. The following PodMonitor resources will focus on Metrics collection for the APISIX Ingress Controller Pod."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: monitoring.coreos.com/v1\nkind: PodMonitor\nmetadata:\n  name: ingress-apisix\n  namespace: ingress-apisix\n  labels:\n    use-for: ingress-apisix\nspec:\n  selector:\n    matchLabels:\n      app.kubernetes.io/name: ingress-controller\n  podMetricsEndpoints:\n  - port: http\n")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The reason for not using ServiceMonitor here is that the ",(0,o.kt)("inlineCode",{parentName:"p"},"http")," port is not exposed to the Service level."))),(0,o.kt)("p",null,"Finally, the Prometheus instance can be defined with the following command."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: monitoring.coreos.com/v1\nkind: Prometheus\nmetadata:\n  name: ingress-apisix\n  namespace: ingress-apisix\nspec:\n  serviceAccountName: ingress-apisix\n  podMonitorSelector:\n    matchLabels:\n      use-for: ingress-apisix\n  resources:\n    requests:\n      memory: 400Mi\n  enableAdminAPI: false\n  image: prom/prometheus:v2.31.0\n")),(0,o.kt)("p",null,"After applying all of the above resources to the Kubernetes cluster, wait for the relevant components to be ready."),(0,o.kt)("h2",{id:"step-3-configuring-grafana"},"Step 3: Configuring Grafana"),(0,o.kt)("p",null,"Next, we configure Grafana for visual presentation."),(0,o.kt)("p",null,"Start by accessing the ",(0,o.kt)("inlineCode",{parentName:"p"},"prometheus-grafana")," service. Note that if you do not have a means to expose the service to the outside of the cluster, you can try using port forwarding. The Grafana administrator username and password are stored in the ",(0,o.kt)("inlineCode",{parentName:"p"},"prometheus-grafana")," Secret."),(0,o.kt)("p",null,"After opening Grafana, import the ",(0,o.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/apache/apisix-ingress-controller/22e548bc267115ccd36aec4200d5399aab565958/docs/assets/other/json/apisix-ingress-controller-grafana.json"},"Dashboard template")," of APISIX Ingress Controller to see the monitoring dashboard, which looks like the following."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1639381275740-d9e3b2a7-6895-43f2-8119-212ea616dddd.png",alt:"Dashboard1"})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1639381348652-7fb30365-179c-4b68-a168-ec3c9da7324d.png",alt:"Dashboard2"})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1639381376926-d6af92c7-16dd-4306-8931-9b83e7e8dce1.png",alt:"Dashboard3"})),(0,o.kt)("p",null,"For more information on creating Dashboard templates, please see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-ingress-controller/pull/731"},"related PR"),"."),(0,o.kt)("h2",{id:"addendum-monitoring-metrics-explained"},"Addendum: Monitoring Metrics Explained"),(0,o.kt)("p",null,"The current monitoring metrics for the APISIX Ingress Controller focus on its interaction with the data plane Apache APISIX instances (configuration delivery), including data related to the number and latency of configuration synchronization."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"is_leader"),": Whether the current APISIX Ingress Controller instance is in the Leader role. The same group of APISIX Ingress Controllers will have only one Leader, the rest of the instances are Candidate."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"sync_operations"),": Includes some metrics when the APISIX Ingress Controller synchronizes the configuration to the data plane, including the number of pushes, failure rate, latency, etc. Through these metrics, you can monitor whether the configuration delivery is normal or not, so as to help R&D and operation and maintenance students to monitor and alert and locate faults.")),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("p",null,"This article introduced how to use Prometheus to monitor APISIX Ingress Controller and how to display some of the metrics. Currently, only some basic monitoring metrics are included, we will continue to polish and upgrade, add more metrics and integrate data surface APISIX metrics to bring you a better monitoring experience."),(0,o.kt)("p",null,"Of course, interested parties are welcome to contribute to the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-ingress-controller"},"Apache APISIX Ingress Controller")," project, and we look forward to working together to make the APISIX Ingress Controller more comprehensive."))}m.isMDXComponent=!0}}]);
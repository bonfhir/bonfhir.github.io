"use strict";(self.webpackChunk_bonfhir_docs=self.webpackChunk_bonfhir_docs||[]).push([[687],{876:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2942:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var r=n(7896),a=(n(2784),n(876)),i=n(1112),o=n(2009);const l={sidebar_position:3},s="CMS.gov",p={unversionedId:"integrations/cmsdotgov",id:"integrations/cmsdotgov",title:"CMS.gov",description:"This package regroups features related to the CMS.gov products & features.",source:"@site/packages/integrations/cmsdotgov.md",sourceDirName:"integrations",slug:"/integrations/cmsdotgov",permalink:"/packages/integrations/cmsdotgov",draft:!1,editUrl:"https://github.com/bonfhir/bonfhir/tree/main/packages/docs/packages/integrations/cmsdotgov.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Medplum DevBox",permalink:"/packages/integrations/medplum-devbox"},next:{title:"Open FDA",permalink:"/packages/integrations/open-fda"}},c={},u=[{value:"NPPES / NPI Registry",id:"nppes--npi-registry",level:2}],m={toc:u};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"cmsgov"},"CMS.gov"),(0,a.kt)(i.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @bonfhir/cmsdotgov\n"))),(0,a.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @bonfhir/cmsdotgov\n")))),(0,a.kt)("p",null,"This package regroups features related to the ",(0,a.kt)("a",{parentName:"p",href:"https://www.cms.gov/"},"CMS.gov")," products & features."),(0,a.kt)("h2",{id:"nppes--npi-registry"},"NPPES / NPI Registry"),(0,a.kt)("p",null,"Provides a utility to retrieve information from the ",(0,a.kt)("a",{parentName:"p",href:"https://npiregistry.cms.hhs.gov/"},"National Plan and Provider Enumeration System (NPPES) National Provider Identifier (NPI) registry"),"."),(0,a.kt)("p",null,"Given a NPI number, it will interrogate the API and sync back the information to a FHIR Server."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'import { FhirRestfulClient } from "@bonfhir/core/r4b";\nimport { NPIRegistrySyncSession } from "@bonfhir/cmsdotgov/r4b";\n\nconst client: FhirRestfulClient = ...;\n\nconst syncSession = new NPIRegistrySyncSession({\n  client\n});\n\nconst result = await syncSession.sync({ number: "<npi-number>" });\n')),(0,a.kt)("p",null,"The sync operation performs a ",(0,a.kt)("a",{parentName:"p",href:"/packages/foundation/core#resources-merge"},(0,a.kt)("inlineCode",{parentName:"a"},"merge"))," on subsequent syncs."),(0,a.kt)("p",null,"Here are the entities created:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"For a Practitioner:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"Practitioner")," itself, with the",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.hl7.org/fhir/identifier-registry.html"},"NPI number as an identifier")),(0,a.kt)("li",{parentName:"ul"},"qualifications filled from taxonomies"))),(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)("inlineCode",{parentName:"li"},"Provenance")," record pointing to the ",(0,a.kt)("inlineCode",{parentName:"li"},"Practitioner")),(0,a.kt)("li",{parentName:"ul"},"And an ",(0,a.kt)("inlineCode",{parentName:"li"},"Organization")," representing the CMS.gov itself, used by the ",(0,a.kt)("inlineCode",{parentName:"li"},"Provenance")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"For an Organization:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"Organization")," itself, with the",(0,a.kt)("a",{parentName:"li",href:"https://www.hl7.org/fhir/identifier-registry.html"},"NPI number as an identifier")),(0,a.kt)("li",{parentName:"ul"},"a ",(0,a.kt)("inlineCode",{parentName:"li"},"HealthcareService")," per taxonomy, pointing to the ",(0,a.kt)("inlineCode",{parentName:"li"},"Organization"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"if the taxonomy reports a state, the ",(0,a.kt)("inlineCode",{parentName:"li"},"HealthcareService.coverageArea")," pointing to a ",(0,a.kt)("inlineCode",{parentName:"li"},"Location")," representing the state"))),(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)("inlineCode",{parentName:"li"},"Provenance")," record pointing to the ",(0,a.kt)("inlineCode",{parentName:"li"},"Organization")),(0,a.kt)("li",{parentName:"ul"},"And an ",(0,a.kt)("inlineCode",{parentName:"li"},"Organization")," representing the CMS.gov itself, used by the ",(0,a.kt)("inlineCode",{parentName:"li"},"Provenance"))))),(0,a.kt)("p",null,'The Provenance record can be provided as an option if needed (will serve as a template to create the records), or de-activated entirely by passing the "no-provenance" value to the sync session.'),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"NPIRegistrySyncSession")," can be safely re-used or re-created any time; all it does is holding a cache for certain referenced values (mainly the CMS.gov ",(0,a.kt)("inlineCode",{parentName:"p"},"Organization")," and the ",(0,a.kt)("inlineCode",{parentName:"p"},"Location")," per state), to save a few round-trips to the server."))}d.isMDXComponent=!0},2009:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(2784),a=n(6277);const i="tabItem_OMyP";function o(e){let{children:t,hidden:n,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(i,o),hidden:n},t)}},1112:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(7896),a=n(2784),i=n(6277),o=n(9741),l=n(2244),s=n(8963),p=n(4126);const c="tabList_M0Dn",u="tabItem_ysIP";function m(e){const{lazy:t,block:n,defaultValue:o,values:m,groupId:d,className:f}=e,g=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=m??g.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),v=(0,l.l)(h,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===o?o:o??g.find((e=>e.props.default))?.props.value??g[0].props.value;if(null!==b&&!h.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:y}=(0,s.U)(),[N,P]=(0,a.useState)(b),w=[],{blockElementScrollPositionUntilNextRender:C}=(0,p.o5)();if(null!=d){const e=k[d];null!=e&&e!==N&&h.some((t=>t.value===e))&&P(e)}const O=e=>{const t=e.currentTarget,n=w.indexOf(t),r=h[n].value;r!==N&&(C(t),P(r),null!=d&&y(d,String(r)))},T=e=>{let t=null;switch(e.key){case"Enter":O(e);break;case"ArrowRight":{const n=w.indexOf(e.currentTarget)+1;t=w[n]??w[0];break}case"ArrowLeft":{const n=w.indexOf(e.currentTarget)-1;t=w[n]??w[w.length-1];break}}t?.focus()};return a.createElement("div",{className:(0,i.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},f)},h.map((e=>{let{value:t,label:n,attributes:o}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>w.push(e),onKeyDown:T,onClick:O},o,{className:(0,i.Z)("tabs__item",u,o?.className,{"tabs__item--active":N===t})}),n??t)}))),t?(0,a.cloneElement)(g.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function d(e){const t=(0,o.Z)();return a.createElement(m,(0,r.Z)({key:String(t)},e))}}}]);
"use strict";(self.webpackChunk_bonfhir_docs=self.webpackChunk_bonfhir_docs||[]).push([[687],{876:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2942:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var r=n(7896),a=(n(2784),n(876)),i=n(1112),o=n(2009);const l={sidebar_position:2},s="CMS.gov",c={unversionedId:"integrations/cmsdotgov",id:"integrations/cmsdotgov",title:"CMS.gov",description:"npm",source:"@site/packages/integrations/cmsdotgov.md",sourceDirName:"integrations",slug:"/integrations/cmsdotgov",permalink:"/packages/integrations/cmsdotgov",draft:!1,editUrl:"https://github.com/bonfhir/bonfhir/tree/main/packages/docs/packages/integrations/cmsdotgov.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Medplum",permalink:"/packages/integrations/medplum"},next:{title:"NIH National Library of Medicine",permalink:"/packages/integrations/nih-nlm"}},p={},d=[{value:"NPPES / NPI Registry",id:"nppes--npi-registry",level:2},{value:"ICD10 Codes builder",id:"icd10-codes-builder",level:2},{value:"HCPCS Codes builder",id:"hcpcs-codes-builder",level:2}],u={toc:d};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"cmsgov"},"CMS.gov"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@bonfhir/cmsdotgov"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/v/@bonfhir/cmsdotgov",alt:"npm"}))),(0,a.kt)(i.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @bonfhir/cmsdotgov\n"))),(0,a.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @bonfhir/cmsdotgov\n")))),(0,a.kt)("p",null,"This package regroups features related to the ",(0,a.kt)("a",{parentName:"p",href:"https://www.cms.gov/"},"CMS.gov")," products & features."),(0,a.kt)("h2",{id:"nppes--npi-registry"},"NPPES / NPI Registry"),(0,a.kt)("p",null,"Provides a utility to retrieve information from the ",(0,a.kt)("a",{parentName:"p",href:"https://npiregistry.cms.hhs.gov/"},"National Plan and Provider Enumeration System (NPPES) National Provider Identifier (NPI) registry"),"."),(0,a.kt)("p",null,"Given a NPI number, it will interrogate the API and sync back the information to a FHIR Server."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'import { FhirRestfulClient } from "@bonfhir/core/r4b";\nimport { NPIRegistrySyncSession } from "@bonfhir/cmsdotgov/r4b";\n\nconst client: FhirRestfulClient = ...;\n\nconst syncSession = new NPIRegistrySyncSession({\n  client\n});\n\nconst result = await syncSession.sync({ number: "<npi-number>" });\n')),(0,a.kt)("p",null,"The sync operation performs a ",(0,a.kt)("a",{parentName:"p",href:"/packages/foundation/core#resources-merge"},(0,a.kt)("inlineCode",{parentName:"a"},"merge"))," on subsequent syncs."),(0,a.kt)("p",null,"Here are the entities created:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"For a Practitioner:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"Practitioner")," itself, with the",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.hl7.org/fhir/identifier-registry.html"},"NPI number as an identifier")),(0,a.kt)("li",{parentName:"ul"},"qualifications filled from taxonomies"))),(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)("inlineCode",{parentName:"li"},"Provenance")," record pointing to the ",(0,a.kt)("inlineCode",{parentName:"li"},"Practitioner")),(0,a.kt)("li",{parentName:"ul"},"And an ",(0,a.kt)("inlineCode",{parentName:"li"},"Organization")," representing the CMS.gov itself, used by the ",(0,a.kt)("inlineCode",{parentName:"li"},"Provenance")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"For an Organization:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"Organization")," itself, with the",(0,a.kt)("a",{parentName:"li",href:"https://www.hl7.org/fhir/identifier-registry.html"},"NPI number as an identifier")),(0,a.kt)("li",{parentName:"ul"},"a ",(0,a.kt)("inlineCode",{parentName:"li"},"HealthcareService")," per taxonomy, pointing to the ",(0,a.kt)("inlineCode",{parentName:"li"},"Organization"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"if the taxonomy reports a state, the ",(0,a.kt)("inlineCode",{parentName:"li"},"HealthcareService.coverageArea")," pointing to a ",(0,a.kt)("inlineCode",{parentName:"li"},"Location")," representing the state"))),(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)("inlineCode",{parentName:"li"},"Provenance")," record pointing to the ",(0,a.kt)("inlineCode",{parentName:"li"},"Organization")),(0,a.kt)("li",{parentName:"ul"},"And an ",(0,a.kt)("inlineCode",{parentName:"li"},"Organization")," representing the CMS.gov itself, used by the ",(0,a.kt)("inlineCode",{parentName:"li"},"Provenance"))))),(0,a.kt)("p",null,'The Provenance record can be provided as an option if needed (will serve as a template to create the records), or de-activated entirely by passing the "no-provenance" value to the sync session.'),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"NPIRegistrySyncSession")," can be safely re-used or re-created any time; all it does is holding a cache for certain referenced values (mainly the CMS.gov ",(0,a.kt)("inlineCode",{parentName:"p"},"Organization")," and the ",(0,a.kt)("inlineCode",{parentName:"p"},"Location")," per state), to save a few round-trips to the server."),(0,a.kt)("h2",{id:"icd10-codes-builder"},"ICD10 Codes builder"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"ICD10CodesBuilder")," is there to help create ",(0,a.kt)("inlineCode",{parentName:"p"},"Coding")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"CodeableConcept")," for ICD10 Codes using reference files\ndownloadable at ",(0,a.kt)("a",{parentName:"p",href:"https://www.cms.gov/Medicare/Coding/ICD10"},"https://www.cms.gov/Medicare/Coding/ICD10"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'import { ICD10CodesBuilder } from "@bonfhir/cmsdotgov/r4b";\n\nconst builder = new ICD10CodesBuilder({\n  sourceFilePath: "./icd10cm_codes_2023.txt",\n  version: "2023",\n});\n\nconst coding = await builder.coding("A408");\n/*\n{\n  system: "http://hl7.org/fhir/sid/icd-10-cm",\n  code: "A408",\n  display: "Other streptococcal sepsis",\n  version: "2023"\n}\n*/\n\nconst codeableConcept = await builder.codeableConcept("B301");\n/*\n{\n  coding: [{\n    system: "http://hl7.org/fhir/sid/icd-10-cm",\n    code: "B301",\n    display: "Conjunctivitis due to adenovirus",\n    version: "2023",\n  }],\n  text: "Conjunctivitis due to adenovirus"\n}\n*/\n')),(0,a.kt)("h2",{id:"hcpcs-codes-builder"},"HCPCS Codes builder"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"HCPCSCodesBuilder")," is there to help create ",(0,a.kt)("inlineCode",{parentName:"p"},"Coding")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"CodeableConcept")," for HCPCS Codes using reference files\ndownloadable at ",(0,a.kt)("a",{parentName:"p",href:"https://www.cms.gov/Medicare/Coding/HCPCSReleaseCodeSets"},"https://www.cms.gov/Medicare/Coding/HCPCSReleaseCodeSets"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'import { HCPCSCodesBuilder } from "@bonfhir/cmsdotgov/r4b";\n\nconst builder = new ICD10CodesBuilder({\n  sourceFilePath: "./HCPC2023_JAN_ANWEB_v3.csv",\n  version: "2023-01",\n});\n\nconst coding = await builder.coding("G0157");\n/*\n{\n  system: "https://www.cms.gov/Medicare/Coding/HCPCSReleaseCodeSets",\n  code: "G0157",\n  display: "Services performed by a qualified physical therapist assistant in the home health or hospice setting, each 15 minutes",\n  version: "2023-01"\n}\n*/\n\nconst codeableConcept = await builder.codeableConcept("L3470");\n/*\n{\n  coding: [{\n    system: "https://www.cms.gov/Medicare/Coding/HCPCSReleaseCodeSets",\n    code: "L3470",\n    display: "Heel, thomas extended to ball",\n    version: "2023-01",\n  }],\n  text: "Heel, thomas extended to ball"\n}\n*/\n')),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Source files should be CSV files. If you download them as Excel file, you can use the ",(0,a.kt)("inlineCode",{parentName:"em"},"ssconvert")," utility to process them into CSV files.")))}m.isMDXComponent=!0},2009:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(2784),a=n(6277);const i="tabItem_OMyP";function o(e){let{children:t,hidden:n,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(i,o),hidden:n},t)}},1112:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(7896),a=n(2784),i=n(6277),o=n(9741),l=n(2244),s=n(8963),c=n(4126);const p="tabList_M0Dn",d="tabItem_ysIP";function u(e){const{lazy:t,block:n,defaultValue:o,values:u,groupId:m,className:h}=e,g=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=u??g.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),b=(0,l.l)(f,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===o?o:o??g.find((e=>e.props.default))?.props.value??g[0].props.value;if(null!==v&&!f.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:C}=(0,s.U)(),[y,N]=(0,a.useState)(v),w=[],{blockElementScrollPositionUntilNextRender:P}=(0,c.o5)();if(null!=m){const e=k[m];null!=e&&e!==y&&f.some((t=>t.value===e))&&N(e)}const S=e=>{const t=e.currentTarget,n=w.indexOf(t),r=f[n].value;r!==y&&(P(t),N(r),null!=m&&C(m,String(r)))},O=e=>{let t=null;switch(e.key){case"Enter":S(e);break;case"ArrowRight":{const n=w.indexOf(e.currentTarget)+1;t=w[n]??w[0];break}case"ArrowLeft":{const n=w.indexOf(e.currentTarget)-1;t=w[n]??w[w.length-1];break}}t?.focus()};return a.createElement("div",{className:(0,i.Z)("tabs-container",p)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},h)},f.map((e=>{let{value:t,label:n,attributes:o}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,key:t,ref:e=>w.push(e),onKeyDown:O,onClick:S},o,{className:(0,i.Z)("tabs__item",d,o?.className,{"tabs__item--active":y===t})}),n??t)}))),t?(0,a.cloneElement)(g.filter((e=>e.props.value===y))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==y})))))}function m(e){const t=(0,o.Z)();return a.createElement(u,(0,r.Z)({key:String(t)},e))}}}]);
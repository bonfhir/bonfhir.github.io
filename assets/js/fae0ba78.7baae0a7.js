"use strict";(self.webpackChunk_bonfhir_docs=self.webpackChunk_bonfhir_docs||[]).push([[357],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2258:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var r=n(7462),a=(n(7294),n(3905)),o=n(4866),i=n(5162);const l={sidebar_position:2},s="Terminology",u={unversionedId:"foundation/terminology",id:"foundation/terminology",title:"Terminology",description:"npm",source:"@site/packages/foundation/terminology.md",sourceDirName:"foundation",slug:"/foundation/terminology",permalink:"/packages/foundation/terminology",draft:!1,editUrl:"https://github.com/bonfhir/bonfhir/tree/main/packages/docs/packages/foundation/terminology.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Core",permalink:"/packages/foundation/core"},next:{title:"Test Support",permalink:"/packages/foundation/test-support"}},c={},p=[{value:"ValueSet expansion",id:"valueset-expansion",level:2},{value:"Code System URIs",id:"code-system-uris",level:2},{value:"Known Identifier Systems / Identifier Registry",id:"known-identifier-systems--identifier-registry",level:2}],d={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"terminology"},"Terminology"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@bonfhir/terminology"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/v/@bonfhir/terminology",alt:"npm"}))),(0,a.kt)(o.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @bonfhir/terminology\n"))),(0,a.kt)(i.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @bonfhir/terminology\n")))),(0,a.kt)("p",null,"This package is there to support a light usage of FHIR terminology."),(0,a.kt)("p",null,"The subject is vast and complex, so for any important implementation a analysis must be made as to how to use FHIR\nterminology appropriately."),(0,a.kt)("p",null,"Nevertheless, this library provides some out-of-the-box typings for the common ",(0,a.kt)("a",{parentName:"p",href:"https://hl7.org/fhir/terminologies-valuesets.html"},(0,a.kt)("inlineCode",{parentName:"a"},"ValueSets")),"\ndefined in the FHIR spec."),(0,a.kt)("h2",{id:"valueset-expansion"},"ValueSet expansion"),(0,a.kt)("p",null,"For a lot of the ",(0,a.kt)("a",{parentName:"p",href:"https://hl7.org/fhir/terminologies-valuesets.html"},(0,a.kt)("inlineCode",{parentName:"a"},"ValueSet")," defined in the FHIR Terminology"),", this provide\na typed-version with all values, codes, ",(0,a.kt)("inlineCode",{parentName:"p"},"Coding"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"CodeableConcept")," expanded and ready to be used."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'import { build } from "@bonfhir/core/r4b";\nimport { MedicationDispenseStatusCodes, MedicationDispenseStatusReasonCodes } from "@bonfhir/terminology/r4b";\n\nconst medicationDispense = build("MedicationDispense", {\n  status: MedicationDispenseStatusCodes.values["On Hold"].code,\n  statusReasonCodeableConcept: MedicationDispenseStatusReasonCodes.values["Drug interacts with another drug"].codeableConcept\n  ...\n});\n')),(0,a.kt)("p",null,"It is also possible, for each of the value sets, to enumerate all it's expanded values using the ",(0,a.kt)("inlineCode",{parentName:"p"},"expansion")," attribute\n(for use in frontend applications for example)."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"The terminology package is quite big, so if you plan to use it on a frontend application,\nmake sure to run a bundler with tree-shaking capabilities to limit the size of the final package.")),(0,a.kt)("h2",{id:"code-system-uris"},"Code System URIs"),(0,a.kt)("p",null,"All the code system URIs ",(0,a.kt)("a",{parentName:"p",href:"https://hl7.org/fhir/terminologies-systems.html#"},"listed in the FHIR specification")," are available as constants:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'import { CodeSystemURIs } from "@bonfhir/terminology/r4b";\n\nCodeSystemURIs.Ndc; // "http://hl7.org/fhir/sid/ndc"\nCodeSystemURIs.Ietf3066; // "urn:ietf:bcp:47"\n')),(0,a.kt)("h2",{id:"known-identifier-systems--identifier-registry"},"Known Identifier Systems / Identifier Registry"),(0,a.kt)("p",null,"The package also includes definitions for ",(0,a.kt)("a",{parentName:"p",href:"https://hl7.org/fhir/identifier-registry.html"},"Known Identifier Systems"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'import type { Identifier } from "fhir/r4";\nimport { KnownIdentifierSystems } from "@bonfhir/terminology/r4b";\n\nconst usSSNIdentifier: Identifier = {\n  ...KnownIdentifierSystems.USSocialSecurityNumber,\n  value: "00000000",\n};\n')))}m.isMDXComponent=!0},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(7294),a=n(6010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>I});var r=n(7462),a=n(7294),o=n(6010),i=n(2466),l=n(6550),s=n(1980),u=n(7392),c=n(12);function p(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function d(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const r=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=d(e),[i,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[s,u]=f({queryString:n,groupId:r}),[p,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,c.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),b=(()=>{const e=s??p;return m({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{b&&l(b)}),[b]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),h(e)}),[u,h,o]),tabValues:o}}var b=n(2389);const y="tabList__CuJ",g="tabItem_LNqP";function v(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),r=u[n].value;r!==l&&(p(t),s(r))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},i,{className:(0,o.Z)("tabs__item",g,i?.className,{"tabs__item--active":l===t})}),n??t)})))}function k(e){let{lazy:t,children:n,selectedValue:r}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function w(e){const t=h(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",y)},a.createElement(v,(0,r.Z)({},e,t)),a.createElement(k,(0,r.Z)({},e,t)))}function I(e){const t=(0,b.Z)();return a.createElement(w,(0,r.Z)({key:String(t)},e))}}}]);
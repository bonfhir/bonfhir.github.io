"use strict";(self.webpackChunk_bonfhir_docs=self.webpackChunk_bonfhir_docs||[]).push([[491],{876:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),h=a,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||i;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},130:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var r=n(7896),a=(n(2784),n(876)),i=n(1112),o=n(2009);const l={sidebar_position:1},s="Core",c={unversionedId:"foundation/core",id:"foundation/core",title:"Core",description:"npm",source:"@site/packages/foundation/core.md",sourceDirName:"foundation",slug:"/foundation/core",permalink:"/packages/foundation/core",draft:!1,editUrl:"https://github.com/bonfhir/bonfhir/tree/main/packages/docs/packages/foundation/core.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Foundation",permalink:"/packages/category/foundation"},next:{title:"Terminology",permalink:"/packages/foundation/terminology"}},u={},p=[{value:"Builders &amp; narrative generators",id:"builders--narrative-generators",level:2},{value:"Resources merge",id:"resources-merge",level:2},{value:"FHIR Client interface",id:"fhir-client-interface",level:2},{value:"FHIR Client decorator",id:"fhir-client-decorator",level:3},{value:"<code>createOr</code> utility",id:"createor-utility",level:3},{value:"FHIR Search",id:"fhir-search",level:2},{value:"Resources search",id:"resources-search",level:3},{value:"Generic search builder",id:"generic-search-builder",level:3},{value:"Bundle navigator",id:"bundle-navigator",level:2}],d={toc:p};function h(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"core"},"Core"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img.shields.io/npm/v/@bonfhir/core",alt:"npm"})),(0,a.kt)(i.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @bonfhir/core\n"))),(0,a.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @bonfhir/core\n")))),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"core")," package provides utilities to easily manipulate FHIR resources.\nIt is also used as a common dependency for all other packages to rely on."),(0,a.kt)("h2",{id:"builders--narrative-generators"},"Builders & narrative generators"),(0,a.kt)("p",null,"As specified in the ",(0,a.kt)("a",{parentName:"p",href:"https://hl7.org/fhir/narrative.html"},"FHIR ",(0,a.kt)("inlineCode",{parentName:"a"},"Narrative")," description"),":"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Any resource that is a DomainResource (all resources except Bundle, Parameters and Binary) may include a\nhuman-readable narrative that contains a summary of the resource and may be used to represent the content\nof the resource to a human.")),(0,a.kt)("p",null,"The package provide a function to generate such ",(0,a.kt)("inlineCode",{parentName:"p"},"Narrative")," using the content of the resource:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'import type { Patient } from "fhir/r4";\nimport { narrative } from "@bonfhir/core/r4b";\n\nconst patient: Patient = ...;\n\npatient.text = narrative(patient);\n')),(0,a.kt)("p",null,"Narratives are generated using resources elements that are marked with the\n",(0,a.kt)("a",{parentName:"p",href:"https://hl7.org/fhir/elementdefinition-definitions.html#ElementDefinition.isSummary"},(0,a.kt)("strong",{parentName:"a"},"\u03a3")," (",(0,a.kt)("inlineCode",{parentName:"a"},"isSummary"),") element definition"),"."),(0,a.kt)("p",null,"In order to simplify building the resources, a convenient builder is provided that invokes the ",(0,a.kt)("inlineCode",{parentName:"p"},"narrative")," generator\nautomatically:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'import { build } from "@bonfhir/core/r4b";\n\nconst organization = build("Organization", { name: "Acme, Inc." });\n')),(0,a.kt)("h2",{id:"resources-merge"},"Resources merge"),(0,a.kt)("p",null,"It is sometime convenient to be able to recursively merge 2 resources definitions in a non-destructive fashion.\nThis is particularly useful in data-integration scenarios, where the same resource might be ingested at different time\nand we want to add updates to it, without loosing other potential modifications that occur in between."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"core")," package provides a utility function to merge resources together:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'import type { Claim } from "fhir/r4";\nimport { merge } from "@bonfhir/core/r4b";\n\nconst originalClaim: Claim = ...;\nconst newClaim: Claim = ...;\n\nconst result = merge({\n  current: originalClaim,\n  incoming: newClaim\n});\n\nresult.isUpdated; // True if the incoming resource impacted the current, so the result is different that the current\nresult.merged; // The final, merged entity.\n')),(0,a.kt)("p",null,"Merging is deeply recursive. Elements are de-duplicated based on their ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," property (for both ",(0,a.kt)("a",{parentName:"p",href:"https://hl7.org/fhir/resource-definitions.html#Resource.id"},(0,a.kt)("inlineCode",{parentName:"a"},"Resource"))," and ",(0,a.kt)("a",{parentName:"p",href:"https://hl7.org/fhir/element-definitions.html#Element.id"},(0,a.kt)("inlineCode",{parentName:"a"},"Element")),").\nIf not ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," property is present, a strict attribute compare is used to identify duplicate elements."),(0,a.kt)("p",null,"If you want a stable deep-merge that will consistently update values, use stable ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," fields on all resources and elements."),(0,a.kt)("p",null,"The narrative is re-generated automatically for the merged result."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'import type { Claim } from "fhir/r4";\nimport { build, merge } from "@bonfhir/core/r4b";\n\nconst current = build("Person", {\n  name: [\n    {\n      id: "main-id",\n      use: "official",\n      family: "Simpson"\n    },\n  ]\n});\n\nconst incoming = build("Person", {\n  name: [\n    {\n      id: "main-id",\n      given: ["Homer"],\n    },\n    {\n      id: "alternate-id",\n      use: "old",\n      family: "Power"\n      given: ["Max"],\n    },\n  ]\n});\n\nconst result = merge({ current, incoming: newClaim });\n\nresult === {\n  isUpdated: true,\n  merged: {\n    resourceType: "Person",\n    name: [\n    {\n      id: "main-id",\n      use: "official",\n      family: "Simpson"\n      given: ["Homer"],\n    },\n    {\n      id: "alternate-id",\n      use: "old",\n      family: "Power"\n      given: ["Max"],\n    },\n  ]\n  }\n};\n')),(0,a.kt)("h2",{id:"fhir-client-interface"},"FHIR Client interface"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"core")," package provides the ",(0,a.kt)("inlineCode",{parentName:"p"},"FhirRestfulClient")," interface that matches with the ",(0,a.kt)("a",{parentName:"p",href:"https://hl7.org/fhir/http.html"},"official FHIR RESTful API"),"."),(0,a.kt)("p",null,"The idea is that all Bonfhir packages, and maybe your own implementation too, can take a dependency on that type instead\nof a concrete client implementation, that depends on a specific FHIR server. This is a good way to ensure portability\nof implementations."),(0,a.kt)("p",null,"This can also simplify unit testing by offering a simple interface to mock."),(0,a.kt)("p",null,"Concrete implementations can be found in ",(0,a.kt)("a",{parentName:"p",href:"/packages/integrations/medplum"},"Integrations")," packages, or can be built quite easily yourself."),(0,a.kt)("h3",{id:"fhir-client-decorator"},"FHIR Client decorator"),(0,a.kt)("p",null,"A utility function is provided to be able to decorate a ",(0,a.kt)("inlineCode",{parentName:"p"},"FhirRestfulClient"),", to intercept calls made to it.\nThis can be helpful to log calls, or record resources elsewhere for example."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'import { decorateFhirRestfulClient, FhirRestfulClient, FhirRestfulClientInterceptor } from "@bonfhir/core/r4b";\n\nconst client: FhirRestfulClient = ...;\nconst interceptor: FhirRestfulClientInterceptor = {\n  read: async (originalClient, [type, id]) => {\n    console.log(`Reading ${type}/${id}...`)\n    const result = await originalClient.read(type, id);\n    console.log(`Read ${type}/${id}: ${result?.text?.div}`);\n    return result;\n  },\n  search: ...\n}\n\nconst decoratedClient = decorateFhirRestfulClient(client, interceptor);\nawait decoratedClient.read(...);\n')),(0,a.kt)("h3",{id:"createor-utility"},(0,a.kt)("inlineCode",{parentName:"h3"},"createOr")," utility"),(0,a.kt)("p",null,"Often time there is a need to create, add, update or merge a resource on a server depending on it's prior existence.\nThis is a very common occurrence in data integration scenarios / syncing tasks."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"core")," package provide a utility to help with those operations:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'import { build, createOr, resourceSearch } from "@bonfhir/core/r4b";\nimport { KnownIdentifierSystems } from "@bonfhir/terminology/r4b";\n\n\nconst resource = build("Patient", {\n  identifier: [\n    {\n      ...KnownIdentifierSystems.USSocialSecurityNumber,\n      value: "000000000",\n    },\n  ],\n  ...\n});\n\n// Will return the existing resource on the server if it exists, or create a new one\n// Search is performed by default using the identifiers.\nconst [mergedResource, wasMerged] = createOr("return", client, resource);\n\n// Will replace entirely the existing resource on the server if it exists, or create a new one\n// Search is performed by default using the identifiers.\nconst [mergedResource, wasMerged] = createOr("replace", client, resource);\n\n// Will merge the existing resource on the server with the one here, or create a new one if not found\n// Search is performed by default using the identifiers.\nconst [mergedResource, wasMerged] = createOr("merge", client, resource);\n\n// Will add a new resource, unless there is an existing one with a strict equality except for the `id` property (avoid strict duplicates).\n// Search is performed by default using the identifiers.\nconst [mergedResource, wasMerged] = createOr("add", client, resource);\n\n// The search can be customized (instead of using the default identifiers)\nconst [mergedResource, wasMerged] = createOr("merge", client, resource, resourceSearch("Patient").name("John Doe").href);\n\n')),(0,a.kt)("h2",{id:"fhir-search"},"FHIR Search"),(0,a.kt)("p",null,"There are utility functions designed to help creating ",(0,a.kt)("a",{parentName:"p",href:"https://hl7.org/fhir/search.html"},"FHIR Search")," URL query parameters."),(0,a.kt)("h3",{id:"resources-search"},"Resources search"),(0,a.kt)("p",null,"The easiest way is to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"resourceSearch")," helper method, as it provides typing for all resources, based on the search parameters specification:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'import { resourceSearch } from "@bonfhir/core/r4b";\n\nresourceSearch("Organization").identifier("12345").active("true").href;\nresourceSearch("Patient").identifier({\n  system: "http://hl7.org/fhir/sid/us-ssn",\n  value: "000-00-0000",\n}).href;\nresourceSearch("Account").status("active").type("patient")._tag({\n  system: "source",\n  value: "foo",\n}).href;\n')),(0,a.kt)("h3",{id:"generic-search-builder"},"Generic search builder"),(0,a.kt)("p",null,"In addition to the resource-typed searches, there is a generic search builder that exposes the fundamental ",(0,a.kt)("a",{parentName:"p",href:"https://hl7.org/fhir/search.html#ptypes"},"FHIR Search Parameter Types"),"\nto help compose FHIR searches as well:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'import { fhirSearch } from "@bonfhir/core/r4b";\n\nfhirSearch().token("identifier", "152345235").href;\nfhirSearch().date("date", "2010-01-01", "ge").date("date", "2011-12-31", "le")\n  .href;\nfhirSearch().date("date", "2010-01-01", "ge").date("date", "2011-12-31", "le")\n  .href;\nfhirSearch().reference(\n  "subject",\n  { system: "http://acme.org/fhir/identifier/mrn", value: "123456" },\n  ":identifier"\n).href;\n')),(0,a.kt)("h2",{id:"bundle-navigator"},"Bundle navigator"),(0,a.kt)("p",null,"It can be hard sometime to extract and navigate a ",(0,a.kt)("a",{parentName:"p",href:"https://hl7.org/fhir/bundle.html"},(0,a.kt)("inlineCode",{parentName:"a"},"Bundle")),", when it is the result of a complex ",(0,a.kt)("a",{parentName:"p",href:"https://hl7.org/fhir/search.html"},"Search operation"),"."),(0,a.kt)("p",null,"The primary resources are returned along with ",(0,a.kt)("a",{parentName:"p",href:"https://hl7.org/fhir/search.html#include"},(0,a.kt)("inlineCode",{parentName:"a"},"_include"))," and ",(0,a.kt)("a",{parentName:"p",href:"https://hl7.org/fhir/search.html#revinclude"},(0,a.kt)("inlineCode",{parentName:"a"},"_revinclude")),",\nthat must be resolved via ",(0,a.kt)("a",{parentName:"p",href:"https://hl7.org/fhir/references.html"},(0,a.kt)("inlineCode",{parentName:"a"},"references")),".\nAdditionally, naive implementations can lead to O(N",(0,a.kt)("sup",null,"2"),") complexity when processing ",(0,a.kt)("inlineCode",{parentName:"p"},"_revinclude")," resources for example."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"bundleNavigator")," helper can help with this by providing lazy indexing and search on top of a bundle to extract resources efficiently:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'import {\n  buildReferenceFromResource,\n  bundleNavigator,\n  fhirSearch,\n} from "@bonfhir/core/r4b";\n\nconst bundle = await client.search(\n  "Patient",\n  resourceSearch("Patient")\n    ._include("Patient", "managingOrganization")\n    ._revinclude("Provenance", "target")\n    ._include("Provenance", "agent", { iterate: true })\n);\n\nconst navigator = bundleNavigator<Patient, Organization | Provenance>(bundle);\nfor (const patient of navigator.searchMatch()) {\n  const managingOrganization = navigator.reference(\n    patient?.managingOrganization?.reference\n  );\n  const provenance = navigator.firstRevReference<Provenance>(\n    "ofType(Provenance).target.reference",\n    buildReferenceFromResource(patient).reference\n  );\n  const provenanceOrganization = navigator.reference(\n    provenance?.agent[0]?.who.reference\n  );\n}\n')),(0,a.kt)("p",null,"In this example, the bundle is only iterated twice:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"once to index the results for the calls to ",(0,a.kt)("inlineCode",{parentName:"li"},"searchMatch")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"reference")),(0,a.kt)("li",{parentName:"ul"},"a second time to create the on-the-fly index for the ",(0,a.kt)("inlineCode",{parentName:"li"},"firstRevReference"))),(0,a.kt)("p",null,"The reverse references uses ",(0,a.kt)("a",{parentName:"p",href:"http://hl7.org/fhirpath/N1/"},"FHIR Path")," to create indices that can be reused in loops."),(0,a.kt)("p",null,"All indices are created lazily, so it is very cheap to create / return a ",(0,a.kt)("inlineCode",{parentName:"p"},"bundleNavigator")," even if it is not used subsequently."))}h.isMDXComponent=!0},2009:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(2784),a=n(6277);const i="tabItem_OMyP";function o(e){let{children:t,hidden:n,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(i,o),hidden:n},t)}},1112:(e,t,n)=>{n.d(t,{Z:()=>h});var r=n(7896),a=n(2784),i=n(6277),o=n(9741),l=n(2244),s=n(8963),c=n(4126);const u="tabList_M0Dn",p="tabItem_ysIP";function d(e){const{lazy:t,block:n,defaultValue:o,values:d,groupId:h,className:m}=e,f=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=d??f.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),b=(0,l.l)(g,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===o?o:o??f.find((e=>e.props.default))?.props.value??f[0].props.value;if(null!==v&&!g.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:k}=(0,s.U)(),[N,w]=(0,a.useState)(v),C=[],{blockElementScrollPositionUntilNextRender:T}=(0,c.o5)();if(null!=h){const e=y[h];null!=e&&e!==N&&g.some((t=>t.value===e))&&w(e)}const R=e=>{const t=e.currentTarget,n=C.indexOf(t),r=g[n].value;r!==N&&(T(t),w(r),null!=h&&k(h,String(r)))},O=e=>{let t=null;switch(e.key){case"Enter":R(e);break;case"ArrowRight":{const n=C.indexOf(e.currentTarget)+1;t=C[n]??C[0];break}case"ArrowLeft":{const n=C.indexOf(e.currentTarget)-1;t=C[n]??C[C.length-1];break}}t?.focus()};return a.createElement("div",{className:(0,i.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},m)},g.map((e=>{let{value:t,label:n,attributes:o}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>C.push(e),onKeyDown:O,onClick:R},o,{className:(0,i.Z)("tabs__item",p,o?.className,{"tabs__item--active":N===t})}),n??t)}))),t?(0,a.cloneElement)(f.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function h(e){const t=(0,o.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}}}]);
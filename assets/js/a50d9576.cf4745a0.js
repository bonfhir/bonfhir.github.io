"use strict";(self.webpackChunk_bonfhir_docs=self.webpackChunk_bonfhir_docs||[]).push([[690],{876:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>m});var n=a(2784);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},h=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,h=o(e,["components","mdxType","originalType","parentName"]),u=p(a),d=r,m=u["".concat(s,".").concat(d)]||u[d]||c[d]||l;return a?n.createElement(m,i(i({ref:t},h),{},{components:a})):n.createElement(m,i({ref:t},h))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5758:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var n=a(7896),r=(a(2784),a(876)),l=a(1112),i=a(2009);const o={sidebar_position:2},s="Code generation",p={unversionedId:"codegen",id:"codegen",title:"Code generation",description:"The FHIR standard is formally specified in an implementation guide.",source:"@site/contributing/codegen.md",sourceDirName:".",slug:"/codegen",permalink:"/contributing/codegen",draft:!1,editUrl:"https://github.com/bonfhir/bonfhir/tree/main/packages/docs/contributing/codegen.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Contributing",permalink:"/contributing/contributing"}},h={},u=[{value:"Using it in your own projects and packages",id:"using-it-in-your-own-projects-and-packages",level:2},{value:"Template helpers",id:"template-helpers",level:2},{value:"<code>fhirPath</code>",id:"fhirpath",level:3},{value:"<code>writeFiles</code>",id:"writefiles",level:3},{value:"<code>safeNameAsVar</code>",id:"safenameasvar",level:3},{value:"<code>recursiveFlatten</code>",id:"recursiveflatten",level:3},{value:"<code>elementImmediatePath</code>",id:"elementimmediatepath",level:3}],c={toc:u};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"code-generation"},"Code generation"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://hl7.org/fhir/index.html"},"FHIR standard")," is formally specified ",(0,r.kt)("a",{parentName:"p",href:"https://hl7.org/fhir/downloads.html"},"in an implementation guide"),"."),(0,r.kt)("p",null,"There is an opportunity to use these formal specifications to generate code for implementation.\nThis is the strategy chosen for a number of Bonfhir packages."),(0,r.kt)("p",null,"The FHIR Definition files (as JSON) are stored in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bonfhir/bonfhir/tree/main/fhir"},(0,r.kt)("inlineCode",{parentName:"a"},"/fhir"))," folder, by their respective versions."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"codegen")," package provides a utility that can assist in generating code based on the FHIR definition files."),(0,r.kt)("p",null,"While the best to understand how code generation work is to inspect how some of the Bonfhir packages are built (e.g. the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bonfhir/bonfhir/tree/main/packages/core"},(0,r.kt)("inlineCode",{parentName:"a"},"core package")),", here is a quick guide to get started:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"each target package can contain one or more template files (usually using the ",(0,r.kt)("inlineCode",{parentName:"li"},".hbs")," extension)"),(0,r.kt)("li",{parentName:"ul"},"templates use the ",(0,r.kt)("a",{parentName:"li",href:"https://handlebarsjs.com/"},"handlebars")," templating language, with additional ",(0,r.kt)("a",{parentName:"li",href:"#template-helpers"},"helpers")," provided"),(0,r.kt)("li",{parentName:"ul"},"FHIR definition files can be loaded as the context to run the templates and generate source code")),(0,r.kt)("p",null,"The codegen CLI orchestrate the process by roughly executing ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bonfhir/bonfhir/blob/8c927f5469dd570fe55f9cdb86dad230403d204d/packages/codegen/src/commands/run/index.ts#L38"},"the following steps"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"load data files (usually FHIR definitions, but it can be any JSON file really) as the template evaluation context"),(0,r.kt)("li",{parentName:"ul"},"load custom javascript helpers (in the form of a Javascript file) that gets injected in the template context as well"),(0,r.kt)("li",{parentName:"ul"},"scan the target package for template files to execute"),(0,r.kt)("li",{parentName:"ul"},"render the template files one by one; template may render additional files by using the ",(0,r.kt)("a",{parentName:"li",href:"#writefiles"},(0,r.kt)("inlineCode",{parentName:"a"},"writeFiles"))," helper",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"by default, the target file name for the generated file is the template name minus the extension (e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"index.ts.hbs")," -> ",(0,r.kt)("inlineCode",{parentName:"li"},"index.ts"),")"))),(0,r.kt)("li",{parentName:"ul"},"execute any post-processing task on the generated files, such as running Prettier to format the code properly for example")),(0,r.kt)("p",null,"And this is all that's needed to generate code using FHIR specifications. You can find many examples throughout the Bonfhir codebase - look for ",(0,r.kt)("inlineCode",{parentName:"p"},".hbs")," files."),(0,r.kt)("h2",{id:"using-it-in-your-own-projects-and-packages"},"Using it in your own projects and packages"),(0,r.kt)("p",null,"It is possible to independently use the ",(0,r.kt)("inlineCode",{parentName:"p"},"codegen")," package in your own projects."),(0,r.kt)("p",null,"Here is how to get started:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install the package as a development dependency")),(0,r.kt)(l.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save-dev @bonfhir/codegen\n"))),(0,r.kt)(i.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add --dev @bonfhir/codegen\n")))),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Download FHIR definition files from ",(0,r.kt)("a",{parentName:"p",href:"https://hl7.org/fhir/downloads.html"},"https://hl7.org/fhir/downloads.html")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"We recommend using the ",(0,r.kt)("a",{parentName:"li",href:"https://hl7.org/fhir/definitions.json.zip"},"JSON FHIR Definitions")," as they are easier to work with generally."),(0,r.kt)("li",{parentName:"ul"},"If needed, you may also want to use ",(0,r.kt)("a",{parentName:"li",href:"https://hl7.org/fhir/expansions.json"},"ValueSet expansions")," as well"),(0,r.kt)("li",{parentName:"ul"},"Any additional custom ",(0,r.kt)("a",{parentName:"li",href:"https://hl7.org/fhir/profiling.html"},"FHIR Profile")," may also be used"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Author your templates using the ",(0,r.kt)("a",{parentName:"p",href:"https://handlebarsjs.com/guide/"},"handlebars")," syntax; you can leverage the ",(0,r.kt)("a",{parentName:"p",href:"#template-helpers"},"built-in codegen helpers"),", and add you own helpers in a javascript file as well.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run the code generation:"))),(0,r.kt)(l.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'npm run bonfhir-codegen run --data-json "<path to FHIR specification files>/**/*.json" --templates "<path to your project files>/**/*.hbs" --helpers "./<path to your custom helpers file if any>.js" --post-processing "prettier --write %files%"\n'))),(0,r.kt)(i.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'yarn bonfhir-codegen run --data-json "<path to FHIR specification files>/**/*.json" --templates "<path to your project files>/**/*.hbs" --helpers "./<path to your custom helpers file if any>.js" --post-processing "prettier --write %files%"\n')))),(0,r.kt)("h2",{id:"template-helpers"},"Template helpers"),(0,r.kt)("p",null,"The codegen package injects custom helpers to simplify authorship of templates:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"All the ",(0,r.kt)("a",{parentName:"li",href:"https://handlebarsjs.com/guide/builtin-helpers.html"},"Built-in Handlebar Helpers")),(0,r.kt)("li",{parentName:"ul"},"All the helpers provided by the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/helpers/handlebars-helpers"},"handlebars-helpers")," package"),(0,r.kt)("li",{parentName:"ul"},"The following ",(0,r.kt)("a",{parentName:"li",href:"https://lodash.com/"},"Lodash")," functions:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://lodash.com/docs/4.17.15#startCase"},"startCase")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://lodash.com/docs/4.17.15#uniq"},"uniq")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://lodash.com/docs/4.17.15#uniqBy"},"uniqBy"))))),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"codegen")," package also provides some additional helpers - ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bonfhir/bonfhir/tree/main/packages/codegen/src/commands/run/helpers"},"the exhaustive list to be found in the source code"),"."),(0,r.kt)("p",null,"Some notable helpers:"),(0,r.kt)("h3",{id:"fhirpath"},(0,r.kt)("inlineCode",{parentName:"h3"},"fhirPath")),(0,r.kt)("p",null,"Returns the result of evaluating a ",(0,r.kt)("a",{parentName:"p",href:"http://hl7.org/fhirpath/N1/"},"FHIRPath")," against a resource."),(0,r.kt)("p",null,'Example, to list all the Domain Resources listed in the FHIR Definition file named "profiles-resources.json":'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-handlebars"},'{{#each\n  (fhirPath\n    data.profiles-resources\n    "Bundle.entry.select(resource).ofType(StructureDefinition).where(baseDefinition=\'http://hl7.org/fhir/StructureDefinition/DomainResource\' and abstract=false)"\n  )\n}}\n  import type {\n  {{type}}\n  } from "fhir/r4";\n{{/each}}\n')),(0,r.kt)("p",null,"The helper contains also ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bonfhir/bonfhir/blob/main/packages/codegen/src/commands/run/helpers/fhirPath.ts#L3"},"a list of useful aliases")," to common FHIR Path requests.\nHere is how the example can also be written:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-handlebars"},'{{#each (fhirPath data.profiles-resources "Bundle/DomainResources")}}\n  import type {\n  {{type}}\n  } from "fhir/r4";\n{{/each}}\n')),(0,r.kt)("h3",{id:"writefiles"},(0,r.kt)("inlineCode",{parentName:"h3"},"writeFiles")),(0,r.kt)("p",null,"Allows rendering the content in a different file than the root of the template file.\nThe filename itself is also a template, which means it can be used in a loop."),(0,r.kt)("p",null,"Example to write one file per domain resource, each with a class with the name of the resource:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-handlebars"},'{{#each (fhirPath data.profiles-resources "Bundle/DomainResources")}}\n  {{#writeFile "{{type}}.ts"}}\n    class\n    {{type}}\n    {}\n  {{/writeFile}}\n{{/each}}\n')),(0,r.kt)("h3",{id:"safenameasvar"},(0,r.kt)("inlineCode",{parentName:"h3"},"safeNameAsVar")),(0,r.kt)("p",null,"Returns a string that can safely be used as a Typescript variable name"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-handlebars"},'{{#safeNameAsVar "12 ab"}} -> "twelveab"\n')),(0,r.kt)("h3",{id:"recursiveflatten"},(0,r.kt)("inlineCode",{parentName:"h3"},"recursiveFlatten")),(0,r.kt)("p",null,"Depth-first recursive exploration of an array using a single attribute."),(0,r.kt)("h3",{id:"elementimmediatepath"},(0,r.kt)("inlineCode",{parentName:"h3"},"elementImmediatePath")),(0,r.kt)("p",null,"Return the immediate path for a FHIR ",(0,r.kt)("a",{parentName:"p",href:"https://hl7.org/fhir/elementdefinition.html#ElementDefinition"},"Element Definition")," path property."))}d.isMDXComponent=!0},2009:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(2784),r=a(6277);const l="tabItem_OMyP";function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:a},t)}},1112:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(7896),r=a(2784),l=a(6277),i=a(9741),o=a(2244),s=a(8963),p=a(4126);const h="tabList_M0Dn",u="tabItem_ysIP";function c(e){const{lazy:t,block:a,defaultValue:i,values:c,groupId:d,className:m}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=c??f.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),k=(0,o.l)(g,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===i?i:i??f.find((e=>e.props.default))?.props.value??f[0].props.value;if(null!==b&&!g.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:N}=(0,s.U)(),[v,w]=(0,r.useState)(b),T=[],{blockElementScrollPositionUntilNextRender:x}=(0,p.o5)();if(null!=d){const e=y[d];null!=e&&e!==v&&g.some((t=>t.value===e))&&w(e)}const j=e=>{const t=e.currentTarget,a=T.indexOf(t),n=g[a].value;n!==v&&(x(t),w(n),null!=d&&N(d,String(n)))},I=e=>{let t=null;switch(e.key){case"Enter":j(e);break;case"ArrowRight":{const a=T.indexOf(e.currentTarget)+1;t=T[a]??T[0];break}case"ArrowLeft":{const a=T.indexOf(e.currentTarget)-1;t=T[a]??T[T.length-1];break}}t?.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",h)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},m)},g.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,key:t,ref:e=>T.push(e),onKeyDown:I,onClick:j},i,{className:(0,l.Z)("tabs__item",u,i?.className,{"tabs__item--active":v===t})}),a??t)}))),t?(0,r.cloneElement)(f.filter((e=>e.props.value===v))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==v})))))}function d(e){const t=(0,i.Z)();return r.createElement(c,(0,n.Z)({key:String(t)},e))}}}]);
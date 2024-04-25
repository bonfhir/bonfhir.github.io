"use strict";
(self["webpackChunk_bonfhir_website"] = self["webpackChunk_bonfhir_website"] || []).push([[2478],{

/***/ 9035:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* binding */ metadata),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3159);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15);
/* harmony import */ var _theme_Tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3719);
/* harmony import */ var _theme_TabItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3560);
/* harmony import */ var _theme_DocCardList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3589);


const frontMatter = {
	sidebar_position: 3,
	title: 'React'
};
const contentTitle = undefined;
const metadata = {
  "id": "react/index",
  "title": "React",
  "description": "npm",
  "source": "@site/packages/react/index.md",
  "sourceDirName": "react",
  "slug": "/react/",
  "permalink": "/packages/react/",
  "draft": false,
  "unlisted": false,
  "editUrl": "https://github.com/bonfhir/bonfhir/tree/main/docs/website/packages/react/index.md",
  "tags": [],
  "version": "current",
  "sidebarPosition": 3,
  "frontMatter": {
    "sidebar_position": 3,
    "title": "React"
  },
  "sidebar": "getStartedSidebar",
  "previous": {
    "title": "useFhirClientMutation",
    "permalink": "/packages/query/mutations/use-fhir-client-mutation"
  },
  "next": {
    "title": "Get started",
    "permalink": "/packages/react/get-started"
  }
};
const assets = {

};






const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    img: "img",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://www.npmjs.com/package/@bonfhir/react",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
          src: "https://img.shields.io/npm/v/@bonfhir/react",
          alt: "npm"
        })
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_theme_Tabs__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
      groupId: "npm2yarn",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_TabItem__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
        value: "npm",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-bash",
            children: "npm install @bonfhir/react\n"
          })
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_TabItem__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
        value: "yarn",
        label: "Yarn",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-bash",
            children: "yarn add @bonfhir/react\n"
          })
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_TabItem__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
        value: "pnpm",
        label: "pnpm",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-bash",
            children: "pnpm add @bonfhir/react\n"
          })
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["The ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "@bonfhir/react"
      }), " package provides ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://react.dev/",
        children: "React"
      }), " components to help with building web apps and\nnative mobile applications (with ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://reactnative.dev/",
        children: "React Native"
      }), ")."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "These components are render-less"
      }), " - which means that they can be customized to render the exact way that you want, and\ncan be used with different toolkits."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["bonFHIR presently ships with renderers for the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "/packages/react/mantine",
        children: "Mantine toolkit"
      }), ", and preliminary support for\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://gluestack.io/",
        children: "Gluestack UI"
      }), " for React Native."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_DocCardList__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {})]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return MDXLayout ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MDXLayout, {
    ...props,
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



/***/ }),

/***/ 3589:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ DocCardList)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js
var react = __webpack_require__(1855);
// EXTERNAL MODULE: ../../node_modules/.pnpm/clsx@2.1.0/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(1038);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@docusaurus+theme-common@3.2.1_@docusaurus+types@3.2.1_react-dom@18.2.0_react@18.2.0__react@1_s5pnyqh4ci2pn7qta2irhreb6e/node_modules/@docusaurus/theme-common/lib/utils/docsUtils.js
var docsUtils = __webpack_require__(9973);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@docusaurus+core@3.2.1_@docusaurus+types@3.2.1_react-dom@18.2.0_react@18.2.0__react@18.2.0__e_hcxlkhbkqepjgppjew2332zs7u/node_modules/@docusaurus/core/lib/client/exports/Link.js
var Link = __webpack_require__(2863);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@docusaurus+theme-common@3.2.1_@docusaurus+types@3.2.1_react-dom@18.2.0_react@18.2.0__react@1_s5pnyqh4ci2pn7qta2irhreb6e/node_modules/@docusaurus/theme-common/lib/utils/usePluralForm.js
var usePluralForm = __webpack_require__(3002);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@docusaurus+core@3.2.1_@docusaurus+types@3.2.1_react-dom@18.2.0_react@18.2.0__react@18.2.0__e_hcxlkhbkqepjgppjew2332zs7u/node_modules/@docusaurus/core/lib/client/exports/isInternalUrl.js
var isInternalUrl = __webpack_require__(7901);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@docusaurus+core@3.2.1_@docusaurus+types@3.2.1_react-dom@18.2.0_react@18.2.0__react@18.2.0__e_hcxlkhbkqepjgppjew2332zs7u/node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(4948);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@docusaurus+theme-classic@3.2.1_@types+react@18.2.75_eslint@8.57.0_react-dom@18.2.0_react@18._vpcgkk2w5bpjju3bczdj3rt4xa/node_modules/@docusaurus/theme-classic/lib/theme/Heading/index.js + 1 modules
var Heading = __webpack_require__(4498);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@docusaurus+theme-classic@3.2.1_@types+react@18.2.75_eslint@8.57.0_react-dom@18.2.0_react@18._vpcgkk2w5bpjju3bczdj3rt4xa/node_modules/@docusaurus/theme-classic/lib/theme/DocCard/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"cardContainer":"cardContainer_uomB","cardTitle":"cardTitle_xenk","cardDescription":"cardDescription_lQTS"});
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(3159);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@docusaurus+theme-classic@3.2.1_@types+react@18.2.75_eslint@8.57.0_react-dom@18.2.0_react@18._vpcgkk2w5bpjju3bczdj3rt4xa/node_modules/@docusaurus/theme-classic/lib/theme/DocCard/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function useCategoryItemsPlural(){const{selectMessage}=(0,usePluralForm/* usePluralForm */.W)();return count=>selectMessage(count,(0,Translate/* translate */.T)({message:'{count} items',id:'theme.docs.DocCard.categoryDescription.plurals',description:'The default description for a category card in the generated index about how many items this category includes'},{count}));}function CardContainer(_ref){let{href,children}=_ref;return/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.A,{href:href,className:(0,clsx/* default */.A)('card padding--lg',styles_module.cardContainer),children:children});}function CardLayout(_ref2){let{href,icon,title,description}=_ref2;return/*#__PURE__*/(0,jsx_runtime.jsxs)(CardContainer,{href:href,children:[/*#__PURE__*/(0,jsx_runtime.jsxs)(Heading/* default */.A,{as:"h2",className:(0,clsx/* default */.A)('text--truncate',styles_module.cardTitle),title:title,children:[icon," ",title]}),description&&/*#__PURE__*/(0,jsx_runtime.jsx)("p",{className:(0,clsx/* default */.A)('text--truncate',styles_module.cardDescription),title:description,children:description})]});}function CardCategory(_ref3){let{item}=_ref3;const href=(0,docsUtils/* findFirstSidebarItemLink */.Nr)(item);const categoryItemsPlural=useCategoryItemsPlural();// Unexpected: categories that don't have a link have been filtered upfront
if(!href){return null;}return/*#__PURE__*/(0,jsx_runtime.jsx)(CardLayout,{href:href,icon:"\uD83D\uDDC3\uFE0F",title:item.label,description:item.description??categoryItemsPlural(item.items.length)});}function CardLink(_ref4){let{item}=_ref4;const icon=(0,isInternalUrl/* default */.A)(item.href)?'📄️':'🔗';const doc=(0,docsUtils/* useDocById */.cC)(item.docId??undefined);return/*#__PURE__*/(0,jsx_runtime.jsx)(CardLayout,{href:item.href,icon:icon,title:item.label,description:item.description??doc?.description});}function DocCard(_ref5){let{item}=_ref5;switch(item.type){case'link':return/*#__PURE__*/(0,jsx_runtime.jsx)(CardLink,{item:item});case'category':return/*#__PURE__*/(0,jsx_runtime.jsx)(CardCategory,{item:item});default:throw new Error(`unknown item type ${JSON.stringify(item)}`);}}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@docusaurus+theme-classic@3.2.1_@types+react@18.2.75_eslint@8.57.0_react-dom@18.2.0_react@18._vpcgkk2w5bpjju3bczdj3rt4xa/node_modules/@docusaurus/theme-classic/lib/theme/DocCardList/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function DocCardListForCurrentSidebarCategory(_ref){let{className}=_ref;const category=(0,docsUtils/* useCurrentSidebarCategory */.$S)();return/*#__PURE__*/(0,jsx_runtime.jsx)(DocCardList,{items:category.items,className:className});}function DocCardList(props){const{items,className}=props;if(!items){return/*#__PURE__*/(0,jsx_runtime.jsx)(DocCardListForCurrentSidebarCategory,{...props});}const filteredItems=(0,docsUtils/* filterDocCardListItems */.d1)(items);return/*#__PURE__*/(0,jsx_runtime.jsx)("section",{className:(0,clsx/* default */.A)('row',className),children:filteredItems.map((item,index)=>/*#__PURE__*/(0,jsx_runtime.jsx)("article",{className:"col col--6 margin-bottom--lg",children:/*#__PURE__*/(0,jsx_runtime.jsx)(DocCard,{item:item})},index))});}

/***/ }),

/***/ 3560:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ TabItem)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js
var react = __webpack_require__(1855);
// EXTERNAL MODULE: ../../node_modules/.pnpm/clsx@2.1.0/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(1038);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@docusaurus+theme-classic@3.2.1_@types+react@18.2.75_eslint@8.57.0_react-dom@18.2.0_react@18._vpcgkk2w5bpjju3bczdj3rt4xa/node_modules/@docusaurus/theme-classic/lib/theme/TabItem/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"tabItem":"tabItem_H9Gb"});
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(3159);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@docusaurus+theme-classic@3.2.1_@types+react@18.2.75_eslint@8.57.0_react-dom@18.2.0_react@18._vpcgkk2w5bpjju3bczdj3rt4xa/node_modules/@docusaurus/theme-classic/lib/theme/TabItem/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function TabItem(_ref){let{children,hidden,className}=_ref;return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{role:"tabpanel",className:(0,clsx/* default */.A)(styles_module.tabItem,className),hidden,children:children});}

/***/ }),

/***/ 3719:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Tabs)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js
var react = __webpack_require__(1855);
// EXTERNAL MODULE: ../../node_modules/.pnpm/clsx@2.1.0/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(1038);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@docusaurus+theme-common@3.2.1_@docusaurus+types@3.2.1_react-dom@18.2.0_react@18.2.0__react@1_s5pnyqh4ci2pn7qta2irhreb6e/node_modules/@docusaurus/theme-common/lib/utils/scrollUtils.js
var scrollUtils = __webpack_require__(8079);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-router@5.3.4_react@18.2.0/node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(3178);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@docusaurus+core@3.2.1_@docusaurus+types@3.2.1_react-dom@18.2.0_react@18.2.0__react@18.2.0__e_hcxlkhbkqepjgppjew2332zs7u/node_modules/@docusaurus/core/lib/client/exports/useIsomorphicLayoutEffect.js
var useIsomorphicLayoutEffect = __webpack_require__(4926);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@docusaurus+theme-common@3.2.1_@docusaurus+types@3.2.1_react-dom@18.2.0_react@18.2.0__react@1_s5pnyqh4ci2pn7qta2irhreb6e/node_modules/@docusaurus/theme-common/lib/utils/historyUtils.js
var historyUtils = __webpack_require__(6224);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@docusaurus+theme-common@3.2.1_@docusaurus+types@3.2.1_react-dom@18.2.0_react@18.2.0__react@1_s5pnyqh4ci2pn7qta2irhreb6e/node_modules/@docusaurus/theme-common/lib/utils/jsUtils.js
var jsUtils = __webpack_require__(753);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@docusaurus+theme-common@3.2.1_@docusaurus+types@3.2.1_react-dom@18.2.0_react@18.2.0__react@1_s5pnyqh4ci2pn7qta2irhreb6e/node_modules/@docusaurus/theme-common/lib/utils/storageUtils.js
var storageUtils = __webpack_require__(8579);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@docusaurus+theme-common@3.2.1_@docusaurus+types@3.2.1_react-dom@18.2.0_react@18.2.0__react@1_s5pnyqh4ci2pn7qta2irhreb6e/node_modules/@docusaurus/theme-common/lib/utils/tabsUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// A very rough duck type, but good enough to guard against mistakes while
// allowing customization
function isTabItem(comp){const{props}=comp;return!!props&&typeof props==='object'&&'value'in props;}function sanitizeTabsChildren(children){return react.Children.toArray(children).filter(child=>child!=='\n').map(child=>{if(!child||/*#__PURE__*/(0,react.isValidElement)(child)&&isTabItem(child)){return child;}// child.type.name will give non-sensical values in prod because of
// minification, but we assume it won't throw in prod.
throw new Error(`Docusaurus error: Bad <Tabs> child <${// @ts-expect-error: guarding against unexpected cases
typeof child.type==='string'?child.type:child.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`);})?.filter(Boolean)??[];}function extractChildrenTabValues(children){return sanitizeTabsChildren(children).map(_ref=>{let{props:{value,label,attributes,default:isDefault}}=_ref;return{value,label,attributes,default:isDefault};});}function ensureNoDuplicateValue(values){const dup=(0,jsUtils/* duplicates */.X)(values,(a,b)=>a.value===b.value);if(dup.length>0){throw new Error(`Docusaurus error: Duplicate values "${dup.map(a=>a.value).join(', ')}" found in <Tabs>. Every value needs to be unique.`);}}function useTabValues(props){const{values:valuesProp,children}=props;return (0,react.useMemo)(()=>{const values=valuesProp??extractChildrenTabValues(children);ensureNoDuplicateValue(values);return values;},[valuesProp,children]);}function isValidValue(_ref2){let{value,tabValues}=_ref2;return tabValues.some(a=>a.value===value);}function getInitialStateValue(_ref3){let{defaultValue,tabValues}=_ref3;if(tabValues.length===0){throw new Error('Docusaurus error: the <Tabs> component requires at least one <TabItem> children component');}if(defaultValue){// Warn user about passing incorrect defaultValue as prop.
if(!isValidValue({value:defaultValue,tabValues})){throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${defaultValue}" but none of its children has the corresponding value. Available values are: ${tabValues.map(a=>a.value).join(', ')}. If you intend to show no default tab, use defaultValue={null} instead.`);}return defaultValue;}const defaultTabValue=tabValues.find(tabValue=>tabValue.default)??tabValues[0];if(!defaultTabValue){throw new Error('Unexpected error: 0 tabValues');}return defaultTabValue.value;}function getStorageKey(groupId){if(!groupId){return null;}return`docusaurus.tab.${groupId}`;}function getQueryStringKey(_ref4){let{queryString=false,groupId}=_ref4;if(typeof queryString==='string'){return queryString;}if(queryString===false){return null;}if(queryString===true&&!groupId){throw new Error(`Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".`);}return groupId??null;}function useTabQueryString(_ref5){let{queryString=false,groupId}=_ref5;const history=(0,react_router/* useHistory */.W6)();const key=getQueryStringKey({queryString,groupId});const value=(0,historyUtils/* useQueryStringValue */.aZ)(key);const setValue=(0,react.useCallback)(newValue=>{if(!key){return;// no-op
}const searchParams=new URLSearchParams(history.location.search);searchParams.set(key,newValue);history.replace({...history.location,search:searchParams.toString()});},[key,history]);return[value,setValue];}function useTabStorage(_ref6){let{groupId}=_ref6;const key=getStorageKey(groupId);const[value,storageSlot]=(0,storageUtils/* useStorageSlot */.Dv)(key);const setValue=(0,react.useCallback)(newValue=>{if(!key){return;// no-op
}storageSlot.set(newValue);},[key,storageSlot]);return[value,setValue];}function useTabs(props){const{defaultValue,queryString=false,groupId}=props;const tabValues=useTabValues(props);const[selectedValue,setSelectedValue]=(0,react.useState)(()=>getInitialStateValue({defaultValue,tabValues}));const[queryStringValue,setQueryString]=useTabQueryString({queryString,groupId});const[storageValue,setStorageValue]=useTabStorage({groupId});// We sync valid querystring/storage value to state on change + hydration
const valueToSync=(()=>{const value=queryStringValue??storageValue;if(!isValidValue({value,tabValues})){return null;}return value;})();// Sync in a layout/sync effect is important, for useScrollPositionBlocker
// See https://github.com/facebook/docusaurus/issues/8625
(0,useIsomorphicLayoutEffect/* default */.A)(()=>{if(valueToSync){setSelectedValue(valueToSync);}},[valueToSync]);const selectValue=(0,react.useCallback)(newValue=>{if(!isValidValue({value:newValue,tabValues})){throw new Error(`Can't select invalid tab value=${newValue}`);}setSelectedValue(newValue);setQueryString(newValue);setStorageValue(newValue);},[setQueryString,setStorageValue,tabValues]);return{selectedValue,selectValue,tabValues};}
// EXTERNAL MODULE: ../../node_modules/.pnpm/@docusaurus+core@3.2.1_@docusaurus+types@3.2.1_react-dom@18.2.0_react@18.2.0__react@18.2.0__e_hcxlkhbkqepjgppjew2332zs7u/node_modules/@docusaurus/core/lib/client/exports/useIsBrowser.js
var useIsBrowser = __webpack_require__(1926);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@docusaurus+theme-classic@3.2.1_@types+react@18.2.75_eslint@8.57.0_react-dom@18.2.0_react@18._vpcgkk2w5bpjju3bczdj3rt4xa/node_modules/@docusaurus/theme-classic/lib/theme/Tabs/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"tabList":"tabList_onsA","tabItem":"tabItem_yj6X"});
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(3159);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@docusaurus+theme-classic@3.2.1_@types+react@18.2.75_eslint@8.57.0_react-dom@18.2.0_react@18._vpcgkk2w5bpjju3bczdj3rt4xa/node_modules/@docusaurus/theme-classic/lib/theme/Tabs/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function TabList(_ref){let{className,block,selectedValue,selectValue,tabValues}=_ref;const tabRefs=[];const{blockElementScrollPositionUntilNextRender}=(0,scrollUtils/* useScrollPositionBlocker */.a_)();const handleTabChange=event=>{const newTab=event.currentTarget;const newTabIndex=tabRefs.indexOf(newTab);const newTabValue=tabValues[newTabIndex].value;if(newTabValue!==selectedValue){blockElementScrollPositionUntilNextRender(newTab);selectValue(newTabValue);}};const handleKeydown=event=>{let focusElement=null;switch(event.key){case'Enter':{handleTabChange(event);break;}case'ArrowRight':{const nextTab=tabRefs.indexOf(event.currentTarget)+1;focusElement=tabRefs[nextTab]??tabRefs[0];break;}case'ArrowLeft':{const prevTab=tabRefs.indexOf(event.currentTarget)-1;focusElement=tabRefs[prevTab]??tabRefs[tabRefs.length-1];break;}default:break;}focusElement?.focus();};return/*#__PURE__*/(0,jsx_runtime.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,clsx/* default */.A)('tabs',{'tabs--block':block},className),children:tabValues.map(_ref2=>{let{value,label,attributes}=_ref2;return/*#__PURE__*/(0,jsx_runtime.jsx)("li",{// TODO extract TabListItem
role:"tab",tabIndex:selectedValue===value?0:-1,"aria-selected":selectedValue===value,ref:tabControl=>tabRefs.push(tabControl),onKeyDown:handleKeydown,onClick:handleTabChange,...attributes,className:(0,clsx/* default */.A)('tabs__item',styles_module.tabItem,attributes?.className,{'tabs__item--active':selectedValue===value}),children:label??value},value);})});}function TabContent(_ref3){let{lazy,children,selectedValue}=_ref3;const childTabs=(Array.isArray(children)?children:[children]).filter(Boolean);if(lazy){const selectedTabItem=childTabs.find(tabItem=>tabItem.props.value===selectedValue);if(!selectedTabItem){// fail-safe or fail-fast? not sure what's best here
return null;}return/*#__PURE__*/(0,react.cloneElement)(selectedTabItem,{className:'margin-top--md'});}return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"margin-top--md",children:childTabs.map((tabItem,i)=>/*#__PURE__*/(0,react.cloneElement)(tabItem,{key:i,hidden:tabItem.props.value!==selectedValue}))});}function TabsComponent(props){const tabs=useTabs(props);return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:(0,clsx/* default */.A)('tabs-container',styles_module.tabList),children:[/*#__PURE__*/(0,jsx_runtime.jsx)(TabList,{...props,...tabs}),/*#__PURE__*/(0,jsx_runtime.jsx)(TabContent,{...props,...tabs})]});}function Tabs(props){const isBrowser=(0,useIsBrowser/* default */.A)();return/*#__PURE__*/(0,jsx_runtime.jsx)(TabsComponent// Remount tabs after hydration
// Temporary fix for https://github.com/facebook/docusaurus/issues/5653
,{...props,children:sanitizeTabsChildren(props.children)},String(isBrowser));}

/***/ }),

/***/ 3002:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ usePluralForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1855);
/* harmony import */ var _docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4503);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// We want to ensurer a stable plural form order in all cases
// It is more convenient and natural to handle "small values" first
// See https://twitter.com/sebastienlorber/status/1366820663261077510
const OrderedPluralForms=['zero','one','two','few','many','other'];function sortPluralForms(pluralForms){return OrderedPluralForms.filter(pf=>pluralForms.includes(pf));}// Hardcoded english/fallback implementation
const EnglishPluralForms={locale:'en',pluralForms:sortPluralForms(['one','other']),select:count=>count===1?'one':'other'};function createLocalePluralForms(locale){const pluralRules=new Intl.PluralRules(locale);return{locale,pluralForms:sortPluralForms(pluralRules.resolvedOptions().pluralCategories),select:count=>pluralRules.select(count)};}/**
 * Poor man's `PluralSelector` implementation, using an English fallback. We
 * want a lightweight, future-proof and good-enough solution. We don't want a
 * perfect and heavy solution.
 *
 * Docusaurus classic theme has only 2 deeply nested labels requiring complex
 * plural rules. We don't want to use `Intl` + `PluralRules` polyfills + full
 * ICU syntax (react-intl) just for that.
 *
 * Notes:
 * - 2021: 92+% Browsers support `Intl.PluralRules`, and support will increase
 * in the future
 * - NodeJS >= 13 has full ICU support by default
 * - In case of "mismatch" between SSR and Browser ICU support, React keeps
 * working!
 */function useLocalePluralForms(){const{i18n:{currentLocale}}=(0,_docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)();return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{try{return createLocalePluralForms(currentLocale);}catch(err){console.error(`Failed to use Intl.PluralRules for locale "${currentLocale}".
Docusaurus will fallback to the default (English) implementation.
Error: ${err.message}
`);return EnglishPluralForms;}},[currentLocale]);}function selectPluralMessage(pluralMessages,count,localePluralForms){const separator='|';const parts=pluralMessages.split(separator);if(parts.length===1){return parts[0];}if(parts.length>localePluralForms.pluralForms.length){console.error(`For locale=${localePluralForms.locale}, a maximum of ${localePluralForms.pluralForms.length} plural forms are expected (${localePluralForms.pluralForms.join(',')}), but the message contains ${parts.length}: ${pluralMessages}`);}const pluralForm=localePluralForms.select(count);const pluralFormIndex=localePluralForms.pluralForms.indexOf(pluralForm);// In case of not enough plural form messages, we take the last one (other)
// instead of returning undefined
return parts[Math.min(pluralFormIndex,parts.length-1)];}/**
 * Reads the current locale and returns an interface very similar to
 * `Intl.PluralRules`.
 */function usePluralForm(){const localePluralForm=useLocalePluralForms();return{selectMessage:(count,pluralMessages)=>selectPluralMessage(pluralMessages,count,localePluralForm)};}

/***/ }),

/***/ 15:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ useMDXComponents),
/* harmony export */   x: () => (/* binding */ MDXProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1855);
/**
 * @typedef {import('mdx/types.js').MDXComponents} MDXComponents
 * @typedef {import('react').Component<{}, {}, unknown>} Component
 * @typedef {import('react').ReactNode} ReactNode
 */

/**
 * @callback MergeComponents
 *   Custom merge function.
 * @param {Readonly<MDXComponents>} currentComponents
 *   Current components from the context.
 * @returns {MDXComponents}
 *   Additional components.
 *
 * @typedef Props
 *   Configuration for `MDXProvider`.
 * @property {ReactNode | null | undefined} [children]
 *   Children (optional).
 * @property {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @property {boolean | null | undefined} [disableParentContext=false]
 *   Turn off outer component context (default: `false`).
 */



/** @type {Readonly<MDXComponents>} */
const emptyComponents = {}

const MDXContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents)

/**
 * Get current components from the MDX Context.
 *
 * @param {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @returns {MDXComponents}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    function () {
      // Custom merge via a function prop
      if (typeof components === 'function') {
        return components(contextComponents)
      }

      return {...contextComponents, ...components}
    },
    [contextComponents, components]
  )
}

/**
 * Provider for MDX context.
 *
 * @param {Readonly<Props>} properties
 *   Properties.
 * @returns {JSX.Element}
 *   Element.
 * @satisfies {Component}
 */
function MDXProvider(properties) {
  /** @type {Readonly<MDXComponents>} */
  let allComponents

  if (properties.disableParentContext) {
    allComponents =
      typeof properties.components === 'function'
        ? properties.components(emptyComponents)
        : properties.components || emptyComponents
  } else {
    allComponents = useMDXComponents(properties.components)
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    MDXContext.Provider,
    {value: allComponents},
    properties.children
  )
}


/***/ })

}]);
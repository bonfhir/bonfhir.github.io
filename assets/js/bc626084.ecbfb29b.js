"use strict";
(self["webpackChunkwebsite"] = self["webpackChunkwebsite"] || []).push([[2848],{

/***/ 4165:
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
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7458);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3405);
/* harmony import */ var _theme_DocCardList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3416);


const frontMatter = {
	sidebar_position: 1,
	title: 'Build a FHIR app with React'
};
const contentTitle = undefined;
const metadata = {
  "id": "build-a-fhir-app-with-react/index",
  "title": "Build a FHIR app with React",
  "description": "Create a simple FHIR web app using the Vite template.",
  "source": "@site/docs/build-a-fhir-app-with-react/index.md",
  "sourceDirName": "build-a-fhir-app-with-react",
  "slug": "/build-a-fhir-app-with-react/",
  "permalink": "/docs/build-a-fhir-app-with-react/",
  "draft": false,
  "unlisted": false,
  "editUrl": "https://github.com/bonfhir/bonfhir/tree/main/docs/website/docs/build-a-fhir-app-with-react/index.md",
  "tags": [],
  "version": "current",
  "sidebarPosition": 1,
  "frontMatter": {
    "sidebar_position": 1,
    "title": "Build a FHIR app with React"
  },
  "sidebar": "getStartedSidebar",
  "previous": {
    "title": "Welcome to Bonfhir",
    "permalink": "/docs/welcome"
  },
  "next": {
    "title": "Start from the Vite template",
    "permalink": "/docs/build-a-fhir-app-with-react/start-from-vite-template"
  }
};
const assets = {

};




const toc = [{
  "value": "What you&#39;ll need",
  "id": "what-youll-need",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .a)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Create a simple FHIR web app using the Vite template."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "These guides will walk you through key BonFHIR concepts and every step of the process,\nfrom setup to a fully functional web app with tables and inputs."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "what-youll-need",
      children: "What you'll need"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://nodejs.org/en/download/",
          children: "Node.js v18+"
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://docs.docker.com/desktop/",
          children: "Docker"
        })
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_DocCardList__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {})]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .a)(),
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

/***/ 3416:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ DocCardList)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js
var react = __webpack_require__(2983);
// EXTERNAL MODULE: ../../node_modules/.pnpm/clsx@2.0.0/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(8934);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@docusaurus+theme-common@3.0.1_@docusaurus+types@3.0.1_react-dom@18.2.0_react@18.2.0_typescript@5.3.3/node_modules/@docusaurus/theme-common/lib/utils/docsUtils.js
var docsUtils = __webpack_require__(3982);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@docusaurus+core@3.0.1_@docusaurus+types@3.0.1_react-dom@18.2.0_react@18.2.0_typescript@5.3.3/node_modules/@docusaurus/core/lib/client/exports/Link.js + 1 modules
var Link = __webpack_require__(7668);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@docusaurus+core@3.0.1_@docusaurus+types@3.0.1_react-dom@18.2.0_react@18.2.0_typescript@5.3.3/node_modules/@docusaurus/core/lib/client/exports/isInternalUrl.js
var isInternalUrl = __webpack_require__(8090);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@docusaurus+core@3.0.1_@docusaurus+types@3.0.1_react-dom@18.2.0_react@18.2.0_typescript@5.3.3/node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(7813);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@docusaurus+theme-classic@3.0.1_@types+react@18.2.43_react-dom@18.2.0_react@18.2.0_typescript@5.3.3/node_modules/@docusaurus/theme-classic/lib/theme/Heading/index.js + 1 modules
var Heading = __webpack_require__(3809);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@docusaurus+theme-classic@3.0.1_@types+react@18.2.43_react-dom@18.2.0_react@18.2.0_typescript@5.3.3/node_modules/@docusaurus/theme-classic/lib/theme/DocCard/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"cardContainer":"cardContainer_USZD","cardTitle":"cardTitle_yi2M","cardDescription":"cardDescription_M6eu"});
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(7458);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@docusaurus+theme-classic@3.0.1_@types+react@18.2.43_react-dom@18.2.0_react@18.2.0_typescript@5.3.3/node_modules/@docusaurus/theme-classic/lib/theme/DocCard/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function CardContainer(_ref){let{href,children}=_ref;return/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.Z,{href:href,className:(0,clsx/* default */.Z)('card padding--lg',styles_module.cardContainer),children:children});}function CardLayout(_ref2){let{href,icon,title,description}=_ref2;return/*#__PURE__*/(0,jsx_runtime.jsxs)(CardContainer,{href:href,children:[/*#__PURE__*/(0,jsx_runtime.jsxs)(Heading/* default */.Z,{as:"h2",className:(0,clsx/* default */.Z)('text--truncate',styles_module.cardTitle),title:title,children:[icon," ",title]}),description&&/*#__PURE__*/(0,jsx_runtime.jsx)("p",{className:(0,clsx/* default */.Z)('text--truncate',styles_module.cardDescription),title:description,children:description})]});}function CardCategory(_ref3){let{item}=_ref3;const href=(0,docsUtils/* findFirstSidebarItemLink */.LM)(item);// Unexpected: categories that don't have a link have been filtered upfront
if(!href){return null;}return/*#__PURE__*/(0,jsx_runtime.jsx)(CardLayout,{href:href,icon:"\uD83D\uDDC3\uFE0F",title:item.label,description:item.description??(0,Translate/* translate */.I)({message:'{count} items',id:'theme.docs.DocCard.categoryDescription',description:'The default description for a category card in the generated index about how many items this category includes'},{count:item.items.length})});}function CardLink(_ref4){let{item}=_ref4;const icon=(0,isInternalUrl/* default */.Z)(item.href)?'📄️':'🔗';const doc=(0,docsUtils/* useDocById */.xz)(item.docId??undefined);return/*#__PURE__*/(0,jsx_runtime.jsx)(CardLayout,{href:item.href,icon:icon,title:item.label,description:item.description??doc?.description});}function DocCard(_ref5){let{item}=_ref5;switch(item.type){case'link':return/*#__PURE__*/(0,jsx_runtime.jsx)(CardLink,{item:item});case'category':return/*#__PURE__*/(0,jsx_runtime.jsx)(CardCategory,{item:item});default:throw new Error(`unknown item type ${JSON.stringify(item)}`);}}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@docusaurus+theme-classic@3.0.1_@types+react@18.2.43_react-dom@18.2.0_react@18.2.0_typescript@5.3.3/node_modules/@docusaurus/theme-classic/lib/theme/DocCardList/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function DocCardListForCurrentSidebarCategory(_ref){let{className}=_ref;const category=(0,docsUtils/* useCurrentSidebarCategory */.jA)();return/*#__PURE__*/(0,jsx_runtime.jsx)(DocCardList,{items:category.items,className:className});}function DocCardList(props){const{items,className}=props;if(!items){return/*#__PURE__*/(0,jsx_runtime.jsx)(DocCardListForCurrentSidebarCategory,{...props});}const filteredItems=(0,docsUtils/* filterDocCardListItems */.MN)(items);return/*#__PURE__*/(0,jsx_runtime.jsx)("section",{className:(0,clsx/* default */.Z)('row',className),children:filteredItems.map((item,index)=>/*#__PURE__*/(0,jsx_runtime.jsx)("article",{className:"col col--6 margin-bottom--lg",children:/*#__PURE__*/(0,jsx_runtime.jsx)(DocCard,{item:item})},index))});}

/***/ }),

/***/ 3405:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ MDXProvider),
/* harmony export */   a: () => (/* binding */ useMDXComponents)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2983);
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
 * @param {Readonly<Props>} props
 *   Props.
 * @returns {JSX.Element}
 *   Element.
 * @satisfies {Component}
 */
function MDXProvider(props) {
  /** @type {Readonly<MDXComponents>} */
  let allComponents

  if (props.disableParentContext) {
    allComponents =
      typeof props.components === 'function'
        ? props.components(emptyComponents)
        : props.components || emptyComponents
  } else {
    allComponents = useMDXComponents(props.components)
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    MDXContext.Provider,
    {value: allComponents},
    props.children
  )
}


/***/ })

}]);
"use strict";
(self["webpackChunkwebsite"] = self["webpackChunkwebsite"] || []).push([[817],{

/***/ 5993:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ DocBreadcrumbs)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js
var react = __webpack_require__(2983);
// EXTERNAL MODULE: ../../node_modules/.pnpm/clsx@1.2.1/node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(4517);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@docusaurus+theme-common@3.0.0_@docusaurus+types@3.0.0_react-dom@18.2.0_react@18.2.0_typescript@5.2.2/node_modules/@docusaurus/theme-common/lib/utils/ThemeClassNames.js
var ThemeClassNames = __webpack_require__(6114);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@docusaurus+theme-common@3.0.0_@docusaurus+types@3.0.0_react-dom@18.2.0_react@18.2.0_typescript@5.2.2/node_modules/@docusaurus/theme-common/lib/utils/docsUtils.js + 1 modules
var docsUtils = __webpack_require__(2411);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@docusaurus+theme-common@3.0.0_@docusaurus+types@3.0.0_react-dom@18.2.0_react@18.2.0_typescript@5.2.2/node_modules/@docusaurus/theme-common/lib/utils/routesUtils.js
var routesUtils = __webpack_require__(9288);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@docusaurus+core@3.0.0_@docusaurus+types@3.0.0_react-dom@18.2.0_react@18.2.0_typescript@5.2.2/node_modules/@docusaurus/core/lib/client/exports/Link.js + 1 modules
var Link = __webpack_require__(8887);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@docusaurus+core@3.0.0_@docusaurus+types@3.0.0_react-dom@18.2.0_react@18.2.0_typescript@5.2.2/node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(9198);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@docusaurus+core@3.0.0_@docusaurus+types@3.0.0_react-dom@18.2.0_react@18.2.0_typescript@5.2.2/node_modules/@docusaurus/core/lib/client/exports/useBaseUrl.js
var useBaseUrl = __webpack_require__(1069);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(7458);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@docusaurus+theme-classic@3.0.0_@types+react@18.2.37_react-dom@18.2.0_react@18.2.0_typescript@5.2.2/node_modules/@docusaurus/theme-classic/lib/theme/Icon/Home/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function IconHome(props){return/*#__PURE__*/(0,jsx_runtime.jsx)("svg",{viewBox:"0 0 24 24",...props,children:/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})});}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@docusaurus+theme-classic@3.0.0_@types+react@18.2.37_react-dom@18.2.0_react@18.2.0_typescript@5.2.2/node_modules/@docusaurus/theme-classic/lib/theme/DocBreadcrumbs/Items/Home/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"breadcrumbHomeIcon":"breadcrumbHomeIcon_q4Vr"});
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@docusaurus+theme-classic@3.0.0_@types+react@18.2.37_react-dom@18.2.0_react@18.2.0_typescript@5.2.2/node_modules/@docusaurus/theme-classic/lib/theme/DocBreadcrumbs/Items/Home/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function HomeBreadcrumbItem(){const homeHref=(0,useBaseUrl/* default */.Z)('/');return/*#__PURE__*/(0,jsx_runtime.jsx)("li",{className:"breadcrumbs__item",children:/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.Z,{"aria-label":(0,Translate/* translate */.I)({id:'theme.docs.breadcrumbs.home',message:'Home page',description:'The ARIA label for the home page in the breadcrumbs'}),className:"breadcrumbs__link",href:homeHref,children:/*#__PURE__*/(0,jsx_runtime.jsx)(IconHome,{className:styles_module.breadcrumbHomeIcon})})});}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@docusaurus+theme-classic@3.0.0_@types+react@18.2.37_react-dom@18.2.0_react@18.2.0_typescript@5.2.2/node_modules/@docusaurus/theme-classic/lib/theme/DocBreadcrumbs/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const DocBreadcrumbs_styles_module = ({"breadcrumbsContainer":"breadcrumbsContainer_spwP"});
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@docusaurus+theme-classic@3.0.0_@types+react@18.2.37_react-dom@18.2.0_react@18.2.0_typescript@5.2.2/node_modules/@docusaurus/theme-classic/lib/theme/DocBreadcrumbs/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// TODO move to design system folder
function BreadcrumbsItemLink(_ref){let{children,href,isLast}=_ref;const className='breadcrumbs__link';if(isLast){return/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:className,itemProp:"name",children:children});}return href?/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.Z,{className:className,href:href,itemProp:"item",children:/*#__PURE__*/(0,jsx_runtime.jsx)("span",{itemProp:"name",children:children})}):/*#__PURE__*/ // TODO Google search console doesn't like breadcrumb items without href.
// The schema doesn't seem to require `id` for each `item`, although Google
// insist to infer one, even if it's invalid. Removing `itemProp="item
// name"` for now, since I don't know how to properly fix it.
// See https://github.com/facebook/docusaurus/issues/7241
(0,jsx_runtime.jsx)("span",{className:className,children:children});}// TODO move to design system folder
function BreadcrumbsItem(_ref2){let{children,active,index,addMicrodata}=_ref2;return/*#__PURE__*/(0,jsx_runtime.jsxs)("li",{...(addMicrodata&&{itemScope:true,itemProp:'itemListElement',itemType:'https://schema.org/ListItem'}),className:(0,clsx_m/* default */.Z)('breadcrumbs__item',{'breadcrumbs__item--active':active}),children:[children,/*#__PURE__*/(0,jsx_runtime.jsx)("meta",{itemProp:"position",content:String(index+1)})]});}function DocBreadcrumbs(){const breadcrumbs=(0,docsUtils/* useSidebarBreadcrumbs */.s1)();const homePageRoute=(0,routesUtils/* useHomePageRoute */.Ns)();if(!breadcrumbs){return null;}return/*#__PURE__*/(0,jsx_runtime.jsx)("nav",{className:(0,clsx_m/* default */.Z)(ThemeClassNames/* ThemeClassNames */.k.docs.docBreadcrumbs,DocBreadcrumbs_styles_module.breadcrumbsContainer),"aria-label":(0,Translate/* translate */.I)({id:'theme.docs.breadcrumbs.navAriaLabel',message:'Breadcrumbs',description:'The ARIA label for the breadcrumbs'}),children:/*#__PURE__*/(0,jsx_runtime.jsxs)("ul",{className:"breadcrumbs",itemScope:true,itemType:"https://schema.org/BreadcrumbList",children:[homePageRoute&&/*#__PURE__*/(0,jsx_runtime.jsx)(HomeBreadcrumbItem,{}),breadcrumbs.map((item,idx)=>{const isLast=idx===breadcrumbs.length-1;const href=item.type==='category'&&item.linkUnlisted?undefined:item.href;return/*#__PURE__*/(0,jsx_runtime.jsx)(BreadcrumbsItem,{active:isLast,index:idx,addMicrodata:!!href,children:/*#__PURE__*/(0,jsx_runtime.jsx)(BreadcrumbsItemLink,{href:href,isLast:isLast,children:item.label})},idx);})]})});}

/***/ }),

/***/ 2473:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ DocCategoryGeneratedIndexPage)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js
var react = __webpack_require__(2983);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@docusaurus+theme-common@3.0.0_@docusaurus+types@3.0.0_react-dom@18.2.0_react@18.2.0_typescript@5.2.2/node_modules/@docusaurus/theme-common/lib/utils/metadataUtils.js + 2 modules
var metadataUtils = __webpack_require__(5474);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@docusaurus+theme-common@3.0.0_@docusaurus+types@3.0.0_react-dom@18.2.0_react@18.2.0_typescript@5.2.2/node_modules/@docusaurus/theme-common/lib/utils/docsUtils.js + 1 modules
var docsUtils = __webpack_require__(2411);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@docusaurus+core@3.0.0_@docusaurus+types@3.0.0_react-dom@18.2.0_react@18.2.0_typescript@5.2.2/node_modules/@docusaurus/core/lib/client/exports/useBaseUrl.js
var useBaseUrl = __webpack_require__(1069);
// EXTERNAL MODULE: ../../node_modules/.pnpm/clsx@1.2.1/node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(4517);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@docusaurus+core@3.0.0_@docusaurus+types@3.0.0_react-dom@18.2.0_react@18.2.0_typescript@5.2.2/node_modules/@docusaurus/core/lib/client/exports/Link.js + 1 modules
var Link = __webpack_require__(8887);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@docusaurus+core@3.0.0_@docusaurus+types@3.0.0_react-dom@18.2.0_react@18.2.0_typescript@5.2.2/node_modules/@docusaurus/core/lib/client/exports/isInternalUrl.js
var isInternalUrl = __webpack_require__(6792);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@docusaurus+core@3.0.0_@docusaurus+types@3.0.0_react-dom@18.2.0_react@18.2.0_typescript@5.2.2/node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(9198);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@docusaurus+theme-classic@3.0.0_@types+react@18.2.37_react-dom@18.2.0_react@18.2.0_typescript@5.2.2/node_modules/@docusaurus/theme-classic/lib/theme/Heading/index.js + 1 modules
var Heading = __webpack_require__(8533);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@docusaurus+theme-classic@3.0.0_@types+react@18.2.37_react-dom@18.2.0_react@18.2.0_typescript@5.2.2/node_modules/@docusaurus/theme-classic/lib/theme/DocCard/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"cardContainer":"cardContainer_OQUl","cardTitle":"cardTitle_qgE7","cardDescription":"cardDescription_Sh4T"});
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(7458);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@docusaurus+theme-classic@3.0.0_@types+react@18.2.37_react-dom@18.2.0_react@18.2.0_typescript@5.2.2/node_modules/@docusaurus/theme-classic/lib/theme/DocCard/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function CardContainer(_ref){let{href,children}=_ref;return/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.Z,{href:href,className:(0,clsx_m/* default */.Z)('card padding--lg',styles_module.cardContainer),children:children});}function CardLayout(_ref2){let{href,icon,title,description}=_ref2;return/*#__PURE__*/(0,jsx_runtime.jsxs)(CardContainer,{href:href,children:[/*#__PURE__*/(0,jsx_runtime.jsxs)(Heading/* default */.Z,{as:"h2",className:(0,clsx_m/* default */.Z)('text--truncate',styles_module.cardTitle),title:title,children:[icon," ",title]}),description&&/*#__PURE__*/(0,jsx_runtime.jsx)("p",{className:(0,clsx_m/* default */.Z)('text--truncate',styles_module.cardDescription),title:description,children:description})]});}function CardCategory(_ref3){let{item}=_ref3;const href=(0,docsUtils/* findFirstSidebarItemLink */.LM)(item);// Unexpected: categories that don't have a link have been filtered upfront
if(!href){return null;}return/*#__PURE__*/(0,jsx_runtime.jsx)(CardLayout,{href:href,icon:"\uD83D\uDDC3\uFE0F",title:item.label,description:item.description??(0,Translate/* translate */.I)({message:'{count} items',id:'theme.docs.DocCard.categoryDescription',description:'The default description for a category card in the generated index about how many items this category includes'},{count:item.items.length})});}function CardLink(_ref4){let{item}=_ref4;const icon=(0,isInternalUrl/* default */.Z)(item.href)?'📄️':'🔗';const doc=(0,docsUtils/* useDocById */.xz)(item.docId??undefined);return/*#__PURE__*/(0,jsx_runtime.jsx)(CardLayout,{href:item.href,icon:icon,title:item.label,description:item.description??doc?.description});}function DocCard(_ref5){let{item}=_ref5;switch(item.type){case'link':return/*#__PURE__*/(0,jsx_runtime.jsx)(CardLink,{item:item});case'category':return/*#__PURE__*/(0,jsx_runtime.jsx)(CardCategory,{item:item});default:throw new Error(`unknown item type ${JSON.stringify(item)}`);}}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@docusaurus+theme-classic@3.0.0_@types+react@18.2.37_react-dom@18.2.0_react@18.2.0_typescript@5.2.2/node_modules/@docusaurus/theme-classic/lib/theme/DocCardList/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function DocCardListForCurrentSidebarCategory(_ref){let{className}=_ref;const category=(0,docsUtils/* useCurrentSidebarCategory */.jA)();return/*#__PURE__*/(0,jsx_runtime.jsx)(DocCardList,{items:category.items,className:className});}function DocCardList(props){const{items,className}=props;if(!items){return/*#__PURE__*/(0,jsx_runtime.jsx)(DocCardListForCurrentSidebarCategory,{...props});}const filteredItems=(0,docsUtils/* filterDocCardListItems */.MN)(items);return/*#__PURE__*/(0,jsx_runtime.jsx)("section",{className:(0,clsx_m/* default */.Z)('row',className),children:filteredItems.map((item,index)=>/*#__PURE__*/(0,jsx_runtime.jsx)("article",{className:"col col--6 margin-bottom--lg",children:/*#__PURE__*/(0,jsx_runtime.jsx)(DocCard,{item:item})},index))});}
// EXTERNAL MODULE: ../../node_modules/.pnpm/@docusaurus+theme-classic@3.0.0_@types+react@18.2.37_react-dom@18.2.0_react@18.2.0_typescript@5.2.2/node_modules/@docusaurus/theme-classic/lib/theme/DocPaginator/index.js + 1 modules
var DocPaginator = __webpack_require__(2565);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@docusaurus+theme-classic@3.0.0_@types+react@18.2.37_react-dom@18.2.0_react@18.2.0_typescript@5.2.2/node_modules/@docusaurus/theme-classic/lib/theme/DocVersionBanner/index.js
var DocVersionBanner = __webpack_require__(6961);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@docusaurus+theme-classic@3.0.0_@types+react@18.2.37_react-dom@18.2.0_react@18.2.0_typescript@5.2.2/node_modules/@docusaurus/theme-classic/lib/theme/DocVersionBadge/index.js
var DocVersionBadge = __webpack_require__(5495);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@docusaurus+theme-classic@3.0.0_@types+react@18.2.37_react-dom@18.2.0_react@18.2.0_typescript@5.2.2/node_modules/@docusaurus/theme-classic/lib/theme/DocBreadcrumbs/index.js + 4 modules
var DocBreadcrumbs = __webpack_require__(5993);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@docusaurus+theme-classic@3.0.0_@types+react@18.2.37_react-dom@18.2.0_react@18.2.0_typescript@5.2.2/node_modules/@docusaurus/theme-classic/lib/theme/DocCategoryGeneratedIndexPage/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const DocCategoryGeneratedIndexPage_styles_module = ({"generatedIndexPage":"generatedIndexPage_dAvp","list":"list_s9ue","title":"title_SyyN"});
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@docusaurus+theme-classic@3.0.0_@types+react@18.2.37_react-dom@18.2.0_react@18.2.0_typescript@5.2.2/node_modules/@docusaurus/theme-classic/lib/theme/DocCategoryGeneratedIndexPage/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function DocCategoryGeneratedIndexPageMetadata(_ref){let{categoryGeneratedIndex}=_ref;return/*#__PURE__*/(0,jsx_runtime.jsx)(metadataUtils/* PageMetadata */.d,{title:categoryGeneratedIndex.title,description:categoryGeneratedIndex.description,keywords:categoryGeneratedIndex.keywords// TODO `require` this?
,image:(0,useBaseUrl/* default */.Z)(categoryGeneratedIndex.image)});}function DocCategoryGeneratedIndexPageContent(_ref2){let{categoryGeneratedIndex}=_ref2;const category=(0,docsUtils/* useCurrentSidebarCategory */.jA)();return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:DocCategoryGeneratedIndexPage_styles_module.generatedIndexPage,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(DocVersionBanner/* default */.Z,{}),/*#__PURE__*/(0,jsx_runtime.jsx)(DocBreadcrumbs/* default */.Z,{}),/*#__PURE__*/(0,jsx_runtime.jsx)(DocVersionBadge/* default */.Z,{}),/*#__PURE__*/(0,jsx_runtime.jsxs)("header",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Heading/* default */.Z,{as:"h1",className:DocCategoryGeneratedIndexPage_styles_module.title,children:categoryGeneratedIndex.title}),categoryGeneratedIndex.description&&/*#__PURE__*/(0,jsx_runtime.jsx)("p",{children:categoryGeneratedIndex.description})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("article",{className:"margin-top--lg",children:/*#__PURE__*/(0,jsx_runtime.jsx)(DocCardList,{items:category.items,className:DocCategoryGeneratedIndexPage_styles_module.list})}),/*#__PURE__*/(0,jsx_runtime.jsx)("footer",{className:"margin-top--lg",children:/*#__PURE__*/(0,jsx_runtime.jsx)(DocPaginator/* default */.Z,{previous:categoryGeneratedIndex.navigation.previous,next:categoryGeneratedIndex.navigation.next})})]});}function DocCategoryGeneratedIndexPage(props){return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(DocCategoryGeneratedIndexPageMetadata,{...props}),/*#__PURE__*/(0,jsx_runtime.jsx)(DocCategoryGeneratedIndexPageContent,{...props})]});}

/***/ }),

/***/ 2565:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ DocPaginator)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js
var react = __webpack_require__(2983);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@docusaurus+core@3.0.0_@docusaurus+types@3.0.0_react-dom@18.2.0_react@18.2.0_typescript@5.2.2/node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(9198);
// EXTERNAL MODULE: ../../node_modules/.pnpm/clsx@1.2.1/node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(4517);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@docusaurus+core@3.0.0_@docusaurus+types@3.0.0_react-dom@18.2.0_react@18.2.0_typescript@5.2.2/node_modules/@docusaurus/core/lib/client/exports/Link.js + 1 modules
var Link = __webpack_require__(8887);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(7458);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@docusaurus+theme-classic@3.0.0_@types+react@18.2.37_react-dom@18.2.0_react@18.2.0_typescript@5.2.2/node_modules/@docusaurus/theme-classic/lib/theme/PaginatorNavLink/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function PaginatorNavLink(props){const{permalink,title,subLabel,isNext}=props;return/*#__PURE__*/(0,jsx_runtime.jsxs)(Link/* default */.Z,{className:(0,clsx_m/* default */.Z)('pagination-nav__link',isNext?'pagination-nav__link--next':'pagination-nav__link--prev'),to:permalink,children:[subLabel&&/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"pagination-nav__sublabel",children:subLabel}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"pagination-nav__label",children:title})]});}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@docusaurus+theme-classic@3.0.0_@types+react@18.2.37_react-dom@18.2.0_react@18.2.0_typescript@5.2.2/node_modules/@docusaurus/theme-classic/lib/theme/DocPaginator/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function DocPaginator(props){const{previous,next}=props;return/*#__PURE__*/(0,jsx_runtime.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,Translate/* translate */.I)({id:'theme.docs.paginator.navAriaLabel',message:'Docs pages',description:'The ARIA label for the docs pagination'}),children:[previous&&/*#__PURE__*/(0,jsx_runtime.jsx)(PaginatorNavLink,{...previous,subLabel:/*#__PURE__*/(0,jsx_runtime.jsx)(Translate/* default */.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),next&&/*#__PURE__*/(0,jsx_runtime.jsx)(PaginatorNavLink,{...next,subLabel:/*#__PURE__*/(0,jsx_runtime.jsx)(Translate/* default */.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:true})]});}

/***/ }),

/***/ 5495:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ DocVersionBadge)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2983);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4517);
/* harmony import */ var _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9198);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6114);
/* harmony import */ var _docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4115);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7458);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function DocVersionBadge(_ref){let{className}=_ref;const versionMetadata=(0,_docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_3__/* .useDocsVersion */ .E)();if(versionMetadata.badge){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(className,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_5__/* .ThemeClassNames */ .k.docs.docVersionBadge,'badge badge--secondary'),children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:versionMetadata.label},children:'Version: {versionLabel}'})});}return null;}

/***/ }),

/***/ 6961:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ DocVersionBanner)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2983);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4517);
/* harmony import */ var _docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1085);
/* harmony import */ var _docusaurus_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8887);
/* harmony import */ var _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9198);
/* harmony import */ var _docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9491);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6114);
/* harmony import */ var _docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4753);
/* harmony import */ var _docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4115);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7458);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function UnreleasedVersionLabel(_ref){let{siteTitle,versionMetadata}=_ref;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle,versionLabel:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("b",{children:versionMetadata.label})},children:'This is unreleased documentation for {siteTitle} {versionLabel} version.'});}function UnmaintainedVersionLabel(_ref2){let{siteTitle,versionMetadata}=_ref2;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle,versionLabel:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("b",{children:versionMetadata.label})},children:'This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.'});}const BannerLabelComponents={unreleased:UnreleasedVersionLabel,unmaintained:UnmaintainedVersionLabel};function BannerLabel(props){const BannerLabelComponent=BannerLabelComponents[props.versionMetadata.banner];return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(BannerLabelComponent,{...props});}function LatestVersionSuggestionLabel(_ref3){let{versionLabel,to,onClick}=_ref3;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel,latestVersionLink:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("b",{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,{to:to,onClick:onClick,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:'For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).'});}function DocVersionBannerEnabled(_ref4){let{className,versionMetadata}=_ref4;const{siteConfig:{title:siteTitle}}=(0,_docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();const{pluginId}=(0,_docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_5__/* .useActivePlugin */ .gA)({failfast:true});const getVersionMainDoc=version=>version.docs.find(doc=>doc.id===version.mainDocId);const{savePreferredVersionName}=(0,_docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_6__/* .useDocsPreferredVersion */ .J)(pluginId);const{latestDocSuggestion,latestVersionSuggestion}=(0,_docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_5__/* .useDocVersionSuggestions */ .Jo)(pluginId);// Try to link to same doc in latest version (not always possible), falling
// back to main doc of latest version
const latestVersionSuggestedDoc=latestDocSuggestion??getVersionMainDoc(latestVersionSuggestion);return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(className,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_8__/* .ThemeClassNames */ .k.docs.docVersionBanner,'alert alert--warning margin-bottom--md'),role:"alert",children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(BannerLabel,{siteTitle:siteTitle,versionMetadata:versionMetadata})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:"margin-top--md",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(LatestVersionSuggestionLabel,{versionLabel:latestVersionSuggestion.label,to:latestVersionSuggestedDoc.path,onClick:()=>savePreferredVersionName(latestVersionSuggestion.name)})})]});}function DocVersionBanner(_ref5){let{className}=_ref5;const versionMetadata=(0,_docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_9__/* .useDocsVersion */ .E)();if(versionMetadata.banner){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(DocVersionBannerEnabled,{className:className,versionMetadata:versionMetadata});}return null;}

/***/ })

}]);
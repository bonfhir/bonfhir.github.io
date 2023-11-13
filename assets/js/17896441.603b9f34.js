"use strict";
(self["webpackChunkwebsite"] = self["webpackChunkwebsite"] || []).push([[918],{

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

/***/ 5867:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ DocItem)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js
var react = __webpack_require__(2983);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@docusaurus+theme-common@3.0.0_@docusaurus+types@3.0.0_react-dom@18.2.0_react@18.2.0_typescript@5.2.2/node_modules/@docusaurus/theme-common/lib/utils/metadataUtils.js + 2 modules
var metadataUtils = __webpack_require__(5474);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@docusaurus+theme-common@3.0.0_@docusaurus+types@3.0.0_react-dom@18.2.0_react@18.2.0_typescript@5.2.2/node_modules/@docusaurus/theme-common/lib/utils/reactUtils.js
var reactUtils = __webpack_require__(3910);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(7458);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@docusaurus+theme-common@3.0.0_@docusaurus+types@3.0.0_react-dom@18.2.0_react@18.2.0_typescript@5.2.2/node_modules/@docusaurus/theme-common/lib/contexts/doc.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const Context=/*#__PURE__*/react.createContext(null);/**
 * Note: we don't use `PropDoc` as context value on purpose. Metadata is
 * currently stored inside the MDX component, but we may want to change that in
 * the future. This layer is a good opportunity to decouple storage from
 * consuming API, potentially allowing us to provide metadata as both props and
 * route context without duplicating the chunks in the future.
 */function useContextValue(content){return (0,react.useMemo)(()=>({metadata:content.metadata,frontMatter:content.frontMatter,assets:content.assets,contentTitle:content.contentTitle,toc:content.toc}),[content]);}/**
 * This is a very thin layer around the `content` received from the MDX loader.
 * It provides metadata about the doc to the children tree.
 */function DocProvider(_ref){let{children,content}=_ref;const contextValue=useContextValue(content);return/*#__PURE__*/(0,jsx_runtime.jsx)(Context.Provider,{value:contextValue,children:children});}/**
 * Returns the data of the currently browsed doc. Gives access to the doc's MDX
 * Component, front matter, metadata, TOC, etc. When swizzling a low-level
 * component (e.g. the "Edit this page" link) and you need some extra metadata,
 * you don't have to drill the props all the way through the component tree:
 * simply use this hook instead.
 */function useDoc(){const doc=(0,react.useContext)(Context);if(doc===null){throw new reactUtils/* ReactContextError */.i6('DocProvider');}return doc;}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@docusaurus+theme-classic@3.0.0_@types+react@18.2.37_react-dom@18.2.0_react@18.2.0_typescript@5.2.2/node_modules/@docusaurus/theme-classic/lib/theme/DocItem/Metadata/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function DocItemMetadata(){const{metadata,frontMatter,assets}=useDoc();return/*#__PURE__*/(0,jsx_runtime.jsx)(metadataUtils/* PageMetadata */.d,{title:metadata.title,description:metadata.description,keywords:frontMatter.keywords,image:assets.image??frontMatter.image});}
// EXTERNAL MODULE: ../../node_modules/.pnpm/clsx@1.2.1/node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(4517);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@docusaurus+theme-common@3.0.0_@docusaurus+types@3.0.0_react-dom@18.2.0_react@18.2.0_typescript@5.2.2/node_modules/@docusaurus/theme-common/lib/hooks/useWindowSize.js
var useWindowSize = __webpack_require__(5247);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@docusaurus+theme-classic@3.0.0_@types+react@18.2.37_react-dom@18.2.0_react@18.2.0_typescript@5.2.2/node_modules/@docusaurus/theme-classic/lib/theme/DocPaginator/index.js + 1 modules
var DocPaginator = __webpack_require__(2565);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@docusaurus+theme-classic@3.0.0_@types+react@18.2.37_react-dom@18.2.0_react@18.2.0_typescript@5.2.2/node_modules/@docusaurus/theme-classic/lib/theme/DocItem/Paginator/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *//**
 * This extra component is needed, because <DocPaginator> should remain generic.
 * DocPaginator is used in non-docs contexts too: generated-index pages...
 */function DocItemPaginator(){const{metadata}=useDoc();return/*#__PURE__*/(0,jsx_runtime.jsx)(DocPaginator/* default */.Z,{previous:metadata.previous,next:metadata.next});}
// EXTERNAL MODULE: ../../node_modules/.pnpm/@docusaurus+theme-classic@3.0.0_@types+react@18.2.37_react-dom@18.2.0_react@18.2.0_typescript@5.2.2/node_modules/@docusaurus/theme-classic/lib/theme/DocVersionBanner/index.js
var DocVersionBanner = __webpack_require__(6961);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@docusaurus+theme-classic@3.0.0_@types+react@18.2.37_react-dom@18.2.0_react@18.2.0_typescript@5.2.2/node_modules/@docusaurus/theme-classic/lib/theme/DocVersionBadge/index.js
var DocVersionBadge = __webpack_require__(5495);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@docusaurus+theme-common@3.0.0_@docusaurus+types@3.0.0_react-dom@18.2.0_react@18.2.0_typescript@5.2.2/node_modules/@docusaurus/theme-common/lib/utils/ThemeClassNames.js
var ThemeClassNames = __webpack_require__(6114);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@docusaurus+core@3.0.0_@docusaurus+types@3.0.0_react-dom@18.2.0_react@18.2.0_typescript@5.2.2/node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(9198);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@docusaurus+theme-classic@3.0.0_@types+react@18.2.37_react-dom@18.2.0_react@18.2.0_typescript@5.2.2/node_modules/@docusaurus/theme-classic/lib/theme/LastUpdated/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function LastUpdatedAtDate(_ref){let{lastUpdatedAt,formattedLastUpdatedAt}=_ref;return/*#__PURE__*/(0,jsx_runtime.jsx)(Translate/* default */.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:/*#__PURE__*/(0,jsx_runtime.jsx)("b",{children:/*#__PURE__*/(0,jsx_runtime.jsx)("time",{dateTime:new Date(lastUpdatedAt*1000).toISOString(),children:formattedLastUpdatedAt})})},children:' on {date}'});}function LastUpdatedByUser(_ref2){let{lastUpdatedBy}=_ref2;return/*#__PURE__*/(0,jsx_runtime.jsx)(Translate/* default */.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:/*#__PURE__*/(0,jsx_runtime.jsx)("b",{children:lastUpdatedBy})},children:' by {user}'});}function LastUpdated(_ref3){let{lastUpdatedAt,formattedLastUpdatedAt,lastUpdatedBy}=_ref3;return/*#__PURE__*/(0,jsx_runtime.jsxs)("span",{className:ThemeClassNames/* ThemeClassNames */.k.common.lastUpdated,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Translate/* default */.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:lastUpdatedAt&&formattedLastUpdatedAt?/*#__PURE__*/(0,jsx_runtime.jsx)(LastUpdatedAtDate,{lastUpdatedAt:lastUpdatedAt,formattedLastUpdatedAt:formattedLastUpdatedAt}):'',byUser:lastUpdatedBy?/*#__PURE__*/(0,jsx_runtime.jsx)(LastUpdatedByUser,{lastUpdatedBy:lastUpdatedBy}):''},children:'Last updated{atDate}{byUser}'}), false&&/*#__PURE__*/0]});}
// EXTERNAL MODULE: ../../node_modules/.pnpm/@docusaurus+core@3.0.0_@docusaurus+types@3.0.0_react-dom@18.2.0_react@18.2.0_typescript@5.2.2/node_modules/@docusaurus/core/lib/client/exports/Link.js + 1 modules
var Link = __webpack_require__(8887);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@docusaurus+theme-classic@3.0.0_@types+react@18.2.37_react-dom@18.2.0_react@18.2.0_typescript@5.2.2/node_modules/@docusaurus/theme-classic/lib/theme/Icon/Edit/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"iconEdit":"iconEdit_ullt"});
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@docusaurus+theme-classic@3.0.0_@types+react@18.2.37_react-dom@18.2.0_react@18.2.0_typescript@5.2.2/node_modules/@docusaurus/theme-classic/lib/theme/Icon/Edit/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function IconEdit(_ref){let{className,...restProps}=_ref;return/*#__PURE__*/(0,jsx_runtime.jsx)("svg",{fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,clsx_m/* default */.Z)(styles_module.iconEdit,className),"aria-hidden":"true",...restProps,children:/*#__PURE__*/(0,jsx_runtime.jsx)("g",{children:/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})});}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@docusaurus+theme-classic@3.0.0_@types+react@18.2.37_react-dom@18.2.0_react@18.2.0_typescript@5.2.2/node_modules/@docusaurus/theme-classic/lib/theme/EditThisPage/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function EditThisPage(_ref){let{editUrl}=_ref;return/*#__PURE__*/(0,jsx_runtime.jsxs)(Link/* default */.Z,{to:editUrl,className:ThemeClassNames/* ThemeClassNames */.k.common.editThisPage,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(IconEdit,{}),/*#__PURE__*/(0,jsx_runtime.jsx)(Translate/* default */.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]});}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@docusaurus+theme-classic@3.0.0_@types+react@18.2.37_react-dom@18.2.0_react@18.2.0_typescript@5.2.2/node_modules/@docusaurus/theme-classic/lib/theme/Tag/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Tag_styles_module = ({"tag":"tag_ob0F","tagRegular":"tagRegular_Rnoh","tagWithCount":"tagWithCount_wdLK"});
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@docusaurus+theme-classic@3.0.0_@types+react@18.2.37_react-dom@18.2.0_react@18.2.0_typescript@5.2.2/node_modules/@docusaurus/theme-classic/lib/theme/Tag/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function Tag(_ref){let{permalink,label,count}=_ref;return/*#__PURE__*/(0,jsx_runtime.jsxs)(Link/* default */.Z,{href:permalink,className:(0,clsx_m/* default */.Z)(Tag_styles_module.tag,count?Tag_styles_module.tagWithCount:Tag_styles_module.tagRegular),children:[label,count&&/*#__PURE__*/(0,jsx_runtime.jsx)("span",{children:count})]});}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@docusaurus+theme-classic@3.0.0_@types+react@18.2.37_react-dom@18.2.0_react@18.2.0_typescript@5.2.2/node_modules/@docusaurus/theme-classic/lib/theme/TagsListInline/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const TagsListInline_styles_module = ({"tags":"tags_bwqd","tag":"tag__bEJ"});
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@docusaurus+theme-classic@3.0.0_@types+react@18.2.37_react-dom@18.2.0_react@18.2.0_typescript@5.2.2/node_modules/@docusaurus/theme-classic/lib/theme/TagsListInline/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function TagsListInline(_ref){let{tags}=_ref;return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("b",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Translate/* default */.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),/*#__PURE__*/(0,jsx_runtime.jsx)("ul",{className:(0,clsx_m/* default */.Z)(TagsListInline_styles_module.tags,'padding--none','margin-left--sm'),children:tags.map(_ref2=>{let{label,permalink:tagPermalink}=_ref2;return/*#__PURE__*/(0,jsx_runtime.jsx)("li",{className:TagsListInline_styles_module.tag,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Tag,{label:label,permalink:tagPermalink})},tagPermalink);})})]});}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@docusaurus+theme-classic@3.0.0_@types+react@18.2.37_react-dom@18.2.0_react@18.2.0_typescript@5.2.2/node_modules/@docusaurus/theme-classic/lib/theme/DocItem/Footer/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Footer_styles_module = ({"lastUpdated":"lastUpdated_KAYZ"});
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@docusaurus+theme-classic@3.0.0_@types+react@18.2.37_react-dom@18.2.0_react@18.2.0_typescript@5.2.2/node_modules/@docusaurus/theme-classic/lib/theme/DocItem/Footer/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function TagsRow(props){return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:(0,clsx_m/* default */.Z)(ThemeClassNames/* ThemeClassNames */.k.docs.docFooterTagsRow,'row margin-bottom--sm'),children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"col",children:/*#__PURE__*/(0,jsx_runtime.jsx)(TagsListInline,{...props})})});}function EditMetaRow(_ref){let{editUrl,lastUpdatedAt,lastUpdatedBy,formattedLastUpdatedAt}=_ref;return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:(0,clsx_m/* default */.Z)(ThemeClassNames/* ThemeClassNames */.k.docs.docFooterEditMetaRow,'row'),children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"col",children:editUrl&&/*#__PURE__*/(0,jsx_runtime.jsx)(EditThisPage,{editUrl:editUrl})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:(0,clsx_m/* default */.Z)('col',Footer_styles_module.lastUpdated),children:(lastUpdatedAt||lastUpdatedBy)&&/*#__PURE__*/(0,jsx_runtime.jsx)(LastUpdated,{lastUpdatedAt:lastUpdatedAt,formattedLastUpdatedAt:formattedLastUpdatedAt,lastUpdatedBy:lastUpdatedBy})})]});}function DocItemFooter(){const{metadata}=useDoc();const{editUrl,lastUpdatedAt,formattedLastUpdatedAt,lastUpdatedBy,tags}=metadata;const canDisplayTagsRow=tags.length>0;const canDisplayEditMetaRow=!!(editUrl||lastUpdatedAt||lastUpdatedBy);const canDisplayFooter=canDisplayTagsRow||canDisplayEditMetaRow;if(!canDisplayFooter){return null;}return/*#__PURE__*/(0,jsx_runtime.jsxs)("footer",{className:(0,clsx_m/* default */.Z)(ThemeClassNames/* ThemeClassNames */.k.docs.docFooter,'docusaurus-mt-lg'),children:[canDisplayTagsRow&&/*#__PURE__*/(0,jsx_runtime.jsx)(TagsRow,{tags:tags}),canDisplayEditMetaRow&&/*#__PURE__*/(0,jsx_runtime.jsx)(EditMetaRow,{editUrl:editUrl,lastUpdatedAt:lastUpdatedAt,lastUpdatedBy:lastUpdatedBy,formattedLastUpdatedAt:formattedLastUpdatedAt})]});}
// EXTERNAL MODULE: ../../node_modules/.pnpm/@docusaurus+theme-common@3.0.0_@docusaurus+types@3.0.0_react-dom@18.2.0_react@18.2.0_typescript@5.2.2/node_modules/@docusaurus/theme-common/lib/components/Collapsible/index.js
var Collapsible = __webpack_require__(7291);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@docusaurus+theme-classic@3.0.0_@types+react@18.2.37_react-dom@18.2.0_react@18.2.0_typescript@5.2.2/node_modules/@docusaurus/theme-classic/lib/theme/TOCItems/index.js + 3 modules
var TOCItems = __webpack_require__(804);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@docusaurus+theme-classic@3.0.0_@types+react@18.2.37_react-dom@18.2.0_react@18.2.0_typescript@5.2.2/node_modules/@docusaurus/theme-classic/lib/theme/TOCCollapsible/CollapseButton/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const CollapseButton_styles_module = ({"tocCollapsibleButton":"tocCollapsibleButton_HlIc","tocCollapsibleButtonExpanded":"tocCollapsibleButtonExpanded_Wwxf"});
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@docusaurus+theme-classic@3.0.0_@types+react@18.2.37_react-dom@18.2.0_react@18.2.0_typescript@5.2.2/node_modules/@docusaurus/theme-classic/lib/theme/TOCCollapsible/CollapseButton/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function TOCCollapsibleCollapseButton(_ref){let{collapsed,...props}=_ref;return/*#__PURE__*/(0,jsx_runtime.jsx)("button",{type:"button",...props,className:(0,clsx_m/* default */.Z)('clean-btn',CollapseButton_styles_module.tocCollapsibleButton,!collapsed&&CollapseButton_styles_module.tocCollapsibleButtonExpanded,props.className),children:/*#__PURE__*/(0,jsx_runtime.jsx)(Translate/* default */.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})});}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@docusaurus+theme-classic@3.0.0_@types+react@18.2.37_react-dom@18.2.0_react@18.2.0_typescript@5.2.2/node_modules/@docusaurus/theme-classic/lib/theme/TOCCollapsible/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const TOCCollapsible_styles_module = ({"tocCollapsible":"tocCollapsible_wOw6","tocCollapsibleContent":"tocCollapsibleContent_PQ1j","tocCollapsibleExpanded":"tocCollapsibleExpanded_AF2J"});
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@docusaurus+theme-classic@3.0.0_@types+react@18.2.37_react-dom@18.2.0_react@18.2.0_typescript@5.2.2/node_modules/@docusaurus/theme-classic/lib/theme/TOCCollapsible/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function TOCCollapsible(_ref){let{toc,className,minHeadingLevel,maxHeadingLevel}=_ref;const{collapsed,toggleCollapsed}=(0,Collapsible/* useCollapsible */.u)({initialState:true});return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:(0,clsx_m/* default */.Z)(TOCCollapsible_styles_module.tocCollapsible,!collapsed&&TOCCollapsible_styles_module.tocCollapsibleExpanded,className),children:[/*#__PURE__*/(0,jsx_runtime.jsx)(TOCCollapsibleCollapseButton,{collapsed:collapsed,onClick:toggleCollapsed}),/*#__PURE__*/(0,jsx_runtime.jsx)(Collapsible/* Collapsible */.z,{lazy:true,className:TOCCollapsible_styles_module.tocCollapsibleContent,collapsed:collapsed,children:/*#__PURE__*/(0,jsx_runtime.jsx)(TOCItems/* default */.Z,{toc:toc,minHeadingLevel:minHeadingLevel,maxHeadingLevel:maxHeadingLevel})})]});}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@docusaurus+theme-classic@3.0.0_@types+react@18.2.37_react-dom@18.2.0_react@18.2.0_typescript@5.2.2/node_modules/@docusaurus/theme-classic/lib/theme/DocItem/TOC/Mobile/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Mobile_styles_module = ({"tocMobile":"tocMobile_Q447"});
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@docusaurus+theme-classic@3.0.0_@types+react@18.2.37_react-dom@18.2.0_react@18.2.0_typescript@5.2.2/node_modules/@docusaurus/theme-classic/lib/theme/DocItem/TOC/Mobile/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function DocItemTOCMobile(){const{toc,frontMatter}=useDoc();return/*#__PURE__*/(0,jsx_runtime.jsx)(TOCCollapsible,{toc:toc,minHeadingLevel:frontMatter.toc_min_heading_level,maxHeadingLevel:frontMatter.toc_max_heading_level,className:(0,clsx_m/* default */.Z)(ThemeClassNames/* ThemeClassNames */.k.docs.docTocMobile,Mobile_styles_module.tocMobile)});}
// EXTERNAL MODULE: ../../node_modules/.pnpm/@docusaurus+theme-classic@3.0.0_@types+react@18.2.37_react-dom@18.2.0_react@18.2.0_typescript@5.2.2/node_modules/@docusaurus/theme-classic/lib/theme/TOC/index.js + 1 modules
var TOC = __webpack_require__(995);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@docusaurus+theme-classic@3.0.0_@types+react@18.2.37_react-dom@18.2.0_react@18.2.0_typescript@5.2.2/node_modules/@docusaurus/theme-classic/lib/theme/DocItem/TOC/Desktop/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function DocItemTOCDesktop(){const{toc,frontMatter}=useDoc();return/*#__PURE__*/(0,jsx_runtime.jsx)(TOC/* default */.Z,{toc:toc,minHeadingLevel:frontMatter.toc_min_heading_level,maxHeadingLevel:frontMatter.toc_max_heading_level,className:ThemeClassNames/* ThemeClassNames */.k.docs.docTocDesktop});}
// EXTERNAL MODULE: ../../node_modules/.pnpm/@docusaurus+theme-classic@3.0.0_@types+react@18.2.37_react-dom@18.2.0_react@18.2.0_typescript@5.2.2/node_modules/@docusaurus/theme-classic/lib/theme/Heading/index.js + 1 modules
var Heading = __webpack_require__(8533);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@docusaurus+theme-classic@3.0.0_@types+react@18.2.37_react-dom@18.2.0_react@18.2.0_typescript@5.2.2/node_modules/@docusaurus/theme-classic/lib/theme/MDXContent/index.js + 34 modules
var MDXContent = __webpack_require__(3616);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@docusaurus+theme-classic@3.0.0_@types+react@18.2.37_react-dom@18.2.0_react@18.2.0_typescript@5.2.2/node_modules/@docusaurus/theme-classic/lib/theme/DocItem/Content/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *//**
 Title can be declared inside md content or declared through
 front matter and added manually. To make both cases consistent,
 the added title is added under the same div.markdown block
 See https://github.com/facebook/docusaurus/pull/4882#issuecomment-853021120

 We render a "synthetic title" if:
 - user doesn't ask to hide it with front matter
 - the markdown content does not already contain a top-level h1 heading
*/function useSyntheticTitle(){const{metadata,frontMatter,contentTitle}=useDoc();const shouldRender=!frontMatter.hide_title&&typeof contentTitle==='undefined';if(!shouldRender){return null;}return metadata.title;}function DocItemContent(_ref){let{children}=_ref;const syntheticTitle=useSyntheticTitle();return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:(0,clsx_m/* default */.Z)(ThemeClassNames/* ThemeClassNames */.k.docs.docMarkdown,'markdown'),children:[syntheticTitle&&/*#__PURE__*/(0,jsx_runtime.jsx)("header",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Heading/* default */.Z,{as:"h1",children:syntheticTitle})}),/*#__PURE__*/(0,jsx_runtime.jsx)(MDXContent/* default */.Z,{children:children})]});}
// EXTERNAL MODULE: ../../node_modules/.pnpm/@docusaurus+theme-classic@3.0.0_@types+react@18.2.37_react-dom@18.2.0_react@18.2.0_typescript@5.2.2/node_modules/@docusaurus/theme-classic/lib/theme/DocBreadcrumbs/index.js + 4 modules
var DocBreadcrumbs = __webpack_require__(5993);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@docusaurus+theme-classic@3.0.0_@types+react@18.2.37_react-dom@18.2.0_react@18.2.0_typescript@5.2.2/node_modules/@docusaurus/theme-classic/lib/theme/Unlisted/index.js + 1 modules
var Unlisted = __webpack_require__(417);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@docusaurus+theme-classic@3.0.0_@types+react@18.2.37_react-dom@18.2.0_react@18.2.0_typescript@5.2.2/node_modules/@docusaurus/theme-classic/lib/theme/DocItem/Layout/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Layout_styles_module = ({"docItemContainer":"docItemContainer_Kuhe","docItemCol":"docItemCol_YBxd"});
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@docusaurus+theme-classic@3.0.0_@types+react@18.2.37_react-dom@18.2.0_react@18.2.0_typescript@5.2.2/node_modules/@docusaurus/theme-classic/lib/theme/DocItem/Layout/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *//**
 * Decide if the toc should be rendered, on mobile or desktop viewports
 */function useDocTOC(){const{frontMatter,toc}=useDoc();const windowSize=(0,useWindowSize/* useWindowSize */.i)();const hidden=frontMatter.hide_table_of_contents;const canRender=!hidden&&toc.length>0;const mobile=canRender?/*#__PURE__*/(0,jsx_runtime.jsx)(DocItemTOCMobile,{}):undefined;const desktop=canRender&&(windowSize==='desktop'||windowSize==='ssr')?/*#__PURE__*/(0,jsx_runtime.jsx)(DocItemTOCDesktop,{}):undefined;return{hidden,mobile,desktop};}function DocItemLayout(_ref){let{children}=_ref;const docTOC=useDocTOC();const{metadata:{unlisted}}=useDoc();return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"row",children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:(0,clsx_m/* default */.Z)('col',!docTOC.hidden&&Layout_styles_module.docItemCol),children:[unlisted&&/*#__PURE__*/(0,jsx_runtime.jsx)(Unlisted/* default */.Z,{}),/*#__PURE__*/(0,jsx_runtime.jsx)(DocVersionBanner/* default */.Z,{}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:Layout_styles_module.docItemContainer,children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("article",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(DocBreadcrumbs/* default */.Z,{}),/*#__PURE__*/(0,jsx_runtime.jsx)(DocVersionBadge/* default */.Z,{}),docTOC.mobile,/*#__PURE__*/(0,jsx_runtime.jsx)(DocItemContent,{children:children}),/*#__PURE__*/(0,jsx_runtime.jsx)(DocItemFooter,{})]}),/*#__PURE__*/(0,jsx_runtime.jsx)(DocItemPaginator,{})]})]}),docTOC.desktop&&/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"col col--3",children:docTOC.desktop})]});}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@docusaurus+theme-classic@3.0.0_@types+react@18.2.37_react-dom@18.2.0_react@18.2.0_typescript@5.2.2/node_modules/@docusaurus/theme-classic/lib/theme/DocItem/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function DocItem(props){const docHtmlClassName=`docs-doc-id-${props.content.metadata.id}`;const MDXComponent=props.content;return/*#__PURE__*/(0,jsx_runtime.jsx)(DocProvider,{content:props.content,children:/*#__PURE__*/(0,jsx_runtime.jsxs)(metadataUtils/* HtmlClassNameProvider */.FG,{className:docHtmlClassName,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(DocItemMetadata,{}),/*#__PURE__*/(0,jsx_runtime.jsx)(DocItemLayout,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(MDXComponent,{})})]})});}

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
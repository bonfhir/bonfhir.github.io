"use strict";
(self["webpackChunk_bonfhir_website"] = self["webpackChunk_bonfhir_website"] || []).push([[5044],{

/***/ 1011:
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
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9284);


const frontMatter = {
	sidebar_position: 1,
	title: 'Renderer props',
	description: 'Mantine rendererProps'
};
const contentTitle = undefined;
const metadata = {
  "id": "react/mantine/renderer-props",
  "title": "Renderer props",
  "description": "Mantine rendererProps",
  "source": "@site/packages/react/mantine/renderer-props.md",
  "sourceDirName": "react/mantine",
  "slug": "/react/mantine/renderer-props",
  "permalink": "/packages/react/mantine/renderer-props",
  "draft": false,
  "unlisted": false,
  "editUrl": "https://github.com/bonfhir/bonfhir/tree/main/docs/website/packages/react/mantine/renderer-props.md",
  "tags": [],
  "version": "current",
  "sidebarPosition": 1,
  "frontMatter": {
    "sidebar_position": 1,
    "title": "Renderer props",
    "description": "Mantine rendererProps"
  },
  "sidebar": "getStartedSidebar",
  "previous": {
    "title": "Mantine",
    "permalink": "/packages/react/mantine/"
  },
  "next": {
    "title": "useFhirForm",
    "permalink": "/packages/react/mantine/use-fhir-form"
  }
};
const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    p: "p",
    pre: "pre",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .a)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Here is the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "/packages/react/get-started#globally-apply-the-renderer-props-type",
        children: "rendererProps type declaration"
      }), "\nthat you can use in a project that uses the Mantine renderer:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-tsx",
        metastring: "title=\"bonfhir.d.ts\"",
        children: "import {\n  MantineFhirErrorProps,\n  MantineFhirFormatterProps,\n  MantineFhirInputArrayProps,\n  MantineFhirInputBooleanProps,\n  MantineFhirInputContactPointProps,\n  MantineFhirInputDateProps,\n  MantineFhirInputDateTimeProps,\n  MantineFhirInputDurationProps,\n  MantineFhirInputHumanNameProps,\n  MantineFhirInputIdentifierProps,\n  MantineFhirInputMarkdownProps,\n  MantineFhirInputNumberProps,\n  MantineFhirInputQuantityProps,\n  MantineFhirInputResourceProps,\n  MantineFhirInputStringProps,\n  MantineFhirInputTerminologyProps,\n  MantineFhirInputTimeProps,\n  MantineFhirPaginationProps,\n  MantineFhirQueryLoaderProps,\n  MantineFhirQuestionnaireProps,\n  MantineFhirTableProps,\n  MantineFhirValueProps,\n} from \"@bonfhir/mantine/r4b\";\nimport {\n  FhirErrorProps,\n  FhirFormatterProps,\n  FhirInputArrayProps,\n  FhirPaginationProps,\n  FhirQueryLoaderProps,\n  FhirQuestionnaireProps,\n  FhirTableProps,\n  FhirValueProps,\n} from \"@bonfhir/react/r4b\";\n\n/**\n * This file override the @bonfhir/react/r4b types to add the MantineFhir*Props\n */\ndeclare module \"@bonfhir/react/r4b\" {\n  export function FhirError(\n    props: FhirErrorProps<MantineFhirErrorProps>,\n  ): ReactElement | null;\n\n  export function FhirFormatter(\n    props: FhirFormatterProps<MantineFhirFormatterProps>,\n  ): ReactElement | null;\n\n  export function FhirInputArray(\n    props: FhirInputArrayProps<MantineFhirInputArrayProps>,\n  ): ReactElement | null;\n\n  export function FhirPagination(\n    props: FhirPaginationProps<MantineFhirPaginationProps>,\n  ): ReactElement | null;\n\n  export function FhirQueryLoader<TData>(\n    props: FhirQueryLoaderProps<MantineFhirQueryLoaderProps, TData>,\n  ): ReactElement | null;\n\n  export function FhirQuestionnaire(\n    props: FhirQuestionnaireProps<MantineFhirQuestionnaireProps>,\n  ): ReactElement | null;\n\n  export function FhirQuestionnaire(\n    props: FhirQuestionnaireProps<MantineFhirQuestionnaireProps>,\n  ): ReactElement | null;\n\n  export function FhirTable<\n    TData extends BundleNavigator | any[],\n    TRow = TData extends BundleNavigator<infer TResource>\n      ? WithResolvableReferences<Retrieved<TResource>>\n      : TData extends Array<infer TArrayElement>\n        ? TArrayElement\n        : any,\n  >(\n    props: FhirTableProps<TData, MantineFhirTableProps, TRow>,\n  ): ReactElement | null;\n\n  export function FhirValue(\n    props: FhirValueProps<MantineFhirValueProps>,\n  ): ReactElement | null;\n}\n\ndeclare global {\n  // FhirInput must be declared globally to properly override the type\n  export function FhirInput<\n    TResourceType extends AnyResourceType = AnyResourceType,\n  >(props: FhirInputProps<TResourceType>): ReactElement | null;\n\n  export type FhirInputProps<\n    TResourceType extends AnyResourceType = AnyResourceType,\n  > =\n    | FhirInputBooleanProps<MantineFhirInputBooleanProps>\n    | FhirInputContactPointProps<MantineFhirInputContactPointProps>\n    | FhirInputDateProps<MantineFhirInputDateProps>\n    | FhirInputDateTimeProps<MantineFhirInputDateTimeProps>\n    | FhirInputDurationProps<MantineFhirInputDurationProps>\n    | FhirInputHumanNameProps<MantineFhirInputHumanNameProps>\n    | FhirInputIdentifierProps<MantineFhirInputIdentifierProps>\n    | FhirInputMarkdownProps<MantineFhirInputMarkdownProps>\n    | FhirInputNumberProps<MantineFhirInputNumberProps>\n    | FhirInputQuantityProps<MantineFhirInputQuantityProps>\n    | FhirInputResourceProps<MantineFhirInputResourceProps, TResourceType>\n    | FhirInputStringProps<MantineFhirInputStringProps>\n    | FhirInputTerminologyProps<MantineFhirInputTerminologyProps>\n    | FhirInputTimeProps<MantineFhirInputTimeProps>;\n}\n"
      })
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .a)(),
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

/***/ 9284:
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
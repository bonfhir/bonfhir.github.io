"use strict";
(self["webpackChunk_bonfhir_website"] = self["webpackChunk_bonfhir_website"] || []).push([[949],{

/***/ 3381:
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
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3405);


const frontMatter = {
	sidebar_position: 7,
	title: 'useFhirExecute',
	description: 'Execute an operation that does not affect state'
};
const contentTitle = undefined;
const metadata = {
  "id": "query/queries/use-fhir-execute",
  "title": "useFhirExecute",
  "description": "Execute an operation that does not affect state",
  "source": "@site/packages/query/queries/use-fhir-execute.md",
  "sourceDirName": "query/queries",
  "slug": "/query/queries/use-fhir-execute",
  "permalink": "/packages/query/queries/use-fhir-execute",
  "draft": false,
  "unlisted": false,
  "editUrl": "https://github.com/bonfhir/bonfhir/tree/main/docs/website/packages/query/queries/use-fhir-execute.md",
  "tags": [],
  "version": "current",
  "sidebarPosition": 7,
  "frontMatter": {
    "sidebar_position": 7,
    "title": "useFhirExecute",
    "description": "Execute an operation that does not affect state"
  },
  "sidebar": "getStartedSidebar",
  "previous": {
    "title": "useFhirInfiniteSearch",
    "permalink": "/packages/query/queries/use-fhir-infinite-search"
  },
  "next": {
    "title": "useFhirGraphQL",
    "permalink": "/packages/query/queries/use-fhir-graphql"
  }
};
const assets = {

};



const toc = [{
  "value": "Basic usage",
  "id": "basic-usage",
  "level": 3
}, {
  "value": "With the <code>&lt;FhirQueryLoader /&gt;</code>",
  "id": "with-the-fhirqueryloader-",
  "level": 3
}, {
  "value": "With options",
  "id": "with-options",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    h3: "h3",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .a)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Return a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://tanstack.com/query/latest/docs/react/guides/queries",
        children: "Query"
      }), " for an\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://hl7.org/fhir/operations.html",
        children: "operation"
      }), " request."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
      type: "warning",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["This is the query version - meaning that it should only be used for operations that ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "do NOT"
        }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://hl7.org/fhir/operationdefinition-definitions.html#OperationDefinition.affectsState",
          children: "affect state"
        }), ".\nIf the operation DO affect state, please use the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "/packages/query/mutations/use-fhir-execute-mutation",
          children: "mutation"
        }), " instead."]
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "basic-usage",
      children: "Basic usage"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { ValueSet, asError } from \"@bonfhir/core/r4b\";\nimport { useFhirExecute } from \"@bonfhir/query/r4b\";\nimport { List } from \"@mantine/core\";\n\nexport default function MyComponent() {\n  const expandMaritalStatusQuery = useFhirExecute<ValueSet>({\n    operation: \"$expand\",\n    resourceType: \"ValueSet\",\n    parameters: [\n      {\n        name: \"url\",\n        valueUri: \"http://hl7.org/fhir/ValueSet/marital-status\",\n      },\n    ],\n    affectsState: false,\n  });\n\n  if (expandMaritalStatusQuery.isLoading) {\n    return <div>Loading...</div>;\n  }\n\n  if (expandMaritalStatusQuery.isError) {\n    return <div>{asError(expandMaritalStatusQuery.error)?.message}</div>;\n  }\n\n  return (\n    <List>\n      {expandMaritalStatusQuery.data?.expansion?.contains?.map((item) => (\n        <List.Item key={item.code}>{item.display}</List.Item>\n      ))}\n    </List>\n  );\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h3, {
      id: "with-the-fhirqueryloader-",
      children: ["With the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "<FhirQueryLoader />"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { ValueSet } from \"@bonfhir/core/r4b\";\nimport { useFhirExecute } from \"@bonfhir/query/r4b\";\nimport { FhirQueryLoader } from \"@bonfhir/react/r4b\";\nimport { List } from \"@mantine/core\";\n\nexport default function MyComponent() {\n  const expandMaritalStatusQuery = useFhirExecute<ValueSet>({\n    operation: \"$expand\",\n    resourceType: \"ValueSet\",\n    parameters: [\n      {\n        name: \"url\",\n        valueUri: \"http://hl7.org/fhir/ValueSet/marital-status\",\n      },\n    ],\n    affectsState: false,\n  });\n\n  return (\n    <FhirQueryLoader query={expandMaritalStatusQuery}>\n      {(valueSet) => (\n        <List>\n          {valueSet.expansion?.contains?.map((item) => (\n            <List.Item key={item.code}>{item.display}</List.Item>\n          ))}\n        </List>\n      )}\n    </FhirQueryLoader>\n  );\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "with-options",
      children: "With options"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { ValueSet } from \"@bonfhir/core/r4b\";\nimport { DEFAULT_FHIR_CLIENT, useFhirExecute } from \"@bonfhir/query/r4b\";\n\nexport default function MyComponent() {\n  const expandMaritalStatusQuery = useFhirExecute<ValueSet>(\n    {\n      operation: \"$expand\",\n      resourceType: \"ValueSet\",\n      parameters: [\n        {\n          name: \"url\",\n          valueUri: \"http://hl7.org/fhir/ValueSet/marital-status\",\n        },\n      ],\n      affectsState: false,\n    },\n    {\n      // The name of the FhirClient to use\n      fhirClient: DEFAULT_FHIR_CLIENT,\n\n      // React query options\n      query: {\n        gcTime: Number.POSITIVE_INFINITY,\n      },\n    },\n  );\n\n  //...\n}\n"
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
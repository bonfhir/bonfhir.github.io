"use strict";
(self["webpackChunk_bonfhir_website"] = self["webpackChunk_bonfhir_website"] || []).push([[3361],{

/***/ 3030:
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
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);


const frontMatter = {
	sidebar_position: 10,
	title: 'useFhirClient',
	description: 'Execute a series of FHIR operations'
};
const contentTitle = undefined;
const metadata = {
  "id": "query/queries/use-fhir-client",
  "title": "useFhirClient",
  "description": "Execute a series of FHIR operations",
  "source": "@site/packages/query/queries/use-fhir-client.md",
  "sourceDirName": "query/queries",
  "slug": "/query/queries/use-fhir-client",
  "permalink": "/packages/query/queries/use-fhir-client",
  "draft": false,
  "unlisted": false,
  "editUrl": "https://github.com/bonfhir/bonfhir/tree/main/docs/website/packages/query/queries/use-fhir-client.md",
  "tags": [],
  "version": "current",
  "sidebarPosition": 10,
  "frontMatter": {
    "sidebar_position": 10,
    "title": "useFhirClient",
    "description": "Execute a series of FHIR operations"
  },
  "sidebar": "getStartedSidebar",
  "previous": {
    "title": "useFhirHistory",
    "permalink": "/packages/query/queries/use-fhir-history"
  },
  "next": {
    "title": "useFhirCapabilities",
    "permalink": "/packages/query/queries/use-fhir-capabilities"
  }
};
const assets = {

};



const toc = [{
  "value": "Basic usage",
  "id": "basic-usage",
  "level": 3
}, {
  "value": "With <code>&lt;FhirQueryLoader /&gt;</code>",
  "id": "with-fhirqueryloader-",
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
    br: "br",
    code: "code",
    h3: "h3",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Return a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://tanstack.com/query/latest/docs/react/guides/queries",
        children: "Query"
      }), " with access to the raw ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "/packages/core/fhir-client",
        children: "FhirClient"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["This is useful when you have a series of operations to execute as part of a single query, or if the other ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "/packages/query/queries",
        children: "query hooks"
      }), "\nwon't allow you to do what you want.", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.br, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "You should always prefer to use a more precise hook."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
      type: "warning",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["It is your responsibility to ensure that the operations are ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "read-only"
        }), ".", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.br, {}), "\n", "If they are not, you should use the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "/packages/query/mutations/use-fhir-client-mutation",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "useFhirClientMutation"
          })
        }), " hook instead."]
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "basic-usage",
      children: "Basic usage"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { asError } from \"@bonfhir/core/r4b\";\nimport { useFhirClient } from \"@bonfhir/query/r4b\";\nimport { FhirValue } from \"@bonfhir/react/r4b\";\nimport { useSearchParams } from \"react-router-dom\";\n\nexport default function MyComponent() {\n  const [searchParams] = useSearchParams();\n  const patientId = searchParams.get(\"patientId\");\n\n  const clientQuery = useFhirClient(\n    async (client) => {\n      const batch = client.batch();\n      const patient = batch.search(\"Patient\", (search) =>\n        search._id(patientId),\n      );\n      const conditions = batch.search(\"Condition\", (search) =>\n        search.subject(`Patient/${patientId}`),\n      );\n\n      await batch.send();\n\n      return { patient: patient.resource, conditions: conditions.resource };\n    },\n    // This allows you to specify dependencies for your method - they will invalidate the query if changed.\n    [patientId],\n  );\n\n  if (clientQuery.isLoading) {\n    return <div>Loading...</div>;\n  }\n\n  if (clientQuery.isError) {\n    return <div>{asError(clientQuery.error)?.message}</div>;\n  }\n\n  return (\n    <FhirValue\n      type=\"HumanName\"\n      value={clientQuery.data?.patient.searchMatch()[0]?.name}\n    />\n  );\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h3, {
      id: "with-fhirqueryloader-",
      children: ["With ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "<FhirQueryLoader />"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { useFhirClient } from \"@bonfhir/query/r4b\";\nimport { FhirQueryLoader, FhirValue } from \"@bonfhir/react/r4b\";\nimport { useSearchParams } from \"react-router-dom\";\n\nexport default function MyComponent() {\n  const [searchParams] = useSearchParams();\n  const patientId = searchParams.get(\"patientId\");\n\n  const clientQuery = useFhirClient(\n    async (client) => {\n      const batch = client.batch();\n      const patient = batch.search(\"Patient\", (search) =>\n        search._id(patientId),\n      );\n      const conditions = batch.search(\"Condition\", (search) =>\n        search.subject(`Patient/${patientId}`),\n      );\n\n      await batch.send();\n\n      return { patient: patient.resource, conditions: conditions.resource };\n    },\n    [patientId],\n  );\n\n  return (\n    <FhirQueryLoader query={clientQuery}>\n      {(result) => (\n        <FhirValue\n          type=\"HumanName\"\n          value={result.patient.searchMatch()[0]?.name}\n        />\n      )}\n    </FhirQueryLoader>\n  );\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "with-options",
      children: "With options"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { DEFAULT_FHIR_CLIENT, useFhirClient } from \"@bonfhir/query/r4b\";\n\nexport default function MyComponent() {\n  const clientQuery = useFhirClient(\n    async (client) => {\n      const batch = client.batch();\n      const patient = batch.search(\"Patient\", (search) =>\n        search._id(patientId),\n      );\n      const conditions = batch.search(\"Condition\", (search) =>\n        search.subject(`Patient/${patientId}`),\n      );\n\n      await batch.send();\n\n      return { patient: patient.resource, conditions: conditions.resource };\n    },\n    [patientId],\n    {\n      // The name of the FhirClient to use\n      fhirClient: DEFAULT_FHIR_CLIENT,\n\n      // React query options\n      query: {\n        gcTime: Number.POSITIVE_INFINITY,\n      },\n    },\n  );\n\n  //...\n}\n"
      })
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
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
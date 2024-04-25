"use strict";
(self["webpackChunk_bonfhir_website"] = self["webpackChunk_bonfhir_website"] || []).push([[9461],{

/***/ 674:
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
	sidebar_position: 5,
	title: 'useFhirSearchAllPages',
	description: 'Get all the search results at once'
};
const contentTitle = undefined;
const metadata = {
  "id": "query/queries/use-fhir-search-all-pages",
  "title": "useFhirSearchAllPages",
  "description": "Get all the search results at once",
  "source": "@site/packages/query/queries/use-fhir-search-all-pages.md",
  "sourceDirName": "query/queries",
  "slug": "/query/queries/use-fhir-search-all-pages",
  "permalink": "/packages/query/queries/use-fhir-search-all-pages",
  "draft": false,
  "unlisted": false,
  "editUrl": "https://github.com/bonfhir/bonfhir/tree/main/docs/website/packages/query/queries/use-fhir-search-all-pages.md",
  "tags": [],
  "version": "current",
  "sidebarPosition": 5,
  "frontMatter": {
    "sidebar_position": 5,
    "title": "useFhirSearchAllPages",
    "description": "Get all the search results at once"
  },
  "sidebar": "getStartedSidebar",
  "previous": {
    "title": "useFhirSearchOne",
    "permalink": "/packages/query/queries/use-fhir-search-one"
  },
  "next": {
    "title": "useFhirInfiniteSearch",
    "permalink": "/packages/query/queries/use-fhir-infinite-search"
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
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["This hook is similar to the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "/packages/query/queries/use-fhir-search",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "useFhirSearch"
        })
      }), " one, except that it retrieves all the\nresult pages before returning all the results as a consolidated serach navigator."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
      title: "Use with caution",
      type: "warning",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["Use this with precaution. Make sure to only use it when the expected number of result is finite, and choose the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "_count"
        }), "\nparameter size wizely to limit the number of fetch that needs to happen."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "Most of the time there is a better way to achieve a feature, through referenced resources or graph operations for example."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "basic-usage",
      children: "Basic usage"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { asError } from \"@bonfhir/core/r4b\";\nimport { useFhirSearchAllPages } from \"@bonfhir/query/r4b\";\nimport { FhirValue } from \"@bonfhir/react/r4b\";\nimport { List } from \"@mantine/core\";\n\nexport default function MyComponent() {\n  const allObservationsLinkedToAnEnounterQuery = useFhirSearchAllPages(\n    \"Observation\",\n    (search) =>\n      search\n        .encounter(\"Encounter/5def0123-5a8a-4842-a3c0-7dd8386bdf6a\")\n        // Prefer using a large number here to minimize round trips to the server\n        ._count(100),\n  );\n\n  if (allObservationsLinkedToAnEnounterQuery.isLoading) {\n    return <div>Loading...</div>;\n  }\n\n  if (allObservationsLinkedToAnEnounterQuery.isError) {\n    return (\n      <div>\n        {asError(allObservationsLinkedToAnEnounterQuery.error)?.message}\n      </div>\n    );\n  }\n\n  return (\n    <List>\n      {allObservationsLinkedToAnEnounterQuery.data\n        ?.searchMatch()\n        .map((observation) => (\n          <List.Item key={observation.id}>\n            <FhirValue type=\"CodeableConcept\" value={observation.code} />\n          </List.Item>\n        ))}\n    </List>\n  );\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h3, {
      id: "with-the-fhirqueryloader-",
      children: ["With the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "<FhirQueryLoader />"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { useFhirSearchAllPages } from \"@bonfhir/query/r4b\";\nimport { FhirQueryLoader, FhirValue } from \"@bonfhir/react/r4b\";\nimport { List } from \"@mantine/core\";\n\nexport default function MyComponent() {\n  const allObservationsLinkedToAnEnounterQuery = useFhirSearchAllPages(\n    \"Observation\",\n    (search) =>\n      search\n        .encounter(\"Encounter/5def0123-5a8a-4842-a3c0-7dd8386bdf6a\")\n        // Prefer using a large number here to minimize round trips to the server\n        ._count(100),\n  );\n\n  return (\n    <FhirQueryLoader query={allObservationsLinkedToAnEnounterQuery}>\n      {(result) => (\n        <List>\n          {result.searchMatch().map((observation) => (\n            <List.Item key={observation.id}>\n              <FhirValue type=\"CodeableConcept\" value={observation.code} />\n            </List.Item>\n          ))}\n        </List>\n      )}\n    </FhirQueryLoader>\n  );\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "with-options",
      children: "With options"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { DEFAULT_FHIR_CLIENT, useFhirSearchAllPages } from \"@bonfhir/query/r4b\";\n\nexport default function MyComponent() {\n  const allObservationsLinkedToAnEnounterQuery = useFhirSearchAllPages(\n    \"Observation\",\n    (search) =>\n      search\n        .encounter(\"Encounter/5def0123-5a8a-4842-a3c0-7dd8386bdf6a\")\n        // Prefer using a large number here to minimize round trips to the server\n        ._count(100),\n    {\n      // The name of the FhirClient to use\n      fhirClient: DEFAULT_FHIR_CLIENT,\n\n      // React query options\n      query: {\n        gcTime: Number.POSITIVE_INFINITY,\n      },\n    },\n  );\n\n  //...\n}\n"
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
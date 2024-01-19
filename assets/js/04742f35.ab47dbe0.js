"use strict";
(self["webpackChunk_bonfhir_website"] = self["webpackChunk_bonfhir_website"] || []).push([[9820],{

/***/ 8939:
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
	sidebar_position: 9,
	title: 'useFhirHistory',
	description: 'Retrieve previous versions of a FHIR resource'
};
const contentTitle = undefined;
const metadata = {
  "id": "query/queries/use-fhir-history",
  "title": "useFhirHistory",
  "description": "Retrieve previous versions of a FHIR resource",
  "source": "@site/packages/query/queries/use-fhir-history.md",
  "sourceDirName": "query/queries",
  "slug": "/query/queries/use-fhir-history",
  "permalink": "/packages/query/queries/use-fhir-history",
  "draft": false,
  "unlisted": false,
  "editUrl": "https://github.com/bonfhir/bonfhir/tree/main/docs/website/packages/query/queries/use-fhir-history.md",
  "tags": [],
  "version": "current",
  "sidebarPosition": 9,
  "frontMatter": {
    "sidebar_position": 9,
    "title": "useFhirHistory",
    "description": "Retrieve previous versions of a FHIR resource"
  },
  "sidebar": "getStartedSidebar",
  "previous": {
    "title": "useFhirGraphQLResult",
    "permalink": "/packages/query/queries/use-fhir-graphql-result"
  },
  "next": {
    "title": "useFhirClient",
    "permalink": "/packages/query/queries/use-fhir-client"
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
  "value": "With pagination",
  "id": "with-pagination",
  "level": 3
}, {
  "value": "With options",
  "id": "with-options",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h3: "h3",
    p: "p",
    pre: "pre",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .a)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Return a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://tanstack.com/query/latest/docs/react/guides/queries",
        children: "Query"
      }), " for a\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://hl7.org/fhir/http.html#history",
        children: "history"
      }), " request."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "basic-usage",
      children: "Basic usage"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { asError } from \"@bonfhir/core/r4b\";\nimport { useFhirHistory } from \"@bonfhir/query/r4b\";\nimport { FhirValue } from \"@bonfhir/react/r4b\";\nimport { List } from \"@mantine/core\";\n\nexport default function MyComponent() {\n  const patientHistoryQuery = useFhirHistory(\n    \"Patient\",\n    \"bddc8d51-7e38-451c-8dd6-5a313b988bfe\",\n  );\n\n  if (patientHistoryQuery.isLoading) {\n    return <div>Loading...</div>;\n  }\n\n  if (patientHistoryQuery.isError) {\n    return <div>{asError(patientHistoryQuery.error)?.message}</div>;\n  }\n\n  return (\n    <List>\n      {patientHistoryQuery.data?.searchMatch().map((entry) => (\n        <List.Item key={entry.meta.versionId}>\n          {entry.meta.versionId} (on{\" \"}\n          <FhirValue type=\"instant\" value={entry.meta.lastUpdated} />)\n        </List.Item>\n      ))}\n    </List>\n  );\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h3, {
      id: "with-the-fhirqueryloader-",
      children: ["With the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "<FhirQueryLoader />"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { useFhirHistory } from \"@bonfhir/query/r4b\";\nimport { FhirQueryLoader, FhirValue } from \"@bonfhir/react/r4b\";\nimport { List } from \"@mantine/core\";\n\nexport default function MyComponent() {\n  const patientHistoryQuery = useFhirHistory(\n    \"Patient\",\n    \"bddc8d51-7e38-451c-8dd6-5a313b988bfe\",\n  );\n\n  return (\n    <FhirQueryLoader query={patientHistoryQuery}>\n      {(result) => (\n        <List>\n          {result.searchMatch().map((entry) => (\n            <List.Item key={entry.meta.versionId}>\n              {entry.meta.versionId} (on{\" \"}\n              <FhirValue type=\"instant\" value={entry.meta.lastUpdated} />)\n            </List.Item>\n          ))}\n        </List>\n      )}\n    </FhirQueryLoader>\n  );\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "with-pagination",
      children: "With pagination"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Pagination works the same way as ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "/packages/query/queries/use-fhir-search#with-pagination",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "useFhirSearch"
        })
      }), ",\nexcept that the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "pageUrl"
      }), " argument is in the options:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { useFhirHistory } from \"@bonfhir/query/r4b\";\nimport { FhirQueryLoader, FhirValue } from \"@bonfhir/react/r4b\";\nimport { List, Stack } from \"@mantine/core\";\nimport { useState } from \"react\";\n\nexport default function MyComponent() {\n  const [pageUrl, setPageUrl] = useState<string | undefined>(undefined);\n\n  const patientHistoryQuery = useFhirHistory(\n    \"Patient\",\n    \"bddc8d51-7e38-451c-8dd6-5a313b988bfe\",\n    {\n      pageUrl,\n    },\n  );\n\n  return (\n    <FhirQueryLoader query={patientHistoryQuery}>\n      {(result) => (\n        <Stack>\n          <List>\n            {result.searchMatch().map((entry) => (\n              <List.Item key={entry.meta.versionId}>\n                {entry.meta.versionId} (on{\" \"}\n                <FhirValue type=\"instant\" value={entry.meta.lastUpdated} />)\n              </List.Item>\n            ))}\n          </List>\n          {result.linkUrl(\"next\") && (\n            // Here we set the pageUrl using the bundle next link.\n            <Button onClick={() => setPageUrl(result.linkUrl(\"next\"))}>\n              Go to next page - {result.total} total result(s)\n            </Button>\n          )}\n        </Stack>\n      )}\n    </FhirQueryLoader>\n  );\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "with-options",
      children: "With options"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { DEFAULT_FHIR_CLIENT, useFhirHistory } from \"@bonfhir/query/r4b\";\n\nexport default function MyComponent() {\n  const patientHistoryQuery = useFhirHistory(\n    \"Patient\",\n    \"bddc8d51-7e38-451c-8dd6-5a313b988bfe\",\n    {\n      // FHIR API options - matches the `FhirClient` options\n      fhir: {\n        _summary: \"true\",\n      },\n\n      // The name of the FhirClient to use\n      fhirClient: DEFAULT_FHIR_CLIENT,\n\n      // React query options\n      query: {\n        gcTime: Number.POSITIVE_INFINITY,\n      },\n    },\n  );\n\n  //...\n}\n"
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
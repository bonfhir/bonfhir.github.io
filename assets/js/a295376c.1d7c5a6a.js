"use strict";
(self["webpackChunk_bonfhir_website"] = self["webpackChunk_bonfhir_website"] || []).push([[3757],{

/***/ 4520:
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
	sidebar_position: 3,
	title: 'useFhirSearch',
	description: 'Search for FHIR resources'
};
const contentTitle = undefined;
const metadata = {
  "id": "query/read/use-fhir-search",
  "title": "useFhirSearch",
  "description": "Search for FHIR resources",
  "source": "@site/packages/query/read/use-fhir-search.md",
  "sourceDirName": "query/read",
  "slug": "/query/read/use-fhir-search",
  "permalink": "/packages/query/read/use-fhir-search",
  "draft": false,
  "unlisted": false,
  "editUrl": "https://github.com/bonfhir/bonfhir/tree/main/docs/website/packages/query/read/use-fhir-search.md",
  "tags": [],
  "version": "current",
  "sidebarPosition": 3,
  "frontMatter": {
    "sidebar_position": 3,
    "title": "useFhirSearch",
    "description": "Search for FHIR resources"
  },
  "sidebar": "getStartedSidebar",
  "previous": {
    "title": "useFhirVRead",
    "permalink": "/packages/query/read/use-fhir-vread"
  },
  "next": {
    "title": "useFhirSearchOne",
    "permalink": "/packages/query/read/use-fhir-search-one"
  }
};
const assets = {

};



const toc = [{
  "value": "Basic usage",
  "id": "basic-usage",
  "level": 2
}, {
  "value": "With pagination",
  "id": "with-pagination",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
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
        href: "https://hl7.org/fhir/http.html#search",
        children: "search"
      }), " request."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "basic-usage",
      children: "Basic usage"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { useFhirSearch } from \"@bonfhir/query/r4b\";\n\nexport default function MyComponent() {\n  const patientsSearchQuery = useFhirSearch(\"Patient\", (search) =>\n    search\n      ._include(\"Patient\", \"organization\")\n      ._sort(\"-_lastUpdated\")\n      ._count(20)\n      ._total(\"accurate\"),\n  );\n\n  if (patientsSearchQuery.isInitialLoading) {\n    return <div>Loading...</div>;\n  }\n\n  if (patientsSearchQuery.isError) {\n    return <div>{asError(patientsSearchQuery.error)?.message}</div>;\n  }\n\n  return (\n    <List>\n      {patientsSearchQuery.data?.searchMatch().map((patient) => {\n        return (\n          <List.Item key={patient.id}>\n            <FhirValue type=\"HumanName\" value={patient.name} /> -\n            <FhirValue\n              type=\"string\"\n              value={patient.managingOrganization?.included()?.name}\n            />\n          </List.Item>\n        );\n      })}\n    </List>\n  );\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["See the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "/packages/core/fhir-client#search-builders-and-bundle-navigators",
        children: "Core documentation around search"
      }), " for more information\nabout the search or the bundle navigator."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["More concisely, with the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "/packages/react/components/fhir-query-loader",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "<FhirQueryLoader />"
        })
      }), " component:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { useFhirSearch } from \"@bonfhir/query/r4b\";\nimport { FhirQueryLoader, FhirValue } from \"@bonfhir/react/r4b\";\nimport { List } from \"@mantine/core\";\n\nexport default function MyComponent() {\n  const patientsSearchQuery = useFhirSearch(\"Patient\", (search) =>\n    search\n      ._include(\"Patient\", \"organization\")\n      ._sort(\"-_lastUpdated\")\n      ._count(20)\n      ._total(\"accurate\"),\n  );\n\n  return (\n    <FhirQueryLoader query={patientsSearchQuery}>\n      {(result) => (\n        <List>\n          {result.searchMatch().map((patient) => {\n            return (\n              <List.Item key={patient.id}>\n                <FhirValue type=\"HumanName\" value={patient.name} /> -\n                <FhirValue\n                  type=\"string\"\n                  value={patient.managingOrganization?.included()?.name}\n                />\n              </List.Item>\n            );\n          })}\n        </List>\n      )}\n    </FhirQueryLoader>\n  );\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "with-pagination",
      children: "With pagination"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["The third argument of ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "useFhirSearch"
      }), " is there to handle subsequent pages.\nSince there is a direct depency between the search result and the url for the next page, you need to handle it through\na state change somehow. Ex:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { useFhirSearch } from \"@bonfhir/query/r4b\";\nimport { FhirQueryLoader, FhirValue } from \"@bonfhir/react/r4b\";\nimport { Button, List, Stack } from \"@mantine/core\";\nimport { useState } from \"react\";\n\nexport default function MyComponent() {\n  const [pageUrl, setPageUrl] = useState<string | undefined>(undefined);\n\n  const patientsSearchQuery = useFhirSearch(\n    \"Patient\",\n    (search) =>\n      search\n        ._include(\"Patient\", \"organization\")\n        ._sort(\"-_lastUpdated\")\n        ._count(20)\n        ._total(\"accurate\"),\n    // Notice how we pass the \"next\" page url here as a third argument\n    // When it is falsy, it uses the search defined above.\n    pageUrl,\n  );\n\n  return (\n    <FhirQueryLoader query={patientsSearchQuery}>\n      {(result) => (\n        <Stack>\n          <List>\n            {result.searchMatch().map((patient) => {\n              return (\n                <List.Item key={patient.id}>\n                  <FhirValue type=\"HumanName\" value={patient.name} /> -\n                  <FhirValue\n                    type=\"string\"\n                    value={patient.managingOrganization?.included()?.name}\n                  />\n                </List.Item>\n              );\n            })}\n          </List>\n          {result.linkUrl(\"next\") && (\n            // Here we set the pageUrl using the bundle next link.\n            <Button onClick={() => setPageUrl(result.linkUrl(\"next\"))}>\n              Go to next page - {result.total} total result(s)\n            </Button>\n          )}\n        </Stack>\n      )}\n    </FhirQueryLoader>\n  );\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["This is a simple example. You might be interested in leveraging the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "/packages/react/components/fhir-pagination",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "<FhirPagination />"
        })
      }), " components\nand ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "/packages/react/components/use-fhir-search-controller",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "useFhirSearchController"
        })
      }), " hook for this:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { useFhirSearch } from \"@bonfhir/query/r4b\";\nimport {\n  FhirPagination,\n  FhirQueryLoader,\n  FhirValue,\n  useFhirSearchController,\n} from \"@bonfhir/react/r4b\";\nimport { List, Stack } from \"@mantine/core\";\n\nexport default function MyComponent() {\n  const searchController = useFhirSearchController({\n    defaultSort: \"-_lastUpdated\",\n    pageSize: 20,\n  });\n\n  const patientsSearchQuery = useFhirSearch(\n    \"Patient\",\n    (search) =>\n      search\n        ._include(\"Patient\", \"organization\")\n        ._sort(searchController.sort)\n        ._count(searchController.pageSize)\n        ._total(\"accurate\"),\n    searchController.pageUrl,\n  );\n\n  return (\n    <FhirQueryLoader query={patientsSearchQuery}>\n      {(result) => (\n        <Stack>\n          <List>\n            {result.searchMatch().map((patient) => {\n              return (\n                <List.Item key={patient.id}>\n                  <FhirValue type=\"HumanName\" value={patient.name} /> -\n                  <FhirValue\n                    type=\"string\"\n                    value={patient.managingOrganization?.included()?.name}\n                  />\n                </List.Item>\n              );\n            })}\n          </List>\n          <FhirPagination {...patientsSearchQuery} {...searchController} />\n        </Stack>\n      )}\n    </FhirQueryLoader>\n  );\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "With options:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { DEFAULT_FHIR_CLIENT, useFhirSearch } from \"@bonfhir/query/r4b\";\n\nexport default function MyComponent() {\n  const patientQuery = useFhirSearch(\n    \"Patient\",\n    (search) =>\n      search\n        ._include(\"Patient\", \"organization\")\n        ._sort(\"-_lastUpdated\")\n        ._count(20)\n        ._total(\"accurate\"),\n    undefined,\n    {\n      // FHIR API options - matches the `FhirClient` options\n      fhir: {\n        _pretty: \"true\",\n      },\n\n      // The name of the FhirClient to use\n      fhirClient: DEFAULT_FHIR_CLIENT,\n\n      // React query options\n      query: {\n        gcTime: Number.POSITIVE_INFINITY,\n      },\n    },\n  );\n\n  //...\n}\n"
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
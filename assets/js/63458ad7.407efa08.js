"use strict";
(self["webpackChunk_bonfhir_website"] = self["webpackChunk_bonfhir_website"] || []).push([[6915],{

/***/ 8725:
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
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7996);


const frontMatter = {
	sidebar_position: 6,
	title: 'useFhirInfiniteSearch',
	description: 'Search for FHIR resources'
};
const contentTitle = undefined;
const metadata = {
  "id": "query/queries/use-fhir-infinite-search",
  "title": "useFhirInfiniteSearch",
  "description": "Search for FHIR resources",
  "source": "@site/packages/query/queries/use-fhir-infinite-search.md",
  "sourceDirName": "query/queries",
  "slug": "/query/queries/use-fhir-infinite-search",
  "permalink": "/packages/query/queries/use-fhir-infinite-search",
  "draft": false,
  "unlisted": false,
  "editUrl": "https://github.com/bonfhir/bonfhir/tree/main/docs/website/packages/query/queries/use-fhir-infinite-search.md",
  "tags": [],
  "version": "current",
  "sidebarPosition": 6,
  "frontMatter": {
    "sidebar_position": 6,
    "title": "useFhirInfiniteSearch",
    "description": "Search for FHIR resources"
  },
  "sidebar": "getStartedSidebar",
  "previous": {
    "title": "useFhirSearchAllPages",
    "permalink": "/packages/query/queries/use-fhir-search-all-pages"
  },
  "next": {
    "title": "useFhirExecute",
    "permalink": "/packages/query/queries/use-fhir-execute"
  }
};
const assets = {

};



const toc = [{
  "value": "With a load more button",
  "id": "with-a-load-more-button",
  "level": 3
}, {
  "value": "With an infinite scroll marker to auto fetch on visibility",
  "id": "with-an-infinite-scroll-marker-to-auto-fetch-on-visibility",
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
      children: ["Return an ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://tanstack.com/query/v5/docs/react/guides/infinite-queries",
        children: "Infinite Query"
      }), " for a\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://hl7.org/fhir/http.html#search",
        children: "search"
      }), " request."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "This query is intended to be used in scenarios where \"load more\" or \"infinite scroll\" patterns are used."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "with-a-load-more-button",
      children: "With a load more button"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { useFhirInfiniteSearch } from \"@bonfhir/query/r4b\";\nimport { Button, List, Stack } from \"@mantine/core\";\n\nexport default function MyComponent() {\n  const patientsQuery = useFhirInfiniteSearch(\"Patient\", (search) =>\n    // The search needs a sort criteria (to be stable),\n    // the _count specifies the number of resources to fetch for each round-trip\n    search._sort(\"family\")._count(50),\n  );\n\n  return (\n    <Stack>\n      <List>\n        {patientsQuery.data?.pages.flatMap((page) =>\n          page\n            .searchMatch()\n            .map((patient) => (\n              <List.Item key={patient.id}>\n                {patient.name?.map((name) => name.family).join(\", \")}\n              </List.Item>\n            )),\n        )}\n      </List>\n      {patientsQuery.hasNextPage && (\n        <Button\n          loading={patientsQuery.isFetchingNextPage}\n          onClick={() => patientsQuery.fetchNextPage()}\n        >\n          Load more\n        </Button>\n      )}\n    </Stack>\n  );\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "with-an-infinite-scroll-marker-to-auto-fetch-on-visibility",
      children: "With an infinite scroll marker to auto fetch on visibility"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { useFhirInfiniteSearch } from \"@bonfhir/query/r4b\";\nimport { List, Stack } from \"@mantine/core\";\nimport { UseInfiniteQueryResult } from \"@tanstack/react-query\";\nimport { useEffect, useId, useRef } from \"react\";\n\nexport default function MyComponent() {\n  const patientsQuery = useFhirInfiniteSearch(\"Patient\", (search) =>\n    // The search needs a sort criteria (to be stable),\n    // the _count specifies the number of resources to fetch for each round-trip\n    search._sort(\"family\")._count(20),\n  );\n\n  return (\n    <Stack>\n      <List>\n        {patientsQuery.data?.pages.flatMap((page) =>\n          page\n            .searchMatch()\n            .map((patient) => (\n              <List.Item key={patient.id}>\n                {patient.name?.map((name) => name.family).join(\", \")}\n              </List.Item>\n            )),\n        )}\n      </List>\n      <InfiniteScroller {...patientsQuery} />\n    </Stack>\n  );\n}\n\nfunction InfiniteScroller({\n  hasNextPage,\n  fetchNextPage,\n}: UseInfiniteQueryResult) {\n  const id = useId();\n  const observerRef = useRef<IntersectionObserver | undefined>(undefined);\n\n  useEffect(() => {\n    const target = document.getElementById(id);\n    if (!target) {\n      return;\n    }\n    const options = { root: null, rootMargin: \"0px\", threshold: 1 };\n    observerRef.current = new IntersectionObserver((entries) => {\n      if (entries.some((e) => e.isIntersecting && hasNextPage)) {\n        fetchNextPage();\n      }\n    }, options);\n    observerRef.current.observe(target);\n    return () => {\n      observerRef.current?.disconnect();\n    };\n  }, [id, hasNextPage, fetchNextPage]);\n\n  return <div id={id} />;\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "with-options",
      children: "With options"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { DEFAULT_FHIR_CLIENT, useFhirInfiniteSearch } from \"@bonfhir/query/r4b\";\n\nexport default function MyComponent() {\n  const patientsQuery = useFhirInfiniteSearch(\n    \"Patient\",\n    (search) =>\n      // The search needs a sort criteria (to be stable),\n      // the _count specifies the number of resources to fetch for each round-trip\n      search._sort(\"family\")._count(20),\n    {\n      // FHIR API options - matches the `FhirClient` options\n      fhir: {\n        _pretty: \"true\",\n      },\n\n      // The name of the FhirClient to use\n      fhirClient: DEFAULT_FHIR_CLIENT,\n\n      // React query options\n      query: {\n        gcTime: Number.POSITIVE_INFINITY,\n      },\n    },\n  );\n\n  //...\n}\n"
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

/***/ 7996:
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
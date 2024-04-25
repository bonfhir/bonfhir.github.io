"use strict";
(self["webpackChunk_bonfhir_website"] = self["webpackChunk_bonfhir_website"] || []).push([[9938],{

/***/ 1935:
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
	title: 'useFhirSearchController'
};
const contentTitle = undefined;
const metadata = {
  "id": "react/components/use-fhir-search-controller",
  "title": "useFhirSearchController",
  "description": "The useFhirSearchController hook manages the synchronization between a query and a table and pagination.",
  "source": "@site/packages/react/components/use-fhir-search-controller.md",
  "sourceDirName": "react/components",
  "slug": "/react/components/use-fhir-search-controller",
  "permalink": "/packages/react/components/use-fhir-search-controller",
  "draft": false,
  "unlisted": false,
  "editUrl": "https://github.com/bonfhir/bonfhir/tree/main/docs/website/packages/react/components/use-fhir-search-controller.md",
  "tags": [],
  "version": "current",
  "frontMatter": {
    "title": "useFhirSearchController"
  },
  "sidebar": "getStartedSidebar",
  "previous": {
    "title": "<FhirValue />",
    "permalink": "/packages/react/components/fhir-value"
  },
  "next": {
    "title": "useFhirUIProvider",
    "permalink": "/packages/react/components/use-fhir-ui-context"
  }
};
const assets = {

};



const toc = [{
  "value": "Basic usage",
  "id": "basic-usage",
  "level": 2
}, {
  "value": "Add search parameters",
  "id": "add-search-parameters",
  "level": 2
}, {
  "value": "Use external state management",
  "id": "use-external-state-management",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
    code: "code",
    h2: "h2",
    p: "p",
    pre: "pre",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["The ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "useFhirSearchController"
      }), " hook manages the synchronization between a query and a table and pagination."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["See the examples in ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "/packages/react/components/fhir-table",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "<FhirTable />"
        })
      }), " and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "/packages/react/components/fhir-pagination",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "<FhirPagination />"
        })
      }), " to better understand the relationship between all components.\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "http://localhost:3000/docs/build-a-fhir-app-with-react/fhir-tables-with-pagination",
        children: "Going through our tutorial"
      }), " might also be beneficial."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "basic-usage",
      children: "Basic usage"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { useFhirSearchController } from \"@bonfhir/react/r4b\";\n\n// The search controller coordinates activities and actions between the <FhirTable /> and the query.\nconst orgsSearchController = useFhirSearchController({\n  defaultSort: \"name\",\n  pageSize: 20,\n});\n\nconst organizationQuery = useFhirSearch(\n  \"Organization\",\n  (search) =>\n    search\n      ._include(\"Organization\", \"partof\")\n      // The page size and sort must be controlled by the search controller, and passed to the query appropriately.\n      ._count(orgsSearchController.pageSize)\n      ._sort(orgsSearchController.sort)\n      // The total must be requested for the pagination to work. Otherwise, you'll see a 0 out of 0 count.\n      ._total(\"accurate\"),\n  // The third argument to the `useFhirSearch` hook is the page url that is manipulated by the search controller.\n  orgsSearchController.pageUrl\n);\n\nreturn (\n  <FhirTable\n    {...organizationQuery}\n    {...orgsSearchController}\n    columns={[...]}\n  />\n  // Both the query and the controller are spread to the pagination, so that pages can be counted,\n  // and page changes can be acted on the controller itself.\n  <FhirPagination\n    {...organizationQuery}\n    {...orgsSearchController}\n  />);\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "add-search-parameters",
      children: "Add search parameters"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "In addition to managing pagination and sorting, the search controller can also manages search parameters."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-tsx",
        children: "const orgsSearchController = useFhirSearchController({\n  defaultSort: \"name\",\n  pageSize: 20,\n  // Always provide default search parameters. This also create a type for the search object.\n  defaultSearch: {\n    name: \"\",\n  },\n});\n\nconst organizationQuery = useFhirSearch(\n  \"Organization\",\n  (search) =>\n    search\n      ._include(\"Organization\", \"partof\")\n      ._count(orgsSearchController.pageSize)\n      ._sort(orgsSearchController.sort)\n      ._total(\"accurate\")\n      // Search parameters must be added to the search query builder\n      .name(orgsSearchController.search?.name),\n  orgsSearchController.pageUrl,\n);\n\nreturn (\n  <>\n    <FhirInput\n      type=\"string\"\n      label=\"Name\"\n      placeholder=\"Search by name\"\n      // The <FhirInput /> can be controlled directly by the search controller.\n      value={orgsSearchController.search?.name}\n      onChange={(name) =>\n        // This triggers the query on search change.\n        orgsSearchController.onSearch((prevSearch) => ({\n          ...prevSearch,\n          name,\n        }))\n      }\n    />\n    <FhirTable\n      {...organizationQuery}\n      {...orgsSearchController}\n      columns={[{ key: \"name\", title: \"Name\", render: (org) => org.name }]}\n    />\n  </>\n);\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "use-external-state-management",
      children: "Use external state management"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["The search controller state can be managed externally.", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.br, {}), "\n", "This is very useful to project it to the url query parameters, allowing urls to reflect the search state.\nYour SPA app now behaves like a server-side rendered app, with support for URL sharing and bookmarks on search!"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { OrganizationSortOrder } from \"@bonfhir/core/r4b\";\nimport {\n  useFhirSearchController,\n  useURLSearchParamsStateManager,\n} from \"@bonfhir/react/r4b\";\nimport { useSearchParams } from \"react-router-dom\";\n\n// When using a state manager, you need to provide the sort type as a generic argument to avoid any issues.\nconst orgsSearchController = useFhirSearchController<OrganizationSortOrder>({\n  defaultSort: \"name\",\n  pageSize: 20,\n  defaultSearch: {\n    name: \"\",\n  },\n  // This is the solution for React router.\n  // We also provide a package for Next.js.\n  // Any other router needs to provide its own implementation as the second argument.\n  stateManager: useURLSearchParamsStateManager(\"search\", useSearchParams()),\n});\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["The first argument to ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "useURLSearchParamsStateManager"
      }), " is the scope (which is the name of the url search parameters used\nto store the search state). This allows multiple, independent search controllers to be placed on the same page, with\ndifferent scopes."]
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
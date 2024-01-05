"use strict";
(self["webpackChunk_bonfhir_website"] = self["webpackChunk_bonfhir_website"] || []).push([[217],{

/***/ 6910:
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
	sidebar_position: 2,
	title: 'useFhirVRead',
	description: 'Read a version of a FHIR resource'
};
const contentTitle = undefined;
const metadata = {
  "id": "query/queries/use-fhir-vread",
  "title": "useFhirVRead",
  "description": "Read a version of a FHIR resource",
  "source": "@site/packages/query/queries/use-fhir-vread.md",
  "sourceDirName": "query/queries",
  "slug": "/query/queries/use-fhir-vread",
  "permalink": "/packages/query/queries/use-fhir-vread",
  "draft": false,
  "unlisted": false,
  "editUrl": "https://github.com/bonfhir/bonfhir/tree/main/docs/website/packages/query/queries/use-fhir-vread.md",
  "tags": [],
  "version": "current",
  "sidebarPosition": 2,
  "frontMatter": {
    "sidebar_position": 2,
    "title": "useFhirVRead",
    "description": "Read a version of a FHIR resource"
  },
  "sidebar": "getStartedSidebar",
  "previous": {
    "title": "useFhirRead",
    "permalink": "/packages/query/queries/use-fhir-read"
  },
  "next": {
    "title": "useFhirSearch",
    "permalink": "/packages/query/queries/use-fhir-search"
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
        href: "https://hl7.org/fhir/http.html#vread",
        children: "vread"
      }), " request."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["See the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "/packages/query/queries/use-fhir-history",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "useFhirHistory"
        })
      }), " hook to retrieve the list of versions for a resource."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "basic-usage",
      children: "Basic usage"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { asError } from \"@bonfhir/core/r4b\";\nimport { useFhirVRead } from \"@bonfhir/query/r4b\";\nimport { FhirValue } from \"@bonfhir/react/r4b\";\n\nexport default function MyComponent() {\n  const patientQuery = useFhirVRead(\n    \"Patient\",\n    \"a337ccfc-3ad4-47b4-9f02-3a19e035bb03\",\n    // The version id to retrieve\n    \"51a9a637-465b-4ab8-afe4-79875eaf9dd7\",\n  );\n\n  if (patientQuery.isLoading) {\n    return <div>Loading...</div>;\n  }\n\n  if (patientQuery.isError) {\n    return <div>{asError(patientQuery.error)?.message}</div>;\n  }\n\n  return <FhirValue type=\"HumanName\" value={patientQuery.data?.name} />;\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h3, {
      id: "with-the-fhirqueryloader-",
      children: ["With the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "<FhirQueryLoader />"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { useFhirRead } from \"@bonfhir/query/r4b\";\nimport { FhirQueryLoader, FhirValue } from \"@bonfhir/react/r4b\";\n\nexport default function MyComponent() {\n  const patientQuery = useFhirRead(\n    \"Patient\",\n    \"a337ccfc-3ad4-47b4-9f02-3a19e035bb03\",\n    // The version id to retrieve\n    \"51a9a637-465b-4ab8-afe4-79875eaf9dd7\",\n  );\n\n  return (\n    <FhirQueryLoader query={patientQuery}>\n      {(patient) => <FhirValue type=\"HumanName\" value={patient.name} />}\n    </FhirQueryLoader>\n  );\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "with-options",
      children: "With options"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { DEFAULT_FHIR_CLIENT, useFhirRead } from \"@bonfhir/query/r4b\";\n\nexport default function MyComponent() {\n  const patientQuery = useFhirRead(\n    \"Patient\",\n    \"a337ccfc-3ad4-47b4-9f02-3a19e035bb03\",\n    // The version id to retrieve\n    \"51a9a637-465b-4ab8-afe4-79875eaf9dd7\",\n    {\n      // FHIR API options - matches the `FhirClient` options\n      fhir: {\n        _summary: \"true\",\n      },\n\n      // The name of the FhirClient to use\n      fhirClient: DEFAULT_FHIR_CLIENT,\n\n      // React query options\n      query: {\n        gcTime: Number.POSITIVE_INFINITY,\n      },\n    },\n  );\n\n  //...\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["The ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "useFhirVRead"
      }), " hook errors out on not found - same behavior as the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "/packages/core/fhir-client#crud",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "FhirClient.vread"
        })
      }), "."]
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
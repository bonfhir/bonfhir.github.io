"use strict";
(self["webpackChunk_bonfhir_website"] = self["webpackChunk_bonfhir_website"] || []).push([[9064],{

/***/ 5353:
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
	sidebar_position: 4,
	title: 'useFhirSearchOne',
	description: 'Search for a single FHIR resource'
};
const contentTitle = undefined;
const metadata = {
  "id": "query/queries/use-fhir-search-one",
  "title": "useFhirSearchOne",
  "description": "Search for a single FHIR resource",
  "source": "@site/packages/query/queries/use-fhir-search-one.md",
  "sourceDirName": "query/queries",
  "slug": "/query/queries/use-fhir-search-one",
  "permalink": "/packages/query/queries/use-fhir-search-one",
  "draft": false,
  "unlisted": false,
  "editUrl": "https://github.com/bonfhir/bonfhir/tree/main/docs/website/packages/query/queries/use-fhir-search-one.md",
  "tags": [],
  "version": "current",
  "sidebarPosition": 4,
  "frontMatter": {
    "sidebar_position": 4,
    "title": "useFhirSearchOne",
    "description": "Search for a single FHIR resource"
  },
  "sidebar": "getStartedSidebar",
  "previous": {
    "title": "useFhirSearch",
    "permalink": "/packages/query/queries/use-fhir-search"
  },
  "next": {
    "title": "useFhirSearchAllPages",
    "permalink": "/packages/query/queries/use-fhir-search-all-pages"
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
    br: "br",
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .a)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["This hook is similar to the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "/packages/query/queries/use-fhir-search",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "useFhirSearch"
        })
      }), " one, except that it is optimized to\nreturn one and only one search match.", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.br, {}), "\n", "This is very convenient on cases where:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["you need to address a single resource by its ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://www.hl7.org/fhir/references.html#canonical",
          children: "canonical URL"
        })]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["or you are looking to also retrieve ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://www.hl7.org/fhir/search.html#include",
          children: "referenced resources"
        }), " (e.g. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "_include"
        }), " and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "_revinclude"
        }), " usage)"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "basic-usage",
      children: "Basic usage"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { asError } from \"@bonfhir/core/r4b\";\nimport { useFhirSearchOne } from \"@bonfhir/query/r4b\";\n\nexport default function MyComponent() {\n  const questionnaireQuery = useFhirSearchOne(\"Questionnaire\", (search) =>\n    search.url(\"http://acme.org/fhir/my-questionnaire\"),\n  );\n\n  if (questionnaireQuery.isLoading) {\n    return <div>Loading...</div>;\n  }\n\n  if (questionnaireQuery.isError) {\n    return <div>{asError(questionnaireQuery.error)?.message}</div>;\n  }\n\n  return questionnaireQuery.data?.title;\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h3, {
      id: "with-the-fhirqueryloader-",
      children: ["With the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "<FhirQueryLoader />"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { DocumentReference } from \"@bonfhir/core/r4b\";\nimport { useFhirSearchOne } from \"@bonfhir/query/r4b\";\nimport { FhirQueryLoader, FhirValue } from \"@bonfhir/react/r4b\";\nimport { List, Stack } from \"@mantine/core\";\n\nexport default function MyComponent() {\n  const encounterQuery = useFhirSearchOne(\"Encounter\", (search) =>\n    search\n      ._id(\"5def0123-5a8a-4842-a3c0-7dd8386bdf6a\")\n      ._include(\"Encounter\", \"patient\")\n      ._include(\"Encounter\", \"diagnosis\")\n      ._revinclude(\"DocumentReference\", \"encounter\")\n      ._revinclude(\"Observation\", \"encounter\"),\n  );\n\n  return (\n    <FhirQueryLoader query={encounterQuery}>\n      {(encounter) => (\n        <Stack>\n          <FhirValue type=\"Period\" value={encounter.period} />\n          <List>\n            {encounter\n              .revIncluded<DocumentReference>((doc) => doc.context?.encounter)\n              .map((doc) => (\n                <List.Item key={doc.id}>\n                  <FhirValue type=\"CodeableConcept\" value={doc.type} />:{\" \"}\n                  {doc.description}\n                </List.Item>\n              ))}\n          </List>\n        </Stack>\n      )}\n    </FhirQueryLoader>\n  );\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "with-options",
      children: "With options"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { DEFAULT_FHIR_CLIENT, useFhirSearchOne } from \"@bonfhir/query/r4b\";\n\nexport default function MyComponent() {\n  const questionnaireQuery = useFhirSearchOne(\n    \"Questionnaire\",\n    (search) => search.url(\"http://acme.org/fhir/my-questionnaire\"),\n    {\n      // FHIR API options - matches the `FhirClient` options\n      fhir: {\n        _summary: \"true\",\n      },\n\n      // The name of the FhirClient to use\n      fhirClient: DEFAULT_FHIR_CLIENT,\n\n      // React query options\n      query: {\n        gcTime: Number.POSITIVE_INFINITY,\n      },\n    },\n  );\n\n  //...\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["The ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "useFhirSearchOne"
      }), " hook errors out if there is no result, or more than one match in the bundle (referenced resources are OK)."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["If you are not sure about the existence of the resource, you might want to use ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "/packages/query/queries/use-fhir-search",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "useFhirSearch"
        })
      }), " instead."]
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
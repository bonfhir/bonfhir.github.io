"use strict";
(self["webpackChunk_bonfhir_website"] = self["webpackChunk_bonfhir_website"] || []).push([[3724],{

/***/ 687:
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
	sidebar_position: 7,
	title: 'useFhirGraphQL',
	description: 'Execute a Graphql query'
};
const contentTitle = undefined;
const metadata = {
  "id": "query/queries/use-fhir-graphql",
  "title": "useFhirGraphQL",
  "description": "Execute a Graphql query",
  "source": "@site/packages/query/queries/use-fhir-graphql.md",
  "sourceDirName": "query/queries",
  "slug": "/query/queries/use-fhir-graphql",
  "permalink": "/packages/query/queries/use-fhir-graphql",
  "draft": false,
  "unlisted": false,
  "editUrl": "https://github.com/bonfhir/bonfhir/tree/main/docs/website/packages/query/queries/use-fhir-graphql.md",
  "tags": [],
  "version": "current",
  "sidebarPosition": 7,
  "frontMatter": {
    "sidebar_position": 7,
    "title": "useFhirGraphQL",
    "description": "Execute a Graphql query"
  },
  "sidebar": "getStartedSidebar",
  "previous": {
    "title": "useFhirExecute",
    "permalink": "/packages/query/queries/use-fhir-execute"
  },
  "next": {
    "title": "useFhirGraphQLResult",
    "permalink": "/packages/query/queries/use-fhir-graphql-result"
  }
};
const assets = {

};



const toc = [{
  "value": "Usage with GraphQL queries as string",
  "id": "usage-with-graphql-queries-as-string",
  "level": 3
}, {
  "value": "Usage with typed GraphQL",
  "id": "usage-with-typed-graphql",
  "level": 3
}, {
  "value": "Passing variables",
  "id": "passing-variables",
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
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Return a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://tanstack.com/query/latest/docs/react/guides/queries",
        children: "Query"
      }), " for a\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://hl7.org/fhir/graphql.html",
        children: "GraphQL"
      }), " request."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
      type: "info",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["This hook simplifies error handling and returns an error if any graphql query is on error.", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.br, {}), "\n", "This simplify the code at the expense of more granular control on partial errors scenarios that are available to\nGraphQL operation."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["If this is what you want, you can use the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "/packages/query/queries/use-fhir-graphql-result",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "useFhirGraphQLResult"
          })
        }), " hook\nto have access to the raw GraphQL response."]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
      title: "GraphQL queries only",
      type: "warning",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["This hooks is intended for GraphQL ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "query"
        }), " operations only."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["If you need to execute a mutation, you need to use the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "/packages/query/mutations/use-fhir-graphql-mutation",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "useFhirGraphQLMutation"
          })
        }), " hook."]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "usage-with-graphql-queries-as-string",
      children: "Usage with GraphQL queries as string"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { asError } from \"@bonfhir/core/r4b\";\nimport { useFhirGraphQL } from \"@bonfhir/query/r4b\";\nimport { FhirValue } from \"@bonfhir/react/r4b\";\nimport { List } from \"@mantine/core\";\n\nexport default function MyComponent() {\n  const patientsQuery = useFhirGraphQL(`\n    query Patients {\n      PatientList {\n        id\n        name {\n          given\n          family\n        }\n      }\n    }\n  `);\n\n  if (patientsQuery.isLoading) {\n    return <div>Loading...</div>;\n  }\n\n  if (patientsQuery.isError) {\n    return <div>{asError(patientsQuery.error)?.message}</div>;\n  }\n\n  return (\n    <List>\n      {patientsQuery.data?.PatientList.map((patient: any) => {\n        return (\n          <List.Item key={patient.id}>\n            <FhirValue type=\"HumanName\" value={patient.name} />\n          </List.Item>\n        );\n      })}\n    </List>\n  );\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "usage-with-typed-graphql",
      children: "Usage with typed GraphQL"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["It is possible to generate proper type information for GraphQL queries.\nThe details depend on your setup, but ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "/docs/guides/graphql",
        children: "following this guide"
      }), "\nshould get you started. You can then do this:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-tsx",
        metastring: "title=\"codegen.ts\"",
        children: "import type { CodegenConfig } from \"@graphql-codegen/cli\";\n\nexport default {\n  schema: \"fhir-schema.graphql.json\",\n  documents: [\"./src/**/*.tsx\"],\n  emitLegacyCommonJSImports: false,\n  ignoreNoDocuments: true,\n  generates: {\n    \"./src/gql/\": {\n      preset: \"client\",\n    },\n  },\n} satisfies CodegenConfig;\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { HumanName } from \"@bonfhir/core/r4b\";\nimport { useFhirGraphQL } from \"@bonfhir/query/r4b\";\nimport { FhirQueryLoader, FhirValue } from \"@bonfhir/react/r4b\";\nimport { List } from \"@mantine/core\";\n// This file is generated by @graphql-codegen/cli using the codegen.ts configuration above\nimport { graphql } from \"../gql\";\n\nexport default function MyComponent() {\n  const patientsQueryDocument = graphql(/** GraphQL */ `\n    query Patients {\n      PatientList {\n        id\n        name {\n          given\n          family\n        }\n      }\n    }\n  `);\n\n  // patientsQueryDocument is strongly typed based on the query\n\n  const patientsQuery = useFhirGraphQL(patientsQueryDocument);\n\n  return (\n    <FhirQueryLoader query={patientsQuery}>\n      {(result) => (\n        <List>\n          {result.PatientList?.map((patient) => {\n            return (\n              <List.Item key={patient?.id}>\n                <FhirValue\n                  type=\"HumanName\"\n                  value={patient?.name as HumanName}\n                />\n              </List.Item>\n            );\n          })}\n        </List>\n      )}\n    </FhirQueryLoader>\n  );\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "passing-variables",
      children: "Passing variables"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { useFhirGraphQL } from \"@bonfhir/query/r4b\";\nimport { List } from \"@mantine/core\";\nimport { graphql } from \"../gql\";\n\nexport default function MyComponent() {\n  const patientsQueryDocument = graphql(/** GraphQL */ `\n    query Patients($active: String) {\n      PatientList(active: $active) {\n        id\n        name {\n          given\n          family\n        }\n      }\n    }\n  `);\n\n  // If using the graphql-codegen, variables are strongly typed\n  const patientsQuery = useFhirGraphQL(patientsQueryDocument, {\n    active: \"true\",\n  });\n\n  //...\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "with-options",
      children: "With options"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { DEFAULT_FHIR_CLIENT, useFhirGraphQL } from \"@bonfhir/query/r4b\";\nimport { List } from \"@mantine/core\";\nimport { graphql } from \"../gql\";\n\nexport default function MyComponent() {\n  const patientsQueryDocument = graphql(/** GraphQL */ `\n    query Patients($active: String) {\n      PatientList(active: $active) {\n        id\n        name {\n          given\n          family\n        }\n      }\n    }\n  `);\n\n  const patientsQuery = useFhirGraphQL(\n    patientsQueryDocument,\n    {\n      active: \"true\",\n    },\n    {\n      // The name of the FhirClient to use\n      fhirClient: DEFAULT_FHIR_CLIENT,\n\n      // React query options\n      query: {\n        gcTime: Number.POSITIVE_INFINITY,\n      },\n    },\n  );\n\n  //...\n}\n"
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
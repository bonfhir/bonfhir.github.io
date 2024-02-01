"use strict";
(self["webpackChunk_bonfhir_website"] = self["webpackChunk_bonfhir_website"] || []).push([[1372],{

/***/ 7916:
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
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9604);


const frontMatter = {
	sidebar_position: 7,
	title: 'useFhirGraphQLMutation',
	description: 'Execute a GraphQL mutation'
};
const contentTitle = undefined;
const metadata = {
  "id": "query/mutations/use-fhir-graphql-mutation",
  "title": "useFhirGraphQLMutation",
  "description": "Execute a GraphQL mutation",
  "source": "@site/packages/query/mutations/use-fhir-graphql-mutation.md",
  "sourceDirName": "query/mutations",
  "slug": "/query/mutations/use-fhir-graphql-mutation",
  "permalink": "/packages/query/mutations/use-fhir-graphql-mutation",
  "draft": false,
  "unlisted": false,
  "editUrl": "https://github.com/bonfhir/bonfhir/tree/main/docs/website/packages/query/mutations/use-fhir-graphql-mutation.md",
  "tags": [],
  "version": "current",
  "sidebarPosition": 7,
  "frontMatter": {
    "sidebar_position": 7,
    "title": "useFhirGraphQLMutation",
    "description": "Execute a GraphQL mutation"
  },
  "sidebar": "getStartedSidebar",
  "previous": {
    "title": "useFhirExecuteMutation",
    "permalink": "/packages/query/mutations/use-fhir-execute-mutation"
  },
  "next": {
    "title": "useFhirTransactionMutation",
    "permalink": "/packages/query/mutations/use-fhir-transaction-mutation"
  }
};
const assets = {

};



const toc = [{
  "value": "Usage with GraphQL mutations as string",
  "id": "usage-with-graphql-mutations-as-string",
  "level": 3
}, {
  "value": "Usage with typed GraphQL",
  "id": "usage-with-typed-graphql",
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
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .a)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Return a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://tanstack.com/query/latest/docs/react/guides/mutations",
        children: "Mutation"
      }), " for a\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://hl7.org/fhir/graphql.html",
        children: "GraphQL"
      }), " request."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
      title: "GraphQL mutation",
      type: "warning",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["This hooks is intended for GraphQL ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "mutation"
        }), " operations."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["If you need to execute a query, you should use the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "/packages/query/queries/use-fhir-graphql",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "useFhirGraphQL"
          })
        }), " hook."]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "usage-with-graphql-mutations-as-string",
      children: "Usage with GraphQL mutations as string"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-tsx",
        children: "/* eslint-disable @typescript-eslint/no-explicit-any */\nimport { build } from \"@bonfhir/core/r4b\";\nimport { useFhirGraphQLMutation } from \"@bonfhir/query/r4b\";\nimport { Button } from \"@mantine/core\";\n\nexport default function MyComponent() {\n  const createOrganizationMutation = useFhirGraphQLMutation(`\n  mutation CreateOrganization($res: OrganizationCreate!) {\n    OrganizationCreate(res: $res) {\n      id\n      name\n    }\n  }\n`);\n\n  const createOrganization = () => {\n    createOrganizationMutation.mutate({\n      res: build(\"Organization\", {\n        name: \"Acme, Inc\",\n      }),\n    });\n  };\n\n  return (\n    <Button\n      loading={createOrganizationMutation.isPending}\n      onClick={createOrganization}\n    >\n      Create organization\n    </Button>\n  );\n}\n"
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
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "with-options",
      children: "With options"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Useful to react on the success or error of a mutation:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-tsx",
        children: "import {\n  DEFAULT_FHIR_CLIENT,\n  useFhirGraphQLMutation,\n} from \"@bonfhir/query/r4b\";\nimport { notifications } from \"@mantine/notifications\";\nimport { graphql } from \"../gql\";\n\nexport default function MyComponent() {\n  const createOrganizationMutationDocument = graphql(`\n    mutation CreateOrganization($res: OrganizationCreate!) {\n      OrganizationCreate(res: $res) {\n        id\n        name\n      }\n    }\n  `);\n\n  const createOrganizationMutation = useFhirGraphQLMutation(\n    createOrganizationMutationDocument,\n    {\n      // The name of the FhirClient to use\n      fhirClient: DEFAULT_FHIR_CLIENT,\n\n      // React query mutation options\n      mutation: {\n        onSuccess: (org) => {\n          notifications.show({\n            title: \"Organization created\",\n            message: `Created org ${org.OrganizationCreate?.name} (${org.OrganizationCreate?.id})`,\n            color: \"green\",\n          });\n        },\n      },\n    },\n  );\n\n  //...\n}\n"
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

/***/ 9604:
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
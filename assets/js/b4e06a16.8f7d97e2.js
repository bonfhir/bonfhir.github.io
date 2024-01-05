"use strict";
(self["webpackChunk_bonfhir_website"] = self["webpackChunk_bonfhir_website"] || []).push([[4932],{

/***/ 985:
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
	title: 'useFhirSaveMutation',
	description: 'Create or update a FHIR resource'
};
const contentTitle = undefined;
const metadata = {
  "id": "query/mutations/use-fhir-save-mutation",
  "title": "useFhirSaveMutation",
  "description": "Create or update a FHIR resource",
  "source": "@site/packages/query/mutations/use-fhir-save-mutation.md",
  "sourceDirName": "query/mutations",
  "slug": "/query/mutations/use-fhir-save-mutation",
  "permalink": "/packages/query/mutations/use-fhir-save-mutation",
  "draft": false,
  "unlisted": false,
  "editUrl": "https://github.com/bonfhir/bonfhir/tree/main/docs/website/packages/query/mutations/use-fhir-save-mutation.md",
  "tags": [],
  "version": "current",
  "sidebarPosition": 3,
  "frontMatter": {
    "sidebar_position": 3,
    "title": "useFhirSaveMutation",
    "description": "Create or update a FHIR resource"
  },
  "sidebar": "getStartedSidebar",
  "previous": {
    "title": "useFhirUpdateMutation",
    "permalink": "/packages/query/mutations/use-fhir-update-mutation"
  },
  "next": {
    "title": "useFhirPatchMutation",
    "permalink": "/packages/query/mutations/use-fhir-patch-mutation"
  }
};
const assets = {

};



const toc = [{
  "value": "Basic usage",
  "id": "basic-usage",
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
        href: "https://tanstack.com/query/latest/docs/react/guides/mutations",
        children: "Mutation"
      }), " for a\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://hl7.org/fhir/http.html#create",
        children: "create"
      }), " or ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://hl7.org/fhir/http.html#create",
        children: "update"
      }), " request."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["This is basically a shorthand that invokes the create operation when the resource has no ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "id"
      }), ", or the update otherwise."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "basic-usage",
      children: "Basic usage"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { build } from \"@bonfhir/core/r4b\";\nimport { useFhirSaveMutation } from \"@bonfhir/query/r4b\";\nimport { Button } from \"@mantine/core\";\n\nexport default function MyComponent() {\n  const savePatientMutation = useFhirSaveMutation(\"Patient\");\n\n  const buildPatient = () =>\n    build(\"Patient\", {\n      name: [{ given: [\"John\"], family: \"Doe\" }],\n      active: true,\n    });\n\n  return (\n    <Button\n      loading={savePatientMutation.isPending}\n      onClick={() => savePatientMutation.mutate(buildPatient())}\n    >\n      Create Patient\n    </Button>\n  );\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "with-options",
      children: "With options"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { DEFAULT_FHIR_CLIENT, useFhirSaveMutation } from \"@bonfhir/query/r4b\";\nimport { useFhirUIContext } from \"@bonfhir/react/r4b\";\nimport { notifications } from \"@mantine/notifications\";\n\nexport default function MyComponent() {\n  const { formatter } = useFhirUIContext();\n\n  const savePatientMutation = useFhirSaveMutation(\"Patient\", {\n    // The name of the FhirClient to use\n    fhirClient: DEFAULT_FHIR_CLIENT,\n\n    // React query mutation options\n    mutation: {\n      onSuccess: (patient) => {\n        notifications.show({\n          title: \"Patient saved\",\n          message: formatter.message`Saved patient ${[\n            \"HumanName\",\n            patient.name,\n          ]}`,\n          color: \"green\",\n        });\n      },\n      onError: (error) => {...}\n    },\n  });\n\n  //...\n}\n"
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
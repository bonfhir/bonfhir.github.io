"use strict";
(self["webpackChunk_bonfhir_website"] = self["webpackChunk_bonfhir_website"] || []).push([[9565],{

/***/ 1022:
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
	sidebar_position: 5,
	title: 'Extending FHIR resources',
	description: 'Extensions, tags, and profiles'
};
const contentTitle = undefined;
const metadata = {
  "id": "core/extending-fhir-resources",
  "title": "Extending FHIR resources",
  "description": "Extensions, tags, and profiles",
  "source": "@site/packages/core/extending-fhir-resources.md",
  "sourceDirName": "core",
  "slug": "/core/extending-fhir-resources",
  "permalink": "/packages/core/extending-fhir-resources",
  "draft": false,
  "unlisted": false,
  "editUrl": "https://github.com/bonfhir/bonfhir/tree/main/docs/website/packages/core/extending-fhir-resources.md",
  "tags": [],
  "version": "current",
  "sidebarPosition": 5,
  "frontMatter": {
    "sidebar_position": 5,
    "title": "Extending FHIR resources",
    "description": "Extensions, tags, and profiles"
  },
  "sidebar": "getStartedSidebar",
  "previous": {
    "title": "Manipulating date and time",
    "permalink": "/packages/core/manipulating-date-time"
  },
  "next": {
    "title": "Misc helpers",
    "permalink": "/packages/core/misc-helpers"
  }
};
const assets = {

};



const toc = [{
  "value": "Extend FHIR resources",
  "id": "extend-fhir-resources",
  "level": 2
}, {
  "value": "Usage with client",
  "id": "usage-with-client",
  "level": 2
}, {
  "value": "Complex extensions",
  "id": "complex-extensions",
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
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .a)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "bonFHIR includes built-in support for managing extensions, tags, and profiles.\nYou can also easily add computed values to FHIR resources to ease usage."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "extend-fhir-resources",
      children: "Extend FHIR resources"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { extendResource, extension, tag, Formatter } from \"@bonfhir/core/r4b\";\n\n// Define a custom Patient resource\nconst CustomPatient = extendResource(\"Patient\", {\n  // Create a custom extension of type `code` that can be manipulated with an attribute named `birthSex`.\n  birthSex: extension({\n    url: \"http://hl7.org/fhir/us/core/StructureDefinition/us-core-birthsex\",\n    kind: \"valueCode\",\n  }),\n\n  // Define a custom tag that can be manipulated with an attribute named `visiblity`\n  visibility: tag({ system: \"http://custom/visibility\" }),\n\n  // Define a computed value\n  nameAndDob() {\n    return Formatter.default.message`${[\"HumanName\", this.name, { max: 1 }]}${[\n      \"date\",\n      this.birthDate,\n      { decorator: \" - born {}\" },\n    ]}`;\n  },\n});\n\n// Use it as a constructor then\nconst patient = new CustomPatient({\n  name: [{ given: [\"John\"], family: \"Doe\" }],\n  birthDate: \"1990-01-01\",\n});\n\npatient.nameAndDob(); // 'John Doe - born 1/1/1990'\npatient.visibility = { code: \"public\" };\npatient.visibility; // { code: 'public', system: 'http://custom/visibility' }\n\npatient.birthSex = \"M\";\n\n// Get the FHIR Resource representation\n// This is also the format used when serializing to JSON.\npatient.toFhirResource();\n{\n  resourceType: 'Patient',\n  name: [ { given: [ 'John' ], family: 'Doe' } ],\n  birthDate: '1990-01-01',\n  meta: { tag: [ { code: 'public', system: 'http://custom/visibility' } ] },\n  extension: [\n    {\n      url: 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-birthsex',\n      valueCode: 'M'\n    }\n  ],\n  text: {\n    status: 'generated',\n    div: '<div xmlns=\"http://www.w3.org/1999/xhtml\"><ul><li><span>Birth Date: </span>1/1/1990</li><li><span>Name: </span><ul><li>John Doe</li></ul></li></ul></div>'\n  }\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "usage-with-client",
      children: "Usage with client"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Custom resources created with ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "extendResource"
      }), " can be used in the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "/packages/core/fhir-client",
        children: "client"
      }), " anywhere there is a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "ResourceType"
      }), "\n(e.g. \"Patient\", \"Organization\"...)"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-typescript",
        children: "const patient = await client.read(\n  CustomPatient,\n  \"82f1033e-22a8-4026-83ab-479e7589ca88\",\n);\n\npatient.nameAndDob(); // 'Abby752 Kuvalis369 - born 10/24/2002'\n\npatient.visibility = { code: \"public\" };\nconst savedPatient = await client.save(patient);\nsavedPatient.toFhirResource();\n{\n  resourceType: 'Patient',\n  ...\n  meta: {\n    tag: [ { code: 'public', system: 'http://custom/visibility' } ]\n  },\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "complex-extensions",
      children: "Complex extensions"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Extensions can also be arrays by using the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "allowMultiple"
      }), " attribute on the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "extension"
      }), " method.", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.br, {}), "\n", "More complex extensions can also be created. Have a look at the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "@bonfhir/us-core"
      }), " package to understand how to create\nthem - more specifically the\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/bonfhir/bonfhir/blob/main/packages/us-core/src/r4b/patient/ethnicity.ts",
        children: "us-core-ethnicity"
      }), "\nis a good example."]
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
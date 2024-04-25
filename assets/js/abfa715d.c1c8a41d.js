"use strict";
(self["webpackChunk_bonfhir_website"] = self["webpackChunk_bonfhir_website"] || []).push([[4958],{

/***/ 9319:
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
	sidebar_position: 6,
	title: 'Misc helpers',
	description: 'Little things to help with development'
};
const contentTitle = undefined;
const metadata = {
  "id": "core/misc-helpers",
  "title": "Misc helpers",
  "description": "Little things to help with development",
  "source": "@site/packages/core/misc-helpers.md",
  "sourceDirName": "core",
  "slug": "/core/misc-helpers",
  "permalink": "/packages/core/misc-helpers",
  "draft": false,
  "unlisted": false,
  "editUrl": "https://github.com/bonfhir/bonfhir/tree/main/docs/website/packages/core/misc-helpers.md",
  "tags": [],
  "version": "current",
  "sidebarPosition": 6,
  "frontMatter": {
    "sidebar_position": 6,
    "title": "Misc helpers",
    "description": "Little things to help with development"
  },
  "sidebar": "getStartedSidebar",
  "previous": {
    "title": "Extending FHIR resources",
    "permalink": "/packages/core/extending-fhir-resources"
  },
  "next": {
    "title": "Import in browser",
    "permalink": "/packages/core/import-in-browser"
  }
};
const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    br: "br",
    code: "code",
    p: "p",
    pre: "pre",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["bonFHIR ships with a lot of helpers function to help you manage and handle FHIR data.", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.br, {}), "\n", "They are listed here in no particular order:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Check whether a reference is a reference to a specific resource type, and assert the type\nconst ref: Reference = { reference: \"Organization/123\" };\nif (isReferenceOf(ref, \"Organization\")) {\n  //ref is typed as a Reference<Organization> from now on.\n}\n\n// Some utility types\nasArray(\"foo\"); // [\"foo\"]\nasArray([\"foo\"]); // [\"foo\"]\n\nasError(\"bar\"); // Error: bar\nasError(new Error(\"bar\")); // Error: bar\n\nuniqBy([{ name: \"A\" }, { name: \"A\" }, { name: \"B\" }], (x) => x.name); // [({ name: \"A\" }, { name: \"B\" })]\n\ndeclare const listOfPatients: Patient[];\nconst patientsSortedByDateOfBirthOldestFirst = listOfPatients.sort(\n  compareBy(\"birthDate\"),\n);\nconst patientsSortedByDateOfBirthYoungestFirst = listOfPatients.sort(\n  compareBy(\"-birthDate\"),\n);\n\nurlSafeConcat(\"http://example.com/\", \"/Patient\"); // 'http://example.com/Patient'\nurlSafeConcat(\"http://example.com\", \"/Patient\"); // 'http://example.com/Patient'\nurlSafeConcat(\"http://example.com/\", \"Patient\"); // 'http://example.com/Patient'\nurlSafeConcat(\"http://example.com\", \"Patient\"); // 'http://example.com/Patient'\n\n// Recursively remove empty strings, null values in arrays, undefined, etc.\n// Useful to convert a JS object to a valid FHIR type.\ncleanFhirValues({ resourceType: \"Patient\", birthDate: \"\", name: [] }); // { resourceType: 'Patient' }\n\n// Semantically compare 2 resources, ignoring the id, meta and text fields.\nresourcesAreEqual(\n  {\n    resourceType: \"Patient\",\n    id: \"123\",\n    name: [{ family: \"Doe\" }],\n    birthDate: \"2020-01-01\",\n  },\n  {\n    resourceType: \"Patient\",\n    id: \"456\",\n    name: [{ family: \"Doe\" }],\n    birthDate: \"2020-01-01\",\n  },\n); // true\n\nresourcesAreEqual(\n  {\n    resourceType: \"Patient\",\n    id: \"123\",\n    name: [{ family: \"Doe\" }],\n    birthDate: \"2020-01-01\",\n  },\n  {\n    resourceType: \"Patient\",\n    id: \"456\",\n    name: [{ family: \"Doe\", given: [\"John\"] }],\n    birthDate: \"2020-01-01\",\n  },\n); // false\n\n// Check and return a strongly type resource\nconst result = asResource(\"Patient\", { resourceType: \"Patient\" }); // result is typed as a Patient | undefined;\nconst result = asResource(\"Patient\", { resourceType: \"Practitioner\" }); // undefined\n\n// Find the references of a specific type\ndeclare const patient: Patient;\nconst practitioner = findReference(patient.generalPractitioner, \"Practitioner\");\nconst practitioners = findReferences(\n  patient.generalPractitioner,\n  \"Practitioner\",\n);\n\n// Run the proper evaluation based on the correct Choice of Data type pattern\n// See https://hl7.org/fhir/formats.html#choice\nconst condition = build(\"Condition\", {\n  subject: { reference: \"Patient/123\" },\n  onsetDateTime: \"2020-01-01\",\n});\nconst result = choiceOfDataTypes(condition, \"onset\", {\n  dateTime: (value: string) => value + \" as dateTime\",\n  string: (value: string) => value + \" as string\",\n  period: (value: Period) => value + \" as Period\",\n}); // '2020-01-01 as dateTime'\n"
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
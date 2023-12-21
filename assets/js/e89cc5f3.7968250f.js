"use strict";
(self["webpackChunkwebsite"] = self["webpackChunkwebsite"] || []).push([[715],{

/***/ 4648:
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
	title: 'Data Types Formatters'
};
const contentTitle = undefined;
const metadata = {
  "id": "core/data-types-formatters",
  "title": "Data Types Formatters",
  "description": "bonFHIR comes built-in with localized, configurable formatters for all FHIR Data Types.",
  "source": "@site/packages/core/data-types-formatters.md",
  "sourceDirName": "core",
  "slug": "/core/data-types-formatters",
  "permalink": "/packages/core/data-types-formatters",
  "draft": false,
  "unlisted": false,
  "editUrl": "https://github.com/bonfhir/bonfhir/tree/main/docs/website/packages/core/data-types-formatters.md",
  "tags": [],
  "version": "current",
  "sidebarPosition": 3,
  "frontMatter": {
    "sidebar_position": 3,
    "title": "Data Types Formatters"
  },
  "sidebar": "getStartedSidebar",
  "previous": {
    "title": "FHIR Client",
    "permalink": "/packages/core/fhir-client"
  },
  "next": {
    "title": "Manipulating date and time",
    "permalink": "/packages/core/manipulating-date-time"
  }
};
const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    p: "p",
    pre: "pre",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .a)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["bonFHIR comes built-in with localized, configurable formatters for all ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://hl7.org/fhir/datatypes.html",
        children: "FHIR Data Types"
      }), ".\nThey can be used to present the information to users and saves a considerable amount of time when implementing FHIR solutions."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { build, Formatter } from \"@bonfhir/core/r4b\";\n\nconst patient = build(\"Patient\", {\n  active: true,\n  name: [\n    { given: [\"John\"], family: \"Doe\", use: \"official\" },\n    { given: [\"Johnny\"], suffix: [\"Jr.\"], use: \"nickname\" },\n  ],\n  identifier: [\n    {\n      type: {\n        coding: [\n          {\n            system: \"http://terminology.hl7.org/CodeSystem/v2-0203\",\n            code: \"SS\",\n            display: \"Social Security Number\",\n          },\n        ],\n        text: \"Social Security Number\",\n      },\n      system: \"http://hl7.org/fhir/sid/us-ssn\",\n      value: \"99983604\",\n    },\n  ],\n  birthDate: \"1950-02-05\",\n  telecom: [\n    {\n      system: \"email\",\n      use: \"work\",\n      value: \"john.doe@example.com\",\n    },\n    {\n      system: \"phone\",\n      use: \"mobile\",\n      value: \"+1 514-514-4123\",\n    },\n  ],\n  address: [\n    {\n      line: [\"123 Main St.\"],\n      city: \"Anytown\",\n      state: \"NY\",\n      postalCode: \"12345\",\n      country: \"US\",\n    },\n    {\n      line: [\"Place des Arts\"],\n      city: \"Montréal\",\n      state: \"QC\",\n      postalCode: \"H2X 1Y9\",\n      country: \"CA\",\n    },\n  ],\n});\n\n// Using the default formatter - this is localized using ambient settings\n// This example assumes a en-US localization\nconst formatter = Formatter.default;\n\nformatter.format(\"HumanName\", patient.name); // 'John Doe and Johnny'\nformatter.format(\"HumanName\", patient.name, { max: 1 }); // 'John Doe'\nformatter.format(\"HumanName\", patient.name, {\n  max: 1,\n  useFilterOrder: [\"nickname\", \"official\"],\n  style: \"full\",\n}); // 'Johnny Jr.'\n\nformatter.format(\"date\", patient.birthDate); // '2/5/1950'\nformatter.format(\"date\", patient.birthDate, { dateStyle: \"full\" }); // 'Sunday, February 5, 1950'\nformatter.format(\"date\", patient.birthDate, { dateStyle: \"relative\" }); // '74 years ago'\n\nformatter.format(\"ContactPoint\", patient.telecom); // 'john.doe@example.com and +1 514-514-4123'\nformatter.format(\"ContactPoint\", patient.telecom, { useFilterOrder: [\"work\"] }); // 'john.doe@example.com'\n\n// Address formatting is localized by country\nformatter.format(\"Address\", patient.address); // '123 Main St., Anytown, NY 12345 and Place des Arts, Montréal QC H2X 1Y9'\nformatter.format(\"Address\", patient.address, { max: 1, lineSeparator: \"\\n\" }); // '123 Main St.\\nAnytown, NY 12345'\n\n// Notice how it recognizes the system as being an SSN and format the value accordingly\nformatter.format(\"Identifier\", patient.identifier); // 'SSN: 999-83-604'\n\nformatter.format(\"boolean\", patient.active); // 'yes'\n\n// The decorator is available on all formatter types. It only applies when there is a value to format.\nformatter.format(\"boolean\", patient.active, { decorator: \"Is active? {}\" }); // Is active? yes\n\n// And many, many more options....\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["The ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Formatter"
      }), " instance can be customized for your own specific needs:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-typescript",
        children: "const formatter = Formatter.build({\n  locale: \"fr-ca\",\n  systemsLabels: {\n    \"http://hl7.org/fhir/sid/us-ssn\": \"Numéro de sécurité sociale\",\n  },\n});\n\nformatter.format(\"Identifier\", patient.identifier, { pattern: \"###/##/###\" }); // 'Numéro de sécurité sociale: 999/83/604'\n\nformatter.format(\"date\", patient.birthDate, { dateStyle: \"full\" }); // 'dimanche 5 février 1950'\n"
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
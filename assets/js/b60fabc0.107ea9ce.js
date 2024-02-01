"use strict";
(self["webpackChunk_bonfhir_website"] = self["webpackChunk_bonfhir_website"] || []).push([[4214],{

/***/ 2366:
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
	sidebar_position: 1,
	title: 'Patient',
	description: 'US Core extensions for patients'
};
const contentTitle = undefined;
const metadata = {
  "id": "us-core/patient",
  "title": "Patient",
  "description": "US Core extensions for patients",
  "source": "@site/packages/us-core/patient.md",
  "sourceDirName": "us-core",
  "slug": "/us-core/patient",
  "permalink": "/packages/us-core/patient",
  "draft": false,
  "unlisted": false,
  "editUrl": "https://github.com/bonfhir/bonfhir/tree/main/docs/website/packages/us-core/patient.md",
  "tags": [],
  "version": "current",
  "sidebarPosition": 1,
  "frontMatter": {
    "sidebar_position": 1,
    "title": "Patient",
    "description": "US Core extensions for patients"
  },
  "sidebar": "getStartedSidebar",
  "previous": {
    "title": "US Core IG",
    "permalink": "/packages/us-core/"
  },
  "next": {
    "title": "CLI",
    "permalink": "/packages/cli/"
  }
};
const assets = {

};



const toc = [{
  "value": "Whole profile",
  "id": "whole-profile",
  "level": 2
}, {
  "value": "Mix &amp; match",
  "id": "mix--match",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    p: "p",
    pre: "pre",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .a)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "whole-profile",
      children: "Whole profile"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Create a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "/packages/core/extending-fhir-resources",
        children: "custom FHIR resource"
      }), " in accordance with the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://www.hl7.org/fhir/us/core/StructureDefinition-us-core-patient.html",
        children: "US Core Patient Profile"
      }), ":"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-typescript",
        children: "const USCorePatient = extendResource(\n  \"Patient\",\n  {\n    ...usCorePatient(),\n  },\n  {\n    profile: \"http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient\",\n  },\n);\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Then use it as a normal resource:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-typescript",
        children: "const patient = new USCorePatient({\n  name: [{ given: [\"John\"], family: \"Doe\" }],\n});\n\npatient.race = {\n  text: \"mixed\",\n  ombCategory: [\n    {\n      system: \"urn:oid:2.16.840.1.113883.6.238\",\n      code: \"2106-3\",\n      display: \"White\",\n    },\n    {\n      system: \"urn:oid:2.16.840.1.113883.6.238\",\n      code: \"1002-5\",\n      display: \"American Indian or Alaska Native\",\n    },\n    {\n      system: \"urn:oid:2.16.840.1.113883.6.238\",\n      code: \"2028-9\",\n      display: \"Asian\",\n    },\n  ],\n  detailed: [\n    {\n      system: \"urn:oid:2.16.840.1.113883.6.238\",\n      code: \"1586-7\",\n      display: \"Shoshone\",\n    },\n    {\n      system: \"urn:oid:2.16.840.1.113883.6.238\",\n      code: \"2036-2\",\n      display: \"Filipino\",\n    },\n  ],\n};\npatient.ethnicity = {\n  text: \"Hispanic or Latino\",\n  ombCategory: {\n    system: \"urn:oid:2.16.840.1.113883.6.238\",\n    code: \"2135-2\",\n    display: \"Hispanic or Latino\",\n  },\n  detailed: [\n    {\n      system: \"urn:oid:2.16.840.1.113883.6.238\",\n      code: \"2184-0\",\n      display: \"Dominican\",\n    },\n    {\n      system: \"urn:oid:2.16.840.1.113883.6.238\",\n      code: \"2148-5\",\n      display: \"Mexican\",\n    },\n  ],\n};\npatient.tribalAffiliation = {\n  tribalAffiliation: codeableConcept({\n    system: \"http://terminology.hl7.org/CodeSystem/v3-TribalEntityUS\",\n    code: \"187\",\n    display:\n      \"Paiute-Shoshone Tribe of the Fallon Reservation and Colony, Nevada\",\n  }),\n  isEnrolled: false,\n};\npatient.birthsex = \"F\";\npatient.sex = \"248152002\";\npatient.genderIdentity = codeableConcept({\n  system: \"http://terminology.hl7.org/CodeSystem/v3-NullFlavor\",\n  code: \"UNK\",\n  display: \"Unknown\",\n});\n\nawait client.save(patient);\n\nconst retrievedPatient = await client.read(\n  USCorePatient,\n  \"76998acb-b24e-41f2-ab65-ad22d0eb4640\",\n);\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "When serialized / saved:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-json",
        children: "{\n  \"resourceType\": \"Patient\",\n  \"name\": [\n    {\n      \"given\": [\"John\"],\n      \"family\": \"Doe\"\n    }\n  ],\n  \"extension\": [\n    {\n      \"url\": \"http://hl7.org/fhir/us/core/StructureDefinition/us-core-race\",\n      \"extension\": [\n        {\n          \"url\": \"ombCategory\",\n          \"valueCoding\": {\n            \"system\": \"urn:oid:2.16.840.1.113883.6.238\",\n            \"code\": \"2106-3\",\n            \"display\": \"White\"\n          }\n        },\n        {\n          \"url\": \"ombCategory\",\n          \"valueCoding\": {\n            \"system\": \"urn:oid:2.16.840.1.113883.6.238\",\n            \"code\": \"1002-5\",\n            \"display\": \"American Indian or Alaska Native\"\n          }\n        },\n        {\n          \"url\": \"ombCategory\",\n          \"valueCoding\": {\n            \"system\": \"urn:oid:2.16.840.1.113883.6.238\",\n            \"code\": \"2028-9\",\n            \"display\": \"Asian\"\n          }\n        },\n        {\n          \"url\": \"detailed\",\n          \"valueCoding\": {\n            \"system\": \"urn:oid:2.16.840.1.113883.6.238\",\n            \"code\": \"1586-7\",\n            \"display\": \"Shoshone\"\n          }\n        },\n        {\n          \"url\": \"detailed\",\n          \"valueCoding\": {\n            \"system\": \"urn:oid:2.16.840.1.113883.6.238\",\n            \"code\": \"2036-2\",\n            \"display\": \"Filipino\"\n          }\n        },\n        {\n          \"url\": \"text\",\n          \"valueString\": \"mixed\"\n        }\n      ]\n    },\n    {\n      \"url\": \"http://hl7.org/fhir/us/core/StructureDefinition/us-core-ethnicity\",\n      \"extension\": [\n        {\n          \"url\": \"ombCategory\",\n          \"valueCoding\": {\n            \"system\": \"urn:oid:2.16.840.1.113883.6.238\",\n            \"code\": \"2135-2\",\n            \"display\": \"Hispanic or Latino\"\n          }\n        },\n        {\n          \"url\": \"detailed\",\n          \"valueCoding\": {\n            \"system\": \"urn:oid:2.16.840.1.113883.6.238\",\n            \"code\": \"2184-0\",\n            \"display\": \"Dominican\"\n          }\n        },\n        {\n          \"url\": \"detailed\",\n          \"valueCoding\": {\n            \"system\": \"urn:oid:2.16.840.1.113883.6.238\",\n            \"code\": \"2148-5\",\n            \"display\": \"Mexican\"\n          }\n        },\n        {\n          \"url\": \"text\",\n          \"valueString\": \"Hispanic or Latino\"\n        }\n      ]\n    },\n    {\n      \"url\": \"http://hl7.org/fhir/us/core/StructureDefinition/us-core-tribal-affiliation\",\n      \"extension\": [\n        {\n          \"url\": \"tribalAffiliation\",\n          \"valueCodeableConcept\": {\n            \"coding\": [\n              {\n                \"system\": \"http://terminology.hl7.org/CodeSystem/v3-TribalEntityUS\",\n                \"code\": \"187\",\n                \"display\": \"Paiute-Shoshone Tribe of the Fallon Reservation and Colony, Nevada\"\n              }\n            ],\n            \"text\": \"Paiute-Shoshone Tribe of the Fallon Reservation and Colony, Nevada\"\n          }\n        },\n        {\n          \"url\": \"isEnrolled\",\n          \"valueBoolean\": false\n        }\n      ]\n    },\n    {\n      \"url\": \"http://hl7.org/fhir/us/core/StructureDefinition/us-core-birthsex\",\n      \"valueCode\": \"F\"\n    },\n    {\n      \"url\": \"http://hl7.org/fhir/us/core/StructureDefinition/us-core-sex\",\n      \"valueCode\": \"248152002\"\n    },\n    {\n      \"url\": \"http://hl7.org/fhir/us/core/StructureDefinition/us-core-genderIdentity\",\n      \"valueCodeableConcept\": {\n        \"coding\": [\n          {\n            \"system\": \"http://terminology.hl7.org/CodeSystem/v3-NullFlavor\",\n            \"code\": \"UNK\",\n            \"display\": \"Unknown\"\n          }\n        ],\n        \"text\": \"Unknown\"\n      }\n    }\n  ],\n  \"text\": {\n    \"status\": \"generated\",\n    \"div\": \"<div xmlns=\\\"http://www.w3.org/1999/xhtml\\\"><ul><li><span>Name: </span><ul><li>John Doe</li></ul></li></ul></div>\"\n  },\n  \"meta\": {\n    \"profile\": [\n      \"http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient\"\n    ]\n  }\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "mix--match",
      children: "Mix & match"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "You can also use individual extensions and compose it for your model:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-typescript",
        children: "const CustomPatient = extendResource(\"Patient\", {\n  race: usCoreRace(),\n  ethnicity: usCoreEthnicity(),\n\n  myTag: tag({\n    system: \"http://example.org/fhir/tag\",\n  }),\n});\n"
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
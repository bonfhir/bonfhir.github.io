"use strict";
(self["webpackChunkwebsite"] = self["webpackChunkwebsite"] || []).push([[1492],{

/***/ 4956:
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
	title: 'Manipulating date and time',
	description: 'FHIR Native date/time/duration handling'
};
const contentTitle = undefined;
const metadata = {
  "id": "core/manipulating-date-time",
  "title": "Manipulating date and time",
  "description": "FHIR Native date/time/duration handling",
  "source": "@site/packages/core/manipulating-date-time.md",
  "sourceDirName": "core",
  "slug": "/core/manipulating-date-time",
  "permalink": "/packages/core/manipulating-date-time",
  "draft": false,
  "unlisted": false,
  "editUrl": "https://github.com/bonfhir/bonfhir/tree/main/docs/website/packages/core/manipulating-date-time.md",
  "tags": [],
  "version": "current",
  "sidebarPosition": 4,
  "frontMatter": {
    "sidebar_position": 4,
    "title": "Manipulating date and time",
    "description": "FHIR Native date/time/duration handling"
  },
  "sidebar": "getStartedSidebar",
  "previous": {
    "title": "Data Types Formatters",
    "permalink": "/packages/core/data-types-formatters"
  },
  "next": {
    "title": "Extending FHIR resources",
    "permalink": "/packages/core/extending-fhir-resources"
  }
};
const assets = {

};



const toc = [{
  "value": "Now and then",
  "id": "now-and-then",
  "level": 2
}, {
  "value": "Conversion / parsing of <code>Date</code> in FHIR",
  "id": "conversion--parsing-of-date-in-fhir",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    p: "p",
    pre: "pre",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .a)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "bonFHIR comes built-in with a date/time subframework that can be used to manipulate date, time and duration notions\ndirectly using the FHIR data types, without resorting to a third-party app and converting back and forth."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "now-and-then",
      children: "Now and then"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { duration, now, today } from \"@bonfhir/core/r4b\";\n\n// now() and today() respectively represents the current dateTime and date\n// with Timezone support\nnow(); // '2023-12-20T15:58:14.078Z'\nnow(\"America/New_York\"); // '2023-12-20T11:18:51.874-05:00'\ntoday(); // '2023-12-20'\ntoday(\"Asia/Tokyo\"); // '2023-12-21'\n\n// Easily create Duration data types\nduration.hours(4);\n{\n  \"value\": 4,\n  \"unit\": \"h\",\n  \"system\": \"http://unitsofmeasure.org\",\n  \"code\": \"h\"\n}\n\nduration.minutes(15);\n{\n  \"value\": 15,\n  \"unit\": \"min\",\n  \"system\": \"http://unitsofmeasure.org\",\n  \"code\": \"min\"\n}\n\n// Create duration from existing date / dateTime objects\n// The unit selected is the highest that can represent the granularity correctly\nconst date = \"1973-04-06\";\nconst dateTime = \"1973-04-06T16:00:00Z\";\n\nduration.from(today(), date);\n{\n  \"value\": 18520,\n  \"unit\": \"d\",\n  \"system\": \"http://unitsofmeasure.org\",\n  \"code\": \"d\"\n}\n\nduration.from(now(), dateTime);\n{\n  \"value\": 1600129222688,\n  \"unit\": \"ms\",\n  \"system\": \"http://unitsofmeasure.org\",\n  \"code\": \"ms\"\n}\n\n// But you can convert to the most appropriate unit for your use case\nduration.convert(duration.from(now(), dateTime), \"a\");\n{\n  \"value\": 50.739769969843984,\n  \"unit\": \"yr\",\n  \"system\": \"http://unitsofmeasure.org\",\n  \"code\": \"a\"\n}\n\n// You can add or substract date, dateTime and durations\nduration.add(date, duration.days(3)); // '1973-04-09'\nduration.subtract(date, duration.days(7)); // '1973-03-30'\nduration.add(dateTime, duration.hours(12)); // '1973-04-07T04:00:00.000Z'\nduration.subtract(date, duration.hours(1)); // Error! Unable to add -1 hour(s) to 1973-04-06\n\n// Partial dates are also supported\nduration.add(\"1980-02\", duration.months(3)); // 1980-05\n\n// Comparison between date and dateTime is easy as the FHIR format follows natural lexicographic order\n// However, you can compare duration easily, with built-in units conversion\nduration.compare(duration.hours(3), duration.days(1)); // -1\nduration.compare(duration.hours(24), duration.days(1)); // 0\n\n// Finally there is built-in age calculation\nduration.age(\"1963-07-04\");\n{\n  \"value\": 60,\n  \"unit\": \"yr\",\n  \"system\": \"http://unitsofmeasure.org\",\n  \"code\": \"a\"\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h2, {
      id: "conversion--parsing-of-date-in-fhir",
      children: ["Conversion / parsing of ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Date"
      }), " in FHIR"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "There are some utilities to help with converting and parsing FHIR date and time formats."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { fhirDate, fhirDateTime, fhirInstant, fhirTime, parseFhirDateTime } from \"@bonfhir/core/r4b\";\n\n// Format a Date object to FHIR date, dateTime, instant and time formats\n\nfhirDate(new Date(\"2021-03-27T10:00:00.000-04:00\"); // '2021-03-27'\nfhirDateTime(new Date(\"2021-03-27T10:00:00.000-04:00\"); // '2021-03-27T14:00:00.000Z'\nfhirInstant(new Date(\"2021-03-27T10:00:00.000-04:00\"); // '2021-03-27T14:00:00.000Z'\nfhirTime(new Date(\"2021-03-27T10:00:00.000-04:00\"); // '14:00:00'\n\n// Parse any FHIR date, dateTime, instant or time string\n\nparseFhirDateTime(\"1976\");\n{ flavour: 'year', year: 1976, date: 1976-01-01T00:00:00.000Z }\n\nparseFhirDateTime(\"1976-01\");\n{\n  flavour: 'year-month',\n  year: 1976,\n  month: 1,\n  date: 1976-01-01T00:00:00.000Z\n}\n\nparseFhirDateTime(\"1976-01-03\");\n{\n  flavour: 'date',\n  year: 1976,\n  month: 1,\n  day: 3,\n  date: 1976-01-03T00:00:00.000Z\n}\n\nparseFhirDateTime(\"1976-01-03T34\");\n{ flavour: 'NA' }\n\nparseFhirDateTime(\"1976-01-03T10:11:12Z\");\n{\n  flavour: 'dateTime',\n  year: 1976,\n  month: 1,\n  day: 3,\n  hours: 10,\n  minutes: 11,\n  seconds: 12,\n  milliseconds: undefined,\n  timeZone: 'Z',\n  date: 1976-01-03T10:11:12.000Z\n}\n\nparseFhirDateTime(\"1976-01-03T10:11:12-05:00\");\n{\n  flavour: 'dateTime',\n  year: 1976,\n  month: 1,\n  day: 3,\n  hours: 10,\n  minutes: 11,\n  seconds: 12,\n  milliseconds: undefined,\n  timeZone: '-05:00',\n  date: 1976-01-03T15:11:12.000Z\n}\n\nparseFhirDateTime(\"10:11:12\");\n{\n  flavour: 'time',\n  hours: 10,\n  minutes: 11,\n  seconds: 12,\n  date: 1899-12-31T15:11:12.000Z\n}\n\n"
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
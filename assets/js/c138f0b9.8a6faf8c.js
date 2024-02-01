"use strict";
(self["webpackChunk_bonfhir_website"] = self["webpackChunk_bonfhir_website"] || []).push([[610],{

/***/ 7485:
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
	sidebar_position: 2,
	title: 'useFhirResourceForm',
	description: 'FHIR forms (enhanced)'
};
const contentTitle = undefined;
const metadata = {
  "id": "react/mantine/use-fhir-resource-form",
  "title": "useFhirResourceForm",
  "description": "FHIR forms (enhanced)",
  "source": "@site/packages/react/mantine/use-fhir-resource-form.md",
  "sourceDirName": "react/mantine",
  "slug": "/react/mantine/use-fhir-resource-form",
  "permalink": "/packages/react/mantine/use-fhir-resource-form",
  "draft": false,
  "unlisted": false,
  "editUrl": "https://github.com/bonfhir/bonfhir/tree/main/docs/website/packages/react/mantine/use-fhir-resource-form.md",
  "tags": [],
  "version": "current",
  "sidebarPosition": 2,
  "frontMatter": {
    "sidebar_position": 2,
    "title": "useFhirResourceForm",
    "description": "FHIR forms (enhanced)"
  },
  "sidebar": "getStartedSidebar",
  "previous": {
    "title": "useFhirForm",
    "permalink": "/packages/react/mantine/use-fhir-form"
  },
  "next": {
    "title": "Next.js",
    "permalink": "/packages/react/next"
  }
};
const assets = {

};



const toc = [{
  "value": "Basic usage",
  "id": "basic-usage",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    h2: "h2",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .a)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["The ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "useFhirResourceForm"
      }), " hook is similar to the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.a, {
        href: "/packages/react/mantine/use-fhir-form",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "useFhirForm"
        }), " hook"]
      }), ", but it\ngoes one step further in that:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["it is meant to create or update a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: "single"
        }), " FHIR resource"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "it incorporates the retrieval of the existing resource, and the management of the mutation"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "it switches intelligently from create to update based on the resource id value"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "basic-usage",
      children: "Basic usage"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { duration, now } from \"@bonfhir/core/r4b\";\nimport { useFhirResourceForm } from \"@bonfhir/mantine/r4b\";\nimport { FhirInput } from \"@bonfhir/react/r4b\";\nimport { Button, Group, Paper, Stack } from \"@mantine/core\";\n\nexport default function MyComponent() {\n  const form = useFhirResourceForm({\n    id: \"new\", // Use \"new\" to create a new resource, or an existing id to retrieve it.\n    type: \"Appointment\",\n    defaultValues: {\n      status: \"proposed\",\n      start: now(),\n      end: duration.add(now(), duration.minutes(30)),\n      participant: [\n        {\n          actor: {},\n          status: \"accepted\",\n        },\n      ],\n    },\n    mutationOptions: {\n      onSuccess(data) {\n        alert(JSON.stringify(data, undefined, 2));\n      },\n    },\n  });\n\n  return (\n    <Paper p=\"lg\">\n      <form onSubmit={form.onSubmit}>\n        <Stack>\n          <Group w={300}>\n            <FhirInput\n              label=\"Start\"\n              required\n              type=\"instant\"\n              {...form.getInputProps(`start`)}\n            />\n            <FhirInput\n              label=\"End\"\n              required\n              type=\"instant\"\n              {...form.getInputProps(`end`)}\n            />\n          </Group>\n          <Group w={500}>\n            <FhirInput\n              type=\"code\"\n              label=\"status\"\n              source=\"http://hl7.org/fhir/ValueSet/appointmentstatus\"\n              {...form.getInputProps(\"status\")}\n            />\n          </Group>\n          <Group w={500}>\n            <FhirInput\n              label=\"Patient\"\n              required\n              type=\"Reference\"\n              resourceType=\"Patient\"\n              search={(query) => (search) => search.family(query)}\n              {...form.getInputProps(\"participant.0.actor\")}\n            />\n          </Group>\n          <Group w={500}>\n            <FhirInput\n              type=\"string\"\n              label=\"Comment\"\n              {...form.getInputProps(\"comment\")}\n            />\n          </Group>\n          <Group>\n            <Button type=\"submit\">Save</Button>\n            <Button\n              variant=\"outline\"\n              color=\"grey\"\n              onClick={() => form.form.reset()}\n            >\n              Reset\n            </Button>\n          </Group>\n        </Stack>\n      </form>\n    </Paper>\n  );\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["As opposed to the example in ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "/packages/react/mantine/use-fhir-form",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "useFhirForm"
        })
      }), ", we do not have to create a query\nto read the appointment, or a mutation to save it - it is all done automatically."]
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
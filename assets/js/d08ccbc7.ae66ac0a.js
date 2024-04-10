"use strict";
(self["webpackChunk_bonfhir_website"] = self["webpackChunk_bonfhir_website"] || []).push([[5257],{

/***/ 6327:
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
	sidebar_position: 1,
	title: 'useFhirForm',
	description: 'FHIR forms'
};
const contentTitle = undefined;
const metadata = {
  "id": "react/mantine/use-fhir-form",
  "title": "useFhirForm",
  "description": "FHIR forms",
  "source": "@site/packages/react/mantine/use-fhir-form.md",
  "sourceDirName": "react/mantine",
  "slug": "/react/mantine/use-fhir-form",
  "permalink": "/packages/react/mantine/use-fhir-form",
  "draft": false,
  "unlisted": false,
  "editUrl": "https://github.com/bonfhir/bonfhir/tree/main/docs/website/packages/react/mantine/use-fhir-form.md",
  "tags": [],
  "version": "current",
  "sidebarPosition": 1,
  "frontMatter": {
    "sidebar_position": 1,
    "title": "useFhirForm",
    "description": "FHIR forms"
  },
  "sidebar": "getStartedSidebar",
  "previous": {
    "title": "Renderer props",
    "permalink": "/packages/react/mantine/renderer-props"
  },
  "next": {
    "title": "useFhirResourceForm",
    "permalink": "/packages/react/mantine/use-fhir-resource-form"
  }
};
const assets = {

};



const toc = [{
  "value": "Basic usage",
  "id": "basic-usage",
  "level": 2
}, {
  "value": "Create multiple resources",
  "id": "create-multiple-resources",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    p: "p",
    pre: "pre",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["The ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "useFhirForm"
      }), " hook is an extension of ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.a, {
        href: "https://mantine.dev/form/use-form/",
        children: ["Mantine ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "useForm"
        }), " hook"]
      }), " with support\nfor FHIR arrays."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["It is used in the same way as ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.a, {
        href: "https://mantine.dev/form/use-form/",
        children: ["Mantine ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "useForm"
        }), " hook"]
      }), ", and adds a new method\nnamed ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "getArrayInputProps"
      }), " that is meant to be used with ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "/packages/react/components/fhir-input-array",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "<FhirInputArray />"
        })
      }), "\nto automatically manage values that are repeated (e.g. when the FHIR cardinality is 0...*)."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "basic-usage",
      children: "Basic usage"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { Patient } from \"@bonfhir/core/r4b\";\nimport { useFhirForm } from \"@bonfhir/mantine/r4b\";\nimport { useFhirSaveMutation } from \"@bonfhir/query/r4b\";\nimport { FhirInput, FhirInputArray } from \"@bonfhir/react/r4b\";\nimport { Button, Group, Paper, Stack } from \"@mantine/core\";\n\nexport default function MyComponent() {\n  const patientSaveMutation = useFhirSaveMutation(\"Patient\", {\n    mutation: {\n      onSuccess: (patient) => {\n        alert(`Patient ${patient.id} saved!`);\n      },\n    },\n  });\n\n  const form = useFhirForm<Patient>({\n    initialValues: {\n      resourceType: \"Patient\",\n    },\n  });\n\n  return (\n    <Paper p=\"lg\">\n      <form\n        onSubmit={form.onSubmit((patient) =>\n          patientSaveMutation.mutate(patient),\n        )}\n      >\n        <Stack>\n          <Group w={500}>\n            <FhirInputArray\n              label=\"Name\"\n              {...form.getArrayInputProps(\"name\")}\n              min={1}\n            >\n              {({ index }) => (\n                <FhirInput\n                  type=\"HumanName\"\n                  mode=\"simple\"\n                  {...form.getInputProps(`name.${index}`)}\n                />\n              )}\n            </FhirInputArray>\n          </Group>\n          <Group w={300}>\n            <FhirInput\n              label=\"Birth date\"\n              type=\"date\"\n              {...form.getInputProps(\"birthDate\")}\n            />\n          </Group>\n          <Group>\n            <Button type=\"submit\">Save</Button>\n          </Group>\n        </Stack>\n      </form>\n    </Paper>\n  );\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "create-multiple-resources",
      children: "Create multiple resources"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Here is another example that shows how to combine multiple resources into a single form:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { Condition, Encounter, now } from \"@bonfhir/core/r4b\";\nimport { useFhirForm } from \"@bonfhir/mantine/r4b\";\nimport { useFhirTransactionMutation } from \"@bonfhir/query/r4b\";\nimport { FhirInput, FhirInputArray } from \"@bonfhir/react/r4b\";\nimport { Button, Group, Paper, Stack } from \"@mantine/core\";\n\n// You don;t have to do this, but it makes things clearer IMHO\ninterface FormData {\n  encounter: Encounter;\n  conditions: Condition[];\n}\n\nexport default function MyComponent() {\n  const mutation = useFhirTransactionMutation({\n    mutation: {\n      onSuccess: (result) => {\n        alert(JSON.stringify(result, undefined, 2));\n      },\n    },\n  });\n\n  const form = useFhirForm<FormData>({\n    initialValues: {\n      encounter: {\n        resourceType: \"Encounter\",\n        status: \"in-progress\",\n        class: {\n          code: \"AMB\",\n          display: \"ambulatory\",\n          system: \"http://terminology.hl7.org/CodeSystem/v3-ActCode\",\n        },\n        period: {\n          start: now(),\n        },\n      },\n      conditions: [],\n    },\n  });\n\n  const submit = form.onSubmit((data) =>\n    mutation.mutate((transaction) => {\n      const encounter = transaction.create(data.encounter);\n      for (const conditions of data.conditions?.filter((c) => c.code?.text) ||\n        []) {\n        conditions.encounter = encounter.reference;\n        transaction.create(conditions);\n      }\n      return transaction;\n    }),\n  );\n\n  return (\n    <Paper p=\"lg\">\n      <form onSubmit={submit}>\n        <Stack>\n          <Group w={300}>\n            <FhirInput\n              label=\"Start\"\n              type=\"dateTime\"\n              {...form.getInputProps(`encounter.period.start`)}\n            />\n            <FhirInput\n              label=\"Status\"\n              required\n              type=\"code\"\n              source=\"http://hl7.org/fhir/ValueSet/encounter-status\"\n              {...form.getInputProps(`encounter.status`)}\n            />\n          </Group>\n          <Group w={500}>\n            <FhirInputArray\n              label=\"Conditions\"\n              {...form.getArrayInputProps(`conditions`, {\n                newValue: {\n                  resourceType: \"Condition\",\n                  subject: { reference: \"Patient/123\" },\n                  code: {},\n                },\n              })}\n            >\n              {({ index }) => (\n                <FhirInput\n                  type=\"string\"\n                  {...form.getInputProps(`conditions.${index}.code.text`)}\n                />\n              )}\n            </FhirInputArray>\n          </Group>\n          <Group>\n            <Button type=\"submit\">Save</Button>\n          </Group>\n        </Stack>\n      </form>\n    </Paper>\n  );\n}\n"
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
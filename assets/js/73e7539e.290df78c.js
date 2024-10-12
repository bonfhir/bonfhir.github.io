"use strict";
(self["webpackChunk_bonfhir_website"] = self["webpackChunk_bonfhir_website"] || []).push([[4155],{

/***/ 199:
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
	title: 'useFhirFormatter & FhirFormatterProvider'
};
const contentTitle = 'FhirFormatterProvider Context provider';
const metadata = {
  "id": "react/components/use-fhir-formatters-context",
  "title": "useFhirFormatter & FhirFormatterProvider",
  "description": "` allows your React components to use the useFhirFormatter` hook to format data from your queries on demand.",
  "source": "@site/packages/react/components/use-fhir-formatters-context.md",
  "sourceDirName": "react/components",
  "slug": "/react/components/use-fhir-formatters-context",
  "permalink": "/packages/react/components/use-fhir-formatters-context",
  "draft": false,
  "unlisted": false,
  "editUrl": "https://github.com/bonfhir/bonfhir/tree/main/docs/website/packages/react/components/use-fhir-formatters-context.md",
  "tags": [],
  "version": "current",
  "frontMatter": {
    "title": "useFhirFormatter & FhirFormatterProvider"
  },
  "sidebar": "getStartedSidebar",
  "previous": {
    "title": "<FhirValue />",
    "permalink": "/packages/react/components/fhir-value"
  },
  "next": {
    "title": "useFhirSearchController",
    "permalink": "/packages/react/components/use-fhir-search-controller"
  }
};
const assets = {

};



const toc = [{
  "value": "Basic usage",
  "id": "basic-usage",
  "level": 2
}, {
  "value": "Basic usage",
  "id": "basic-usage-1",
  "level": 2
}, {
  "value": "Gluestack-ui v2",
  "id": "gluestack-ui-v2",
  "level": 3
}, {
  "value": "Mantine",
  "id": "mantine",
  "level": 3
}, {
  "value": "Ant design",
  "id": "ant-design",
  "level": 3
}, {
  "value": "Your own",
  "id": "your-own",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    p: "p",
    pre: "pre",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "/packages/react/get-started#configure-the-FhirFormatterProvider-",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "<FhirFormatterProvider>"
        })
      }), " allows your React components to use the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "useFhirFormatter"
      }), " hook to format data from your queries on demand."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h1, {
      id: "fhirformatterprovider-context-provider",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "FhirFormatterProvider"
      }), " Context provider"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "basic-usage",
      children: "Basic usage"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["When used from the root of your app, it allows the use of any FHIR resource formatting in any component through the use of its hook ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "useFhirFormatter"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Using all the default for the formatters would look like this:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-tsx",
        children: "export const BaseLayout: React.FC = () => {\n  return (\n    <FhirFormatterProvider>\n      <YourAppOrOtherProviders>...</YourAppOrOtherProviders>\n    </FhirFormatterProvider>\n  );\n};\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "And if you wish to support formatters dynamically by changing Locales, you can do something like this:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-tsx",
        children: "export const BaseLayout: React.FC = () => {\n  const [locale, setLocale] = useState<\"en\" | \"es\" | \"fr\">(\"en\");\n\n  return (\n    <FhirFormatterProvider options={{ locale }}>\n      <button onClick={() => setLocale(\"en\")}>EN</button>\n      <button onClick={() => setLocale(\"es\")}>ES</button>\n      <button onClick={() => setLocale(\"fr\")}>FR</button>\n      ...\n    </FhirFormatterProvider>\n  );\n};\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h1, {
      id: "usefhirformatter-hook",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "useFhirFormatter"
      }), " hook"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "basic-usage-1",
      children: "Basic usage"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "You can leverage the data formatting without depending on Bonfhir's React components simply by using the hook: this allows you to either create your own custom components or leverage any Component Library."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "gluestack-ui-v2",
      children: "Gluestack-ui v2"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Example: you have a data table to display, with patient names, appointment time *"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "* we take a shortcut here and pretend we wrapped our FHIR query in a local custom hook"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { useFhirFormatter } from \"@bonfhir/react/r5/formatters\";\nimport { Spinner } from \"@/components/ui/spinner\";\nimport {\n  Table,\n  TableHeader,\n  TableBody,\n  TableHead,\n  TableData,\n  TableRow,\n} from \"@/components/ui/table\";\nimport { useTodaysAppointments } from \"./data/use-todays-appointments\";\nimport {\n  ConfirmAppointmentButton,\n  NoShowAppointmentButton,\n  CancelAppointmentButton,\n} from \"./actions\";\n\nexport const TodaysAppointmentSchedule = () => {\n  const { formatter } = useFhirFormatter();\n  const { data, isLoading } = useTodaysAppointments();\n\n  if (isLoading) {\n    return <Spinner />;\n  }\n\n  return (\n    <Table>\n      <TableHeader>\n        <TableRow>\n          <TableHead>Customer Name</TableHead>\n          <TableHead>Time</TableHead>\n          <TableHead>Action</TableHead>\n        </TableRow>\n      </TableHeader>\n      <TableBody>\n        {data.map((appointment, i) => {\n          return (\n            <TableRow key={i}>\n              <TableData>\n                {formatter.format(\"HumanName\", appointment.patient)}\n              </TableData>\n              <TableData>\n                {formatter.format(\"dateTime\", appointment.bookedAt, {\n                  timeStyle: \"medium\",\n                })}\n              </TableData>\n              <TableData>\n                <ButtonGroup>\n                  <ConfirmAppointmentButton appointment={appointment} />\n                  <NoShowAppointmentButton appointment={appointment} />\n                  <CancelAppointmentButton appointment={appointment} />\n                </ButtonGroup>\n              </TableData>\n            </TableRow>\n          );\n        })}\n      </TableBody>\n    </Table>\n  );\n};\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "mantine",
      children: "Mantine"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { useFhirFormatter } from \"@bonfhir/react/r5/formatters\";\nimport { Table, Button, Loader } from \"@mantine/core\";\nimport { useTodaysAppointments } from \"./data/use-todays-appointments\";\nimport {\n  ConfirmAppointmentButton,\n  NoShowAppointmentButton,\n  CancelAppointmentButton,\n} from \"./actions\";\n\nexport const TodaysAppointmentSchedule = () => {\n  const { formatter } = useFhirFormatter();\n  const { data, isLoading } = useTodaysAppointments();\n\n  if (isLoading) {\n    return <Loader />;\n  }\n\n  return (\n    <Table>\n      <Table.Thead>\n        <Table.Tr>\n          <Table.Th>Customer Name</Table.Th>\n          <Table.Th>Time</Table.Th>\n          <Table.Th>Action</Table.Th>\n        </Table.Tr>\n      </Table.Thead>\n      <Table.Tbody>\n        {data.map((appointment, i) => {\n          return (\n            <Table.Tr key={i}>\n              <Table.Td>\n                {formatter.format(\"HumanName\", appointment.patient)}\n              </Table.Td>\n              <Table.Td>\n                {formatter.format(\"dateTime\", appointment.bookedAt, {\n                  timeStyle: \"medium\",\n                })}\n              </Table.Td>\n              <Table.Td>\n                <Button.Group>\n                  <ConfirmAppointmentButton appointment={appointment} />\n                  <NoShowAppointmentButton appointment={appointment} />\n                  <CancelAppointmentButton appointment={appointment} />\n                </Button.Group>\n              </Table.Td>\n            </Table.Tr>\n          );\n        })}\n      </Table.Tbody>\n    </Table>\n  );\n};\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "ant-design",
      children: "Ant design"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { useFhirFormatter } from \"@bonfhir/react/r5/formatters\";\nimport { Table, Skeleton } from \"antd\";\nimport { useTodaysAppointments } from \"./data/use-todays-appointments\";\nimport {\n  ConfirmAppointmentButton,\n  NoShowAppointmentButton,\n  CancelAppointmentButton,\n} from \"./actions\";\n\nexport const TodaysAppointmentSchedule = () => {\n  const { formatter } = useFhirFormatter();\n  const { data, isLoading } = useTodaysAppointments();\n\n  const columns = [\n    {\n      title: \"Patient\",\n      dataIndex: \"patient\",\n      key: \"patient\",\n      render: (patient) => <>{formatter.format(\"HumanName\", patient)}</>,\n    },\n    {\n      title: \"Time\",\n      dataIndex: \"bookedAt\",\n      key: \"bookedAt\",\n      render: (_, { bookedAt }) => (\n        <>\n          {formatter.format(\"dateTime\", bookedAt, {\n            timeStyle: \"medium\",\n          })}\n        </>\n      ),\n    },\n    {\n      title: \"Action\",\n      key: \"action\",\n      render: (_, appointment) => (\n        <>\n          <ConfirmAppointmentButton appointment={appointment} />\n          <NoShowAppointmentButton appointment={appointment} />\n          <CancelAppointmentButton appointment={appointment} />\n        </>\n      ),\n    },\n  ];\n\n  if (isLoading) {\n    return <Spinner />;\n  }\n\n  return <Table columns={columns} dataSource={data} />;\n};\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "your-own",
      children: "Your own"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { useFhirFormatter } from \"@bonfhir/react/r5/formatters\";\nimport { useTodaysAppointments } from \"./data/use-todays-appointments\";\nimport {\n  ConfirmAppointmentButton,\n  NoShowAppointmentButton,\n  CancelAppointmentButton,\n} from \"./actions\";\n\nimport \"./appointments-table.css\";\n\nexport const TodaysAppointmentSchedule = () => {\n  const { formatter } = useFhirFormatter();\n  const { data, isLoading } = useTodaysAppointments();\n\n  if (isLoading) {\n    return <>Loading.... please wait</>;\n  }\n\n  return (\n    <table className=\"appointments-table\">\n      <thead>\n        <tr>\n          <th>Customer Name</th>\n          <th>Time</th>\n          <th>Action</th>\n        </tr>\n      </thead>\n      <tbody>\n        {data.map((appointment, i) => {\n          return (\n            <tr key={i}>\n              <td>{formatter.format(\"HumanName\", appointment.patient)}</td>\n              <td>\n                {formatter.format(\"dateTime\", appointment.bookedAt, {\n                  timeStyle: \"medium\",\n                })}\n              </td>\n              <td>\n                <ConfirmAppointmentButton appointment={appointment} />\n                <NoShowAppointmentButton appointment={appointment} />\n                <CancelAppointmentButton appointment={appointment} />\n              </td>\n            </tr>\n          );\n        })}\n      </tbody>\n    </table>\n  );\n};\n"
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
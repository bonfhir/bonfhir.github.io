"use strict";
(self["webpackChunkwebsite"] = self["webpackChunkwebsite"] || []).push([[4878],{

/***/ 6854:
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
	title: 'Create a table with pagination',
	description: 'Display FHIR resources in a paginated table'
};
const contentTitle = 'Create a table with pagination';
const metadata = {
  "id": "build-a-fhir-app-with-react/fhir-tables-with-pagination",
  "title": "Create a table with pagination",
  "description": "Display FHIR resources in a paginated table",
  "source": "@site/docs/build-a-fhir-app-with-react/fhir-tables-with-pagination.md",
  "sourceDirName": "build-a-fhir-app-with-react",
  "slug": "/build-a-fhir-app-with-react/fhir-tables-with-pagination",
  "permalink": "/docs/build-a-fhir-app-with-react/fhir-tables-with-pagination",
  "draft": false,
  "unlisted": false,
  "editUrl": "https://github.com/bonfhir/bonfhir/tree/main/docs/website/docs/build-a-fhir-app-with-react/fhir-tables-with-pagination.md",
  "tags": [],
  "version": "current",
  "sidebarPosition": 4,
  "frontMatter": {
    "sidebar_position": 4,
    "title": "Create a table with pagination",
    "description": "Display FHIR resources in a paginated table"
  },
  "sidebar": "getStartedSidebar",
  "previous": {
    "title": "Display FHIR data",
    "permalink": "/docs/build-a-fhir-app-with-react/display-fhir-data"
  },
  "next": {
    "title": "Build a Subscription API with AWS Lambda",
    "permalink": "/docs/build-a-subscription-api-with-aws-lambda/"
  }
};
const assets = {

};



const toc = [{
  "value": "Key concepts",
  "id": "key-concepts",
  "level": 2
}, {
  "value": "Step by step",
  "id": "step-by-step",
  "level": 2
}, {
  "value": "Final result",
  "id": "final-result",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .a)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h1, {
      id: "create-a-table-with-pagination",
      children: "Create a table with pagination"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "key-concepts",
      children: "Key concepts"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "useFhirSearch()"
        }), " will return a query that fetches data for a type of FHIR resource. It also accepts search parameters that can either be a function or a search parameters string."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "<FhirTable />"
        }), " a BonFHIR component that displays FHIR data in a table. Each column can be customized with built-in support for sorting and pagination. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://bonfhir.dev/storybook/?path=/docs/bonfhir-data-display-fhirtable--docs",
          children: "More details in storybook"
        })]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "useFhirSearchController()"
        }), ": setup and manage FHIR search functionality through a simple interface"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "<FhirPagination />"
        }), ": a BonFHIR component that controls FhirTable pagination via the search controller ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://bonfhir.dev/storybook/?path=/docs/bonfhir-navigation-fhirpagination--docs",
          children: "More details in storybook"
        })]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "step-by-step",
      children: "Step by step"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["This guide builds off of the previous guide: ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "/docs/build-a-fhir-app-with-react/display-fhir-data",
        children: "Display FHIR data"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["Create a new React component called ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "PatientReportsTable"
          }), " that receives a patient ID as a prop. Import this component in ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "pages/Home.tsx"
          }), " and add the table component inside the page, passing in ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "patient.id"
          }), "."]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-tsx",
            metastring: "title=\"src/components/PatientDiagnosticReportsTable.tsx\"",
            children: "import { FC, ReactElement } from \"react\";\n\ntype PatientReportsTableProps = {\n  patientId: string;\n};\n\nconst PatientReportsTable: FC<PatientReportsTableProps> = ({\n  patientId,\n}): ReactElement => {\n  return (\n    <div>\n      <p>{patientId}</p>\n    </div>\n  );\n};\n\nexport default PatientReportsTable;\n"
          })
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-tsx",
            metastring: "title=\"src/pages/Home.tsx\"",
            children: "<PatientReportsTable patientId={patient.id} />\n"
          })
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["Create the search query with ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "useFhirSearch"
          }), " for the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "\"DiagnosticReport\""
          }), " resource type. BonFHIR has built-in type support for FHIR resource content, so the official ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
            href: "https://build.fhir.org/diagnosticreport.html#resource",
            children: "HL7 FHIR documentation"
          }), " can be used to understand what search parameters are available."]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["For this example, the search function will search for resources where the subject is a patient with the value of the patientId prop. The search function also indicates that the data should be sorted by property ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "issued"
          }), " with ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "-"
          }), " prefix to sort in reverse."]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-tsx",
            children: "const diagnosticReportsQuery = useFhirSearch(\"DiagnosticReport\", (search) =>\n  search.patient(patientId)._sort(\"-issued\"),\n);\n"
          })
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "Inside a FhirQueryLoader, setup the FhirTable. The first parameter will be the expanded query. Each column of the table should be configured with:"
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "key"
            }), ": the name of the resource property"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "title"
            }), ": the column header"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "render"
            }), ": a function that receives the individual resource and prepares the value. The ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "FhirValue"
            }), " component can be used here to simplify formatting."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "In this example, we will display the Diagnostic Report code, date issued and status."
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-tsx",
            children: "<FhirQueryLoader query={diagnosticReportsQuery}>\n  <FhirTable\n    {...diagnosticReportsQuery}\n    columns={[\n      {\n        key: \"code\",\n        title: \"Test\",\n        render: (diagnosticReport) => (\n          <FhirValue type=\"CodeableConcept\" value={diagnosticReport.code} />\n        ),\n      },\n      {\n        key: \"issued\",\n        title: \"Date Issued\",\n        render: (diagnosticReport) => (\n          <FhirValue type=\"date\" value={diagnosticReport.issued} />\n        ),\n      },\n      {\n        key: \"status\",\n        title: \"Status\",\n        render: (diagnosticReport) => (\n          <FhirValue type=\"string\" value={diagnosticReport.status} />\n        ),\n      },\n    ]}\n  />\n</FhirQueryLoader>\n"
          })
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["To add pagination, define a search controller with ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "useFhirSearchController"
          }), " above the query. The search controller manages sorting and paginating FHIR resources. Initialize the search controller with the sort order for the corresponding resource type, as well as a page size."]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-tsx",
            children: "const searchController = useFhirSearchController<DiagnosticReportSortOrder>({\n  pageSize: 5,\n});\n"
          })
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["Update the query ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "search"
          }), " function with ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "_count(searchController.pageSize)"
          }), " and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "_total(\"accurate\")"
          }), " to indicate how many resources to retrieve and the total number of resources that are available. Finally, include a third argument the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "searchController.pageUrl"
          }), ", which is how the query knows which page of resources to fetch."]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-tsx",
            children: "const diagnosticReportsQuery = useFhirSearch(\n  \"DiagnosticReport\",\n  (search) =>\n    search\n      .patient(patientId)\n      ._sort(\"issued\")\n      ._count(searchController.pageSize)\n      ._total(\"accurate\"),\n  searchController.pageUrl,\n);\n"
          })
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["Connect the search controller to the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "FhirTable"
          }), " by including it as a prop."]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-tsx",
            children: "  <FhirTable\n    {...diagnosticReportsQuery}\n    {...searchController}\n"
          })
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["Insert the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "FhirPagination"
          }), " component below the table."]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-tsx",
            children: "<FhirPagination {...diagnosticReportsQuery} {...searchController} />\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "final-result",
      children: "Final result"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Here is the output of this example with a paginated table of Diagnostic Reports for the patient!"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Example",
        src: (__webpack_require__(8667)/* ["default"] */ .Z) + "",
        width: "2750",
        height: "1092"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-tsx",
        metastring: "title=\"src/components/PatientReportsTable.tsx\"",
        children: "import { DiagnosticReportSortOrder } from \"@bonfhir/core/r4b\";\nimport { useFhirSearch } from \"@bonfhir/query/r4b\";\nimport {\n  FhirPagination,\n  FhirQueryLoader,\n  FhirTable,\n  FhirValue,\n  useFhirSearchController,\n} from \"@bonfhir/react/r4b\";\nimport { FC, ReactElement } from \"react\";\n\ntype PatientReportsTableProps = {\n  patientId: string;\n};\n\nconst PatientReportsTable: FC<PatientReportsTableProps> = ({\n  patientId,\n}): ReactElement => {\n  const searchController = useFhirSearchController<DiagnosticReportSortOrder>({\n    pageSize: 5,\n  });\n\n  const diagnosticReportsQuery = useFhirSearch(\n    \"DiagnosticReport\",\n    (search) =>\n      search\n        .patient(patientId)\n        ._sort(\"issued\")\n        ._count(searchController.pageSize)\n        ._total(\"accurate\"),\n    searchController.pageUrl,\n  );\n\n  return (\n    <FhirQueryLoader query={diagnosticReportsQuery}>\n      <FhirTable\n        {...diagnosticReportsQuery}\n        {...searchController}\n        columns={[\n          {\n            key: \"code\",\n            title: \"Test\",\n            render: (diagnosticReport) => (\n              <FhirValue type=\"CodeableConcept\" value={diagnosticReport.code} />\n            ),\n          },\n          {\n            key: \"issued\",\n            title: \"Date Issued\",\n            render: (diagnosticReport) => (\n              <FhirValue type=\"date\" value={diagnosticReport.issued} />\n            ),\n          },\n          {\n            key: \"status\",\n            title: \"Status\",\n            render: (diagnosticReport) => (\n              <FhirValue type=\"string\" value={diagnosticReport.status} />\n            ),\n          },\n        ]}\n      />\n      <FhirPagination {...diagnosticReportsQuery} {...searchController} />\n    </FhirQueryLoader>\n  );\n};\n\nexport default PatientReportsTable;\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-tsx",
        metastring: "title=\"src/pages/Home.tsx\"",
        children: "import { useFhirRead } from \"@bonfhir/query/r4b\";\nimport { FhirQueryLoader, FhirValue } from \"@bonfhir/react/r4b\";\nimport { Group, Paper, Stack, Text } from \"@mantine/core\";\nimport PatientReportsTable from \"../components/PatientReportsTable\";\n\nexport default function Home() {\n  const patientId = \"afb2bbf9-872c-47a9-9b31-2a737ed65f0b\";\n\n  const patientQuery = useFhirRead(\"Patient\", patientId);\n\n  return (\n    <FhirQueryLoader query={patientQuery}>\n      {(patient) => (\n        <Paper p=\"xl\">\n          <Paper shadow=\"xs\" p=\"xl\">\n            <Stack gap=\"sm\">\n              <Text size=\"xl\">\n                <FhirValue type=\"HumanName\" value={patient.name} />\n              </Text>\n              <Group>\n                <Text fw={600}>Birthday: </Text>\n                <FhirValue type=\"date\" value={patient.birthDate} />\n              </Group>\n              <Group>\n                <Text fw={600}>Address: </Text>\n                <FhirValue type=\"Address\" value={patient.address} />\n              </Group>\n              <Group>\n                <Text fw={600}>Contact: </Text>\n                <FhirValue type=\"ContactPoint\" value={patient.telecom} />\n              </Group>\n            </Stack>\n          </Paper>\n          <br />\n          <PatientReportsTable patientId={patient.id} />\n        </Paper>\n      )}\n    </FhirQueryLoader>\n  );\n}\n"
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

/***/ 8667:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/fhir-table-with-pagination-4863a38224fb26ba4a7ab887c8d86240.png");

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
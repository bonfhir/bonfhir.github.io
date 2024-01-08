"use strict";
(self["webpackChunk_bonfhir_website"] = self["webpackChunk_bonfhir_website"] || []).push([[7314],{

/***/ 6584:
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
	sidebar_position: 2,
	title: 'FHIR Client',
	description: 'Access FHIR Servers'
};
const contentTitle = undefined;
const metadata = {
  "id": "core/fhir-client",
  "title": "FHIR Client",
  "description": "Access FHIR Servers",
  "source": "@site/packages/core/fhir-client.md",
  "sourceDirName": "core",
  "slug": "/core/fhir-client",
  "permalink": "/packages/core/fhir-client",
  "draft": false,
  "unlisted": false,
  "editUrl": "https://github.com/bonfhir/bonfhir/tree/main/docs/website/packages/core/fhir-client.md",
  "tags": [],
  "version": "current",
  "sidebarPosition": 2,
  "frontMatter": {
    "sidebar_position": 2,
    "title": "FHIR Client",
    "description": "Access FHIR Servers"
  },
  "sidebar": "getStartedSidebar",
  "previous": {
    "title": "FHIR Types",
    "permalink": "/packages/core/fhir-types"
  },
  "next": {
    "title": "Data Types Formatters",
    "permalink": "/packages/core/data-types-formatters"
  }
};
const assets = {

};



const toc = [{
  "value": "Initialize",
  "id": "initialize",
  "level": 2
}, {
  "value": "CRUD",
  "id": "crud",
  "level": 2
}, {
  "value": "Search builders and bundle navigators",
  "id": "search-builders-and-bundle-navigators",
  "level": 2
}, {
  "value": "Operations",
  "id": "operations",
  "level": 2
}, {
  "value": "Batch/Transaction builder",
  "id": "batchtransaction-builder",
  "level": 2
}, {
  "value": "Mergers",
  "id": "mergers",
  "level": 2
}, {
  "value": "GraphQL",
  "id": "graphql",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
    code: "code",
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
        children: "FhirClient"
      }), " is an important piece of the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "core"
      }), " package.\nIt manages all interactions with a FHIR server, and provides useful extensions to manipulate batches, extensions, bundles, etc."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["The ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "FhirClient"
      }), " is intentionaly defined as an interface, and we provide an implementation (", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "FetchFhirClient"
      }), ") that uses the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API",
        children: "fetch API in the browser and node"
      }), " that should work in most contexts."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "initialize",
      children: "Initialize"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { FetchFhirClient, FhirClient } from \"@bonfhir/core/r4b\";\n\n// Initialize a new client with a fixed `Authorization` value\nconst client: FhirClient = new FetchFhirClient({\n  baseUrl: \"http://fhir-server/fhir/R4\",\n  auth: \"Basic <basic-auth-key>\",\n});\n\n// Initialize using a OAuth client_credentials flow\nconst client: FhirClient = new FetchFhirClient({\n  baseUrl: \"http://fhir-server/fhir/R4\",\n  auth: {\n    tokenUrl: \"http://auth-server/oauth2/token\",\n    clientId: \"xxx\",\n    clientSecret: \"xxx\",\n  },\n});\n\n// Initialize using a custom function for the `Authorization` header\n// Called on every request\nconst client: FhirClient = new FetchFhirClient({\n  baseUrl: \"http://fhir-server/fhir/R4\",\n  auth: async(input, init) => ...,\n});\n\n// Worst case scenario - take control of the `fetch` implementation\nconst client: FhirClient = new FetchFhirClient({\n  baseUrl: \"http://fhir-server/fhir/R4\",\n  fetch: async (input, init) => myFetch(input, init)\n});\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "crud",
      children: "CRUD"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["The client supports basic FHIR CRUD operations.\nTake note that they return a typed ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Retrieved"
      }), " resource (e.g. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Retrieved<Patient>"
      }), "), so that you can differentiate from\nresources that are only materialized in the client at the moment."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-typescript",
        children: "declare const client: FhirClient;\n\nconst patient = await client.read(\n  \"Patient\",\n  \"29a34226-4c5a-4c19-b0a1-f45909b7f1df\",\n);\n\nconst patientVersion = await client.vread(\n  \"Patient\",\n  \"29a34226-4c5a-4c19-b0a1-f45909b7f1df\",\n  \"0737483c-1e93-45d4-8161-18e3d3b9c7fe\",\n);\n\nconst newPatient = await client.create(\n  build(\"Patient\", { name: [{ family: \"Doe\", given: [\"John\"] }] }),\n);\n\nnewPatient.birthDate = \"1998-02-03\";\nconst updatedPatient = await client.update(newPatient);\n\nconst patchedPatient = await client.patch(\n  \"Patient\",\n  \"29a34226-4c5a-4c19-b0a1-f45909b7f1df\",\n  (patch) => patch.add(\"/active\", true).remove(\"/name/0/family\"),\n);\n\nawait client.delete(patient);\n\n// This creates if there is no `id`, or update if there is.\nconst patient = await client.save(patient);\n\n// Escape hatch - perform any arbitrary fetch operations on the server\nawait client.fetch<NonStandardFHIRResourceResponseType>(\n  \"NonStandardFHIRResource\",\n  { method: \"POST\" },\n);\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "search-builders-and-bundle-navigators",
      children: "Search builders and bundle navigators"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["The client features built-in typed search parameters and bundle navigation facilities.\nMost notably, it can resolve ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "_include"
      }), " and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "_revinclude"
      }), " resources from the primary resources.\nThe searching inside the bundle is indexed lazily, so you do not need to maintain any external dictionary / indexing\nof resources."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-typescript",
        children: "// This is an example search operation\nconst result = await client.search(\"Observation\", (search) =>\n  search\n    .status(\"final\")\n    .subject(patient)\n    ._count(100)\n    ._sort(\"-date\")\n    ._include(\"Observation\", \"patient\")\n    ._revinclude(\"Encounter\", \"reason-reference\"),\n);\n\nconst allMatchingObservations = result.searchMatch();\n\n// Search parameters can be added even if their are not from the base FHIR profile\n// All FHIR search parameter types are supported (look for `-Param` methods)\nconst result = await client.search(\"Observation\", (search) =>\n  search.dateParam(\"date\", \"2020-01-01\", \"gt\"),\n);\n\n// Last resort - pass the search query as a string\nconst result = await client.search(\"Observation\", \"_date:gt=2020-01-01\");\n\n// Get access directly to the included subject from the search operation\n// This searches the result bundle through a lazily-created index; no need to build any dictionary yourself.\n// `_revinclude` references are also dynamically indexed.\nconst firstObservation = allMatchingObservations[0]!;\nconst includedSubject = firstObservation.subject?.included();\nconst encountersReferencingFirstObservation =\n  firstObservation.revIncluded<Encounter>((x) => x.reasonReference);\n\n// Access the underlying Bundle\nconst rawBundle = result.bundle;\n\n// Accessing the next page\nconst hasNextPage = Boolean(result.linkUrl(\"next\"));\nif (hasNextPage) {\n  const nextPageResult = await client.fetchPage(result.linkUrl(\"next\")!);\n}\n\n// Iterate over result pages and invoke a method on each page\nawait client.searchByPage(\n  \"Patient\",\n  (search) => search.active(\"true\")._count(200),\n  async (page) => {\n    const allPAtientsInThePage = page.searchMatch();\n  },\n);\n\n// Or retrieve all pages at once\n// Be careful with this one as it may take a _long_ time and take too much memory.\nconst allResultsAggregated = await client.searchAllPages(\n  \"Condition\",\n  (search) => search.encounter(encounter)._count(100),\n);\nconst allConditions = allResultsAggregated.searchMatch();\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "operations",
      children: "Operations"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["The client can also execute ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://hl7.org/fhir/operations.html",
        children: "FHIR Operations"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Perform a GET operation that do not affect state\nconst result = await client.execute<ValueSet>({\n  operation: \"$expand\",\n  resourceType: \"ValueSet\",\n  parameters: [\n    {\n      name: \"url\",\n      valueUrl: \"http://hl7.org/fhir/ValueSet/encounter-status\",\n    },\n  ],\n});\n\n// Perform a POST operation that do affect state\nconst result = await client.execute<Group>({\n  affectsState: true,\n  operation: \"$add\",\n  resourceType: \"Group\",\n  resourceId: \"49e433b0-d7d5-4118-91b1-5fd60995cde2\",\n  parameters: [\n    {\n      name: \"additions\",\n      resource: patient,\n    },\n  ],\n});\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["A ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "BundleNavigator"
      }), " can also be used on any bundle, without going through the client:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-typescript",
        children: "declare const bundle: Bundle<Patient>;\nconst navigator = bundleNavigator(bundle);\nconst patients = navigator.searchMatch();\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "batchtransaction-builder",
      children: "Batch/Transaction builder"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["The client includes a builder to help with creating ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://hl7.org/fhir/http.html#transaction",
        children: "FHIR Batch or Transation Bundles"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Create a batch builder to register multiple requests at once.\nconst batch = client.batch();\n\n// Register a search for communication requests\n// At this point, the results are not available yet - we only get a handle for later.\n// The batch builder exposes the same API as the client, but instead of returning values directly,\n// it returns a future request handle.\nconst communicationsFutureRequest = batch.search(\n  \"CommunicationRequest\",\n  (search) =>\n    search\n      .patient(\"Patient/fe88522e-2864-4be9-bb43-7bd4c1031687\")\n      .status(\"active\")\n      ._count(100),\n);\n\n// Register another read request for an encounter\nconst encounterFutureRequest = batch.read(\n  \"Encounter\",\n  \"10d5f280-8a7f-43fd-925a-f82e5db56be9\",\n);\n\n// And finally register an operation to expand a value set\nconst valueSetExpandedFutureRequest = batch.execute<ValueSet>({\n  operation: \"$expand\",\n  resourceType: \"ValueSet\",\n  parameters: [\n    {\n      name: \"url\",\n      valueUrl: \"http://hl7.org/fhir/ValueSet/encounter-status\",\n    },\n  ],\n});\n\n// Once all requests are registered, we can execute them in parallel.\nawait batch.send();\n\n// Results are now available for each handle\nconst allCommunications = communicationsFutureRequest.resource.searchMatch();\nconst encounter = encounterFutureRequest.resource; // As we the API, this will throw if not found\nconst valueSetExpansion = valueSetExpandedFutureRequest.resource?.expansion;\n\n// Each future request is aware of the availability of the result\nconst isResultAvailable = communicationsFutureRequest.sent;\n\n// More details of the underlying bundle are also available if need be\n// like the request and response entries in the respective bundles\ncommunicationsFutureRequest.requestEntry;\ncommunicationsFutureRequest.responseEntry;\nbatch.request;\nbatch.response;\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "The transaction builder works the same way, but has an additional trick up its sleeve:\nit can manage intra-bundle references."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Create a transaction builder to register multiple requests at once.\nconst transaction = client.transaction();\n\n// Register a create request for a new organization.\nconst organizationFutureRequest = transaction.create(\n  build(\"Organization\", { name: \"Acme, Inc\" }),\n);\n\n// Register a create request for a new practitioner.\nconst practitionerFutureRequest = transaction.create(\n  build(\"Practitioner\", {\n    name: [{ given: [\"John\"], family: \"Doe\" }],\n  }),\n);\n\n// Register a create request for a new patient.\n// Notice how we can use the previous future requests to reference the organization and practitioner,\n// even though they have not been created yet.\nconst patientFutureRequest = transaction.create(\n  build(\"Patient\", {\n    managingOrganization: organizationFutureRequest.reference,\n    generalPractitioner: [practitionerFutureRequest.reference],\n  }),\n);\n\n// Send the transaction bundle to the FHIR server.\nawait transaction.send();\n\n// If all goes well, the transaction will have created the organization, practitioner, and patient.\nconst patient = patientFutureRequest.resource;\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "mergers",
      children: "Mergers"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "The client also exposes some facilities to intelligently merge resources based on search criteria.\nThis is particularly helpful in data import scenarios where you need to import the same conceptual resource\n(think e.g. a patient) multiple times and you want to avoid duplication or lost information."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Assume that you've received an updated patient resource.\ndeclare const updatedPatient: Patient;\n\n// Using the `createOr()` method, you can declaratively choose the merging behavior that you want.\n\n// return the existing resource if it exists, or create a new one if it doesn't\nconst [finalPatient, updatedPatientReplacedTheExistingOne] =\n  await client.createOr(\"return\", updatedPatient);\n\n// systematically replace the existing resource with the updated one\nconst [finalPatient, updatedPatientReplacedTheExistingOne] =\n  await client.createOr(\"replace\", updatedPatient);\n\n// systematically add a new resource regardless of a previous one.\nconst [finalPatient] = await client.createOr(\"add\", updatedPatient);\n\n// Merge the updated resource with the existing one and replace the existing one with the result.\nconst [finalPatient, patientsWereMerged] = await client.createOr(\n  \"merge\",\n  updatedPatient,\n);\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["How are resources matched? Not by ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "id"
      }), ", that would make no sense.\nBy default, they use the most likely attribute to perform the search, from top to bottom:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "url"
        }), " for ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://hl7.org/fhir/definition.html",
          children: "Definition resources"
        })]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "identifier"
        }), " if the resource have some (e.g. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "Patient"
        }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "Practitioner"
        }), ")"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "name"
        }), " if it is a simple value (e.g. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "Organization"
        }), ")"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["These default should work as expected in most cases.\nUsing ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "identifier"
      }), " in particular, if you store the source system id with a custom system, should work very reliably.\nIf you want to be sure, you can specify the search criteria:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Merge a condition based on matching the same subject, recordedDate and code.\nconst [finalCondition, wasMerged] = await client.createOr(\n  \"merge\",\n  updatedCondition,\n  (search) =>\n    search\n      .subject(updatedCondition.subject)\n      .recordedDate(updatedCondition.recordedDate)\n      .code(updatedCondition.code?.coding?.[0]),\n);\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "It is possible to use the merging functionality directly as well:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-typescript",
        children: "const [result, wasUpdated] = merge(current, incoming);\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "And how are resources merged?\nThere is a default strategy for merging resources is basic, and recursive:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "add missing values simple values from the source"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "replace conflicting simple values with the updated value"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["merge arrays by matching elements if they are equal (deep comparison), or they have the same ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "id"
        }), " value"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Narratives are ignored during the merge, and re-generated on the final resource.", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.br, {}), "\n", "Some ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://hl7.org/fhir/resource.html#Meta",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "Meta"
        })
      }), " attributes are also ignored."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["It is possible to customize this strategy by passing an array of ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "mergers"
      }), " to the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "createOr"
      }), " function.\nHave a look at existing ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "mergers"
      }), " implementation to understand how it works.\nThe tests for the mergers should also informs you about final results."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "graphql",
      children: "GraphQL"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["The client also supports executing ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://hl7.org/fhir/graphql.html",
        children: "GraphQL operations"
      }), " if the FHIR Server supports it.\nWhile it can be used with free-text queries, it is best to use it with ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://the-guild.dev/graphql/codegen",
        children: "the GraphQL Code Generator"
      }), "\nand ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/dotansimha/graphql-typed-document-node",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "TypedDocumentNode"
        })
      }), " to ensure type safety for GraphQL operations."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://the-guild.dev/graphql/codegen/docs/getting-started",
        children: "This guide"
      }), " should walk you through installing the GraphQL\ncode generator in your solution."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-typescript",
        children: "// This is a sample of how to use the client to make a GraphQL query using free text\nconst result = await client.graphql(\n  /* GraphQL */ `\n    query ListOrganizations($name: String, $_count: Int, $_sort: String) {\n      OrganizationList(name: $name, _count: $_count, _sort: $_sort) {\n        resourceType\n        id\n        name\n        identifier {\n          value\n        }\n      }\n    }\n  `,\n  {\n    name: \"Test\",\n    _count: 10,\n    _sort: \"name\",\n  },\n);\n\n// Or if you configure your project to use TypedDocumentNode - see https://the-guild.dev/graphql/codegen/docs/getting-started\n// you can have fully typed GraphQL queries\nconst listOrganizationDocument = graphql(/* GraphQL */ `\n  query ListOrganizations($name: String, $_count: Int, $_sort: String) {\n    OrganizationList(name: $name, _count: $_count, _sort: $_sort) {\n      resourceType\n      id\n      name\n      identifier {\n        value\n      }\n    }\n  }\n`);\n\n// result here is fully typed :-)\nconst result = await client.graphql(listOrganizationDocument, {\n  name: \"Test\",\n  _count: 10,\n});\nconst orgs = result.OrganizationList.map(...);\n\n// The graphqlResult gives you the full GraphQL response - this allows you to handle partial errors scenario and more\nconst graphQLResult = await client.graphqlResult(listOrganizationDocument, {\n  name: \"Test\",\n  _count: 10,\n});\nconst orgs = graphQLResult.data?.OrganizationList?.map(...);\n"
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
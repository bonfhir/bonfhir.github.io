"use strict";
(self["webpackChunk_bonfhir_website"] = self["webpackChunk_bonfhir_website"] || []).push([[6867],{

/***/ 1751:
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
	sidebar_position: 0,
	title: 'Subscription handlers',
	description: 'React to FHIR Resources changes'
};
const contentTitle = undefined;
const metadata = {
  "id": "subscriptions/subscription-handlers",
  "title": "Subscription handlers",
  "description": "React to FHIR Resources changes",
  "source": "@site/packages/subscriptions/subscription-handlers.md",
  "sourceDirName": "subscriptions",
  "slug": "/subscriptions/subscription-handlers",
  "permalink": "/packages/subscriptions/subscription-handlers",
  "draft": false,
  "unlisted": false,
  "editUrl": "https://github.com/bonfhir/bonfhir/tree/main/docs/website/packages/subscriptions/subscription-handlers.md",
  "tags": [],
  "version": "current",
  "sidebarPosition": 0,
  "frontMatter": {
    "sidebar_position": 0,
    "title": "Subscription handlers",
    "description": "React to FHIR Resources changes"
  },
  "sidebar": "getStartedSidebar",
  "previous": {
    "title": "Subscriptions",
    "permalink": "/packages/subscriptions/"
  },
  "next": {
    "title": "AWS Lambda",
    "permalink": "/packages/subscriptions/aws-lambda"
  }
};
const assets = {

};



const toc = [{
  "value": "Basic usage",
  "id": "basic-usage",
  "level": 2
}, {
  "value": "Additional subscription customization",
  "id": "additional-subscription-customization",
  "level": 2
}, {
  "value": "Register subscriptions",
  "id": "register-subscriptions",
  "level": 2
}, {
  "value": "Subscriptions security",
  "id": "subscriptions-security",
  "level": 2
}, {
  "value": "Custom resources in subscriptions",
  "id": "custom-resources-in-subscriptions",
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
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["At the heart of the bonFHIR subscription models lies the concept of a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "FhirSubscription"
      }), ".", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.br, {}), "\n", "A ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "FhirSubscription"
      }), " is an abstraction that represents both the criteria that trigger it (the registration information),\nand the handler that gets executed when said subscription is triggered."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "basic-usage",
      children: "Basic usage"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { CommunicationRequest } from \"@bonfhir/core/r4b\";\nimport { FhirSubscription } from \"@bonfhir/subscriptions/r4b\";\n\nexport const communicationRequestsSubscription: FhirSubscription<CommunicationRequest> =\n  {\n    // The subscription criteria can be any valid FHIR search\n    criteria: \"CommunicationRequest?status=active\",\n\n    // This is purely for documentation purposes\n    reason: \"Send communication requests\",\n\n    // The local endpoint that will get triggered by the subscription\n    // e.g. if the baseUrl is http://my-server.com/subscriptions,\n    // then this will be http://my-server.com/subscriptions/communication-requests\n    endpoint: \"communication-requests\",\n\n    // The handler that gets invoked when a FHIR resource matches the criteria.\n    async handler({ fhirClient, resource, logger }) {\n      logger?.info(resource);\n    },\n  };\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "additional-subscription-customization",
      children: "Additional subscription customization"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Some FHIR servers implement extensions to FHIR subscriptions to accomodate more granular scenarios.\nIf need be, you can use the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "registration"
      }), " method to further customize the registration information."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-typescript",
        children: "export const communicationRequestsSubscription: FhirSubscription<CommunicationRequest> =\n  {\n    //...\n\n    registration(subscription) {\n      subscription.extension = [\n        ...(subscription.extension ?? []),\n        {\n          url: \"https://acme.org/subscription-max-attempts\",\n          valueInteger: 3,\n        },\n      ];\n\n      return subscription;\n    },\n  };\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "register-subscriptions",
      children: "Register subscriptions"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["The regsitration of ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "FhirSubscription"
      }), " should be handled by the hosting package that you choose to host the subscriptions.\nNonetheless, the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "@bonfhir/subscriptions"
      }), " package contains the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "registerSubscriptions"
      }), " function that can do it if need be."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "subscriptions-security",
      children: "Subscriptions security"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["In order to protect the subscription endpoints from unwanted invocation, the subscription registration adds a custom header\nto the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://hl7.org/fhir/R4B/subscription-definitions.html#Subscription.channel.header",
        children: "FHIR subscription"
      }), " with a shared\nsecret. This header is then verified by the subscription infrastructure to prevent any unwanted invocation from happening."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["The shared secret (named ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "webhookSecret"
      }), " in the configuration) must be protected adequately (as you would handle other secrets)."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "custom-resources-in-subscriptions",
      children: "Custom resources in subscriptions"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Subscriptions handler support ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "/packages/core/extending-fhir-resources",
        children: "custom (extended) resources"
      }), ".\nJust use the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "customResource"
      }), " and adjust your subscription type:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-typescript",
        children: "// This only works if you have also exported your custom resource class as a type.\nexport const communicationRequestsSubscription: FhirSubscription<CustomCommunicationRequest> =\n  {\n    // ...\n\n    customResource: CustomCommunicationRequest\n\n    async handler({ fhirClient, resource, logger }) {\n      // Here `resource` is a custom resource class instance.\n      logger?.info(resource);\n    },\n  };\n"
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
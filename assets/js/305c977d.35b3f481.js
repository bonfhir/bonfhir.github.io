"use strict";
(self["webpackChunk_bonfhir_website"] = self["webpackChunk_bonfhir_website"] || []).push([[1519],{

/***/ 7693:
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
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15);
/* harmony import */ var _theme_Tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3719);
/* harmony import */ var _theme_TabItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3560);


const frontMatter = {
	sidebar_position: 6,
	title: 'Create a new subscription',
	description: 'Create a new subscription to react to FHIR resources change'
};
const contentTitle = undefined;
const metadata = {
  "id": "build-a-fhir-solution-with-nextjs/create-a-new-subscription",
  "title": "Create a new subscription",
  "description": "Create a new subscription to react to FHIR resources change",
  "source": "@site/docs/build-a-fhir-solution-with-nextjs/create-a-new-subscription.md",
  "sourceDirName": "build-a-fhir-solution-with-nextjs",
  "slug": "/build-a-fhir-solution-with-nextjs/create-a-new-subscription",
  "permalink": "/docs/build-a-fhir-solution-with-nextjs/create-a-new-subscription",
  "draft": false,
  "unlisted": false,
  "editUrl": "https://github.com/bonfhir/bonfhir/tree/main/docs/website/docs/build-a-fhir-solution-with-nextjs/create-a-new-subscription.md",
  "tags": [],
  "version": "current",
  "sidebarPosition": 6,
  "frontMatter": {
    "sidebar_position": 6,
    "title": "Create a new subscription",
    "description": "Create a new subscription to react to FHIR resources change"
  },
  "sidebar": "getStartedSidebar",
  "previous": {
    "title": "Edit resources with FHIR forms",
    "permalink": "/docs/build-a-fhir-solution-with-nextjs/edit-with-fhir-forms"
  },
  "next": {
    "title": "Build Workflows with n8n",
    "permalink": "/docs/build-workflows-with-n8n/"
  }
};
const assets = {

};





const toc = [{
  "value": "The subscription handler",
  "id": "the-subscription-handler",
  "level": 2
}, {
  "value": "Run the registration",
  "id": "run-the-registration",
  "level": 2
}, {
  "value": "Test the subscription",
  "id": "test-the-subscription",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    img: "img",
    p: "p",
    pre: "pre",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "We are now moving to the API side of Next.js."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["For this example we'll create a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://hl7.org/fhir/R4B/subscription.html",
        children: "FHIR Subscription"
      }), " that ensure that an\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://hl7.org/fhir/R4B/encounter.html",
        children: "Encounter"
      }), " is created automatically when an ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://hl7.org/fhir/R4B/appointment.html",
        children: "Appointment"
      }), "\nhas its status set to ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "arrived"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "the-subscription-handler",
      children: "The subscription handler"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Create a new file ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "src/subscriptions/arrived-appointments.ts"
      }), " and paste the following code:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-typescript",
        metastring: "title=\"src/subscriptions/arrived-appointments.ts\"",
        children: "import {\n  Appointment,\n  Practitioner,\n  Reference,\n  build,\n  findReference,\n  isReferenceOf,\n  reference,\n} from \"@bonfhir/core/r4b\";\nimport { FhirSubscription } from \"@bonfhir/subscriptions/r4b\";\n\nexport const arrivedAppointments: FhirSubscription<Appointment> = {\n  criteria: \"Appointment?status=arrived\",\n  reason: \"Create encounters for arrived appointments\",\n  endpoint: \"arrived-appointments\",\n  async handler({ fhirClient, resource: appointment, logger }) {\n    // This is just a precaution\n    if (!appointment || appointment.status !== \"arrived\") return;\n\n    // Check if the appointment already has an encounter associated\n    const existingEncounters = await fhirClient.search(\"Encounter\", (search) =>\n      search.appointment(appointment),\n    );\n    if (existingEncounters.searchMatch().length > 0) return;\n\n    // Create the new encounter\n    // Note that we're using the build function from @bonfhir/core to create the encounter.\n    // We reference the appointment, and copy the appointment's subject and participants as well.\n    const newEncounter = build(\"Encounter\", {\n      status: \"arrived\",\n      class: {\n        system: \"http://terminology.hl7.org/CodeSystem/v3-ActCode\",\n        code: \"AMB\",\n        display: \"ambulatory\",\n      },\n      appointment: [reference(appointment)],\n      subject: findReference(\n        appointment.participant.map((p) => p.actor),\n        \"Patient\",\n      ),\n      participant: appointment.participant\n        .filter((participant) =>\n          isReferenceOf(participant.actor, \"Practitioner\"),\n        )\n        .map((participant) => ({\n          individual: participant.actor as Reference<Practitioner>,\n          type: participant.type,\n        })),\n    });\n\n    const result = await fhirClient.save(newEncounter);\n\n    logger?.info(\"Created encounter\", result);\n  },\n};\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Also, we need to update the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "src/middleware.ts"
      }), " file to add the new subscription to the middleware:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-typescript",
        metastring: "title=\"src/middleware.ts\"",
        children: "// ...\nimport { arrivedAppointments } from \"./subscriptions/arrived-appointments\";\n\nexport const middleware = fhirSubscriptions({\n  // ...\n  subscriptions: [arrivedAppointments],\n});\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "run-the-registration",
      children: "Run the registration"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Since we added a new subscription handler, we need to make sure it is registered properly.\nAssuming the dev server is still running (if not, run the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "npm run dev"
      }), " command), run the following command in the project directory:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_theme_Tabs__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
      groupId: "npm2yarn",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_TabItem__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
        value: "npm",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-bash",
            children: "npm run register-subscriptions\n"
          })
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_TabItem__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
        value: "yarn",
        label: "Yarn",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-bash",
            children: "yarn register-subscriptions\n"
          })
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_TabItem__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
        value: "pnpm",
        label: "pnpm",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-bash",
            children: "pnpm run register-subscriptions\n"
          })
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "You should see the following output in the dev Server process:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-bash",
        children: "Registering subscriptions...\nSubscription Create encounters for arrived appointments for Appointment?status=arrived on http://host.docker.internal:3000/api/fhir/subscriptions/arrived-appointments registered.\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "test-the-subscription",
      children: "Test the subscription"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Head over to ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "http://localhost:8100/Appointment",
        children: "Medplum and create a new appointment"
      }), " with the status ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "arrived"
      }), ".\nYou can even include participants!"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Medplum Appointment",
        src: (__webpack_require__(3478)/* ["default"] */ .A) + "",
        width: "3446",
        height: "1370"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Then ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "http://localhost:8100/Encounter",
        children: "search for encounters"
      }), " and look at the last one updated - you should see the one\nthat the subscription just created!"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Medplum Encounter",
        src: (__webpack_require__(2558)/* ["default"] */ .A) + "",
        width: "3448",
        height: "1486"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Congratulation! You have now created your first subscription."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Learn more about subscriptions ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "/packages/subscriptions",
        children: "here"
      }), "."]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__/* .useMDXComponents */ .R)(),
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

/***/ 3560:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ TabItem)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js
var react = __webpack_require__(1855);
// EXTERNAL MODULE: ../../node_modules/.pnpm/clsx@2.1.0/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(1038);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@docusaurus+theme-classic@3.2.1_@types+react@18.2.75_eslint@8.57.0_react-dom@18.2.0_react@18._vpcgkk2w5bpjju3bczdj3rt4xa/node_modules/@docusaurus/theme-classic/lib/theme/TabItem/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"tabItem":"tabItem_H9Gb"});
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(3159);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@docusaurus+theme-classic@3.2.1_@types+react@18.2.75_eslint@8.57.0_react-dom@18.2.0_react@18._vpcgkk2w5bpjju3bczdj3rt4xa/node_modules/@docusaurus/theme-classic/lib/theme/TabItem/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function TabItem(_ref){let{children,hidden,className}=_ref;return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{role:"tabpanel",className:(0,clsx/* default */.A)(styles_module.tabItem,className),hidden,children:children});}

/***/ }),

/***/ 3719:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Tabs)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js
var react = __webpack_require__(1855);
// EXTERNAL MODULE: ../../node_modules/.pnpm/clsx@2.1.0/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(1038);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@docusaurus+theme-common@3.2.1_@docusaurus+types@3.2.1_react-dom@18.2.0_react@18.2.0__react@1_s5pnyqh4ci2pn7qta2irhreb6e/node_modules/@docusaurus/theme-common/lib/utils/scrollUtils.js
var scrollUtils = __webpack_require__(8079);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-router@5.3.4_react@18.2.0/node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(3178);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@docusaurus+core@3.2.1_@docusaurus+types@3.2.1_react-dom@18.2.0_react@18.2.0__react@18.2.0__e_hcxlkhbkqepjgppjew2332zs7u/node_modules/@docusaurus/core/lib/client/exports/useIsomorphicLayoutEffect.js
var useIsomorphicLayoutEffect = __webpack_require__(4926);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@docusaurus+theme-common@3.2.1_@docusaurus+types@3.2.1_react-dom@18.2.0_react@18.2.0__react@1_s5pnyqh4ci2pn7qta2irhreb6e/node_modules/@docusaurus/theme-common/lib/utils/historyUtils.js
var historyUtils = __webpack_require__(6224);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@docusaurus+theme-common@3.2.1_@docusaurus+types@3.2.1_react-dom@18.2.0_react@18.2.0__react@1_s5pnyqh4ci2pn7qta2irhreb6e/node_modules/@docusaurus/theme-common/lib/utils/jsUtils.js
var jsUtils = __webpack_require__(753);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@docusaurus+theme-common@3.2.1_@docusaurus+types@3.2.1_react-dom@18.2.0_react@18.2.0__react@1_s5pnyqh4ci2pn7qta2irhreb6e/node_modules/@docusaurus/theme-common/lib/utils/storageUtils.js
var storageUtils = __webpack_require__(8579);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@docusaurus+theme-common@3.2.1_@docusaurus+types@3.2.1_react-dom@18.2.0_react@18.2.0__react@1_s5pnyqh4ci2pn7qta2irhreb6e/node_modules/@docusaurus/theme-common/lib/utils/tabsUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// A very rough duck type, but good enough to guard against mistakes while
// allowing customization
function isTabItem(comp){const{props}=comp;return!!props&&typeof props==='object'&&'value'in props;}function sanitizeTabsChildren(children){return react.Children.toArray(children).filter(child=>child!=='\n').map(child=>{if(!child||/*#__PURE__*/(0,react.isValidElement)(child)&&isTabItem(child)){return child;}// child.type.name will give non-sensical values in prod because of
// minification, but we assume it won't throw in prod.
throw new Error(`Docusaurus error: Bad <Tabs> child <${// @ts-expect-error: guarding against unexpected cases
typeof child.type==='string'?child.type:child.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`);})?.filter(Boolean)??[];}function extractChildrenTabValues(children){return sanitizeTabsChildren(children).map(_ref=>{let{props:{value,label,attributes,default:isDefault}}=_ref;return{value,label,attributes,default:isDefault};});}function ensureNoDuplicateValue(values){const dup=(0,jsUtils/* duplicates */.X)(values,(a,b)=>a.value===b.value);if(dup.length>0){throw new Error(`Docusaurus error: Duplicate values "${dup.map(a=>a.value).join(', ')}" found in <Tabs>. Every value needs to be unique.`);}}function useTabValues(props){const{values:valuesProp,children}=props;return (0,react.useMemo)(()=>{const values=valuesProp??extractChildrenTabValues(children);ensureNoDuplicateValue(values);return values;},[valuesProp,children]);}function isValidValue(_ref2){let{value,tabValues}=_ref2;return tabValues.some(a=>a.value===value);}function getInitialStateValue(_ref3){let{defaultValue,tabValues}=_ref3;if(tabValues.length===0){throw new Error('Docusaurus error: the <Tabs> component requires at least one <TabItem> children component');}if(defaultValue){// Warn user about passing incorrect defaultValue as prop.
if(!isValidValue({value:defaultValue,tabValues})){throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${defaultValue}" but none of its children has the corresponding value. Available values are: ${tabValues.map(a=>a.value).join(', ')}. If you intend to show no default tab, use defaultValue={null} instead.`);}return defaultValue;}const defaultTabValue=tabValues.find(tabValue=>tabValue.default)??tabValues[0];if(!defaultTabValue){throw new Error('Unexpected error: 0 tabValues');}return defaultTabValue.value;}function getStorageKey(groupId){if(!groupId){return null;}return`docusaurus.tab.${groupId}`;}function getQueryStringKey(_ref4){let{queryString=false,groupId}=_ref4;if(typeof queryString==='string'){return queryString;}if(queryString===false){return null;}if(queryString===true&&!groupId){throw new Error(`Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".`);}return groupId??null;}function useTabQueryString(_ref5){let{queryString=false,groupId}=_ref5;const history=(0,react_router/* useHistory */.W6)();const key=getQueryStringKey({queryString,groupId});const value=(0,historyUtils/* useQueryStringValue */.aZ)(key);const setValue=(0,react.useCallback)(newValue=>{if(!key){return;// no-op
}const searchParams=new URLSearchParams(history.location.search);searchParams.set(key,newValue);history.replace({...history.location,search:searchParams.toString()});},[key,history]);return[value,setValue];}function useTabStorage(_ref6){let{groupId}=_ref6;const key=getStorageKey(groupId);const[value,storageSlot]=(0,storageUtils/* useStorageSlot */.Dv)(key);const setValue=(0,react.useCallback)(newValue=>{if(!key){return;// no-op
}storageSlot.set(newValue);},[key,storageSlot]);return[value,setValue];}function useTabs(props){const{defaultValue,queryString=false,groupId}=props;const tabValues=useTabValues(props);const[selectedValue,setSelectedValue]=(0,react.useState)(()=>getInitialStateValue({defaultValue,tabValues}));const[queryStringValue,setQueryString]=useTabQueryString({queryString,groupId});const[storageValue,setStorageValue]=useTabStorage({groupId});// We sync valid querystring/storage value to state on change + hydration
const valueToSync=(()=>{const value=queryStringValue??storageValue;if(!isValidValue({value,tabValues})){return null;}return value;})();// Sync in a layout/sync effect is important, for useScrollPositionBlocker
// See https://github.com/facebook/docusaurus/issues/8625
(0,useIsomorphicLayoutEffect/* default */.A)(()=>{if(valueToSync){setSelectedValue(valueToSync);}},[valueToSync]);const selectValue=(0,react.useCallback)(newValue=>{if(!isValidValue({value:newValue,tabValues})){throw new Error(`Can't select invalid tab value=${newValue}`);}setSelectedValue(newValue);setQueryString(newValue);setStorageValue(newValue);},[setQueryString,setStorageValue,tabValues]);return{selectedValue,selectValue,tabValues};}
// EXTERNAL MODULE: ../../node_modules/.pnpm/@docusaurus+core@3.2.1_@docusaurus+types@3.2.1_react-dom@18.2.0_react@18.2.0__react@18.2.0__e_hcxlkhbkqepjgppjew2332zs7u/node_modules/@docusaurus/core/lib/client/exports/useIsBrowser.js
var useIsBrowser = __webpack_require__(1926);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@docusaurus+theme-classic@3.2.1_@types+react@18.2.75_eslint@8.57.0_react-dom@18.2.0_react@18._vpcgkk2w5bpjju3bczdj3rt4xa/node_modules/@docusaurus/theme-classic/lib/theme/Tabs/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"tabList":"tabList_onsA","tabItem":"tabItem_yj6X"});
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(3159);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@docusaurus+theme-classic@3.2.1_@types+react@18.2.75_eslint@8.57.0_react-dom@18.2.0_react@18._vpcgkk2w5bpjju3bczdj3rt4xa/node_modules/@docusaurus/theme-classic/lib/theme/Tabs/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function TabList(_ref){let{className,block,selectedValue,selectValue,tabValues}=_ref;const tabRefs=[];const{blockElementScrollPositionUntilNextRender}=(0,scrollUtils/* useScrollPositionBlocker */.a_)();const handleTabChange=event=>{const newTab=event.currentTarget;const newTabIndex=tabRefs.indexOf(newTab);const newTabValue=tabValues[newTabIndex].value;if(newTabValue!==selectedValue){blockElementScrollPositionUntilNextRender(newTab);selectValue(newTabValue);}};const handleKeydown=event=>{let focusElement=null;switch(event.key){case'Enter':{handleTabChange(event);break;}case'ArrowRight':{const nextTab=tabRefs.indexOf(event.currentTarget)+1;focusElement=tabRefs[nextTab]??tabRefs[0];break;}case'ArrowLeft':{const prevTab=tabRefs.indexOf(event.currentTarget)-1;focusElement=tabRefs[prevTab]??tabRefs[tabRefs.length-1];break;}default:break;}focusElement?.focus();};return/*#__PURE__*/(0,jsx_runtime.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,clsx/* default */.A)('tabs',{'tabs--block':block},className),children:tabValues.map(_ref2=>{let{value,label,attributes}=_ref2;return/*#__PURE__*/(0,jsx_runtime.jsx)("li",{// TODO extract TabListItem
role:"tab",tabIndex:selectedValue===value?0:-1,"aria-selected":selectedValue===value,ref:tabControl=>tabRefs.push(tabControl),onKeyDown:handleKeydown,onClick:handleTabChange,...attributes,className:(0,clsx/* default */.A)('tabs__item',styles_module.tabItem,attributes?.className,{'tabs__item--active':selectedValue===value}),children:label??value},value);})});}function TabContent(_ref3){let{lazy,children,selectedValue}=_ref3;const childTabs=(Array.isArray(children)?children:[children]).filter(Boolean);if(lazy){const selectedTabItem=childTabs.find(tabItem=>tabItem.props.value===selectedValue);if(!selectedTabItem){// fail-safe or fail-fast? not sure what's best here
return null;}return/*#__PURE__*/(0,react.cloneElement)(selectedTabItem,{className:'margin-top--md'});}return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"margin-top--md",children:childTabs.map((tabItem,i)=>/*#__PURE__*/(0,react.cloneElement)(tabItem,{key:i,hidden:tabItem.props.value!==selectedValue}))});}function TabsComponent(props){const tabs=useTabs(props);return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:(0,clsx/* default */.A)('tabs-container',styles_module.tabList),children:[/*#__PURE__*/(0,jsx_runtime.jsx)(TabList,{...props,...tabs}),/*#__PURE__*/(0,jsx_runtime.jsx)(TabContent,{...props,...tabs})]});}function Tabs(props){const isBrowser=(0,useIsBrowser/* default */.A)();return/*#__PURE__*/(0,jsx_runtime.jsx)(TabsComponent// Remount tabs after hydration
// Temporary fix for https://github.com/facebook/docusaurus/issues/5653
,{...props,children:sanitizeTabsChildren(props.children)},String(isBrowser));}

/***/ }),

/***/ 3478:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/medplum-appointment-075e4f64702849dee2e7cc8bf2404480.png");

/***/ }),

/***/ 2558:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/medplum-encounter-79a01edd0413eec28111a9c639dfcd6f.png");

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
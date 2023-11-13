"use strict";
(self["webpackChunkwebsite"] = self["webpackChunkwebsite"] || []).push([[607],{

/***/ 980:
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
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3147);


const frontMatter = {
	sidebar_position: 3
};
const contentTitle = 'Create a Blog Post';
const metadata = {
  "id": "tutorial-basics/create-a-blog-post",
  "title": "Create a Blog Post",
  "description": "Docusaurus creates a page for each blog post, but also a blog index page, a tag system, an RSS feed...",
  "source": "@site/docs/tutorial-basics/create-a-blog-post.md",
  "sourceDirName": "tutorial-basics",
  "slug": "/tutorial-basics/create-a-blog-post",
  "permalink": "/docs/tutorial-basics/create-a-blog-post",
  "draft": false,
  "unlisted": false,
  "editUrl": "https://github.com/bonfhir/bonfhir/tree/main/docs/website/docs/tutorial-basics/create-a-blog-post.md",
  "tags": [],
  "version": "current",
  "sidebarPosition": 3,
  "frontMatter": {
    "sidebar_position": 3
  },
  "sidebar": "getStartedSidebar",
  "previous": {
    "title": "Create a Document",
    "permalink": "/docs/tutorial-basics/create-a-document"
  },
  "next": {
    "title": "Markdown Features",
    "permalink": "/docs/tutorial-basics/markdown-features"
  }
};
const assets = {

};



const toc = [{
  "value": "Create your first Post",
  "id": "create-your-first-post",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .a)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h1, {
      id: "create-a-blog-post",
      children: "Create a Blog Post"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Docusaurus creates a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "page for each blog post"
      }), ", but also a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "blog index page"
      }), ", a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "tag system"
      }), ", an ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "RSS"
      }), " feed..."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "create-your-first-post",
      children: "Create your first Post"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Create a file at ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "blog/2021-02-28-greetings.md"
      }), ":"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-md",
        metastring: "title=\"blog/2021-02-28-greetings.md\"",
        children: "---\nslug: greetings\ntitle: Greetings!\nauthors:\n  - name: Joel Marcey\n    title: Co-creator of Docusaurus 1\n    url: https://github.com/JoelMarcey\n    image_url: https://github.com/JoelMarcey.png\n  - name: Sébastien Lorber\n    title: Docusaurus maintainer\n    url: https://sebastienlorber.com\n    image_url: https://github.com/slorber.png\ntags: [greetings]\n---\n\nCongratulations, you have made your first post!\n\nFeel free to play around and edit this post as much you like.\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["A new blog post is now available at ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "http://localhost:3000/blog/greetings",
        children: "http://localhost:3000/blog/greetings"
      }), "."]
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

/***/ 3147:
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
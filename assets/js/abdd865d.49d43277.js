"use strict";
(self["webpackChunk_bonfhir_website"] = self["webpackChunk_bonfhir_website"] || []).push([[7261],{

/***/ 6568:
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
	title: 'Create a FHIR Implementation Guide with IG Toolbox',
	description: 'Document your implementation data model'
};
const contentTitle = undefined;
const metadata = {
  "id": "guides/ig-toolbox/index",
  "title": "Create a FHIR Implementation Guide with IG Toolbox",
  "description": "Document your implementation data model",
  "source": "@site/docs/guides/ig-toolbox/index.md",
  "sourceDirName": "guides/ig-toolbox",
  "slug": "/guides/ig-toolbox/",
  "permalink": "/docs/guides/ig-toolbox/",
  "draft": false,
  "unlisted": false,
  "editUrl": "https://github.com/bonfhir/bonfhir/tree/main/docs/website/docs/guides/ig-toolbox/index.md",
  "tags": [],
  "version": "current",
  "sidebarPosition": 2,
  "frontMatter": {
    "sidebar_position": 2,
    "title": "Create a FHIR Implementation Guide with IG Toolbox",
    "description": "Document your implementation data model"
  },
  "sidebar": "getStartedSidebar",
  "previous": {
    "title": "Setup GraphQL in a bonFHIR project",
    "permalink": "/docs/guides/graphql/"
  },
  "next": {
    "title": "Contributing to bonFHIR",
    "permalink": "/docs/contributing"
  }
};
const assets = {

};



const toc = [{
  "value": "Why create an Implementation Guide?",
  "id": "why-create-an-implementation-guide",
  "level": 2
}, {
  "value": "What is the IG Toolbox?",
  "id": "what-is-the-ig-toolbox",
  "level": 2
}, {
  "value": "Get Started",
  "id": "get-started",
  "level": 2
}, {
  "value": "(Optional) - Create a dev container",
  "id": "optional---create-a-dev-container",
  "level": 2
}, {
  "value": "Edit the IG",
  "id": "edit-the-ig",
  "level": 2
}, {
  "value": "Add a new profile",
  "id": "add-a-new-profile",
  "level": 3
}, {
  "value": "Add a new diagram",
  "id": "add-a-new-diagram",
  "level": 3
}, {
  "value": "Build the IG using SUSHI",
  "id": "build-the-ig-using-sushi",
  "level": 2
}, {
  "value": "Run the IG Publisher",
  "id": "run-the-ig-publisher",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    br: "br",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    img: "img",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .a)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["This guide will walk you through creating a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://www.hl7.org/fhir/implementationguide.html",
        children: "FHIR Implementation Guide (IG)"
      }), "\nusing ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/bonfhir/ig-toolbox",
        children: "bonFHIR's IG Toolbox"
      }), " docker image."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "This guide is also available in video:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
      style: {
        textAlign: "center"
      },
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("iframe", {
        width: "560",
        height: "315",
        src: "https://www.youtube-nocookie.com/embed/tgUZ1Et4fvM",
        title: "YouTube video player",
        frameborder: "0",
        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
        allowfullscreen: true
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "why-create-an-implementation-guide",
      children: "Why create an Implementation Guide?"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["We do recommend that you create and maintain a FHIR IG for your FHIR Implementation.", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.br, {}), "\n", "It provides the following benefits:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "document your own usage of FHIR, in a format that is familiar with FHIR practitioners"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "create artifacts (structure definitions, computable resources, terminology, etc...) that you can import and use directly\nwithin your FHIR server for validation and retrieval of data"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "IG Venn Diagram",
        src: (__webpack_require__(930)/* ["default"] */ .Z) + "",
        width: "787",
        height: "530"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: "Image courtesy of FSH School"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Here are some resources to learn more about how to create IGs:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://hl7.org/fhir/uv/shorthand/",
          children: "FSH Language overview"
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://hl7.org/fhir/uv/shorthand/reference.html",
          children: "FSH Language reference"
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://fshschool.org/",
          children: "FSH School"
        }), ", and more specifically the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://fshschool.org/courses/fsh-seminar/",
          children: "Seminar"
        }), " and the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://fshschool.org/courses/fsh-seminar/04-deep-dive-with-fsh.html",
          children: "deep dive"
        })]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "what-is-the-ig-toolbox",
      children: "What is the IG Toolbox?"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["bonFHIR's IG toolbox helps with maintaining the suite of tools required to author and generate IGs,\nso you can focus on ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: "writing"
      }), " the IG, not figuring out how to setup you tools and workstation."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["You don't need to install anything.", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.br, {}), "\n", "The only thing you need is ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://www.docker.com/products/docker-desktop/",
        children: "Docker installed"
      }), ",\nand we do recommend that you use ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://code.visualstudio.com/",
        children: "Visual Studio Code"
      }), " to edit the IG."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "get-started",
      children: "Get Started"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Initialize your implementation guide using ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://fshschool.org/docs/sushi/",
        children: "SUSHI"
      }), ":"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-shell",
        children: "docker run -it --rm -v .:/workspaces ghcr.io/bonfhir/ig-toolbox sushi init\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["This will create the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://fshschool.org/docs/sushi/project/",
        children: "Project structure"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Open it with Visual Studio Code."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "IG VS Code",
        src: (__webpack_require__(6840)/* ["default"] */ .Z) + "",
        width: "3680",
        height: "2382"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "optional---create-a-dev-container",
      children: "(Optional) - Create a dev container"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
      type: "info",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["This step is optional, but we do recommend you do it.", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.br, {}), "\n", "It will enhance your editing experience within Visual Studio Code by providing:"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
          children: "Syntax highlighting and completion"
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
          children: "Tasks and Shortcuts to build your IG."
        }), "\n"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "In your project directory, run the following command to create the dev container and vs code config files:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-shell",
        children: "docker run -it --rm -v .:/workspaces ghcr.io/bonfhir/ig-toolbox add-vscode-files\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Then install the Dev Containers extension if you don't already have it."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "IG VS Code",
        src: (__webpack_require__(7372)/* ["default"] */ .Z) + "",
        width: "3680",
        height: "2382"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Once installed, simply click the \"Reopen in Container\" button to re-launch Visual Studio Code inside the dev container."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "edit-the-ig",
      children: "Edit the IG"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "You can now create FSH files and resources for your IG."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "A few scripts can help you:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "add-a-new-profile",
      children: "Add a new profile"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Run the following command to create a new resource profile and corresponding Markdown documentation:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-shell",
        children: "docker run -it --rm -v .:/workspaces ghcr.io/bonfhir/ig-toolbox add-profile <profile-name>\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["This creates a new fsh file with the profile, and a corresponding markdown file in the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "pagecontent"
      }), " section."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
      type: "tip",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "If you are using the VS Code devcontainer setup at step 2, you can simply use the command palette and run the task \"Add new profile\""
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "add-a-new-diagram",
      children: "Add a new diagram"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Implementation Guides can contain diagrams created using ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://plantuml.com/",
        children: "PlantUML"
      }), ".", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.br, {}), "\n", "Run the following command to create a new class diagram that can be used to represent relationships between resources:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-shell",
        children: "docker run -it --rm -v .:/workspaces ghcr.io/bonfhir/ig-toolbox add-fhir-resource-diagram <diagram-name>\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["This create a new plantUML file in the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "images-source"
      }), " folder, and output the syntax to include in markdown files to include the diagram in the documentation."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
      type: "tip",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "If you are using the VS Code devcontainer setup at step 2, you can simply use the command palette and run the task \"Add new diagram\"."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "Also - you can preview the diagram in realtime by running the \"PlantUML: Preview Current Diagram\"."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "build-the-ig-using-sushi",
      children: "Build the IG using SUSHI"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "This step is a quick process that can:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "validate that your fsh is valid"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "and create the FHIR artifacts"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "To run the build, use the following command:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-shell",
        children: "docker run -it --rm -v .:/workspaces ghcr.io/bonfhir/ig-toolbox sushi\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
      type: "tip",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "If you are using the VS Code devcontainer setup at step 2, you can simply use the default build command, or run the \"Run SUSHI\" task."
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "run-the-ig-publisher",
      children: "Run the IG Publisher"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "This is the final build that will produce all the artifacts associated with a published IG."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "In order to run it you must first download the IG publisher (this only need to be done once):"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-shell",
        children: "docker run -it --rm -v .:/workspaces ghcr.io/bonfhir/ig-toolbox ./_updatePublisher.sh -y\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
      type: "tip",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "If you are using the VS Code devcontainer setup at step 2, you can simply use the \"Update IG Publisher\" task."
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Then, run the IG Publisher:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-shell",
        children: "docker run -it --rm -v .:/workspaces ghcr.io/bonfhir/ig-toolbox ./_genonce.sh\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
      type: "tip",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "If you are using the VS Code devcontainer setup at step 2, you can simply use the \"Run IG Publisher\" task."
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Once executed, you will find the resulting IG in the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "output"
      }), " folder.\nOpen the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "output/index.html"
      }), " file in your browser to browse your implementation guide."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "IG Example",
        src: (__webpack_require__(519)/* ["default"] */ .Z) + "",
        width: "2218",
        height: "1738"
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

/***/ 519:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/ig_example-a533d5b0f8210827a7946dd246f00a7e.png");

/***/ }),

/***/ 930:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6eGw9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjQgMTE1LjUgNzg2LjUgNTI5LjYxNzIiIHdpZHRoPSI3ODYuNSIgaGVpZ2h0PSI1MjkuNjE3MiI+CiAgPGRlZnM+CiAgICA8ZmlsdGVyIGlkPSJTaGFkb3ciIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeD0iLTc0LjY1IiB5PSI2Mi41MzgyOCI+CiAgICAgIDxmZUdhdXNzaWFuQmx1ciBpbj0iU291cmNlQWxwaGEiIHJlc3VsdD0iYmx1ciIgc3RkRGV2aWF0aW9uPSIxLjMwOCIvPgogICAgICA8ZmVPZmZzZXQgaW49ImJsdXIiIHJlc3VsdD0ib2Zmc2V0IiBkeD0iMCIgZHk9IjIiLz4KICAgICAgPGZlRmxvb2QgZmxvb2QtY29sb3I9ImJsYWNrIiBmbG9vZC1vcGFjaXR5PSIuNSIgcmVzdWx0PSJmbG9vZCIvPgogICAgICA8ZmVDb21wb3NpdGUgaW49ImZsb29kIiBpbjI9Im9mZnNldCIgb3BlcmF0b3I9ImluIiByZXN1bHQ9ImNvbG9yIi8+CiAgICAgIDxmZU1lcmdlPgogICAgICAgIDxmZU1lcmdlTm9kZSBpbj0iY29sb3IiLz4KICAgICAgICA8ZmVNZXJnZU5vZGUgaW49IlNvdXJjZUdyYXBoaWMiLz4KICAgICAgPC9mZU1lcmdlPgogICAgPC9maWx0ZXI+CiAgICA8bWFya2VyIG9yaWVudD0iYXV0byIgb3ZlcmZsb3c9InZpc2libGUiIG1hcmtlclVuaXRzPSJzdHJva2VXaWR0aCIgaWQ9IkZpbGxlZEFycm93X01hcmtlciIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiB2aWV3Qm94PSItMSAtMyA2IDYiIG1hcmtlcldpZHRoPSI2IiBtYXJrZXJIZWlnaHQ9IjYiIGNvbG9yPSIjZmZlYjY5Ij4KICAgICAgPGc+CiAgICAgICAgPHBhdGggZD0iTSAzLjIgMCBMIDAgLTEuMiBMIDAgMS4yIFoiIGZpbGw9ImN1cnJlbnRDb2xvciIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgICA8L2c+CiAgICA8L21hcmtlcj4KICA8L2RlZnM+CiAgPG1ldGFkYXRhPiBQcm9kdWNlZCBieSBPbW5pR3JhZmZsZSA3LjIwXG4yMDIyLTA1LTA0IDE0OjM2OjIzICswMDAwPC9tZXRhZGF0YT4KICA8ZyBpZD0iQ2FudmFzXzEiIGZpbGw9Im5vbmUiIHN0cm9rZS1vcGFjaXR5PSIxIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLWRhc2hhcnJheT0ibm9uZSI+CiAgICA8dGl0bGU+Q2FudmFzIDE8L3RpdGxlPgogICAgPHJlY3QgZmlsbD0id2hpdGUiIHg9IjQiIHk9IjExNS41IiB3aWR0aD0iNzg2LjUiIGhlaWdodD0iNTI5LjYxNzIiLz4KICAgIDxnIGlkPSJDYW52YXNfMV9MYXllcl8xIj4KICAgICAgPHRpdGxlPkxheWVyIDE8L3RpdGxlPgogICAgICA8ZyBpZD0iR3JhcGhpY181Ij4KICAgICAgICA8Y2lyY2xlIGN4PSIzMzAuMjUiIGN5PSIzMDQuNzUiIHI9IjE4OS4yNTAzMDI0MDI5MzQiIGZpbGw9IiM0NDNjODMiLz4KICAgICAgPC9nPgogICAgICA8ZyBpZD0iR3JhcGhpY182Ij4KICAgICAgICA8Y2lyY2xlIGN4PSI1MjcuMjUiIGN5PSIzMDQuNzUiIHI9IjE0MC4yNTAyMjQxMDU3NDEiIGZpbGw9IiNiMWE4ZjMiLz4KICAgICAgICA8Y2lyY2xlIGN4PSI1MjcuMjUiIGN5PSIzMDQuNzUiIHI9IjE0MC4yNTAyMjQxMDU3NDEiIHN0cm9rZT0iI2U0NWU3ZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgICAgPC9nPgogICAgICA8ZyBpZD0iR3JhcGhpY183Ij4KICAgICAgICA8dGV4dCB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5IDE2OS41KSIgZmlsbD0iIzQ0M2M4MyI+CiAgICAgICAgICA8dHNwYW4gZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIxOSIgZmlsbD0iIzQ0M2M4MyIgeD0iMzcuNzk5MzE2IiB5PSIxNyI+VXNlIGNhc2UgPC90c3Bhbj4KICAgICAgICAgIDx0c3BhbiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtd2VpZ2h0PSJib2xkIiBmb250LXNpemU9IjE5IiBmaWxsPSIjNDQzYzgzIiB4PSIxOC44MzE3ODciIHk9IjM4LjYyMTU4Ij5zdXBwb3J0ZWQgYnkgPC90c3Bhbj4KICAgICAgICAgIDx0c3BhbiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtd2VpZ2h0PSJib2xkIiBmb250LXNpemU9IjE5IiBmaWxsPSIjNDQzYzgzIiB4PSIxMC44OTk2NTgiIHk9IjYwLjI0MzE2NCI+RkhJUiBSZXNvdXJjZTwvdHNwYW4+CiAgICAgICAgPC90ZXh0PgogICAgICA8L2c+CiAgICAgIDxnIGlkPSJHcmFwaGljXzgiPgogICAgICAgIDx0ZXh0IHRyYW5zZm9ybT0idHJhbnNsYXRlKDYyNy41IDE2OS41KSIgZmlsbD0iI2U0NWU3ZSI+CiAgICAgICAgICA8dHNwYW4gZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIxOSIgZmlsbD0iI2U0NWU3ZSIgeD0iNDUuMzk3NDYiIHk9IjE3Ij5Zb3VyIElHIDwvdHNwYW4+CiAgICAgICAgICA8dHNwYW4gZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIxOSIgZmlsbD0iI2U0NWU3ZSIgeD0iNi4xNzI4NTE2IiB5PSIzOC42MjE1OCI+c3VwcG9ydGluZyB5b3VyIDwvdHNwYW4+CiAgICAgICAgICA8dHNwYW4gZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIxOSIgZmlsbD0iI2U0NWU3ZSIgeD0iMzguODU2OTM0IiB5PSI2MC4yNDMxNjQiPnVzZSBjYXNlPC90c3Bhbj4KICAgICAgICA8L3RleHQ+CiAgICAgIDwvZz4KICAgICAgPGcgaWQ9IkdyYXBoaWNfMTIiPgogICAgICAgIDxyZWN0IHg9IjUyNi41IiB5PSI1NDYiIHdpZHRoPSIyMTIiIGhlaWdodD0iOTcuNjE3MTkiIHN0cm9rZT0iI2IxYThmMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjMiLz4KICAgICAgICA8dGV4dCB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1MzEuNSA1NTEpIiBmaWxsPSIjMDkyMTM1Ij4KICAgICAgICAgIDx0c3BhbiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtd2VpZ2h0PSJib2xkIiBmb250LXNpemU9IjE2IiBmaWxsPSIjMDkyMTM1IiB4PSIwIiB5PSIxNCI+RXh0ZW5kOjwvdHNwYW4+CiAgICAgICAgICA8dHNwYW4gZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE2IiBmaWxsPSIjMDkyMTM1IiB4PSIwIiB5PSIzMS41MjM0MzgiPiAg4oCiIEV4dGVuc2lvbnM8L3RzcGFuPgogICAgICAgICAgPHRzcGFuIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNiIgZmlsbD0iIzA5MjEzNSIgeD0iMCIgeT0iNDkuMDQ2ODc1Ij4gIOKAoiBTZWFyY2ggcGFyYW1ldGVyczwvdHNwYW4+CiAgICAgICAgICA8dHNwYW4gZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE2IiBmaWxsPSIjMDkyMTM1IiB4PSIwIiB5PSI2Ni41NzAzMSI+ICDigKIgT3BlcmF0aW9uczwvdHNwYW4+CiAgICAgICAgICA8dHNwYW4gZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE2IiBmaWxsPSIjMDkyMTM1IiB4PSIwIiB5PSI4NC4wOTM3NSI+ICDigKIgTmFycmF0aXZlIGRvY3VtZW50YXRpb248L3RzcGFuPgogICAgICAgIDwvdGV4dD4KICAgICAgPC9nPgogICAgICA8ZyBpZD0iR3JhcGhpY18xOSI+CiAgICAgICAgPHBhdGggZD0iTSA0NzAuNzA0NDQgMTc2LjgwNzg0IEMgNDU1LjYxMjEgMTgzLjU5Mjc4IDQ0MS40NzM4IDE5My4xODI5NyA0MjkuMDc4NDUgMjA1LjU3ODM4IEMgMzc0LjMwNzIgMjYwLjM0OTM3IDM3NC4zMDcyIDM0OS4xNTA2MyA0MjkuMDc4NDUgNDAzLjkyMTYgQyA0NDEuNDczOCA0MTYuMzE3MDMgNDU1LjYxMjEgNDI1LjkwNzIgNDcwLjcwNDQ0IDQzMi42OTIxNiBDIDUzNy4wOTg3NCAzNjAuNDMwNCA1MzcuMDk4NzQgMjQ5LjA2OTYgNDcwLjcwNDQ0IDE3Ni44MDc4NSBaIiBmaWxsPSIjNWI1MGFlIi8+CiAgICAgIDwvZz4KICAgICAgPGcgaWQ9IkdyYXBoaWNfMTAiPgogICAgICAgIDxyZWN0IHg9IjMyNS41IiB5PSI1NDYiIHdpZHRoPSIxODIiIGhlaWdodD0iOTcuNjE3MTkiIHN0cm9rZT0iIzViNTBhZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjMiLz4KICAgICAgICA8dGV4dCB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzMzAuNSA1NTEpIiBmaWxsPSIjMDkyMTM1Ij4KICAgICAgICAgIDx0c3BhbiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtd2VpZ2h0PSJib2xkIiBmb250LXNpemU9IjE2IiBmaWxsPSIjMDkyMTM1IiB4PSIwIiB5PSIxNCI+Q29uc3RyYWluOjwvdHNwYW4+CiAgICAgICAgICA8dHNwYW4gZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE2IiBmaWxsPSIjMDkyMTM1IiB4PSIwIiB5PSIzMS41MjM0MzgiPiAg4oCiIENhcmRpbmFsaXR5PC90c3Bhbj4KICAgICAgICAgIDx0c3BhbiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiMwOTIxMzUiIHg9IjAiIHk9IjQ5LjA0Njg3NSI+ICDigKIgVGVybWlub2xvZ3kgYmluZGluZzwvdHNwYW4+CiAgICAgICAgICA8dHNwYW4gZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE2IiBmaWxsPSIjMDkyMTM1IiB4PSIwIiB5PSI2Ni41NzAzMSI+ICDigKIgU2xpY2luZzwvdHNwYW4+CiAgICAgICAgICA8dHNwYW4gZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE2IiBmaWxsPSIjMDkyMTM1IiB4PSIwIiB5PSI4NC4wOTM3NSI+ICDigKIgSW52YXJpYW50czwvdHNwYW4+CiAgICAgICAgPC90ZXh0PgogICAgICA8L2c+CiAgICAgIDxnIGlkPSJMaW5lXzIxIiBmaWx0ZXI9InVybCgjU2hhZG93KSI+CiAgICAgICAgPGxpbmUgeDE9IjQ1My41IiB5MT0iNTM3IiB4Mj0iNDUzLjUiIHkyPSIzNjUuMzM3NSIgbWFya2VyLWVuZD0idXJsKCNGaWxsZWRBcnJvd19NYXJrZXIpIiBzdHJva2U9IiNmZmViNjkiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSI0Ii8+CiAgICAgIDwvZz4KICAgICAgPGcgaWQ9IkxpbmVfMjIiIGZpbHRlcj0idXJsKCNTaGFkb3cpIj4KICAgICAgICA8bGluZSB4MT0iNTgzLjUiIHkxPSI1MzciIHgyPSI1ODMuNSIgeTI9IjM2NS4zMzc1IiBtYXJrZXItZW5kPSJ1cmwoI0ZpbGxlZEFycm93X01hcmtlcikiIHN0cm9rZT0iI2ZmZWI2OSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjQiLz4KICAgICAgPC9nPgogICAgPC9nPgogIDwvZz4KPC9zdmc+Cg==");

/***/ }),

/***/ 6840:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/ig_vscode-ddce367f55ae97532ba476f7d1a49a8c.png");

/***/ }),

/***/ 7372:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/ig_vscode_devcontainer-7b1a2459c3beb0bc53c9a390e044c4f0.png");

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
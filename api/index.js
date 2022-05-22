var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React = __toESM(require("react"));

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_server = require("react-dom/server");
var import_react = require("@remix-run/react");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_react.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:C:\Users\tree\Desktop\gustavoca.dev\app\root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});
var import_react4 = require("@remix-run/react");

// app/components/Nav.tsx
var import_react2 = require("react");
var import_hamburger_react = require("hamburger-react");
var import_react3 = require("@remix-run/react");
var Nav = () => {
  const [isOpen, setOpen] = (0, import_react2.useState)(false);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("header", {
    className: `h-auto  absolute w-full ${isOpen && "bg-[#131313]"} top-0`
  }, /* @__PURE__ */ React.createElement("nav", {
    className: "flex flex-col items-center justify-center font-semibold sm:flex-row px-[16px] relative z-50 "
  }, /* @__PURE__ */ React.createElement("div", {
    className: "sm:hidden pt-[16px] flex justify-end w-full "
  }, /* @__PURE__ */ React.createElement(import_hamburger_react.Twirl, {
    toggled: isOpen,
    toggle: setOpen
  })), /* @__PURE__ */ React.createElement("ul", {
    className: `${isOpen ? "flex" : "hidden"} w-full sm:w-auto  flex-col sm:flex-row sm:flex text-[18px] lg:text-[18px] sm:my-[34px] uppercase  text-center gap-[36px] sm:gap-[45px] lg:gap-[45px] py-[18px] sm:py-[0px]`
  }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_react3.NavLink, {
    to: "/",
    className: ({ isActive }) => isActive ? "text-[#FCD34D]" : ""
  }, "Home ", /* @__PURE__ */ React.createElement("span", {
    className: "font-normal"
  }, "\u{1F3E1}"))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_react3.NavLink, {
    to: "/blog",
    className: ({ isActive }) => isActive ? "text-[#FCD34D]" : ""
  }, "Blog ", /* @__PURE__ */ React.createElement("span", {
    className: "font-normal"
  }, "\u{1F4D6}"))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_react3.NavLink, {
    to: "/about",
    className: ({ isActive }) => isActive ? "text-[#FCD34D]" : ""
  }, "About me ", /* @__PURE__ */ React.createElement("span", {
    className: "font-normal"
  }, "\u{1F466}")))))), /* @__PURE__ */ React.createElement("div", {
    className: "h-[92px]"
  }));
};
var Nav_default = Nav;

// app/components/Footer.tsx
function Footer() {
  return /* @__PURE__ */ React.createElement("footer", {
    className: "bg-white dark:bg-[#131313] h-[92px] text-[18px] lg:text-[22px] dark:text-gray-200 flex items-center font-semibold w-full px-[32px] lg:px-[112px] justify-between"
  }, /* @__PURE__ */ React.createElement("h2", null, "CA Gustavo ", /* @__PURE__ */ React.createElement("span", {
    className: "text-yellow-400"
  }, "\u26A1"), " \xA9", " ", new Date().getFullYear(), " "), /* @__PURE__ */ React.createElement("section", {
    className: "flex gap-8"
  }, /* @__PURE__ */ React.createElement("a", {
    target: "_blank",
    href: "https://twitter.com/gustavocadev"
  }, /* @__PURE__ */ React.createElement("svg", {
    width: 24,
    height: 24,
    strokeWidth: "1.5",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M23 3.01006C23 3.01006 20.9821 4.20217 19.86 4.54006C19.2577 3.84757 18.4573 3.35675 17.567 3.13398C16.6767 2.91122 15.7395 2.96725 14.8821 3.29451C14.0247 3.62177 13.2884 4.20446 12.773 4.96377C12.2575 5.72309 11.9877 6.62239 12 7.54006V8.54006C10.2426 8.58562 8.50127 8.19587 6.93101 7.4055C5.36074 6.61513 4.01032 5.44869 3 4.01006C3 4.01006 -1 13.0101 8 17.0101C5.94053 18.408 3.48716 19.109 1 19.0101C10 24.0101 21 19.0101 21 7.51006C20.9991 7.23151 20.9723 6.95365 20.92 6.68006C21.9406 5.67355 23 3.01006 23 3.01006Z",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), /* @__PURE__ */ React.createElement("a", {
    target: "_blank",
    href: "https://github.com/gustavocadev"
  }, /* @__PURE__ */ React.createElement("svg", {
    width: 24,
    height: 24,
    strokeWidth: "1.5",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M16 22.0268V19.1568C16.0375 18.68 15.9731 18.2006 15.811 17.7506C15.6489 17.3006 15.3929 16.8902 15.06 16.5468C18.2 16.1968 21.5 15.0068 21.5 9.54679C21.4997 8.15062 20.9627 6.80799 20 5.79679C20.4558 4.5753 20.4236 3.22514 19.91 2.02679C19.91 2.02679 18.73 1.67679 16 3.50679C13.708 2.88561 11.292 2.88561 8.99999 3.50679C6.26999 1.67679 5.08999 2.02679 5.08999 2.02679C4.57636 3.22514 4.54413 4.5753 4.99999 5.79679C4.03011 6.81549 3.49251 8.17026 3.49999 9.57679C3.49999 14.9968 6.79998 16.1868 9.93998 16.5768C9.61098 16.9168 9.35725 17.3222 9.19529 17.7667C9.03334 18.2112 8.96679 18.6849 8.99999 19.1568V22.0268",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M9 20.0267C6 20.9999 3.5 20.0267 2 17.0267",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), /* @__PURE__ */ React.createElement("a", {
    target: "_blank",
    href: "https://www.facebook.com/gustavocadev"
  }, /* @__PURE__ */ React.createElement("svg", {
    width: 24,
    height: 24,
    strokeWidth: "1.5",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M17 2H14C12.6739 2 11.4021 2.52678 10.4645 3.46447C9.52678 4.40215 9 5.67392 9 7V10H6V14H9V22H13V14H16L17 10H13V7C13 6.73478 13.1054 6.48043 13.2929 6.29289C13.4804 6.10536 13.7348 6 14 6H17V2Z",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })))));
}

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-E7R4TMAJ.css";

// route:C:\Users\tree\Desktop\gustavoca.dev\app\root.tsx
var links = () => {
  return [
    {
      rel: "stylesheet",
      href: tailwind_default
    },
    {
      href: "https://cdn.jsdelivr.net/gh/vaibhav111tandon/vov.css@latest/vov.css",
      rel: "stylesheet",
      type: "text/css"
    }
  ];
};
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement(import_react4.Meta, null), /* @__PURE__ */ React.createElement(import_react4.Links, null)), /* @__PURE__ */ React.createElement("body", {
    className: "bg-[#F7F6F3] text-dark dark:bg-[#181818] dark:text-gray-200 w-full overflow-x-hidden "
  }, /* @__PURE__ */ React.createElement(Nav_default, null), /* @__PURE__ */ React.createElement(import_react4.Outlet, null), /* @__PURE__ */ React.createElement(Footer, null), /* @__PURE__ */ React.createElement(import_react4.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_react4.Scripts, null), /* @__PURE__ */ React.createElement(import_react4.LiveReload, null)));
}

// route:C:\Users\tree\Desktop\gustavoca.dev\app\routes\projects\index.tsx
var projects_exports = {};
__export(projects_exports, {
  default: () => Projects,
  loader: () => loader,
  meta: () => meta
});
var import_react5 = require("@remix-run/react");

// app/helpers/Project.server.ts
var import_crypto = __toESM(require("crypto"));
var getPots = () => {
  const projects = [
    {
      title: "Gif App",
      img: "https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/02/4cbe8d_f1ed2800a49649848102c68fc5a66e53mv2.gif?fit=476%2C280&ssl=1",
      description: "Es una aplicaci\xF3n en donde puedes buscar los gifs que quieras. \u{1F409}",
      tags: ["react", "remix", "typescript"],
      id: import_crypto.default.randomUUID(),
      url: "https://gif-app.vercel.app/?title=christopher+robin"
    },
    {
      title: "Clients App",
      img: "https://f.hellowork.com/obs-static-images/seo/ObsJob/responsable-des-relations-client.jpg",
      description: "Es una aplicaci\xF3n en donde puedes registrar clientes, editar, eliminar, y actualizarlos \u{1F4E0}",
      tags: ["Deno", "oak", "mongodb", "react", "typescript"],
      id: import_crypto.default.randomUUID(),
      url: "https://clients-react-vite-typescript.vercel.app"
    },
    {
      title: "Posts App",
      img: "https://smashballoon.com/wp-content/uploads/2020/08/Types-of-Facebook-Posts-Proven-to-Easily-Boost-Page-Engagement.jpg",
      description: "Es una aplicaci\xF3n en donde puedes crearte una cuenta, iniciar sesi\xF3n y crear posts \u{1F4D3}",
      tags: ["express", "handlebars", "nodejs", "mongodb"],
      id: import_crypto.default.randomUUID(),
      url: "https://posts-app-node.herokuapp.com"
    },
    {
      title: "App de usuarios",
      img: "https://ayltoninacio.com.br/img/p/74w750.jpg",
      description: "Es una aplicaci\xF3n en donde puedes crear usuarios y listarlos. \u{1F9D1}\u200D\u{1F9B1}",
      tags: ["vue", "nodejs", "express"],
      id: import_crypto.default.randomUUID(),
      url: "https://base-de-datos-webapp.herokuapp.com"
    },
    {
      title: "App de Cryptomoneda",
      img: "https://dmn-dallas-news-prod.cdn.arcpublishing.com/resizer/FJpBxbM2AVets8_N0pnHhRwKerw=/1660x934/smart/filters:no_upscale()/cloudfront-us-east-1.images.arcpublishing.com/dmn/DGEV2OLJSRHK5KVI4PT3QHGFEA.jpg",
      description: "Es una aplicaci\xF3n en donde puedes cotizar cryptomonedas. \u{1FA99}",
      tags: ["react", "vite", "typescript"],
      id: import_crypto.default.randomUUID(),
      url: "https://react-cryptocosas.netlify.app/"
    }
  ];
  return projects;
};
var Project_server_default = getPots;

// route:C:\Users\tree\Desktop\gustavoca.dev\app\routes\projects\index.tsx
var loader = async () => {
  const projects = Project_server_default();
  return {
    projects
  };
};
var meta = () => {
  return {
    title: "Projects",
    description: "Here we can see all my projects"
  };
};
function Projects() {
  const { projects } = (0, import_react5.useLoaderData)();
  return /* @__PURE__ */ React.createElement("section", {
    className: "px-[32px] md:px-[104px] lg:px-[248px] sm:py-[24px] font-semibold text-[34px] flex flex-col"
  }, /* @__PURE__ */ React.createElement("header", {
    className: "pb-8"
  }, /* @__PURE__ */ React.createElement("h2", null, "Projects")), /* @__PURE__ */ React.createElement("section", {
    className: "flex flex-col gap-y-[24px] flex-shrink-0"
  }, projects.map((project) => {
    return /* @__PURE__ */ React.createElement("article", {
      className: "grid grid-cols-1 sm:grid-cols-7 h-auto sm:h-[168px] gap-x-[10px]",
      key: project.id
    }, /* @__PURE__ */ React.createElement("a", {
      target: "_blank",
      href: project.url,
      className: "cols-span-1 sm:col-span-3"
    }, /* @__PURE__ */ React.createElement("figure", null, /* @__PURE__ */ React.createElement("img", {
      src: project.img,
      alt: project.title,
      className: "object-cover h-[168px]  max-w-full lg:w-[328px] mx-auto rounded"
    }))), /* @__PURE__ */ React.createElement("section", {
      className: "flex flex-col cols-span-1 sm:col-span-4 gap-y-[10px] justify-center flex-shrink-0"
    }, /* @__PURE__ */ React.createElement("header", {
      className: "text-[24px] font-bold uppercase"
    }, /* @__PURE__ */ React.createElement("h2", null, project.title)), /* @__PURE__ */ React.createElement("p", {
      className: "text-[18px]"
    }, project.description), /* @__PURE__ */ React.createElement("p", {
      className: "text-[16px]"
    }, "Link:", " ", /* @__PURE__ */ React.createElement("a", {
      target: "_blank",
      href: project.url === "https://gif-app.vercel.app/?title=christopher+robin" ? "https://gif-app.vercel.app/" : project.url
    }, project.url === "https://gif-app.vercel.app/?title=christopher+robin" ? "https://gif-app.vercel.app/" : project.url)), /* @__PURE__ */ React.createElement("div", {
      className: "flex flex-wrap gap-2"
    }, project.tags.map((tag) => /* @__PURE__ */ React.createElement("span", {
      className: "text-[18px]",
      key: tag
    }, "#", tag)))));
  })));
}

// route:C:\Users\tree\Desktop\gustavoca.dev\app\routes\about\index.tsx
var about_exports = {};
__export(about_exports, {
  default: () => About,
  meta: () => meta2
});
var meta2 = () => {
  return { title: "About me" };
};
function About() {
  return /* @__PURE__ */ React.createElement("main", {
    className: "px-[45px] lg:px-[112px]"
  }, /* @__PURE__ */ React.createElement("section", {
    className: "h-full"
  }, /* @__PURE__ */ React.createElement("article", {
    className: "grid place-items-center py-[112px] text-center"
  }, /* @__PURE__ */ React.createElement("h5", {
    className: "text-4xl text-semibold"
  }, "En desarrollo... \u270F\uFE0F"))));
}

// route:C:\Users\tree\Desktop\gustavoca.dev\app\routes\blog\$title.tsx
var title_exports = {};
__export(title_exports, {
  default: () => Post
});
function Post() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "Primer post"));
}

// route:C:\Users\tree\Desktop\gustavoca.dev\app\routes\blog\index.tsx
var blog_exports = {};
__export(blog_exports, {
  default: () => Blog,
  loader: () => loader2,
  meta: () => meta3
});
var meta3 = () => {
  return { title: "Blog" };
};
var loader2 = () => {
  return {
    ok: true
  };
};
function Blog() {
  return /* @__PURE__ */ React.createElement("main", {
    className: "px-[45px] lg:px-[112px]"
  }, /* @__PURE__ */ React.createElement("section", {
    className: "h-full"
  }, /* @__PURE__ */ React.createElement("article", {
    className: "grid place-items-center py-[112px] text-center"
  }, /* @__PURE__ */ React.createElement("h5", {
    className: "text-4xl text-semibold"
  }, "No hay posts todav\xEDa \u{1F622}"))));
}

// route:C:\Users\tree\Desktop\gustavoca.dev\app\routes\index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  loader: () => loader3,
  meta: () => meta4
});
var import_react6 = require("react");
var import_react7 = require("@remix-run/react");

// app/helpers/Gif.server.ts
var getGifs = () => {
  const data = [
    {
      gif: "https://thumbs.gfycat.com/BlandSecondaryHalibut-size_restricted.gif"
    },
    {
      gif: "https://c.tenor.com/7u8lrMefnSsAAAAC/licht-patri.gif"
    },
    {
      gif: "https://31.media.tumblr.com/045804c76588a50ff1e0eef86a326276/tumblr_nf0dcdzeam1qa40rio1_500.gif"
    },
    {
      gif: "https://miro.medium.com/max/1000/1*Q5UXnivhkqf1cgROcjZyGA.gif"
    },
    {
      gif: "http://www.disney.com.au/downloads/assets-temp-hosting/au_omd_importanttobehumble_03_christopherrobin.gif"
    },
    {
      gif: "https://media.tenor.com/images/b0919125e60eaf5921f60dac2c2148d1/tenor.gif"
    },
    {
      gif: "https://64.media.tumblr.com/957f84b9cdb3a2308d2d374d6a9d1df1/821e46d161464fbd-a0/s400x600/88efd9641a1a3f875d6e72b4f931a519a177e3f3.gifv"
    },
    {
      gif: "https://media.tenor.com/images/6f27608f8a4b09b052c7b36eda1f20e4/tenor.gif"
    },
    {
      gif: "https://64.media.tumblr.com/de92e9cdc0c54d0927207b4a3135ee6d/8847eabb15eb9ab0-29/s400x600/c182e443a6dad310d1eea41e43f2e42c6bffabde.gifv"
    },
    {
      gif: "https://i.pinimg.com/originals/d0/d3/ef/d0d3ef36852978d5ac05d7d9a2ceb3d6.gif"
    },
    {
      gif: "https://i.pinimg.com/originals/e5/c0/f7/e5c0f72b15f5476214586fdb50898e55.gif"
    },
    {
      gif: "https://media.tenor.com/images/2ea266514d91cac25376ab3079219be6/tenor.gif"
    },
    {
      gif: "https://media.tenor.com/images/4f304db234d0aed6bd3efb2c1cd4a5de/tenor.gif"
    },
    {
      gif: "https://media.tenor.com/images/92d823bb28f42912c5e5c3ea23b2e0ff/tenor.gif"
    },
    {
      gif: "https://c.tenor.com/KTN4JixkaNoAAAAC/xeyhs-xey.gif"
    },
    {
      gif: "https://i.pinimg.com/originals/a7/4e/2e/a74e2e9c1cb461731ee28a908bc00aad.gif"
    },
    {
      gif: "https://pa1.narvii.com/6371/60ae0a88ef1eb7335a34547b583d85be15ef152e_hq.gif"
    }
  ];
  return data;
};
var Gif_server_default = getGifs;

// route:C:\Users\tree\Desktop\gustavoca.dev\app\routes\index.tsx
var import_typed = __toESM(require("typed.js"));
var meta4 = () => {
  return {
    title: "Home",
    description: "This is the website of gustavocadev, here you can see a little bit more about me and my projects :D I hope you like it!"
  };
};
var loader3 = async () => {
  const gifs = Gif_server_default();
  return {
    gifs
  };
};
function Index() {
  const { gifs } = (0, import_react7.useLoaderData)();
  const [image, setImage] = (0, import_react6.useState)("");
  console.log(image);
  const el = (0, import_react6.useRef)(null);
  const typed = (0, import_react6.useRef)(null);
  const randomnGif = () => {
    const randomNum = Math.round(Math.random() * (gifs.length - 1));
    const randomGif = gifs.map((gif) => gif.gif);
    return randomGif[randomNum];
  };
  (0, import_react6.useEffect)(() => {
    setInterval(() => {
      setImage(randomnGif());
    }, 7e3);
    const actualGif = localStorage.getItem("actual-gif") ?? randomnGif();
    setImage(actualGif);
  }, []);
  (0, import_react6.useEffect)(() => {
    localStorage.setItem("actual-gif", image);
  }, [image]);
  (0, import_react6.useEffect)(() => {
    const options = {
      strings: [
        "<i class='text-[#FF7675] not-italic'>Bienvenido</i>",
        "<i class='text-[#A29BFE] not-italic'>Bienvenida</i>"
      ],
      typeSpeed: 75,
      startDelay: 300,
      backSpeed: 75,
      smartBackspace: false,
      shuffle: false,
      loop: true,
      showCursor: true,
      cursorChar: "|",
      contentType: "html"
    };
    typed.current = new import_typed.default(el.current, options);
    return () => {
      typed.current.destroy();
    };
  });
  return /* @__PURE__ */ React.createElement("main", {
    className: "sm:py-[24px] px-[16px] sm:px-[32px] lg:px-[112px] "
  }, /* @__PURE__ */ React.createElement("section", {
    className: "grid grid-cols-1 xl:grid-cols-7 gap-y-[38px] lg:gap-x-[38px]"
  }, /* @__PURE__ */ React.createElement("section", {
    className: "text-[50px] sm:text-[92px] font-bold col-span-1 xl:col-span-4 mx-auto text-center lg:text-left w-full"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "leading-[68px] sm:leading-[108px]"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("span", {
    className: "text-[#7BED9F]"
  }, "\xA1Hola!"), " ", /* @__PURE__ */ React.createElement("span", {
    className: "font-normal"
  }, "\u{1F44B}"), ","), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("span", null, "soy "), /* @__PURE__ */ React.createElement("span", {
    className: "text-[#74B9FF]"
  }, "Gustavo"), " "), /* @__PURE__ */ React.createElement("div", {
    className: "h-[62px] sm:h-[100px]"
  }, /* @__PURE__ */ React.createElement("span", {
    ref: el
  })), /* @__PURE__ */ React.createElement("div", {
    className: "text-[#FD79A8]"
  }, "\\^o^/"))), /* @__PURE__ */ React.createElement("section", {
    className: "flex items-center col-span-1 mx-auto xl:col-span-3"
  }, image !== "" && /* @__PURE__ */ React.createElement("figure", {
    className: "w-full transition duration-200"
  }, /* @__PURE__ */ React.createElement("img", {
    className: `w-full transition duration-200 rounded-xl vov fade-in-right	`,
    src: image,
    alt: "gustavoca image"
  })))));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { "version": "25a29f25", "entry": { "module": "/build/entry.client-4JME2YH5.js", "imports": ["/build/_shared/chunk-K6XFARX7.js", "/build/_shared/chunk-IYRIQ6PI.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-OMZYWCC7.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/about/index": { "id": "routes/about/index", "parentId": "root", "path": "about", "index": true, "caseSensitive": void 0, "module": "/build/routes/about/index-LEGWKCSY.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/blog/$title": { "id": "routes/blog/$title", "parentId": "root", "path": "blog/:title", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/blog/$title-KNHIJUOB.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/blog/index": { "id": "routes/blog/index", "parentId": "root", "path": "blog", "index": true, "caseSensitive": void 0, "module": "/build/routes/blog/index-DLSM7X2D.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-USBFRE3F.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/projects/index": { "id": "routes/projects/index", "parentId": "root", "path": "projects", "index": true, "caseSensitive": void 0, "module": "/build/routes/projects/index-GRTD5FDW.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-25A29F25.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/projects/index": {
    id: "routes/projects/index",
    parentId: "root",
    path: "projects",
    index: true,
    caseSensitive: void 0,
    module: projects_exports
  },
  "routes/about/index": {
    id: "routes/about/index",
    parentId: "root",
    path: "about",
    index: true,
    caseSensitive: void 0,
    module: about_exports
  },
  "routes/blog/$title": {
    id: "routes/blog/$title",
    parentId: "root",
    path: "blog/:title",
    index: void 0,
    caseSensitive: void 0,
    module: title_exports
  },
  "routes/blog/index": {
    id: "routes/blog/index",
    parentId: "root",
    path: "blog",
    index: true,
    caseSensitive: void 0,
    module: blog_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
//# sourceMappingURL=index.js.map

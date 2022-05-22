import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import Nav from "~/components/Nav";
import Footer from "./components/Footer";
import styles from "~/tailwind.css";

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
    {
      href: "https://cdn.jsdelivr.net/gh/vaibhav111tandon/vov.css@latest/vov.css",
      rel: "stylesheet",
      type: "text/css",
    },
  ];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-[#F7F6F3] text-dark dark:bg-[#181818] dark:text-gray-200 w-full overflow-x-hidden ">
        <Nav />
        <Outlet />
        <Footer />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}

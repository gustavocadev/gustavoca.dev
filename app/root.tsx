import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";

import Nav from "~/components/Nav";
import Footer from "./components/Footer";

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body className="bg-[#F7F6F3] text-dark dark:bg-[#181818] dark:text-gray-200 w-full ">
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

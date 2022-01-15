import {
    Links,
    LinksFunction,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from "remix";

import Nav from "~/components/Nav";
import Footer from "./components/Footer";
import styles from "~/tailwind.css";
import { useState } from "react";

export const links: LinksFunction = () => {
    return [
        {
            rel: "stylesheet",
            href: styles,
        },
    ];
};

export default function App() {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width,initial-scale=1"
                />
                <Meta />
                <Links />
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

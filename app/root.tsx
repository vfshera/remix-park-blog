import type { LinksFunction, MetaFunction } from "@remix-run/node";
import stylesheet from "~/styles.css";

import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { SITE } from "./constants/config";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: SITE.name,
  description: SITE.description,
  viewport: "width=device-width,initial-scale=1",
});

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="flex flex-col h-full dark:bg-gray-800 dark:text-gray-100">
        <Header />
        <div id="park">
          <Outlet />
        </div>
        <Footer />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

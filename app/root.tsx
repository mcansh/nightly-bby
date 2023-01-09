import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import "./styles/side-effect.css";
import { cssBundleHref } from "@remix-run/css-bundle";
import type { V2_MetaFunction } from "@remix-run/react/dist/routeModules";

export const links = () => {
  return [
    ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
  ];
};

export const meta: V2_MetaFunction = () => {
  return [
    { charset: "utf-8" },
    { title: "New Remix App" },
    { name: "viewport", content: "width=device-width,initial-scale=1" },
  ];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

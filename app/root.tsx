import { cssBundleHref } from "@remix-run/css-bundle";
import type {LinksFunction, LoaderFunctionArgs} from "@remix-run/node";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration, useLoaderData,
} from "@remix-run/react";
import {getCountryCode, getTranslator} from "~/i18n";
import {json} from "@remix-run/node";

export async function loader({request}: LoaderFunctionArgs) {
  const t = getTranslator(getCountryCode(request));
  const TITLE_ABOUT = t("TITLE_ABOUT");
  const TITLE_HOME = t("TITLE_HOME");
  const TITLE_NEWS = t("TITLE_NEWS");
  const headers = { "Cache-Control": "max-age=86400" }; // One day

  return json({
    TITLE_ABOUT, TITLE_HOME, TITLE_NEWS
  }, {headers});
}

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export default function App() {
  const {
    TITLE_ABOUT,
    TITLE_HOME,
    TITLE_NEWS
  } = useLoaderData<typeof loader>();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Link to="/">Home</Link>|
        <Link to="/news">News</Link>|
        <Link to="/about">About</Link>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

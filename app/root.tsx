import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";

import Header from "~/components/header";

import type { MetaFunction } from "remix";

import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import type {
  ExternalProvider,
  JsonRpcFetchFunc,
} from "@ethersproject/providers";
import type { Json } from "ethers";

export const meta: MetaFunction = () => {
  return { title: "CTNFT" };
};

import tailwindStyles from "./tailwind.css";
import globalStyles from "~/styles/global.css";

export function links() {
  return [
    {
      rel: "stylesheet",
      href: tailwindStyles,
    },
    {
      rel: "stylesheet",
      href: globalStyles,
    },
  ];
}

function getLibrary(provider: ExternalProvider | JsonRpcFetchFunc, connector) {
  return new Web3Provider(provider);
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Web3ReactProvider getLibrary={getLibrary}>
          <Header />
          <Outlet />
        </Web3ReactProvider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

import * as React from "react";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { createEmotionCache, theme } from "../utils";
import { MainLayout } from "@/components/layout";
import { NextComponentType, NextPage, NextPageContext } from "next";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "@/stores/store";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props: MyAppProps) {
  const { Component, pageProps } = props;
  const getLayout =
    Component.getLayout ||
    ((page: React.ReactNode) => <MainLayout>{page}</MainLayout>);
  return (
    <Provider store={store}>
      <CacheProvider value={clientSideEmotionCache}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          {getLayout(<Component {...pageProps} />)}
        </ThemeProvider>
      </CacheProvider>
    </Provider>
  );
}

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
  title?: string;
};

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
  Component: NextComponentType<NextPageContext, any, any> & {
    getLayout: CallableFunction;
    layout?: React.ComponentType;
    title?: string;
  };
  pageProps: Record<string, unknown>;
}

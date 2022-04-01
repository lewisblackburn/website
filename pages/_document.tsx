import React from "react";
import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { getCssText } from "~/styles";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="preload"
            href="/fonts/Inter-roman-latin.var.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="true"
          />
          <link
            rel="shortcut icon"
            href="/favicon.svg"
            style={{ width: 10, height: 10 }}
          />
          <style dangerouslySetInnerHTML={{ __html: getCssText() }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

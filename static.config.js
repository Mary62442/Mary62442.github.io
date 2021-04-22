import path from "path";
import axios from "axios";
import React, { Component } from "react";

export default {
  getSiteProps: async () => ({
    title: "Maria Burlando",
    text: "Developer. Designer. Dreamer",
  }),
  Document: class CustomHtml extends Component {
    render() {
      const { Html, Head, Body, children, renderMeta } = this.props;
      return (
        <Html>
          <Head>
            <meta charSet="UTF-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <title>Maria Burlando</title>
            <meta name="description" content="Developer. Designer. Dreamer" />

            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
              href="https://fonts.googleapis.com/css2?family=Italiana&family=Poppins&family=Unica+One&display=swap"
              rel="stylesheet"
            />
            <meta
              property="og:image"
              content="http://localhost:3000/icon.png"
            />
            <link rel="icon" href="/icon.png" />
          </Head>
          <Body>{children}</Body>
        </Html>
      );
    }
  },
  plugins: [
    ["react-static-plugin-styled-components"],
    [
      require.resolve("react-static-plugin-source-filesystem"),
      {
        location: path.resolve("./src/pages"),
      },
    ],

    require.resolve("react-static-plugin-reach-router"),
    require.resolve("react-static-plugin-sitemap"),
  ],
};

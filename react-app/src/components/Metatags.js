import React from "react";
import { Head, withSiteData } from "react-static";

export default withSiteData(
  ({ title, siteName, description, pageDescription }) => (
    <Head>
      <title>{`${title} | ${siteName}`}</title>
      <meta name="description" content={pageDescription || description} />
      <meta
        property="og:description"
        content={pageDescription || description}
      />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content={siteName} />
    </Head>
  )
);

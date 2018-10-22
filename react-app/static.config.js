import React from "react";
//
import { fetchCollection, fetchSingleton } from "./src/cockpit/fetch";
import { COCKPIT_HOST } from "./src/cockpit/config";

export default {
  basePath: "",
  siteRoot: COCKPIT_HOST,
  getSiteData: async () => {
    const settings = await fetchSingleton("Settings");

    return {
      siteName: settings.name,
      description: settings.description,
      copyright: settings.copyright,
    };
  },
  getRoutes: async () => {
    const settings = await fetchSingleton("Settings");
    const pages = await fetchCollection("page");
    const posts = await fetchCollection("post");

    const routes = [];

    // Handle pages routes.
    pages.forEach(page => {
      // Force homepage slug to be empty.
      if (page._id === settings.homepage._id) {
        page.slug = "";
      }

      // Handle 404 route.
      if (page._id === settings.page404._id) {
        routes.push({
          is404: true,
          component: "src/pages/404",
          getData: () => ({
            page,
          }),
        });
      }

      // Handle any other internal page route.
      routes.push({
        path: `/${page.slug}`,
        component: "src/pages/Page",
        lastModified: page._modified,
        getData: () => ({
          page,
          pages,
          posts,
        }),
      });

      // Handle subpages.
      if (page.subpages) {
        page.subpages.forEach(subpage => {
          routes.push({
            path: `/${page.slug}/${subpage.slug}`,
            component: "src/pages/Page",
            lastModified: subpage._modified,
            getData: () => ({
              page,
              subpage,
              pages,
              posts,
            }),
          });
        });
      }
    });

    // Handle blog posts routes.
    posts.forEach(post => {
      routes.push({
        path: `/blog/${post.slug}`,
        component: "src/pages/Post",
        lastModified: post._modified,
        getData: () => ({
          post,
          pages,
          posts,
        }),
      });
    });

    // Handle preview route.
    routes.push({
      path: "/preview",
      component: "src/pages/Preview",
    });

    return routes;
  },
  Document: ({ Html, Head, Body, children }) => (
    <Html lang="en-US">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://fonts.googleapis.com/css?family=Cabin:300,400,500,600,700"
          rel="stylesheet"
        />
      </Head>
      <Body>{children}</Body>
    </Html>
  ),
};

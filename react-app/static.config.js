import React from "react";
//
import { fetchCollection, fetchSingleton } from "./src/cockpit/fetch";
import * as Config from "./src/config";

export default {
  basePath: Config.WEBSITE_BASE_PATH,
  siteRoot: Config.WEBSITE_SITE_ROOT,
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

    const menuItems = pages.map(page => ({
      title: page.title,
      slug: page._id === settings.homepage._id ? "" : page.slug,
      menu: page.menu,
    }));

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
          menuItems,
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
              menuItems,
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
          menuItems,
          posts,
        }),
      });
    });

    // Handle preview route.
    routes.push({
      path: "/preview",
      component: "src/pages/Preview",
      getData: () => ({
        menuItems,
      }),
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

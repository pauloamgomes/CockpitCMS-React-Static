import React from "react";
import { withRouteData } from "react-static";

import Metatags from "../components/Metatags";
import CockpitComponents from "../components/CockpitComponents";
import PostBanner from "../components/PostBanner";

export default withRouteData(({ post }) => (
  <article>
    <Metatags title={post.title} />
    <PostBanner
      title={post.title}
      summary={post.summary}
      image={post.image}
      categories={
        (post.categories && post.categories.map(category => category.name)) ||
        []
      }
    />
    <CockpitComponents components={post.components || []} />
  </article>
));

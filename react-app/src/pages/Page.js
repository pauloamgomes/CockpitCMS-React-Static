import React from "react";
import { withRouteData } from "react-static";

import Metatags from "../components/Metatags";
import PageComponents from "../components/PageComponents";

export default withRouteData(({ page }) => (
  <article>
    <Metatags title={page.title} pageDescription={page.description} />
    <PageComponents components={page.components || []} />
  </article>
));

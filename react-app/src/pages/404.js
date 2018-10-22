import React from "react";
import { withRouteData } from "react-static";
//
import Metatags from "../components/Metatags";
import CockpitComponents from "../components/CockpitComponents";

export default withRouteData(({ page }) => (
  <article>
    <Metatags title={page.title} pageDescription={page.description} />
    <CockpitComponents components={page.components} />
  </article>
));

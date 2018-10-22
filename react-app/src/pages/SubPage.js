import React from "react";
import { withRouteData } from "react-static";
//
import Metatags from "../components/Metatags";
import SecondaryNav from "../components/SecondaryNav";
import CockpitComponents from "../components/CockpitComponents";

export default withRouteData(({ page, subpage }) => (
  <article>
    <Metatags
      title={subpage.title || page.title}
      pageDescription={subpage.description || page.description}
    />
    <CockpitComponents components={page.components} />
    {page.subpages && <SecondaryNav page={page} subpages={page.subpages} />}
    {subpage && <CockpitComponents components={subpage.components} />}
  </article>
));

import React from "react";
//
import CockpitComponents from "../../CockpitComponents";

export default ({ page, subpages }) => {
  let components = [];
  if (page.length) {
    components = (page[0] && page[0].components) || [];
  } else {
    components = (subpages[0] && subpages[0].components) || [];
  }
  return <CockpitComponents components={components} />;
};

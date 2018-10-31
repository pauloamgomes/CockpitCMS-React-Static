import React from "react";
//
import PageComponents from "../../PageComponents";

export default ({ page, subpages }) => {
  let components = [];
  if (page && page.length) {
    components = (page[0] && page[0].components) || [];
  } else if (subpages && subpages.length) {
    components = (subpages[0] && subpages[0].components) || [];
  }
  return <PageComponents components={components} />;
};

import React from "react";

import Cta from "../../Cta";

export default ({ className, text, url }) => (
  <Cta text={text} url={url} theme={className || "light"} />
);

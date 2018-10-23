import React from "react";
import styled from "styled-components";
//
import * as Config from "../config";

const Image = styled.img`
  width: 100%;
`;

export default ({ src, alt, width, height }) => {
  if (!/^(http)s?:\/\//i.test(src)) {
    src = `/${Config.WEBSITE_BASE_PATH}/${src}`
      .replace("//", "/")
      .replace("//", "/");
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width || "100%"}
      height={height || "100%"}
    />
  );
};

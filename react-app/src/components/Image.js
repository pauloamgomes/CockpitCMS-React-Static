import React from "react";
import styled from "styled-components";

const Image = styled.img`
  width: 100%;
`;

export default ({ src, alt, width, height }) => {
  if (!/^(http)s?:\/\//i.test(src)) {
    src = `/${src}`.replace("//", "/");
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

import React from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";

const VideoWrapper = styled.div`
  position: relative;
  padding-top: 56.25%;
  width: 100%;
`;

const ReactPlayerStyled = styled(ReactPlayer)`
  position: absolute;
  top: 0;
  left: 0;
`;

export default ({ url, playing }) => (
  <VideoWrapper>
    <ReactPlayerStyled
      url={url}
      playing={playing || false}
      width="100%"
      height="100%"
    />
  </VideoWrapper>
);

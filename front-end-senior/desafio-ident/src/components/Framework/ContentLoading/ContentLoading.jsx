import React from "react";
import ContentLoader from "react-content-loader";

function ContentLoading() {
  return (
    <ContentLoader
      height={380}
      speed={5}
      primaryColor="#a2a2a2"
      secondaryColor="#bdb9b9"
    >
      <rect x="2" y="1" rx="0" ry="0" width="370" height="420" />
    </ContentLoader>
  );
}

export default ContentLoading;

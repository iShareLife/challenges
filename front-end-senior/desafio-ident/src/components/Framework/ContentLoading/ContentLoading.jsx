import React from "react";
import ContentLoader from "react-content-loader";

function ContentLoading(props) {
  return (
    <ContentLoader
      height={380}
      width={310}
      speed={3}
      primaryColor="#a2a2a2"
      secondaryColor="#bdb9b9"
    >
      <rect x="2" y="1" rx="0" ry="0" width="301" height="384" />
    </ContentLoader>
  );
}

export default ContentLoading;

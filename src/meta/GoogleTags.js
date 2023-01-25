import React from "react";
import { Helmet } from "react-helmet";

export const GoogleTags = () => {
  const id = process.env.REACT_APP_GOOGLE_TAG_ID;
  return (
    <Helmet>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
      ></script>
      <script>
        {`
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "${id}", {
      debug_mode: true,
    })`}
      </script>
    </Helmet>
  );
};

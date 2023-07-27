import React from "react";
import { Helmet } from "react-helmet";

const DEFAULTS = {
  title: "Hudson Happs | Happy Hours Hoboken, Jersey City",
  ogTitle: "Hudson Happs",
  description:
    "Hudson Happs is the #1 place to find out about events and happy hours in Hoboken and surrounding areas (e.g. Hoboken, Jersey City, New York City).",
  image: "%PUBLIC_URL%/favicon.png",
};

export const MetaData = ({
  title,
  ogTitle,
  description,
  ogDescription,
  image,
  canonicalRoute,
}) => {
  return (
    <Helmet>
      <title>{title ? `${title} | Hudson Happs` : DEFAULTS.title}</title>
      <meta name="description" content={description || DEFAULTS.description} />
      <meta property="og:image" content={image || DEFAULTS.image} />
      <meta
        property="og:title"
        content={ogTitle || title || DEFAULTS.ogTitle}
      />
      <meta
        property="og:description"
        content={ogDescription || description || DEFAULTS.description}
      />
      {/* This is the base url for hudson happs as we don't care about dev url ever being right */}
      <link rel="canonical" href={`https://hudonshapps.com${canonicalRoute}`} />
    </Helmet>
  );
};

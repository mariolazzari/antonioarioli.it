import { MetadataRoute } from "next";

function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://antonioarioli.it/sitemap.xml",
  };
}

export default robots;

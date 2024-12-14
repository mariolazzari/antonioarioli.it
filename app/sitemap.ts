import { MetadataRoute } from "next";

function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://antonioarioli.it";
  const routes = [
    "",
    "/bio",
    "/courses",
    "/contacts",
    "/shiatsu",
    "/moxi",
    "/cop",
    "/reflex",
    "/taping",
    "/kine",
  ];
  const lastModified = new Date();

  return routes.map(route => ({
    url: `${baseUrl}${route}`,
    lastModified,
  }));
}

export default sitemap;

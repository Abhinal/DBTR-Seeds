import { MetadataRoute } from "next";
import { products } from "@/data/products";
import { categories } from "@/data/categories";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://dbtrseeds.com";
  const locales = ["en", "hi"];
  const staticRoutes = [
    "",
    "/products",
    "/kitchen-garden",
    "/crops",
    "/become-a-distributor",
    "/about",
    "/contact",
  ];

  const entries: MetadataRoute.Sitemap = [];

  // Static routes in both locales
  for (const locale of locales) {
    for (const route of staticRoutes) {
      entries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date("2026-10-23"),
        changeFrequency: "weekly",
        priority: route === "" ? 1.0 : 0.8,
      });
    }

    // Category routes
    for (const cat of categories) {
      entries.push({
        url: `${baseUrl}/${locale}/products/category/${cat.slug}`,
        lastModified: new Date("2026-10-23"),
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }

    // Product routes
    for (const prod of products) {
      entries.push({
        url: `${baseUrl}/${locale}/products/${prod.slug}`,
        lastModified: new Date("2026-10-23"),
        changeFrequency: "monthly",
        priority: 0.9,
      });
    }
  }

  return entries;
}

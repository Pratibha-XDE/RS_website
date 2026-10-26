import { defineConfig } from "@lovable.dev/vite-tanstack-config";

/**
 * Server-free build for static hosts such as Netlify Drop.
 *
 * The normal vite.config.ts intentionally keeps Nitro's Cloudflare output.
 * This separate configuration uses TanStack Start's own prerenderer and writes
 * the browser bundle plus one HTML document per public route directly to dist.
 */
export default defineConfig({
  nitro: false,
  tanstackStart: {
    server: { entry: "server" },
    pages: [{ path: "/" }, { path: "/our-story" }, { path: "/snacks" }],
    prerender: {
      enabled: true,
      autoStaticPathsDiscovery: false,
      crawlLinks: false,
      failOnError: true,
      autoSubfolderIndex: true,
    },
  },
  vite: {
    build: {
      // Keep TanStack Start's intermediate root away from the deployable tree.
      outDir: ".tanstack/static-build",
    },
    environments: {
      client: {
        build: { outDir: "dist" },
      },
    },
  },
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

const manifestForPlugin = {
  registerType: "prompt",
  includesAssets: ["favicon.ico", "apple-touch-icon.png", "maskable_icon.png"],
  manifest: {
    name: "Dare Portfolio",
    short_name: "Dare portfolio",
    description: "An app that shows Dare Omotayo's portfolio",
    theme_color: "#26455d",
    background_color: "#77497c",
    display: "standalone",
    scope: "/",
    start_url: "/",
    orientation: "portrait",
  },

  icons: [
    {
      src: "maskable_icon.png",
      sizes: "196x196",
      type: "image/png",
      purpose: "any maskable",
    },
    {
      src: "/apple-touch-icon.png",
      sizes: "180x180",
      type: "image/png",
      purpose: "apple touch icon",
    },
    {
      src: "./icon-192x192.png",
        sizes: "192x192",
        type: "image/png"
    },
    {
      src: "./icon-512x512.png",
      sizes: "512x512",
      type: "image/png",
      purpose:'favicon'
    },
    {
      src: "./icon-144x144.png",
      sizes: "144x144",
      type: "image/png",
      purpose: "any"
    },
    {
      src: "./icon-256x256.png",
      sizes: "256x256",
      type: "image/png",
      purpose: "icon"
    },
    {
      src: "./icon-384x384.png",
      sizes: "384x384",
      type: "image/png",
      purpose: "any maskable"
    }
  ],
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA(manifestForPlugin)],
});

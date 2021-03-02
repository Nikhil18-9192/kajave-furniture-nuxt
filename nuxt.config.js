export default {
  server: {
    port: 3000, // default: 3000
    host: "0.0.0.0" // default: localhost
  },
  head: {
    title: "Kajave Furniture",

    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [
      { rel: "icon", type: "image/*", href: "/favicon.png" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Exo:wght@300;400;500;600;700&display=swap"
      },
      {
        rel: "stylesheet",
        href:
          "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/vue-material.js", ssr: false },
    { src: "~/plugins/carousel.js", ssr: false },
    { src: "~/plugins/sticky.js", ssr: false },
    { src: "~/plugins/zoomer.js", ssr: false },
    { src: "~/plugins/toast.js", ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "@nuxtjs/style-resources",
    "@nuxtjs/sitemap"
  ],
  sitemap: {
    sitemaps: [
      {
        path: "sitemap.xml"
      }
    ]
  },
  styleResources: {
    // your settings here
    scss: ["~assets/global.scss"]
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
};

const nextConfig = {
    async headers() {
      return [
        {
          source: "/(.*)", 
          headers: [
            {
              key: "Access-Control-Allow-Origin",
              value: "*",
            },
            {
              key: "Access-Control-Allow-Methods",
              value: "GET, POST, PUT, DELETE, OPTIONS",
            },
            {
              key: "Access-Control-Allow-Headers",
              value: "Content-Type, Authorization", 
            },
            {
              key: "Cross-Origin-Embedder-Policy",
              value: "unsafe-none", 
            },
            {
              key: "Cross-Origin-Resource-Policy",
              value: "cross-origin", 
            },
          ],
        },
      ];
    },
  };
  
  export default nextConfig;
  
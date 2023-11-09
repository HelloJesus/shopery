/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
        const fileLoaderRule = config.module.rules.find((rule) =>
        rule.test?.test?.('.svg'),
      )
        config.module.rules.push({
            ...fileLoaderRule,
            test: /\.svg$/i,
            resourceQuery: /url/, // *.svg?url
          },{
            test: /\.svg$/,
            use: ["@svgr/webpack"]
          });
      
          return config;
      },
      images: {
        domains: ['ijnvogwpakcvzqgrgsgl.supabase.co']
      },
      experimental: {
        serverActions: true,
      },
      // ...other config
}

module.exports = nextConfig

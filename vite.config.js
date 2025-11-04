import { defineConfig } from 'vite'
import { resolve } from 'node:path'
import vue from '@vitejs/plugin-vue'
import sitemap from 'vite-plugin-sitemap' 

const staticRoutes = [
  '/', '/about', '/studyAbroad', '/booking',
  '/highSchool', '/languageSchool',,
  '/blog', '/document', '/news'
]

export default defineConfig({
  plugins: [
    vue(),
    sitemap({
      hostname: 'https://theyaojing.org',
      // 直接丟「物件或字串」皆可；字串會在 transformRoute 補預設
      routes: [
        ...staticRoutes,
      ],
      // 統一給字串路由預設屬性
      transformRoute: (route) => {
        if (typeof route === 'string') {
          return { url: route, changefreq: 'weekly', priority: 0.7 }
        }
        // 物件（已含 url/lastmod/priority）就原樣
        return route
      }
    })
  ],
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, 'src') }]
  },
  base: '/'
})

import './style.css'
import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import { routes } from './router'
import { createHead } from '@vueuse/head'

export const createApp = ViteSSG(
  App,
  { routes, base: import.meta.env.BASE_URL },
  ({ app }) => {
    if (!app._context.provides?.usehead) {
      app.use(createHead())
    }
  }
)
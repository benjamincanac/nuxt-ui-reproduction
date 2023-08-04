import { defineNuxtModule, createResolver, resolvePath, installModule } from '@nuxt/kit'
import appConfig from './runtime/app.config'

declare module '@nuxt/schema' {
  interface AppConfigInput {
    ui?: Partial<typeof appConfig.ui>
  }
}

export default defineNuxtModule({
  async setup (_, nuxt) {
    const { resolve } = createResolver(import.meta.url)

    const runtimeDir = resolve('./runtime')
    nuxt.options.build.transpile.push(runtimeDir)

    const appConfigFile = await resolvePath(resolve(runtimeDir, 'app.config'))
    nuxt.hook('app:resolve', (app) => {
      app.configs.push(appConfigFile)
    })

    await installModule('@nuxtjs/tailwindcss', {
      exposeConfig: true,
      config: {
        darkMode: 'class',
      }
    })
  }
})

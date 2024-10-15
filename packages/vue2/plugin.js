import vue from '@vitejs/plugin-vue2';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import * as compiler from "vue/compiler-sfc"

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export default () => {
  const plugin = vue({
    compiler,
    root: __dirname,
    include: [/vue2\/.*\.vue$/],
  })
  const { configResolved, ...rest } = plugin
  return {
    ...rest,
    configResolved(config) {
      if (config.resolve.alias.some(({ find }) => find === 'vue')) {
        configResolved(config)
        return
      }

      configResolved(config)
      config.resolve.alias.pop()

    }
  }
}

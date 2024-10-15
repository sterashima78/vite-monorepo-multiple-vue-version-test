import vue from '@vitejs/plugin-vue';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import * as compiler from "vue/compiler-sfc"

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export default () => {
  const plugin = vue({
    compiler,
    root: __dirname,
    include: [/vue3\/.*\.vue$/],
  });
  const { config , ...rest } = plugin
  return {
    ...rest,
    config(c) {
      const { resolve, ...rest } = config(c)
      return {
        ...rest
      }
    }
  }
}
  

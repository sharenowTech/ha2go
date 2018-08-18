import Resource from 'vue-resource' // http library

const plugins = [
  Resource
  // Add plugins here
]

export default Vue => {
  // Import all plugins without custom options
  plugins.forEach(plugin => Vue.use(plugin))
}

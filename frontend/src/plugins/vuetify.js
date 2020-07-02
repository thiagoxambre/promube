import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify)
const opts = {
  icons: {
    iconfont: 'md'
  },
  theme: {
    dark: true,
    themes: {
      light: {
        primary: colors.green.lighten1,
        secondary: colors.green.lighten1,
        accent: colors.green.lighten1
      },
      dark: {
        primary: colors.green.lighten1,
        secondary: colors.green.lighten1,
        accent: colors.green.lighten1
      }
    }
  }
}

export default new Vuetify(opts)

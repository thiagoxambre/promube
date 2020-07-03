import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/dist/vuetify.min.css'
import 'vuetify/src/styles/main.sass'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@mdi/font/css/materialdesignicons.min.css'
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify)
const opts = {
  icons: {
    iconfont: 'mdi'
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

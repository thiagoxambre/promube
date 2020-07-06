import Vue from 'vue'
import Vuetify from 'vuetify'
import '@mdi/font/css/materialdesignicons.min.css'
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify)

const opts = {
  icons: {
    iconfont: 'mdi'
  },
  theme: {
    themes: {
      dark: 'true',
      light: {
        primary: colors.green.lighten1
      }
    }
  }
}

export default new Vuetify(opts)

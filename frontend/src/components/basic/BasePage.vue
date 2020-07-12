<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
      :mini-variant="miniVariant"
      class="blue-grey lighten-5"
    >
      <v-list
        dense
        nav
        class="py-0"
      >

        <v-divider></v-divider>

        <v-list-item
          v-for="item in items"
          :key="item.title"
          value="item.link"
          @click="onClick(item.link)"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar class="light-blue darken-3" app clipped-left dark>
      <v-app-bar-nav-icon @click.stop="menuControle()"></v-app-bar-nav-icon>
      <v-toolbar-title class="ml-4">PROMUBE</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-account_circle</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-bell</v-icon>
      </v-btn>

      <v-menu left bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-account</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item>
              <v-list-item-title>Alterar Senha</v-list-item-title>
          </v-list-item>
          <v-list-item>
              <v-list-item-title>Sair</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>

</template>

<script>
export default {
  name: 'MenuLateral',
  data () {
    return {
      drawer: true,
      items: [
        { title: 'Dashboard', icon: 'mdi-view-dashboard', link: 'Home' },
        { title: 'Faculdades', icon: 'mdi-bank', link: 'FaculdadeList' },
        { title: 'Cursos', icon: 'mdi-school  ', link: 'Home' },
        { title: 'Inscrições', icon: 'mdi-badge-account', link: 'Home' },
        { title: 'Bolsistas', icon: 'mdi-card-account-details-star', link: 'Home' },
        { title: 'Frequência', icon: 'mdi-chair-school', link: 'Home' }
      ],
      color: 'primary',
      colors: [
        'primary',
        'blue',
        'success',
        'red',
        'teal'
      ],
      right: false,
      permanent: true,
      miniVariant: false,
      expandOnHover: false,
      background: false
    }
  },
  methods: {
    onClick (nameRoute) {
      console.info(nameRoute)
      this.$router.push({ name: nameRoute })
    },
    menuControle () {
      if (this.$data.drawer === false) {
        this.$data.drawer = true
        this.$data.miniVariant = !this.$data.miniVariant
      }
      this.$data.miniVariant = !this.$data.miniVariant
    }
  },
  computed: {
    bg () {
      return this.background ? 'https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg' : undefined
    }
  }
}
</script>

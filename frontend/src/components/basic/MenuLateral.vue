<template>
    <div class="mt-1">
      <v-navigation-drawer
        v-model="drawer"
        expand-on-hover
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
    </div>
</template>

<script>
export default {
  name: 'MenuLateral',
  data () {
    return {
      drawer: true,
      items: [
        { title: 'Dashboard', icon: 'mdi-view-dashboard' },
        { title: 'Universidades', icon: 'mdi-bank' },
        { title: 'Cursos', icon: 'mdi-school  ' },
        { title: 'Inscrições', icon: 'mdi-badge-account' },
        { title: 'Bolsistas', icon: 'mdi-card-account-details-star' },
        { title: 'Frequência', icon: 'mdi-chair-school' }
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
  computed: {
    bg () {
      return this.background ? 'https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg' : undefined
    }
  }
}
</script>

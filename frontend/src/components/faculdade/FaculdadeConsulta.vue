<template>
<v-data-table
  :headers="headers"
    :items="faculdades"
    class="ma-5 elevation-3"
    @update:options="consultarFaculdades"
  >
    <template v-slot:top>
      <v-toolbar flat color="white">
        <v-toolbar-title>Faculdades</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-btn
            color="primary"
            dark
            class="mb-2"
            v-bind="attrs"
            v-on="on"
        >Adicionar</v-btn>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
  </v-data-table>
</template>
<script>
import FaculdadeService from '@/services/FaculdadeService'
import FaculdadeConsulta from '@/entities/FaculdadeConsulta'
export default {
  data: () => ({
    faculdades: [],
    loading: true,
    headers: [
      { text: 'Faculdade', value: 'nomeFantasia' },
      { text: 'CNPJ', value: 'cnpj' },
      { text: 'Ações', value: 'actions' }
    ]
  }),
  methods: {
    consultarFaculdades () {
      this.loading = true
      FaculdadeService.findAll()
        .then ((data) => {
          this.faculdades = data.map((d) => new FaculdadeConsulta(d))
          this.loading = false
        })
    },
    editItem (item) {
      console.info('edititem')
    },
    deleteItem(item) {
      console.info('deleteitem')
    }
  }
}
</script>

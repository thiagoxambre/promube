<template>
<v-container>
<v-data-table
  :headers="headers"
    :items="faculdades"
    class="ma-1 elevation-3"
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

        <v-dialog v-model="dialog" max-width="600px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
              dark
              class="mb-2"
              v-bind="attrs"
              v-on="on"
            >Adicionar</v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>
            <v-form v-model="valid">
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field v-model="editedItem.razaoSocial" label="Razão Social" :rules="rules.obrigatorio" autofocus></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field v-model="editedItem.nomeFantasia" label="Nome Fantasia" :rules="rules.obrigatorio"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12" md="6">
                    <v-text-field v-model="editedItem.cnpj" label="CNPJ" :rules="rules.cnpj" v-mask="'##.###.###/####-##'"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12" md="6">
                    <v-text-field v-model="editedItem.cep" label="CEP" :rules="rules.cep" v-mask="'#####-###'"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="9" md="9">
                    <v-text-field v-model="editedItem.logradouro" label="Endereço" :rules="rules.obrigatorio"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="3" md="3">
                    <v-text-field v-model="editedItem.numero" label="Número" :rules="rules.obrigatorio"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field v-model="editedItem.complemento" label="Complemento"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field v-model="editedItem.bairro" label="Bairro" :rules="rules.obrigatorio"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="9" md="9">
                    <v-text-field v-model="editedItem.cidade" label="Cidade" :rules="rules.obrigatorio"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="3" md="3">
                    <v-text-field v-model="editedItem.uf" label="Estado" :rules="rules.obrigatorio"></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close">Cancelar</v-btn>
              <v-btn color="success" text @click="save" :disabled="!valid" >Salvar</v-btn>
            </v-card-actions>
          </v-form>
          </v-card>
        </v-dialog>

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
  <v-snackbar v-model="showError" color="error" top>{{ this.mensagemErro }}</v-snackbar>
  <v-snackbar
      v-model="showSuccess"
      color="success"
      top
    >{{ this.mensagemSucesso }}</v-snackbar>
</v-container>
</template>
<script>
import FaculdadeService from '@/services/FaculdadeService'
import FaculdadeConsulta from '@/entities/FaculdadeConsulta'
import { mask } from 'vue-the-mask'
export default {
  directives: { mask },
  data: () => ({
    dialog: false,
    valid: false,
    faculdades: [],
    loading: true,
    showError: false,
    mensagemErro: null,
    showSuccess: false,
    mensagemSucesso: null,
    headers: [
      { text: 'Faculdade', value: 'nomeFantasia' },
      { text: 'Razão Social', value: 'razaoSocial' },
      { text: 'CNPJ', value: 'cnpj' },
      { text: 'Ações', value: 'actions' }
    ],
    rules: {
      obrigatorio: [
        v => !!v || 'Campo é obrigatório'
      ],
      cnpj: [
        v => !!v || 'Campo é obrigatório',
        v => v.length >= 18 || 'Campo imcompleto'
      ],
      cep: [
        v => !!v || 'Campo é obrigatório',
        v => v.length >= 9 || 'Campo imcompleto'
      ]

    },
    editedIndex: -1,
    editedItem: {
      nomeFantasia: '',
      razaoSocial: '',
      cnpj: '',
      logradouro: '',
      numero: '',
      complemento: '',
      bairro: '',
      cep: '',
      cidade: '',
      uf: ''
    },
    defaultItem: {
      nomeFantasia: '',
      razaoSocial: '',
      cnpj: '',
      logradouro: '',
      numero: '',
      complemento: '',
      bairro: '',
      cep: '',
      cidade: '',
      uf: ''
    }
  }),
  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'Nova Faculdade' : 'Alterando Faculdade'
    }
  },
  watch: {
    dialog (val) {
      val || this.close()
    }
  },
  created () {
    this.consultarFaculdades()
  },
  methods: {
    consultarFaculdades () {
      this.loading = true
      FaculdadeService.findAll().then((data) => {
        this.faculdades = data.map((d) => new FaculdadeConsulta(d))
        this.loading = false
      })
    },
    editItem (item) {
      this.editedIndex = this.faculdades.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    async save () {
      const faculdade = new FaculdadeConsulta(this.editedItem)
      if (this.editedIndex > -1) {
        await this.update(faculdade)
      } else {
        await this.create(faculdade)
      }
      this.consultarFaculdades()
      this.close()
    },

    async update (faculdade) {
      await FaculdadeService.update(faculdade)
        .then((response) => {
          this.showSuccess = true
          this.mensagemSucesso = response.data.message
        })
        .catch(({ response }) => {
          this.showError = true
          this.mensagemErro = response.data.error
        })
    },

    async create (faculdade) {
      await FaculdadeService.create(faculdade)
        .then((response) => {
          this.showSuccess = true
          this.mensagemSucesso = response.data.message
        })
        .catch(({ response }) => {
          this.showError = true
          this.mensagemErro = response.data.error
        })
    },

    async deleteItem (item) {
      if (confirm('Deseja mesmo deletar esta Faculdade?')) {
        await FaculdadeService.delete(item.id)
          .then((response) => {
            this.showSuccess = true
            this.mensagemSucesso = response.data.message
          })
          .catch(({ response }) => {
            this.showError = true
            this.mensagemErro = response.data.error
          })
        this.consultarFaculdades()
      }
    },
    close () {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    }
  }
}
</script>

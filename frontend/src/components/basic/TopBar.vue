<template>
    <div>
      <v-app-bar class="light-blue darken-3" dark>
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
  name: 'TopBar'
}
</script>

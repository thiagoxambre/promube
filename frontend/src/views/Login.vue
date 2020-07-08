<template>
    <div id="fundo-login" class="d-flex flex-row justify-center align-center">
        <div id="login-box" class="text-center spacing-playground pa-10 rounded-lg">
            <v-form name="login" class="" >
                <!-- <img class="mb-4" src="../../assets/brand/bootstrap-solid.svg" alt="" width="72" height="72"> -->
                <div class="text-h3 text-center">PROMUBE</div>
                <div class="text-h4 text-center">Sistema de Gestão</div>
                <v-text-field v-model="username" placeholder="Login" prepend-icon="mdi-account-circle">Usuário</v-text-field>
                <v-text-field v-model="password" type="password" placeholder="Senha" prepend-icon="mdi-form-textbox-password">Senha</v-text-field>
                <div class="my-2">
                    <v-btn color="primary" @click="efetuaLogin">Entrar</v-btn>
                </div>
                <div class="text-center text--secondary">© Desenvolvida pelo CTI - Centro de Tecnologia de Informação e Comunicação. Todos os direitos reservados</div>
            </v-form>
        </div>
    </div>
</template>
<style>
#fundo-login {
    height: 100%;
    background-image: url("../assets/back_login.jpg");
    background-size: cover;
}
#login-box {
    max-width: 370px;
    margin: auto;
    background: rgba(0, 0, 0, 0.15);
}
</style>
<script>
import LoginService from '../services/Login'
// import router from '../router'
export default {
  data: () => ({
    username: '',
    password: ''
  }),
  methods: {
    efetuaLogin () {
      const login = {
        username: this.username,
        password: this.password
      }
      LoginService.login(login)
    }
  }
}
</script>

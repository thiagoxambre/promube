<template>
  <div>
    <BasePage>
    </BasePage>
    <v-main>
      <FaculdadeConsulta/>
    </v-main>
  </div>
</template>
<script>
import BasePage from '../components/basic/BasePage'
import FaculdadeConsulta from '../components/faculdade/FaculdadeConsulta'

export default {
  name: 'FaculdadeList',
  data: () => ({
    drawer: null
  }),
  components: {
    BasePage,
    FaculdadeConsulta
  }
}
</script>

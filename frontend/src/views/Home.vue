<template>
  <div>
    <BasePage>
    </BasePage>
    <v-main>
    </v-main>
  </div>
</template>
<script>
import BasePage from '../components/basic/BasePage'

export default {
  name: 'Home',
  data: () => ({
    drawer: null
  }),
  components: {
    BasePage
  }
}
</script>

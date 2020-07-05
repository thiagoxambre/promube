<template>
  <div>
    <TopBar>
    </TopBar>
    <div>
      <MenuLateral>
      </MenuLateral>
    </div>
  </div>
</template>
<script>
import TopBar from './TopBar'
import MenuLateral from './MenuLateral'

export default {
  name: 'HomeBase',
  components: {
    TopBar,
    MenuLateral
  }
}
</script>

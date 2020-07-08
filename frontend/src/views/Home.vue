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
import TopBar from '../components/basic/TopBar'
import MenuLateral from '../components/basic/MenuLateral'

export default {
  name: 'HomeBase',
  components: {
    TopBar,
    MenuLateral
  }
}
</script>

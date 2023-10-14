<!---------------- Script ------------------------>
<script>

import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import AppBody from './components/AppBody.vue';

export default {

  components: { AppHeader, AppBody, AppFooter },

  data() {
    return {
      
      
    }
  },
  
} 

</script>



<!---------------- Template ------------------------>
<template>

    
  <!-- Header -->
  <AppHeader />
    
    
  <!-- Body -->
  <AppBody />
    
    
  <!-- Footer -->
  <AppFooter />

    
</template>



<!---------------- style ------------------------>
<style lang="scss">

@use './assets/scss/style.scss';

</style>

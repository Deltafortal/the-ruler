<!---------------- Script ------------------------>
<script>

import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import AppBody from './components/AppBody.vue';
import GoModal from './components/GoModal.vue';

export default {

  components: { AppHeader, AppBody, AppFooter, GoModal },

  data() {
    return {
      
      
    }
  },
  
} 

</script>



<!---------------- Template ------------------------>
<template>

    <div class="">

      <!-- Header -->
      <AppHeader />
      
      
      <!-- Body -->
      <AppBody />
      
      
      <!-- Footer -->
      <AppFooter />
      
      
    </div>

    <!-- Game Over Modal-->
    <GoModal />
</template>



<!---------------- style ------------------------>
<style lang="scss">

@use './assets/scss/style.scss';


</style>

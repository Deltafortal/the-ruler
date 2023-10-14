<!---------------- Script ------------------------>
<script>
import AppCard from './AppCard.vue';

export default {
    components: { AppCard },

}
</script>



<!---------------- Template ------------------------>
<template>

    <main>

        <AppCard />

    </main>

</template>



<!---------------- style ------------------------>
<style lang="scss">

@use '../assets/scss/vars' as *;

main {
    height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;
}


</style>
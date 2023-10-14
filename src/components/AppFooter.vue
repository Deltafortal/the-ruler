<!---------------- Script ------------------------>
<script>

</script>



<!---------------- Template ------------------------>
<template>

    <footer>
        <div class="attributes">

            <!-- Gold Resources-->
            <div class="gold token">
                G
            </div>


            <!-- Notoriety -->
            <div class="notoriety token">
                N
            </div>


            <!-- Faith Strength-->
            <div class="faith token">
                F
            </div>

            <!-- Happines -->
            <div class="happines token">
                H
            </div>

        </div>
    </footer>

</template>



<!---------------- style ------------------------>
<style lang="scss">

@use '../assets/scss/vars' as *;

footer {

    
    .attributes {

        padding: 15px;
        height: 100%;
        display: flex;
        align-items: flex-end;
    }

    .token {
        font-size: 20px;
        margin-right: 10px;
    }

}



</style>
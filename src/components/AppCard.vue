<!---------------- Script ------------------------>
<script>

</script>



<!---------------- Template ------------------------>
<template>

    <div class="app-card">

        <div class="card">
            <div class="card-body">
                <div class="content">
                    <p class="card-text pb-2">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <img src="https://pm1.aminoapps.com/6906/199f1d3bd3b04c078fcc2dbd7624492c3814ebber1-235-313v2_uhq.jpg" class="card-img-top" alt="Dad">
                </div>
                <h5 class="card-title">Card title</h5>
            </div>
        </div>

    </div>

</template>



<!---------------- style ------------------------>
<style lang="scss">

@use '../assets/scss/vars' as *;

.app-card {
    height: 90%;
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;

    .card {
        width: 100%;
        height: 100%;
        max-width: 460px;

        .card-body {

            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;

        }

        .content {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        img {
            height: 330px;
            width: 330px;
            border-radius: 8px;
        }
    }

}


</style>
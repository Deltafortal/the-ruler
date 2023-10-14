<!---------------- Script ------------------------>
<script>
import { store } from '../js/store.js'


export default {
    
    data() {
        return {
            store: store,
            maxCards: store.events.length,
            r: null
        }
    },

    methods: {
        callEvent() {
            this.r = Math.floor(Math.random() * this.maxCards)
            return this.r
        },

        manageEffects(effect){

            if(effect.money){
                this.store.money += effect.money;
            };

            if(effect.happines) {
                this.store.happines += effect.happines;
            }
        }
    },

    created() {
        this.callEvent()
    }

}

</script>



<!---------------- Template ------------------------>
<template>

    <div class="app-card">

        <div class="card">
            <div class="card-body">
                <div class="content">
                    <p class="card-text pb-2">{{ this.store.events[this.r].description }}</p>
                    <img :src=" this.store.events[this.r].image" class="card-img pb-2" :alt="this.store.events[this.r].subject">
                </div>
                
                <div class="choices">
                    <button class="response-one btn" @click="manageEffects(this.store.events[this.r].responses[0].effect)">
                        {{ this.store.events[this.r].responses[0].title }}
                    </button>
                    <button class="response-two btn" @click="manageEffects(this.store.events[this.r].responses[1].effect)">
                        {{ this.store.events[this.r].responses[1].title }}
                    </button>
                </div>

                <h5 class="card-title">{{ this.store.events[this.r].subject }}</h5>
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
            height: 280px;
            width: 280px;
            border-radius: 8px;
        }

        .choices {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;

            .response-one,.response-two {
                padding: 5px;
                border-radius: 5px;
                background-color: $primaryCol;
                color: white;
            }
        }
    }

}


</style>
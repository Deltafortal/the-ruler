<!---------------- Script ------------------------>
<script>
import { store } from '../js/store.js';

export default {
    data(){
        return {
            store: store,
            reason: '',
            currentMessage: '',
            currentImage: '',

            messages: 
            [
                {
                    message: 'Hai badato molto ai tuoi figli e alla tua famiglia, alla fine però la povertà ha preso il sopravvento, non avevi più denaro da parto, Fabiana ha iniziato a frequentare un uomo ricco, ha preso i tuoi figli, la tua auto ed è andata via con lui.',
                    image: '',
                },
                {
                    message: 
                    'Eri felice di tutto il denaro che hai accumulato, pensavi a tutte le belle cose che avresti potuto fare, Fabiana però ne ha approfittato... ha preso tutti i tuoi soldi, i tuoi figli, la tua macchina ed è scappata via. Sei rimasto solo e senza amore.',
                    image: '',
                },
                {
                    message: 
                    'Nonostante tutti i tuoi sforzi, la tua famiglia non era abbastanza felice di stare con te, Fabiana iniziò a pensare di meritare una vita migliore, quindi ha deciso di andare via portando via tutti i tuoi soldi e i tuoi figli.',
                    image: '',
                },
                {
                    message: 
                    'Hai passato la tua vita a rendere felice la tua famiglia, alla fine sembravate aver raggiunto livelli di felicità assoluti, tuttavia a qualcuno questo non andava bene... tu e la tua famiglia venite assassinati nel sonno',
                    image: '',
                },
            ]
        }
    },

    methods: {
        //Assign the right message
        assignMessage(){

            if(this.reason === 'noMoney') { return [this.currentMessage = this.messages[0].message, this.currentImage = this.messages[0].image];};
            if(this.reason === 'toMoney') { return this.currentMessage = this.messages[1].message;};
            if(this.reason === 'noHappy') { return this.currentMessage = this.messages[2].message;};
            if(this.reason === 'toHappy') { return this.currentMessage = this.messages[3].message;};
        },

        restartGame(){
            
            //set attributes to default value
            for(let i = 0; i < this.store.attributes.length; i++) {
                this.store.attributes[i].value = 50;
            }
            
            //Reset days
            this.store.day = 1;

            //Close go modal
            this.store.isGameOver = false;
        }
    },

    computed: {

        // Check game over reason
        checkReason(){

            if(this.store.lastCheckedStats.attribute) {

                let attribute = this.store.lastCheckedStats.attribute

                // Control if money
                if(attribute.label === 'money') {

                    if(attribute.value <= 0) { this.reason = 'noMoney'}
                    if(attribute.value <= 100) { this.reason = 'toMoney'}
                }

                // Control if happy
                if(attribute.label === 'happines') {

                    if(attribute.value <= 0) { this.reason = 'noHappy'}
                    if(attribute.value <= 100) { this.reason = 'toHappy'}
                }

            }

            this.assignMessage()
        }

    },

}
</script>



<!---------------- Template ------------------------>
<template>

    <!-- Modal -->
    <div class="go-window text-center" :class="this.store.isGameOver === false ? 'hide' : ''" >
        <div class="go-dialog">
            <div class="content">
            <div class="content-header">
                <h1 class="fs-5 mt-4">Game over</h1>
                <img class="my-5" :src="this.currentImage" :alt="this.currentMessage">
            </div>
            <div class="content-body mb-5">
                  {{ this.currentMessage}} 
            </div>
            <div class="content-footer">
                <button @click="restartGame" type="button" class="btn btn-secondary">Rigioca</button>
            </div>
            </div>
        </div>

    </div>

</template>



<!---------------- style ------------------------>
<style lang="scss" scoped>

@use '../assets/scss/vars' as *;

.go-window {
    background-color: rgb(153, 91, 91);
    border-radius: 15px;
    padding: 20px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    display: block;

}
.hide {
    display: none;
}

</style>
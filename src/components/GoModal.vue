<!---------------- Script ------------------------>
<script>
import { store } from '../js/store.js';

export default {
    data(){
        return {
            store: store,
            reason: '',
            currentMessage: '',

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
                    'Troppo Felice',
                    image: '',
                },
            ]
        }
    },

    methods: {
        //Assign the right message
        assignMessage(){

            if(this.reason === 'noMoney') { return this.currentMessage = this.messages[0].message};
            if(this.reason === 'toMoney') { return this.currentMessage = this.messages[1].message};
            if(this.reason === 'noHappy') { return this.currentMessage = this.messages[2].message};
            if(this.reason === 'toHappy') { return this.currentMessage = this.messages[3].message};
        }
    },

    computed: {

        // Check game over reason
        checkReason(){

            if(this.store.lastCheckedStats.attribute) {

                let attribute = this.store.lastCheckedStats.attribute

                // Control if money
                if(attribute.label === 'money') {

                    if(attribute.value === 0) { this.reason = 'noMoney'}
                    if(attribute.value === 100) { this.reason = 'toMoney'}
                }

                // Control if happy
                if(attribute.label === 'happines') {

                    if(attribute.value === 0) { this.reason = 'noHappy'}
                    if(attribute.value === 100) { this.reason = 'toHappy'}
                }

            }

            this.assignMessage()
        }

    },

}
</script>



<!---------------- Template ------------------------>
<template>

    <!-- Button trigger modal -->
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#goModal">
        Launch static backdrop modal
    </button>

    <!-- Modal -->
    <div class="modal fade" id="goModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="goModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <h1 class="modal-title fs-5" id="goModalLabel">Game over</h1>
        </div>
        <div class="modal-body">
            {{ this.currentMessage }}
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Understood</button>
        </div>
        </div>
    </div>
    </div>

</template>



<!---------------- style ------------------------>
<style lang="scss">

@use '../assets/scss/vars' as *;



</style>
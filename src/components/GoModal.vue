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
                'Nessun soldo',
                'Troppi Soldi',
            ]
        }
    },

    methods: {
        //Assign the right message
        assignMessage(){

            if(this.reason === 'noMoney') { this.currentMessage = this.messages[0]};
            if(this.reason === 'toMoney') { this.currentMessage = this.messages[1]};
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
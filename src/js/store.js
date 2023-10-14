import { reactive } from "vue";

export const store = reactive({

    money: 500,
    happines: 500,

    events: [
        {
            id: 0,
            subject: 'Fabiana',
            description: 'Mauro! non ne posso più la televisione continua a non funzionare, potresti cambiarla?',
            image: 'https://i.pinimg.com/1200x/9a/9b/be/9a9bbe2c7bbbb1ce0a57dc12f26789d7.jpg',

            responses:[

                {
                    title: 'Ripara la tv',
                    effect: {
                        money: -10,
                    }
                }, 
                {
                    title: 'Compra una nuova tv',
                    effect: {
                        money: -100,
                    }
                }
            ]
        },

        {
            id: 1,
            subject: 'Fabiana',
            description: 'Mauro! per favore potresti comprare la Playstation 5 ai tuoi figli? grazie.',
            image: 'https://i.pinimg.com/1200x/9a/9b/be/9a9bbe2c7bbbb1ce0a57dc12f26789d7.jpg',

            responses:[

                {
                    title: 'Compra',
                    effect: {
                        money: -200,
                        happines: +100,
                    }
                }, 
                {
                    title: 'Non comprare',
                    effect: {
                        happines: -150,
                    }
                }
            ]
        },

    ]

});
import { reactive } from "vue";

const mom = 'https://i.pinimg.com/1200x/9a/9b/be/9a9bbe2c7bbbb1ce0a57dc12f26789d7.jpg';
const dad = '';

export const store = reactive({

    attributes: [
        {
            label: 'money',
            value: 10,
        },
        {
            label: 'happines',
            value: 50
        }
    ],

    events: [
        {
            id: 0,
            condition: 'noMoney',
            subject: 'Fabiana',
            description: 'Mauro! non ne posso più la televisione continua a non funzionare, potresti cambiarla?',
            image: mom,

            responses:[

                {
                    title: 'Ripara la tv',
                    effect: {
                        money: -1,
                    }
                }, 
                {
                    title: 'Compra una nuova tv',
                    effect: {
                        money: -10,
                    }
                }
            ]
        },

        {
            id: 1,
            subject: 'Fabiana',
            description: 'Mauro! per favore potresti comprare la Playstation 5 ai tuoi figli? grazie.',
            image: mom,

            responses:[

                {
                    title: 'Compra',
                    effect: {
                        money: -25,
                        happines: +10,
                    }
                }, 
                {
                    title: 'Non comprare',
                    effect: {
                        happines: -15,
                    }
                }
            ]
        },

    ],

    gameOverEvents: [
        {
            id: 0,
            condition: 'noMoney',
            subject: 'Fabiana',
            description: 'Mauro! Non hai più soldi, come speri di poterci mantere?! io e i bambini andiamo a vivere con Alberto! addio!',
            image: mom,

            responses:[

                {
                    title: 'Cosa?',
                    effect: {
                        gameOver: true
                    }
                }, 
                {
                    title: 'Cosa?',
                    effect: {
                        gameOver: true
                    }
                }
            ]
        },
    ]

});
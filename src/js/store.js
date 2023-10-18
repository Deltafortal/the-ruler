import { reactive } from "vue";

const mom = 'https://i.pinimg.com/1200x/9a/9b/be/9a9bbe2c7bbbb1ce0a57dc12f26789d7.jpg';
const dad = '';
const teresa = '';

export const store = reactive({

    day: 1,
    isGameOver: false,

    attributes: [
        {
            label: 'money',
            value: 10,
        },
        {
            label: 'happines',
            value: 10,
        }
    ],

    lastCheckedStats: {},

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
        {
            id: 2,
            subject: 'Teresa',
            description: 'Oh cavolo, Teresa sta fumando una sigaretta in camera sua!',
            image: teresa,

            responses:[

                {
                    title: 'Sgridala',
                    effect: {
                        happines: -10,
                    }
                }, 
                {
                    title: 'Fai finta di niente',
                    effect: {
                        item: 'smokeIgnored'
                    }
                }
            ]
        },
        {
            id: 3,
            subject: 'Teresa',
            description: 'Teresa è stata beccata a copiare il compito in classe di matematica',
            image: teresa,

            responses:[

                {
                    title: 'Sgridala',
                    effect: {
                        happines: -10,
                    }
                }, 
                {
                    title: 'Fai finta di niente',
                    effect: {
                        item: 'ignoredCopiedExam'
                    }
                }
            ]
        },
        {
            id: 4,
            subject: 'Teresa',
            description: 'Papà ho bisogno che mi presti la macchina per andare dalla mia amica.',
            image: teresa,

            responses:[

                {
                    title: 'Presta la macchina',
                    effect: {
                        item: 'gaveCar'
                    }
                }, 
                {
                    title: 'Non prestare',
                    effect: {
                        happines: -10,
                    }
                }
            ]
        },
        {
            id: 5,
            subject: 'Teresa',
            condition: 'gaveCar',
            description: 'Teresa ha avuto un incidente stradale, ha bisogno di cure mediche alla svelta oppure morirà',
            image: teresa,

            responses:[

                {
                    title: 'Compra le cure mediche',
                    effect: {
                        money: -20
                    }
                }, 
                {
                    title: 'Non comprare',
                    effect: {
                        item: ''
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
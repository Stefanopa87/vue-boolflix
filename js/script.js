function init() {

    new Vue({

        el: '#app',
        data: {

            films: []
        },

        methods: {

        },

        mounted() {
            // axios.get('https://api.themoviedb.org/3/search/movie', {

            //         params: {
            //             'api_key': '8c6e58cb6f1459e345a3ff802e48cdba',
            //             'query': 'ritorno al futuro'
            //         }
            //     })

            axios.get('https://api.themoviedb.org/3/search/movie?api_key=8c6e58cb6f1459e345a3ff802e48cdba&query=ritorno+al+futuro')
                .then(data => {

                    let elem = data.data.response;

                    this.films = elem;

                    console.log(this.films)

                    console.log('ciao');

                })
                .catch(() => console.log('error'));
        }
    });
}

document.addEventListener('DOMContentLoaded', init);
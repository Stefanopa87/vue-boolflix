function init() {

    new Vue({

        el: '#app',
        data: {

            films: [],

            searchFilms: ""
        },

        methods: {

            search: function () {


                if (this.searchFilms.length > 0) {

                    console.log(this.searchFilms);

                    axios.get('https://api.themoviedb.org/3/search/movie', {

                            params: {
                                'api_key': '8c6e58cb6f1459e345a3ff802e48cdba',
                                'query': this.searchFilms,
                                'language': 'it',
                            }
                        })

                        .then(data => {

                            let results = data.data.results;

                            this.films = results;

                            console.log(this.films)
                        })

                        .catch(() => console.log('error'));

                }

                this.searchFilms = ""
            }

        },

        // mounted() {
            // axios.get('https://api.themoviedb.org/3/search/movie', {

            //         params: {
            //             'api_key': '8c6e58cb6f1459e345a3ff802e48cdba',
            //             'query': this.searchFilms,
            //             'language': 'it',
            //         }
            //     })


            //     .then(data => {

            //         let results = data.data.results;

            //         this.films = results;

            //         console.log(this.films)

            //         console.log('ciao');

            //     })

            //     .catch(() => console.log('error'));
        // }
    });
}

document.addEventListener('DOMContentLoaded', init);
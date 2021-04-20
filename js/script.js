function init() {

    new Vue({

        el: '#app',
        data: {

            films: [],

            series:[],

            searchElements: ""
        },

        methods: {

            search: function () {

                this.films = [];
                this.series= [];

                const params = {

                    params: {
                        'api_key': '8c6e58cb6f1459e345a3ff802e48cdba',
                        'query': this.searchElements,
                        'language': 'it',
                    }
                }


                if (this.searchElements.length > 0) {

                    console.log(this.searchElements);
                    // FILMS
                    axios.get('https://api.themoviedb.org/3/search/movie', params)

                        .then(data => {

                            let results = data.data.results;

                            for (let i = 0; i < results.length; i++) {

                                this.films.push(results[i]);
                            }

                            console.log(this.films)
                        })

                        .catch(() => console.log('error'));

                    // TV SERIES
                    axios.get('https://api.themoviedb.org/3/search/tv', params)

                        .then(data => {

                            let results = data.data.results;

                            for (let i = 0; i < results.length; i++) {

                                this.series.push(results[i]);
                            }

                            console.log(this.series)
                        })

                        .catch(() => console.log('error'));

                }

                this.searchElements = ""
            }

        },


    });
}

document.addEventListener('DOMContentLoaded', init);
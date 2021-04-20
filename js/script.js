function init() {

    new Vue({

        el: '#app',
        data: {

            films: [],

            series:[],

            searchElements: "cane"
        },

        methods: {

            search: function () {

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

                            this.films = results

                            console.log(this.films)
                        })

                        .catch(() => console.log('error'));

                    // TV SERIES
                    axios.get('https://api.themoviedb.org/3/search/tv', params)

                        .then(data => {

                            let results = data.data.results;

                            this.series = results

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
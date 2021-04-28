var app = new Vue({
    el: '#root',
    data: {
        discs: [], //filled on mounted() by axios.get on api/array/music, contains an array of objects
        genres: [], //filled on mounted(), contains a set of every item.genre for item in discs
        genre: '' //default genre, changes according to select options in index.html line 33-38
    },
    methods: {

        sortArrByValue(arr, value) {
        /* 
        * sort an array of objects according to a value (ascendig)
        *
        * @arr    || array of objects
        * @value  || object's value
        * 
        * @return || sorted array
        */
            return arr.sort((a, b) => a[value] - b[value])
        },

        selectGen(item) {
            // difficile commentare queste robe nello stesso modo in cui si commenta una funzione 'standalone'
            if (!this.genre || this.genre == 'all') {
                return true
            }
            else {
                return item.genre == this.genre
            }
        }
    },
    

    mounted() {
        this.discs = axios.get('https://flynn.boolean.careers/exercises/api/array/music')
            .then((response) => {
                this.discs = response.data.response; //array of objects
                this.sortArrByValue(this.discs, 'year');
                this.genres = new Set(this.discs.map((disc) => disc.genre))
            })
    }
})

  // ### FUNZIONI POTENZIALMENTE UTILI PER IL GIGAESERCIZIO DI DOMANI

        // addGens(newArr) {
        //     genres.add(...newArr.map((disc) => disc.genre))
        // },

/*
 * function (detailed!) description
 *
 * @param  || description
 * @param  || description
 *
 * @return || description
*/

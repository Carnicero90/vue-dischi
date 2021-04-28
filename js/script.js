var app = new Vue({
    el: '#root',
    data: {
        test: 'hello Template',
        discs: [],
        genres: [],
        genre: ''
    },
    methods: {
        sortArrByValue(arr, value) {
            return arr.sort((a, b) => a[value] - b[value])
        }
    },
    created() {
       
     },
    mounted() {
        this.discs = axios.get('https://flynn.boolean.careers/exercises/api/array/music')
        .then((response) => {
            this.discs = response.data.response;
            this.sortArrByValue(this.discs, 'year');
            this.genres = new Set(this.discs.map((disc) => disc.genre))
        })
    }
})



/* 
 * function (detailed!) description
 *
 * @param  || description
 * @param  || description
 * 
 * @return || description
*/

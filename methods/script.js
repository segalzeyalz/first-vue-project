new Vue({
    el: '#app',
    data: {
        num:0,
        range: 100
    },
    methods: {
        randomizeNum: function(){
            this.num = Math.floor(Math.random()*this.range)
        }
  }
})
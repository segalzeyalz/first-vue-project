new Vue({
    el: '#app',
    data: {
        num:0
    },
    methods: {
        randomizeNum: function(){
            this.num = Math.floor(Math.random()*100)
        }
  }
})
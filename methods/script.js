new Vue({
    el: '#app',
    data: {
        num:0,
        range: 100,
        firstName: "",
        lastName:""
    },
    methods: {
        randomizeNum: function(){
            this.num = Math.floor(Math.random()*this.range)
        }
  }, 
  computed: {
    fullName: function(){
        return `${this.firstName} ${this.lastName}`
    }
  },
})
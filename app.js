var app = new Vue({
    el: '#App',
    data: {
        count: 0
    },
    methods: {
        increment : function () {
            return this.count++
        },
        decrement : function () {
            this.count--
            if(this.count < 0) {
                this.count=0;
            }
            return this.count
        }
    }
})
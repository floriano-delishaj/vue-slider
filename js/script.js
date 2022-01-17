new Vue({
    el: '#app',
    data: {
        currentIndex: 0,
        images: [
            {
                url: 'https://unsplash.it/500/500?image=1'
            },
            {
                url: 'https://unsplash.it/500/500?image=101'
            },
            {
                url: 'https://unsplash.it/500/500?image=190'
            },
            {
                url: 'https://unsplash.it/500/500?image=222'
            },
            {
                url: 'https://unsplash.it/500/500?image=431'
            },
            {
                url: 'https://unsplash.it/500/500?image=71'
            }
        ],
        flag: false,
    },
    methods: {
        nextClick: function() {
            this.currentIndex++

            if (this.currentIndex >= this.images.length) {
                this.currentIndex = 0; 
            }
        },
        prevClick: function() {
            this.currentIndex--

            if (this.currentIndex <= this.images.length) {
                this.currentIndex = 0; 
            }
        },
        thisImage: function(i) {
            this.flag = true;
            this.currentIndex = i;
        }
    }
})
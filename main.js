const app = Vue.createApp({
    data: function () {
        return {
            product: 'Socks',
            image: './assets/images/socks_green.jpg',
            inventory: 0,
            onSale: true
        }
    }
})
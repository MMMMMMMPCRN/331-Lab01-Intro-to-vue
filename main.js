const { createApp, ref } = Vue 

createApp({
    setup(){
        // const product = ref('Socks')
        const product = ref('Boots')

        const desc = ref('Boots description')

        const image = ref('./assets/images/socks_green.jpg')

        const link = ref('https://www.camt.cmu.ac.th')

        // const inStock = ref(true)

        const inStock = ref(false)

        const inventory = ref(100)

        return {
            product,
            desc,
            image,
            link,
            inStock,
            inventory
        }
    }
}).mount('#app')


const { createApp, ref } = Vue 

createApp({
    setup(){
        // const product = ref('Socks')
        const product = ref('Boots')

        const desc = ref('Boots description')

        const image = ref('./assets/images/socks_green.jpg')
        return {
            product,
            desc,
            image
        }
    }
}).mount('#app')


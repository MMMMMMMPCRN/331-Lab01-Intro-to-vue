const { createApp, ref } = Vue 

createApp({
    setup(){
        // const product = ref('Socks')
        const product = ref('Boots')

        const desc = ref('Boots description')
        return {
            product,
            desc
        }
    }
}).mount('#app')


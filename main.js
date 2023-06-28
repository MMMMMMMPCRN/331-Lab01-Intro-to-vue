const { createApp, ref } = Vue 

createApp({
    setup(){
        // const product = ref('Socks')
        const product = ref('Boots')
        return {
            product
        }
    }
}).mount('#app')
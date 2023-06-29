const { createApp, ref, computed } = Vue 

const app = createApp({

    setup(){
        const cart = ref(0)
        return {
            cart
        }
    }

// }).mount('#app')
})

app.component('product-display', productDisplay)

app.mount('#app')


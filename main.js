const { createApp, ref, reactive, computed } = Vue 

const app = createApp({

    setup(){
        const cart = ref(0)
        const premium = ref(true)

        // function updateCart(id){
        //     cart.value.push(id)
        // }

        function updateCart(){
            cart.value += 1
        }

        // const details = ref([
        //     '50% cotton',
        //     '30% wool',
        //     '20% polyester'
        // ])

        function removeFromCart(id) {
            const index = cart.value.findIndex((item) => item === id)
            if (index !== -1) {
                cart.value.splice(index, 1)
            }
        }

        return {
            cart,
            premium,
            // details,
            updateCart,
            removeFromCart

        }
    }

})

app.component('product-display', productDisplay)
app.component('product-details', productDetails);
app.component('review-form', ReviewForm)
app.component('review-list', reviewList)

app.mount('#app')


const { createApp, ref, computed } = Vue 

createApp({
    setup(){
        // const product = ref('Socks')
        const product = ref('Boots')

        const brand = ref('SE 331')

        const desc = ref('Boots description')

        const image = ref('./assets/images/socks_green.jpg')

        const link = ref('https://www.camt.cmu.ac.th')

        // const inStock = ref(true)

        const inStock = ref(false)

        const inventory = ref(100)

        const onSale = ref(true)

        const details = ref([
            '50% cotton',
            '30% wool',
            '20% polyester'
        ])

        const variants = ref([
            // { id: 2234, color: 'green' },
            // { id: 2235, color: 'blue' }
            { id: 2234, color: 'green', image:'./assets/images/socks_green.jpg' },
            { id: 2235, color: 'blue', image:'./assets/images/socks_blue.jpg' }
        ])

        const sizes = ref([
            'S', 'M', 'L'
        ])

        const cart = ref(0)
            function addToCart() {
                cart.value += 1
            }

            const title = computed(() =>{
                return brand.value + ' ' + product.value
            })

            function updateImage(variantImage){
                image.value = variantImage
            }

            function toggleStockStatus() {
                inStock.value = !inStock.value;
            }

        return {
            // product,
            desc,
            image,
            link,
            inStock,
            inventory,
            onSale,
            details,
            variants,
            sizes,
            cart,
            addToCart,
            updateImage,
            toggleStockStatus,
            // brand,
            title
        }
    }
}).mount('#app')


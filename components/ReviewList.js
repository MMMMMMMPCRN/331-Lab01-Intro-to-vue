const reviewList = {

    template:
        /*html*/
        `
        <div class="review-container">
        <h3>Reviews:</h3>
        <ul>
            <li v-for="(review, index) in reviews" :key="index">
                {{ review.name }} gave this {{ review.rating }} stars
                <br/>
            </li>
        </ul>
    </div>
        `,

        props: {
            reviews: {
                type: Array,
                required: true
            }
        },
        setup(props){
            const reviews = props.reviews
            return {
                reviews
            }
        }


}
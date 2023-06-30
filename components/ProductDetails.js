const productDetails = {

    template:
    `
    <ul>
        <li v-for="detail in details" :key="detail">{{detail}}</li>
    </ul>
`,
    props: {
      details: {
        type: Array,
        required: true
      }
    },

    setup(props){
       const details = ref(props.details)

        return{
            details
        }
    }
    

  }
  

import { Line, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

export default {
    extends : Line,
    mixins : [reactiveProp],
    props: {
        charData:{
            type : Object,
            default : null
        },
        option: {
            type: Object,
            deafult : null
        }
    },
    mounted(){
        this.renderChart(this.charData, this.options)
    }
}
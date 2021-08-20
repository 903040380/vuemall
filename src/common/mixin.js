import {debounce} from './utils'
import BackTop from "@/components/content/backtop/BackTop";

export const itemListenerMixin={
    data(){
        return{
            itemImgListener:null,
            newRefresh:null
        }
    },
    mounted(){
       this.newRefresh=debounce(this.$refs.scroll.refresh, 50);
        this.itemImgListener=()=>{
            this.newRefresh()
        }
        this.$bus.$on('itemImgLoad',this.itemImgListener)
    },
}

export const backTopMixin={
    data(){
        return {
            isShowBackTop: false,
        }
    },
    methods:{
        backClick() {
            this.$refs.scroll.scroll.scrollTo(0, 0, 300);
        },
    },
    components:{
        BackTop,
    }
}
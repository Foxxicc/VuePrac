
<template>
    <v-container>
        <PhotoForn @addPhoto="addPhoto"/>
        <v-row>
            <AppPhotos v-for="photo in getAllPhotos" :key="photo.id"
            :photo="photo"
            
            
           
            
/>
        </v-row>
        
    </v-container>
</template>

<script>
import AppPhotos from '@/components/photo/AppPhotos.vue'
import PhotoForn from '@/components/photo/PhotoForn.vue'

import { mapActions} from 'vuex'
    export default{
        components:{
            AppPhotos,
            PhotoForn
        },
        
        // computed:{
        //    photos: mapGetters(['getAllPhotos'])
        // },
        computed:{
            getAllPhotos(){
                return this.$store.getters.getAllPhotos
            }
        },
        mounted(){
            console.log(this)
            this.fetchPhotos()
            
        },
        methods:{
            ...mapActions(['fetchPhotos']),
            // fetchTodo() {
            // this.axios.get(`https://jsonplaceholder.typicode.com/photos?_limit=10`)
            // .then(res=> this.photos = res.data)
            // },
            addPhoto(photo){
                this.photos.push(photo)
            }

        }
    }
</script>3
<style lang="scss" scoped>

</style>
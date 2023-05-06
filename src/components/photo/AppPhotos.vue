<template>
    <v-col cols ='4'>
        <v-card>
            <v-cadr-title>{{ photo.title}}</v-cadr-title>
            <v-cadr-text>
                <v-img
                width = '200px'
                height = '200px'
                :src="photo.url"
                />
            </v-cadr-text>
           
        </v-card>
    </v-col>
</template>

<script>


    export default {
        props:{
            photo:{
                type:Object,
                required: true,

            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
<template>
  <v-container fluid>
    <v-app-bar
    color="dark"
    image="https://picsum.photos/1920/1080?random"
  >
  <v-spacer/>
    <v-btn outlined class="ml-3">
      <router-link to = '/'>Home</router-link>
    </v-btn>
    <v-btn outlined class="ml-3">
      <router-link to = '/photo'>Photos</router-link>
    </v-btn>
   
  </v-app-bar>
  </v-container>
    
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>
<template>
  <v-app>
        <AppNavBar/>
        <router-view/>
  </v-app>
</template>

<script>
import AppNavBar from '@/components/AppNavBar.vue';

export default {
  name: 'App',
  components:{
    AppNavBar
  }
 
};
</script>

import Vue from 'vue'
import VueRouter from 'vue-router';


Vue.use(VueRouter)

const routes = [
    {
    path:'/',
    component: ()=> import('./page/HomePage.vue')
    },
    {
    path:'/photo',
    component: ()=> import('./page/PhotoPage.vue')
    }
]

export default new VueRouter({
    mode:'history',
    routes
})
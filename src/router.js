import Vue from 'vue';
import Router from 'vue-router';
vue-router
import Home from "./views/Home.vue";
import Users from "./views/Users.vue";
import UsersPosts from "./views/UsersPosts.vue";
import UsersProfile from "./views/UsersProfile.vue";
import HeaderHome from "./views/HeaderHome.vue";
import HeaderUsers from "./views/HeaderUsers.vue";


const Home = () => import("./views/Home.vue");
const Users = () => import("./views/Users.vue");
const UsersPosts = () => import("./views/UsersPosts.vue");
const UsersProfile = () => import("./views/UsersProfile.vue");
const HeaderHome = () => import("./views/HeaderHome.vue");
const HeaderUsers = () => import("./views/HeaderUsers.vue");

master

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
vue-router
    { path: '/', components: {
     default: Home,
     header: HeaderHome
    } 
    {
    path: '/', 
    components: {
     default: Home,
     header: HeaderHome
    } ,
    // beforeEnter(to, from, next) {
    //   next(false);
    // }
    master
  },
    { 
      path: '/users/:id',
      components: {
        default: Users,
        header: HeaderUsers
       },
vue-router
      props: true,

      
       
      props: {
        default: true,
        header: false
      },

master
      children: [
        { path: "posts", component: UsersPosts},
        { path: "profile", component: UsersProfile, name: "users-id-profile"}
      ]
    },
    {
  vue-router
      path: '*', redirect: "/"
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return {
        selector: to.hash
      };
    }
    
    return {x: 0, y: 0};
      path: '*', 
      redirect: "/"
    }
  ],
  scrollBehavior(to, from, savedPosition) {
   return new Promise(resolve => {
     this.app.$root.$once('triggerScroll', ()=> {
       let position = {x: 0, y: 0};
       if (savedPosition) {
         position = savedPosition;
        }
        if (to.hash) {
          position = {
            selector: to.hash
          };
        }
        resolve(position);
      });
    });
master
  }
});
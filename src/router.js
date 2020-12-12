import Vue from 'vue';
import Router from 'vue-router';
vue-router
import Home from "./views/Home.vue";
import Users from "./views/Users.vue";
import UsersPosts from "./views/UsersPosts.vue";
import UsersProfile from "./views/UsersProfile.vue";
import HeaderHome from "./views/HeaderHome.vue";
import HeaderUsers from "./views/HeaderUsers.vue";
<<<<<<< HEAD
=======


const Home = () => import("./views/Home.vue");
const Users = () => import("./views/Users.vue");
const UsersPosts = () => import("./views/UsersPosts.vue");
const UsersProfile = () => import("./views/UsersProfile.vue");
const HeaderHome = () => import("./views/HeaderHome.vue");
const HeaderUsers = () => import("./views/HeaderUsers.vue");

master
>>>>>>> d66e0426ebe4a024a7d31f96d82a2156dea661fd

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
<<<<<<< HEAD
=======
vue-router
>>>>>>> d66e0426ebe4a024a7d31f96d82a2156dea661fd
    { path: '/', components: {
     default: Home,
     header: HeaderHome
    } 
<<<<<<< HEAD
=======
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
>>>>>>> d66e0426ebe4a024a7d31f96d82a2156dea661fd
  },
    { 
      path: '/users/:id',
      components: {
        default: Users,
        header: HeaderUsers
       },
<<<<<<< HEAD
=======
vue-router
>>>>>>> d66e0426ebe4a024a7d31f96d82a2156dea661fd
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
<<<<<<< HEAD
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
=======
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
>>>>>>> d66e0426ebe4a024a7d31f96d82a2156dea661fd
  }
});
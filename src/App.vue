<template>
  <div style= "width: 700px; margin: auto; padding-top: 50px;">
    <router-view name="header"></router-view> 
<<<<<<< HEAD
=======
vue-router
    <transition
    name="fade"
    mode="out-in"
    @before-enter="befoteEnter"
    >
master
>>>>>>> d66e0426ebe4a024a7d31f96d82a2156dea661fd
    <router-view></router-view>
    </transition>
  </div>
</template>

<<<<<<< HEAD
=======
vue-router
<script>
export default {
  methods: {
    beforeEnter() {
      this.$root.$emit('triggerScroll');
    }
  }
};
</script>

master
>>>>>>> d66e0426ebe4a024a7d31f96d82a2156dea661fd
<style scoped>
 .fade-enter,
 .fade-leave-to {
   opacity: 0;
 }

 .fade-enter-active,
 .fade-leave-active {
   transition: opacity 0.5s;
 }
</style>


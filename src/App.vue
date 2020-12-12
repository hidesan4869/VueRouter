<template>
  <div style= "width: 700px; margin: auto; padding-top: 50px;">
    <router-view name="header"></router-view> 
vue-router
    <transition
    name="fade"
    mode="out-in"
    @before-enter="befoteEnter"
    >
master
    <router-view></router-view>
    </transition>
  </div>
</template>

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


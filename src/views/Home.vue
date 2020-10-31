<template>
  <div>
    <h3>Home</h3>
    <button @click="toUsers">Usersのページへ行く</button>
    <p>{{ doubleCount }}</p>
    <p>{{ fiveCount }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["doubleCount", "fiveCount"])
  },

  methods: {
    toUsers() {
      this.$router.push({
       name: "users-id-profile",
       params: { id: 1 }
       });
    }
  }
};
</script>
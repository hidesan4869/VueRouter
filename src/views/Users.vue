<template>
  <div>
    <h3>Users</h3>
    <router-link to="/users/1">ユーザー１</router-link>
    <router-link to="/users/2">ユーザー２</router-link>
    <hr>
    <h1>User No. {{ id }}</h1>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  props: ["id"],
}
</script>
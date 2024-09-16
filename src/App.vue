<script setup>
</script>
<template>
  <nav class="bg-dark">
    <div class="text-light">
      <span>Game Opinion</span>
    </div>
    <router-link to="/">Home</router-link>
  </nav>
  <router-view />
</template>

<style>
nav {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 30px;

}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

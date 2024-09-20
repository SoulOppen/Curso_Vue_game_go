<script setup>
</script>
<template>
  <nav class="bg-dark text-light">
    <div>
      <i class="bi bi-dice-6-fill"></i>
      <i class="bi bi-dice-1-fill girar"></i>
      <span>Game Opinion</span>
    </div>
    <router-link to="/">
      <i class="bi bi-house-door-fill"></i>Home
    </router-link>
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
nav a{
  color: white;
  text-decoration: none;
}
nav a.router-link-exact-active {
  color:rgb(187, 187, 187);
}
.girar{
  display: inline-block;
  transform: rotate(-20deg) translateX(-20%);
}

</style>

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
  <router-view v-slot="{ Component }">
  <transition name="slide" mode="out-in">
    <component :is="Component"/>
  </transition>
</router-view>

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
.slide-enter, .slide-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

.slide-enter-active, .slide-leave-active {
  transition: transform 1s ease, opacity 0.5s ease;
}

.slide-enter-to, .slide-leave {
  transform: translateX(0);
  opacity: 1;
}
</style>

<template>
  <header>
    <nav class="navbar">
      <h1 class="logo">vue</h1>
      <ul class="menu">
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li><router-link to="/services">Serviços</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts"></script>

<style scoped>
header {
  background-color: #333;
}
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  color: #fff;
  max-width: 1200px;
  margin: 0 auto;
}

.menu a {
  color: #fff;
  text-decoration: none;
}
</style>

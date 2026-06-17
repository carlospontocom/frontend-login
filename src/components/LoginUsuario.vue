<script setup lang="ts">
  import {ref} from 'vue';
  
  const email = ref('');

  </script>

<template>
  <div class="group-form">
    <input v-model="email" type="email" placeholder="E-mail" />
  </div>
</template>

<style scoped></style>

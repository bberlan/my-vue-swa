<script setup lang="ts">
import { RouterView } from 'vue-router'
import SidebarMenu from './components/SidebarMenu.vue'
</script>

<template>
  <UApp>
    <div class="flex h-screen flex-col">
      <div class="flex flex-1 overflow-hidden">
        <SidebarMenu />
        <RouterView />
      </div>
      <footer class="p-1">Footer</footer>
    </div>
  </UApp>
</template>

<style scoped></style>

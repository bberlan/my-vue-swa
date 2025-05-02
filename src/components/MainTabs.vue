<script setup lang="ts">
// import { ref } from 'vue'
// import type { TabsItem } from '@nuxt/ui'
import { useTabsStore } from '@/stores/tabs'

// const route = useRoute()

// const items = ref<TabsItem[]>([
//   {
//     label: 'Cars',
//   },
//   {
//     label: 'Persons',
//   },
// ])
const store = useTabsStore()
</script>

<template>
  <UTabs v-model="store.active" :items="store.items" color="neutral" variant="link" class="flex-1">
    <template #content="{ item }">
      <p>This is the {{ item.label }}.</p>
    </template>
  </UTabs>
</template>

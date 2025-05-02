<script setup lang="ts">
import { useTabsStore } from '@/stores/tabs'

const store = useTabsStore()
</script>

<template>
  <ClosableTabs v-model="store.active" :items="store.items" default-value="tab1" />
</template>

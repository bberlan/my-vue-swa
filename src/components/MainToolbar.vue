<script setup lang="ts">
import { useTabsStore } from '@/stores/tabs'

const store = useTabsStore()
</script>
<template>
  <div class="p-1 flex">
    <div class="flex-1">Functions</div>
    <div>
      <UButton
        icon="i-lucide-x"
        size="md"
        color="neutral"
        variant="link"
        @click="store.removeItem()"
      />
    </div>
  </div>
</template>

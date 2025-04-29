<script setup lang="ts">
import { ref } from 'vue'
import type { NavigationMenuItem } from '@nuxt/ui'
import type { TabsItem } from '@nuxt/ui'
import { useTabsStore } from '@/stores/tabs'

const store = useTabsStore()

const items = ref<NavigationMenuItem[][]>([
  [
    {
      label: 'Samples',
      active: true,
      defaultOpen: true,
      children: [
        {
          label: 'Cars',
          description: 'Use NuxtLink with superpowers.',
        },
        {
          label: 'Persons',
          description: 'Display a modal within your application.',
        },
        {
          label: 'Countries',
          description: 'Display a non-modal dialog that floats around a trigger element.',
          onSelect: () => store.addItem({ label: 'Countries' } as TabsItem),
        },
      ],
    },
  ],
  [
    {
      label: 'GitHub',
    },
    {
      label: 'Help',
    },
  ],
])
</script>

<template>
  <header class="flex w-56 flex-col">
    <div class="p-1">Logo</div>
    <UNavigationMenu
      highlight
      highlight-color="neutral"
      color="neutral"
      orientation="vertical"
      :items="items[0]"
      class="mt-2"
    />
    <UNavigationMenu orientation="vertical" :items="items[1]" class="mt-auto" />
  </header>
</template>

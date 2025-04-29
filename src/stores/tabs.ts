import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { TabsItem } from '@nuxt/ui'

export const useTabsStore = defineStore('tabs', () => {
  const items = ref<TabsItem[]>([
    {
      label: 'Cars',
    },
    {
      label: 'Persons',
    },
  ])

  function addItem(item: TabsItem) {
    items.value.push(item)
  }

  return { items, addItem }
})

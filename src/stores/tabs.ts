import { ref, nextTick } from 'vue'
import { defineStore } from 'pinia'
import type { TabsItem } from '@nuxt/ui'

export const useTabsStore = defineStore('tabs', () => {
  const items = ref<TabsItem[]>([
    {
      label: 'Cars',
      value: 'tab1',
    },
    {
      label: 'Persons',
      value: 'tab2',
    },
  ])

  const active = ref('tab1')

  const tabsHist = ref<string[]>([])

  function addItem(item: TabsItem) {
    if (items.value.some((i) => i.value === item.value)) {
      active.value = item.value as string
    } else {
      items.value.push(item)
      active.value = item.value as string
    }
  }

  async function removeItem() {
    // console.log('removeItem.active:', active.value)
    // console.log(
    //   'removeItem.active.index:',
    //   items.value.findIndex((i) => i.value === active.value),
    // )
    items.value.splice(
      items.value.findIndex((i) => i.value === active.value),
      1,
    )
    await nextTick()
    if (items.value.length) {
      active.value = items.value[0].value as string
    }
  }

  return { items, addItem, removeItem, active, tabsHist }
})

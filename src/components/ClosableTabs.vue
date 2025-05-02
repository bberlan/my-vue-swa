<script setup lang="ts">
import { TabsContent, TabsIndicator, TabsList, TabsRoot, TabsTrigger } from 'reka-ui'

import type { TabsItem } from '@nuxt/ui'

defineProps<{ items: TabsItem[]; defaultValue: string | number }>()

const model = defineModel<string | number>()
</script>

<template>
  <TabsRoot
    class="flex flex-col w-full sm:w-[300px] shadow-sm rounded-lg border"
    default-value="tab1"
    v-model="model"
    v-show="items.length"
  >
    <TabsList class="relative shrink-0 flex" aria-label="Manage your account">
      <TabsIndicator
        class="absolute transition-[translate,width] duration-200 rounded-full left-0 w-(--reka-tabs-indicator-size) translate-x-(--reka-tabs-indicator-position) -bottom-px h-px bg-inverted"
      >
        <div class="bg-green-400 w-full h-full" />
      </TabsIndicator>
      <template v-for="item in items" :key="item.value">
        <TabsTrigger
          v-if="item"
          class="px-5 h-[45px] flex-1 flex items-center justify-center text-sm leading-none text-mauve11 select-none rounded-tl-md hover:text-green-400 data-[state=active]:text-green-400 outline-none cursor-default"
          :value="item.value as string"
        >
          {{ item.label }} - {{ item.value }}
        </TabsTrigger>
      </template>
    </TabsList>
    <template v-for="item in items" :key="item.value">
      <TabsContent v-if="item" class="grow p-5 outline-none" :value="item.value as string">
        <p class="mb-5 !mt-0 text-mauve11 text-sm !leading-normal">This is {{ item.label }} Tab.</p>
        <p>Default tab {{ defaultValue }}</p>
        <TabsHist :value="item.value" />
      </TabsContent>
    </template>
  </TabsRoot>
</template>

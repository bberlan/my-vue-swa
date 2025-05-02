<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'

const countOnMounted = ref(0)
const countOnUpdated = ref(0)

const props = defineProps(['value'])

onMounted(() => {
  countOnMounted.value++
})

// onUpdated(() => {
//   countOnUpdated.value++
// })

watch(
  () => props.value,
  () => countOnUpdated.value++,
)
</script>
<template>
  <div>
    <p>This is tab {{ value }} history</p>
    <p>onMounted counter: {{ countOnMounted }}</p>
    <p>onUpdated counter: {{ countOnUpdated }}</p>
  </div>
</template>

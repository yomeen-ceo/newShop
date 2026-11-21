<template><div class="slot-grid"><q-btn v-for="slot in store.slots" :key="slot.id" class="slot-cell" :class="slot.count === 0 ? 'slot-empty' : slot.count <= 3 ? 'slot-low' : 'slot-ok'" unelevated @click="$emit('select', slot)"><div class="text-weight-bold">{{ slot.id }}</div><div class="slot-emoji">{{ product(slot).emoji }}</div><div class="text-caption">{{ slot.count }}/{{ slot.capacity }}</div></q-btn></div></template>
<script>
import { useDemoStore } from 'src/store/demo'
export default {
  data () { return { store: useDemoStore() } },
  methods: {
    product (slot) { return this.store.products.find(p => p.id === slot.productId) || this.store.products[0] }
  }
}
</script>

<template><q-page class="q-pa-md"><PageHeading code="A5" title="最佳儲位分析管理" subtitle="食材追蹤 · 動態庫存 · 儲位最佳化 · 補貨排程" />
  <div class="row q-col-gutter-sm q-mb-md"><div class="col-6"><StatCard label="儲位總數" value="28" unit="格" /></div><div class="col-6"><StatCard label="目前炸籃" :value="store.slotStock" unit="籃" /></div></div>
  <div class="text-subtitle2 q-mb-sm">儲位分布（4 排 × 7 列）</div><SlotGrid @select="selected = $event" />
  <q-card v-if="selected" flat bordered class="q-mt-md"><q-card-section><div class="text-h6">{{ selected.id }} · {{ product(selected).name }}</div><div>庫存：{{ selected.count }} / {{ selected.capacity }} 籃</div><div>預估效期：{{ selected.expires }}</div><q-btn class="q-mt-sm" color="red-9" label="模擬補貨" @click="store.refill(selected.id)" /></q-card-section></q-card>
  <q-card flat bordered class="q-mt-md"><q-card-section><div class="text-h6">智慧儲位建議（模擬）</div><div class="text-body2 q-mb-md">依近期銷量、補貨頻率與食材效期，建議高週轉商品配置在優先取料位置。</div><div v-for="p in ranking" :key="p.id" class="row justify-between q-py-xs"><span>{{ p.name }}</span><q-badge outline color="red-9">銷量 {{ p.sold }} · 建議優先</q-badge></div><q-separator class="q-my-md" /><div class="text-subtitle2">補貨排程建議</div><div v-for="p in store.lowStock" :key="p.id" class="text-body2 q-mt-xs">{{ p.name }}：目前 {{ p.stock }} 份，建議補至 40 份</div></q-card-section></q-card>
</q-page></template>
<script>
import PageHeading from 'src/components/PageHeading.vue'
import StatCard from 'src/components/StatCard.vue'
import SlotGrid from 'src/components/SlotGrid.vue'
import { useDemoStore } from 'src/store/demo'
export default {
  components: { PageHeading, StatCard, SlotGrid },
  data () { return { store: useDemoStore(), selected: null } },
  computed: { ranking () { return this.store.products.slice().sort((a, b) => b.sold - a.sold).slice(0, 4) } },
  methods: { product (slot) { return this.store.products.find(p => p.id === slot.productId) || this.store.products[0] } }
}
</script>

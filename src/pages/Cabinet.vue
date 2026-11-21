<template><q-page class="q-pa-md"><PageHeading code="B1" title="食材理貨櫃管理" subtitle="28 格儲位 · 溫控 · 遠端監控 · 故障預警" />
  <div class="row q-col-gutter-sm"><div class="col-6"><StatCard label="櫃內溫度（模擬）" :value="store.temperature.toFixed(1)" unit="°C" /></div><div class="col-6"><StatCard label="櫃體連線（模擬）" :value="store.cabinetOnline ? '正常' : '離線'" /></div></div>
  <q-card flat bordered class="q-mt-md"><q-card-section><div class="row justify-between items-center"><b>設備控制展示</b><q-btn size="sm" outline color="red-9" :label="store.cabinetOnline ? '模擬斷線' : '模擬復線'" @click="store.toggleCabinet()" /></div><div class="text-caption q-mt-sm">核定查核規格：4 排 7 列、4°C ± 3°C；本介面未連接實體設備。</div><q-slider v-model="store.temperature" :min="0" :max="12" :step="0.1" label label-always color="red-9" class="q-mt-lg" /><q-banner v-if="store.temperature < 1 || store.temperature > 7" class="bg-red-1 text-red-9">溫度超出展示設定範圍，模擬警報</q-banner></q-card-section></q-card>
  <div class="text-subtitle2 q-mt-md q-mb-sm">食材儲位即時示意</div><SlotGrid @select="selected = $event" />
  <q-card v-if="selected" flat bordered class="q-mt-md"><q-card-section><div class="text-h6">儲位 {{ selected.id }}</div><div>{{ product(selected).name }} · {{ selected.count }} 籃</div><div>效期：{{ selected.expires }}</div><q-btn color="red-9" label="模擬補貨 / 盤點" class="q-mt-sm" @click="store.refill(selected.id)" /></q-card-section></q-card>
  <q-banner class="bg-grey-2 q-mt-md text-caption">設備規格展示：70 × 100 × 120 公分、12 度斜坡軌道、炸籃 15 × 15 × 20 公分、三軸夾爪滑台、110V / 60Hz。實機照片與測試影片須另以真實佐證提供。</q-banner>
</q-page></template>
<script>
import PageHeading from 'src/components/PageHeading.vue'
import StatCard from 'src/components/StatCard.vue'
import SlotGrid from 'src/components/SlotGrid.vue'
import { useDemoStore } from 'src/store/demo'
export default {
  components: { PageHeading, StatCard, SlotGrid },
  data () { return { store: useDemoStore(), selected: null } },
  methods: { product (slot) { return this.store.products.find(p => p.id === slot.productId) || this.store.products[0] } }
}
</script>

<template><q-page class="q-pa-md"><PageHeading code="B2" title="Web 管理後台" subtitle="會員 · 消費 · 線上叫貨 · 庫存 · 數據報表" />
  <div class="row q-col-gutter-sm"><div class="col-6"><StatCard label="會員數（模擬）" value="1,286" unit="人" /></div><div class="col-6"><StatCard label="本月消費（模擬）" value="325,600" unit="元" /></div></div>
  <q-card flat bordered class="q-mt-md"><q-card-section><div class="text-h6">線上叫貨管理</div><div v-for="p in store.lowStock" :key="p.id" class="row justify-between items-center q-py-sm"><div>{{ p.name }} · {{ p.stock }} 份</div><q-btn size="sm" color="red-9" outline label="模擬叫貨" @click="order(p)" /></div></q-card-section></q-card>
  <q-card flat bordered class="q-mt-md"><q-card-section><div class="text-h6">消費與庫存分析</div><div v-for="p in store.products.slice(0, 5)" :key="p.id" class="q-my-md"><div class="row justify-between text-caption"><span>{{ p.name }}</span><span>{{ p.sold }} 份</span></div><q-linear-progress :value="p.sold / 100" color="red-9" size="10px" rounded /></div></q-card-section></q-card>
  <q-banner class="bg-grey-2 q-mt-md">Web、iOS 與 Android 為計畫規劃的服務版本；本次提供適用行動裝置的響應式 Web 展示，不宣稱已發布原生 App。</q-banner>
</q-page></template>
<script>
import PageHeading from 'src/components/PageHeading.vue'
import StatCard from 'src/components/StatCard.vue'
import { useDemoStore } from 'src/store/demo'
export default {
  components: { PageHeading, StatCard },
  data () { return { store: useDemoStore() } },
  methods: { order (p) { this.store.addLog('叫貨', `${p.name} 模擬叫貨 ${Math.max(0, 40 - p.stock)} 份`); this.$q.notify({ color: 'positive', message: '已產生模擬叫貨紀錄' }) } }
}
</script>

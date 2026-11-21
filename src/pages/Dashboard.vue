<template><q-page class="q-pa-md"><PageHeading code="A7" title="總部戰情室" subtitle="銷售 · 訂單 · 會員 · 庫存 · 即時預警" />
  <q-select v-model="selectedStore" :options="['全部門市', ...stores.map(s => s.name)]" outlined dense label="門市篩選" class="q-mb-md" />
  <div class="row q-col-gutter-sm"><div class="col-6"><StatCard label="模擬營收" :value="money" unit="元" /></div><div class="col-6"><StatCard label="模擬訂單" :value="orders" unit="筆" /></div><div class="col-6"><StatCard label="會員活躍度" value="68" unit="%" /></div><div class="col-6"><StatCard label="庫存預警" :value="store.lowStock.length" unit="項" /></div></div>
  <q-card flat bordered class="q-mt-md"><q-card-section><div class="text-h6">近七日營運趨勢（模擬）</div><div class="bar-chart"><div v-for="(v, i) in revenueTrend" :key="i" class="bar-col"><div class="bar" :style="{ height: `${v}%` }" /><div class="text-caption">{{ i + 1 }}日</div></div></div></q-card-section></q-card>
  <q-card flat bordered class="q-mt-md"><q-card-section><div class="text-h6">門市營運比較</div><q-list separator><q-item v-for="s in stores" :key="s.name"><q-item-section><q-item-label>{{ s.name }}</q-item-label><q-item-label caption>{{ s.orders }} 筆訂單 · {{ s.status }}</q-item-label></q-item-section><q-item-section side>NT$ {{ s.revenue.toLocaleString() }}</q-item-section></q-item></q-list></q-card-section></q-card>
  <q-card flat bordered class="q-mt-md"><q-card-section><div class="text-h6">設備與異常告警</div><div class="q-my-sm">理貨櫃：{{ store.cabinetOnline ? '連線正常（模擬）' : '模擬離線警告' }}</div><div>低庫存商品：{{ store.lowStock.map(p => p.name).join('、') }}</div></q-card-section></q-card>
</q-page></template>
<script>
import PageHeading from 'src/components/PageHeading.vue'
import StatCard from 'src/components/StatCard.vue'
import { useDemoStore } from 'src/store/demo'
import { stores } from 'src/data/mock'
// import { stores, revenueTrend } from 'src/data/mock'
export default {
  components: { PageHeading, StatCard },
  data () { return { store: useDemoStore(), selectedStore: '全部門市' } },
  computed: { filtered () { return this.selectedStore === '全部門市' ? stores : stores.filter(s => s.name === this.selectedStore) }, money () { return this.filtered.reduce((sum, s) => sum + s.revenue, 0).toLocaleString() }, orders () { return this.filtered.reduce((sum, s) => sum + s.orders, 0) } }
}
</script>

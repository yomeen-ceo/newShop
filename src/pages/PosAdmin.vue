<template><q-page class="q-pa-md"><PageHeading code="A4" title="POS 營運後台" subtitle="訂單 · 庫存 · 會員 · 報表 · 行銷" />
  <div class="row q-col-gutter-sm"><div class="col-6"><StatCard label="今日營收（模擬）" value="28,650" unit="元" /></div><div class="col-6"><StatCard label="今日訂單（模擬）" value="186" unit="筆" /></div><div class="col-6"><StatCard label="會員數（模擬）" value="1,286" unit="人" /></div><div class="col-6"><StatCard label="低庫存商品" :value="store.lowStock.length" unit="項" /></div></div>
  <q-tabs v-model="tab" dense active-color="red-9" class="q-mt-md"><q-tab name="orders" label="訂單" /><q-tab name="members" label="會員行銷" /><q-tab name="report" label="報表" /></q-tabs>
  <q-tab-panels v-model="tab" animated class="bg-transparent"><q-tab-panel name="orders" class="q-pa-none"><q-card v-for="o in store.orders" :key="o.id" flat bordered class="q-my-sm"><q-card-section><div class="row justify-between"><b>{{ o.id }} · {{ o.status }}</b><b>NT$ {{ o.total }}</b></div><div class="text-caption">{{ o.items.join('、') }} · {{ o.channel }}</div></q-card-section></q-card></q-tab-panel>
  <q-tab-panel name="members" class="q-pa-none"><q-card flat bordered><q-card-section><div class="text-h6">會員活動管理</div><q-list separator><q-item><q-item-section>會員集點活動</q-item-section><q-item-section side><q-badge color="positive">展示中</q-badge></q-item-section></q-item><q-item><q-item-section>滿 200 元折 20 元</q-item-section><q-item-section side>優惠活動</q-item-section></q-item><q-item><q-item-section>電子優惠券發放</q-item-section><q-item-section side>模擬 128 張</q-item-section></q-item></q-list></q-card-section></q-card></q-tab-panel>
  <q-tab-panel name="report" class="q-pa-none"><q-card flat bordered><q-card-section><div class="text-h6">銷售排行</div><div v-for="p in store.products.slice().sort((a,b) => b.sold - a.sold)" :key="p.id" class="q-my-sm"><div class="row justify-between text-caption"><span>{{ p.name }}</span><span>{{ p.sold }} 份</span></div><q-linear-progress rounded size="9px" color="red-8" :value="p.sold / 100" /></div></q-card-section></q-card></q-tab-panel></q-tab-panels>
</q-page></template>
<script>
import PageHeading from 'src/components/PageHeading.vue'
import StatCard from 'src/components/StatCard.vue'
import { useDemoStore } from 'src/store/demo'
export default {
  components: { PageHeading, StatCard },
  data () { return { store: useDemoStore(), tab: 'orders' } }
}
</script>

<template><q-page class="q-pa-md"><PageHeading code="A6" title="庫存通報管理" subtitle="安全庫存 · 滯料通報 · 庫存異動 · 採購建議" />
  <div class="row q-col-gutter-sm q-mb-md"><div class="col-6"><StatCard label="管理商品" :value="store.products.length" unit="項" /></div><div class="col-6"><StatCard label="低庫存預警" :value="store.lowStock.length" unit="項" /></div></div>
  <q-card flat bordered><q-card-section><div class="text-h6">庫存狀態與安全水位</div><div v-for="p in store.products" :key="p.id" class="q-my-md"><div class="row justify-between"><b>{{ p.name }}</b><span :class="p.stock < 20 ? 'text-red-9' : 'text-grey-8'">{{ p.stock }} 份</span></div><q-linear-progress rounded size="12px" :value="p.stock / 60" :color="p.stock < 20 ? 'red-9' : 'green-7'" class="q-my-xs" /><div class="row justify-between items-center"><span class="text-caption">安全庫存：20 份</span><q-btn size="xs" outline color="red-9" label="產生採購建議" @click="suggest(p)" /></div></div></q-card-section></q-card>
  <q-card flat bordered class="q-mt-md"><q-card-section><div class="text-h6">採購與滯料分析（模擬）</div><div v-for="p in store.lowStock" :key="p.id" class="q-py-xs">{{ p.name }}：建議採購 {{ 40 - p.stock }} 份</div><q-separator class="q-my-sm" /><div class="text-caption">滯料監控：依銷售速度及效期模擬分析，需於正式導入後驗證。</div></q-card-section></q-card>
  <q-dialog v-model="show"><q-card class="dialog-card"><q-card-section class="text-h6">採購建議已產生（模擬）</q-card-section><q-card-section>{{ message }}</q-card-section><q-card-actions align="right"><q-btn color="red-9" label="確定" v-close-popup /></q-card-actions></q-card></q-dialog>
</q-page></template>
<script>
import PageHeading from 'src/components/PageHeading.vue'
import StatCard from 'src/components/StatCard.vue'
import { useDemoStore } from 'src/store/demo'
export default {
  components: { PageHeading, StatCard },
  data () { return { store: useDemoStore(), show: false, message: '' } },
  methods: { suggest (p) { this.message = `${p.name}：目前 ${p.stock} 份，建議補貨 ${Math.max(0, 40 - p.stock)} 份。`; this.store.addLog('採購', this.message); this.show = true } }
}
</script>

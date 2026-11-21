<template><q-page class="q-pa-md"><PageHeading code="A4" title="廚房與出餐叫號" subtitle="廚房顯示 · 取餐叫號 · 候位看板" />
  <q-card flat bordered class="q-mb-md text-center"><q-card-section><div class="text-caption">目前可取餐號碼</div><div class="text-h2 text-red-9 text-weight-bold">{{ ready.map(o => o.id).join('、') || '—' }}</div><div>請至取餐口領取餐點</div></q-card-section></q-card>
  <q-card v-for="o in store.orders" :key="o.id" flat bordered class="q-mb-sm"><q-card-section><div class="row justify-between items-center"><div class="text-h6">{{ o.id }}</div><q-badge :color="o.status === '可取餐' ? 'positive' : 'orange-9'">{{ o.status }}</q-badge></div><div class="q-my-sm">{{ o.items.join('、') }}</div><div class="row justify-between items-center"><span class="text-caption">{{ o.time }} · {{ o.channel }}</span><q-btn color="red-9" size="sm" :disable="o.status === '已取餐'" label="下一階段" @click="store.nextOrder(o.id)" /></div></q-card-section></q-card>
</q-page></template>
<script>
import PageHeading from 'src/components/PageHeading.vue'
import { useDemoStore } from 'src/store/demo'
export default {
  components: { PageHeading },
  data () { return { store: useDemoStore() } },
  computed: { ready () { return this.store.orders.filter(o => o.status === '可取餐') } }
}
</script>

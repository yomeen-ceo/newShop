<template><q-page class="q-pa-md"><PageHeading code="B2" title="無人門市 Web" subtitle="商品 · 優惠 · 訂單查詢 · 會員 · 客服" />
  <q-card flat bordered class="q-mb-md"><q-card-section class="text-center"><img src="~assets/logo.png" alt="十九甲雞排" class="portal-logo" /><div class="text-h6 q-mt-sm">美味傳香，智慧即享</div><div class="text-caption">線上點餐與門市服務展示</div><q-btn color="red-9" label="立即點餐" to="/pos" class="q-mt-md full-width" /></q-card-section></q-card>
  <q-tabs v-model="tab" dense active-color="red-9"><q-tab name="menu" label="菜單" /><q-tab name="coupon" label="優惠會員" /><q-tab name="order" label="訂單查詢" /><q-tab name="help" label="客服公告" /></q-tabs>
  <q-tab-panels v-model="tab" animated class="bg-transparent"><q-tab-panel name="menu" class="q-pa-none"><q-card v-for="p in store.products" :key="p.id" flat bordered class="q-my-sm"><q-card-section class="row items-center"><div class="text-h4 q-mr-md">{{ p.emoji }}</div><div class="col"><b>{{ p.name }}</b><div class="text-red-9">NT$ {{ p.price }}</div></div><q-btn flat round color="red-9" icon="add_circle" @click="add(p)" /></q-card-section></q-card></q-tab-panel>
  <q-tab-panel name="coupon" class="q-pa-none"><q-card flat bordered class="q-my-sm"><q-card-section><div class="text-h6">會員點數 {{ store.memberPoints }} 點</div><div>可用優惠券 {{ store.coupons }} 張</div><q-banner class="bg-red-1 q-mt-sm">滿 200 元折 20 元（模擬優惠）</q-banner></q-card-section></q-card></q-tab-panel>
  <q-tab-panel name="order" class="q-pa-none"><q-input v-model="query" outlined dense label="輸入取餐號碼，例如 A108" class="q-my-sm" /><q-card v-for="o in matched" :key="o.id" flat bordered class="q-my-sm"><q-card-section><b>{{ o.id }} · {{ o.status }}</b><div>{{ o.items.join('、') }}</div></q-card-section></q-card><div v-if="!matched.length" class="text-grey-7 q-pa-md">查無符合的展示訂單</div></q-tab-panel>
  <q-tab-panel name="help" class="q-pa-none"><q-list bordered separator class="rounded-borders q-my-sm"><q-item v-for="n in store.notifications" :key="n"><q-item-section>{{ n }}</q-item-section></q-item><q-item><q-item-section>常見問題：如何查詢取餐號碼？</q-item-section></q-item><q-item><q-item-section>客服回饋：展示版尚未開放真實送出</q-item-section></q-item><q-item><q-item-section>社群整合：Facebook / Instagram（預留）</q-item-section></q-item><q-item><q-item-section>招商申請：展示表單將於正式版啟用</q-item-section></q-item></q-list></q-tab-panel></q-tab-panels>
</q-page></template>
<script>
import PageHeading from 'src/components/PageHeading.vue'
import { useDemoStore } from 'src/store/demo'
export default {
  components: { PageHeading },
  data () { return { store: useDemoStore(), tab: 'menu', query: '' } },
  computed: { matched () { return this.store.orders.filter(o => o.id.toLowerCase().includes(this.query.trim().toLowerCase())) } },
  methods: { add (p) { this.store.addCart(p); this.$q.notify({ color: 'positive', message: `${p.name} 已加入模擬購物車，請至點餐頁結帳` }) } }
}
</script>

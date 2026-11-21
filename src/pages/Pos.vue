<template>
  <q-page class="q-pa-md"><PageHeading code="A4" title="自助點餐 POS" subtitle="電子菜單 · 猜你喜歡 · 促銷升級" />
    <q-tabs v-model="category" dense active-color="red-9" indicator-color="red-9" class="q-mb-md"><q-tab v-for="c in categories" :key="c" :name="c" :label="c" /></q-tabs>
    <div class="row q-col-gutter-sm"><div v-for="p in filtered" :key="p.id" class="col-6"><q-card flat bordered class="product-card"><q-card-section class="text-center q-pa-sm"><div class="product-emoji">{{ p.emoji }}</div><div class="text-weight-bold">{{ p.name }}</div><div class="text-red-9 text-weight-bold">NT$ {{ p.price }}</div><q-btn color="red-9" size="sm" unelevated rounded label="加入餐點" icon="add" class="full-width q-mt-sm" @click="store.addCart(p)" /></q-card-section></q-card></div></div>
    <q-card flat bordered class="q-mt-md"><q-card-section><div class="row justify-between items-center"><div class="text-subtitle1 text-weight-bold">購物車（{{ store.cartCount }}）</div><div class="text-h6 text-red-9">NT$ {{ store.cartTotal }}</div></div><div v-for="item in store.cart" :key="item.id" class="row items-center justify-between q-py-xs"><span>{{ item.name }}</span><div><q-btn round flat dense icon="remove" @click="store.changeQty(item.id, -1)" />{{ item.qty }}<q-btn round flat dense icon="add" @click="store.changeQty(item.id, 1)" /></div></div><q-btn color="red-9" class="full-width q-mt-sm" label="前往結帳" :disable="!store.cart.length" @click="checkoutOpen = true" /></q-card-section></q-card>
    <q-dialog v-model="checkoutOpen"><q-card class="dialog-card"><q-card-section class="text-h6">模擬結帳</q-card-section><q-card-section><div class="text-h5 text-red-9">NT$ {{ store.cartTotal }}</div><q-select v-model="payment" :options="['信用卡', 'LINE Pay', '現金', '電子支付']" label="付款方式（模擬）" outlined class="q-mt-md" /><q-select v-model="invoice" :options="['手機載具', '紙本發票', '捐贈發票']" label="電子發票（模擬）" outlined class="q-mt-md" /></q-card-section><q-card-actions align="right"><q-btn flat label="取消" v-close-popup /><q-btn color="red-9" label="確認模擬付款" @click="finish" /></q-card-actions></q-card></q-dialog>
    <q-dialog v-model="successOpen"><q-card class="dialog-card text-center"><q-card-section><q-icon name="check_circle" color="positive" size="64px" /><div class="text-h5">訂單建立成功</div><div class="text-h3 text-red-9 q-my-md">{{ lastOrder }}</div><div>預估取餐約 8～12 分鐘（模擬）</div><div class="text-caption text-grey-7">付款及發票皆未連接真實服務</div></q-card-section><q-card-actions align="center"><q-btn color="red-9" label="查看叫號" to="/kitchen" v-close-popup /></q-card-actions></q-card></q-dialog>
  </q-page>
</template>
<script>
import { useDemoStore } from 'src/store/demo'
import PageHeading from 'src/components/PageHeading.vue'
export default {
  components: { PageHeading },
  data () { return { store: useDemoStore(), category: '全部', categories: ['全部', '雞排', '雞肉', '點心', '海鮮', '蔬菜'], checkoutOpen: false, successOpen: false, payment: 'LINE Pay', invoice: '手機載具', lastOrder: '' } },
  computed: { filtered () { return this.category === '全部' ? this.store.products : this.store.products.filter(p => p.category === this.category) } },
  methods: { finish () { this.lastOrder = this.store.checkout(this.payment, this.invoice); this.checkoutOpen = false; this.successOpen = true } }
}
</script>

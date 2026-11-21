<template><q-page class="q-pa-md"><PageHeading code="查核" title="期中查核資料總覽" subtitle="系統功能展示、操作紀錄與佐證準備" />
  <q-card v-for="item in items" :key="item.code" flat bordered class="q-mb-sm"><q-card-section><div class="row justify-between items-center"><b>{{ item.code }} · {{ item.name }}</b><q-badge color="orange-9">展示版</q-badge></div><div class="text-caption q-my-sm">{{ item.evidence }}</div><q-btn color="red-9" outline size="sm" label="查看系統畫面" :to="item.path" /></q-card-section></q-card>
  <q-banner class="bg-amber-1 text-brown-9 q-mt-md">查核提醒：模擬畫面僅可作為功能設計與操作展示；實際金流串接、電子發票、硬體照片、設備測試影片、委託驗證及正式營運數據，需另外提供真實佐證。</q-banner>
</q-page></template>
<script>
import PageHeading from 'src/components/PageHeading.vue'
export default {
  components: { PageHeading },
  data () {
    return {
      items: [
        { code: 'A4', name: '自助點餐 POS', path: '/pos', evidence: '功能清單、架構圖、訂單/庫存/會員報表、前後台截圖；金流與電子發票串接佐證另附' },
        { code: 'A5', name: '最佳儲位分析', path: '/storage', evidence: '儲位分析架構圖、儲位優化與補貨建議、系統運作紀錄截圖' },
        { code: 'B1', name: '食材理貨櫃', path: '/cabinet', evidence: '系統架構、系統文件、操作手冊；實體設備照片與影片另附' },
        { code: 'A6', name: '庫存通報', path: '/inventory', evidence: '系統架構、功能模組、操作手冊（期末查核）' },
        { code: 'A7', name: '總部戰情室', path: '/dashboard', evidence: '戰情室功能、單店/單品/時段報表、跨裝置畫面（期末查核）' },
        { code: 'B2', name: '無人門市 Web', path: '/web', evidence: '前後台功能、操作手冊、行動裝置展示（期末查核）' }
      ]
    }
  }
}
</script>

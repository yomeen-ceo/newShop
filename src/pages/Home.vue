<template>
  <q-page class="q-pa-md">
    <div class="brand-hero"><img src="~assets/logo.png" alt="十九甲雞排標誌" /><div class="text-h5 text-weight-bold q-mt-md">0.5 人智慧炸物店</div><div class="text-caption">期中查核 · 前端互動展示系統</div></div>
    <div class="text-subtitle1 text-weight-bold q-mb-sm">系統功能總覽</div>
    <div class="row q-col-gutter-sm">
      <div v-for="item in menus" :key="item.path" class="col-6"><q-card class="menu-card cursor-pointer" flat bordered @click="$router.push(item.path)"><q-card-section><q-icon :name="item.icon" size="32px" color="red-9" /><div class="text-caption text-red-8 q-mt-sm">{{ item.code }}</div><div class="text-subtitle2 text-weight-bold">{{ item.title }}</div><div class="text-caption text-grey-7">{{ item.note }}</div></q-card-section></q-card></div>
    </div>
    <q-banner class="bg-grey-2 q-mt-md rounded-borders text-caption">本版採用 Vue 2 + Quasar 1，前端狀態互動模擬。重新整理後會恢復預設展示資料；期末再串接正式服務。</q-banner>
  </q-page>
</template>
<script>

export default {
  data () {
    return {
      menus: [
        { code: 'A4', title: '自助點餐 POS', note: '顧客點餐與付款', icon: 'point_of_sale', path: '/pos' },
        { code: 'A4', title: 'POS 營運後台', note: '訂單、會員、報表', icon: 'receipt_long', path: '/pos-admin' },
        { code: 'A4', title: '廚房與叫號', note: '製作與出餐管理', icon: 'restaurant', path: '/kitchen' },
        { code: 'A5', title: '最佳儲位分析', note: '配置與補貨建議', icon: 'grid_view', path: '/storage' },
        { code: 'B1', title: '食材理貨櫃', note: '28 格儲位與溫控', icon: 'kitchen', path: '/cabinet' },
        { code: 'A6', title: '庫存通報', note: '安全庫存與預警', icon: 'inventory_2', path: '/inventory' },
        { code: 'A7', title: '總部戰情室', note: '營運數據與分析', icon: 'monitoring', path: '/dashboard' },
        { code: 'B2', title: '無人門市 Web', note: '顧客線上服務', icon: 'language', path: '/web' },
        { code: 'B2', title: 'Web 管理後台', note: '會員、叫貨與報表', icon: 'admin_panel_settings', path: '/web-admin' },
        { code: '查核', title: '報表與紀錄', note: '截圖與模擬紀錄', icon: 'description', path: '/reports' },
        { code: '查核', title: '系統操作日誌', note: '展示事件記錄', icon: 'history', path: '/logs' }
      ]
    }
  }
}
</script>

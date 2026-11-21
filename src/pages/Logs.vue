<template><q-page class="q-pa-md"><PageHeading code="查核" title="系統操作日誌" subtitle="僅記錄本次前端操作，重新整理後重設" /><q-list bordered separator class="rounded-borders"><q-item v-for="(log, index) in store.logs" :key="index"><q-item-section><q-item-label>{{ log.message }}</q-item-label><q-item-label caption>{{ log.time }} · {{ log.type }} · 模擬事件</q-item-label></q-item-section></q-item></q-list></q-page>
</template>
<script>
import PageHeading from 'src/components/PageHeading.vue'
import { useDemoStore } from 'src/store/demo'
export default {
  components: { PageHeading },
  data () { return { store: useDemoStore() } }
}
</script>

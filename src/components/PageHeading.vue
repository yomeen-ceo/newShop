<template>
  <div class="q-mb-md">
    <div class="row items-center justify-between"><div><div class="text-overline text-red-8 text-weight-bold">{{ code }} · 系統展示</div><div class="text-h5 text-weight-bold">{{ title }}</div></div><q-btn outline dense color="red-8" icon="home" label="首頁" to="/" /></div>
    <div v-if="subtitle" class="text-grey-7 q-mt-xs">{{ subtitle }}</div>
  </div>
</template>
<script>
export default {
  props: {
    code: { type: String, default: '' },
    title: { type: String, required: true },
    subtitle: { type: String, default: '' }
  }
}
</script>

<template><q-card flat bordered class="stat-card"><q-card-section class="q-pa-sm"><div class="text-caption text-grey-7">{{ label }}</div><div class="text-h6 text-weight-bold">{{ value }}<span class="text-caption q-ml-xs">{{ unit }}</span></div></q-card-section></q-card></template>
<script>
export default {
  props: {
    label: String,
    value: [String, Number],
    unit: { type: String, default: '' }
  }
}
</script>

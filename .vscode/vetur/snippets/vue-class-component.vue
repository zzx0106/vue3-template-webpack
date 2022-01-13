<template>
  <div class="${1:my-page}">
    
  </div>
</template>

<script lang="ts">
import { baseComponent } from '@/utils/baseComponent';
import { onMounted } from 'vue';

export default baseComponent({
  name: '$1',
  setup(props, ctx, base) {
    onMounted(() => {});
    return {};
  },
});
</script>

<style lang="scss" scoped>
.$1 {
}
</style>

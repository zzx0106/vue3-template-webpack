<template>
  <div class="my-page"></div>
</template>

<script lang="ts">
import { baseComponent } from '@/utils/baseComponent';
import { onMounted } from 'vue';

export default baseComponent({
  name: 'my-page',
  setup(props, ctx, base) {
    onMounted(() => {});
    return {};
  },
});

baseComponent((props, ctx, base) => {
  base.Toast('111');
});
</script>

<style lang="scss" scoped>
.my-page {
}
</style>

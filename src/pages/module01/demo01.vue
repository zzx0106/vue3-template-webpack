<template>
  <div class="layout-container">
    <div class="">demo01</div>
    {{ count }}
    <button @click="click">click me</button>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import { baseComponent } from '@/utils/baseComponent';
export default baseComponent({
  name: '',
  components: {},
  setup(props, ctx, base) {
    const count = ref(0);
    const click = async () => {
      count.value++;
      await base?.Toast('12333232');
      await base?.Toast({
        type: 'success',
        message: 'success!!',
      });
      await base?.Toast({
        type: 'error',
        message: 'error!!',
        duration: 6000,
      });
      console.log('😄默认延迟3秒展示这句话…');
    };

    const fn = () => {
      console.log('fn');
    };
    return {
      count,
      click,
    };
  },
});
// export default defineComponent({
//   name: '',
//   components: {},
//   setup() {
//     return {};
//   },
// });
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
}
</style>

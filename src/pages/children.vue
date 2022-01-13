<template>
  children路由------》
  <input v-model="asd" />
  {{ asd }}
  <hello-world :msg="'1231'"></hello-world>
  <jsx-component></jsx-component>
</template>

<script>
import { defineComponent, ref } from 'vue';
import JsxComponent from '@/components/c-jsx-component.vue';
import HelloWorld from '@/components/c-helloworld.vue';
export default defineComponent({
  components: { JsxComponent, HelloWorld },
  setup() {
    const asd = ref('');
    return {
      asd,
    };
  },
});
</script>

<style></style>

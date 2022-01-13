<template>
  <div class="">
    demo04
    <button @click="jump">sadad</button>
  </div>
</template>

<script lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { defineComponent } from 'vue';
export default defineComponent({
  name: '',
  components: {},
  setup() {
    const router = useRouter();
    function jump() {
      router.push('/children');
    }
    return { jump };
  },
});
</script>

<style lang="scss" scoped></style>

<template>
  <!-- <button @click="navigateTo">跳转子路由</button> -->
  <div class="view-header">
    <c-nav />
  </div>
  <div class="view-body">
    <c-sidebar />
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
      <!-- <component :is="Component" /> -->
    </router-view>
  </div>
</template>

<script>
import { useRoute, useRouter } from 'vue-router';
import { defineComponent, onMounted } from 'vue';
import cSidebar from '@/components/c-sidebar.vue';
import cNav from '@/components/c-nav.vue';

export default defineComponent({
  components: { cSidebar, cNav },
  setup() {
    onMounted(() => {
      console.log('onMounted');
    });

    const router = useRouter();
    function navigateTo() {
      console.log('router', router);
      router.push('/children');
    }
    return {
      navigateTo,
    };
  },
});
</script>

<style>
.layout {
  height: 100%;
}
</style>

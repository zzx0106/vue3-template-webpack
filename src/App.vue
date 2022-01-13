<template>
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import HelloWorld from './components/c-helloworld.vue';

// export default baseComponent() {
//   return {
//     name: ''
//   }
// }
export default defineComponent({
  name: 'app',
  components: {
    HelloWorld,
  },
  setup(props, ctx) {
    const route = useRouter();
    console.log(111, route.options);

    onMounted(() => {
      console.log(ctx, 111);
    });
  },

  methods: {
    add: () => {
      console.log(3333);
    },
  },
});
</script>

<style>
#app {
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

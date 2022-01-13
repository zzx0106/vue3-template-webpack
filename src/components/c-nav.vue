<template>
  <ul class="nav">
    <router-link v-for="(route, idx) in currRoute" :key="idx" class="item" :to="route.path">{{ route.name }}</router-link>
  </ul>
</template>

<script>
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'c-nav',
  components: {},
  props: {},
  setup() {
    const route = useRouter();
    const currRoute = route.options.routes[0].children;
    return {
      currRoute,
    };
  },
});
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  padding-left: 200px;
  width: 100%;
  height: 50px;
  color: #fff;
  background-color: #b7cdf4;
}
.item {
  margin-right: 20px;
  height: 50px;
  line-height: 50px;
  cursor: pointer;
}
.itm:last-child {
  margin-right: 0;
}
.item:hover {
  background-color: #9ecef5;
}
</style>

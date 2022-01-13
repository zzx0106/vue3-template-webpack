<template>
  <h1>{{ msg }}</h1>

  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a href="https://marketplace.visualstudio.com/items?itemName=octref.vetur" target="_blank">Vetur</a>
    or
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    (if using
    <code>&lt;script setup&gt;</code>
    )
  </p>

  <p>
    See
    <code>README.md</code>
    for more information.
  </p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">Vite Docs</a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
  </p>

  <!-- <button v-pms="['asd']" @click="changeRouter">count is: {{ count }}</button> -->
  <p>
    <input type="text" name="" v-model="asd" id="" />
    Edit
    <code>components/HelloWorld.vue</code>
    to test hot module replacement.
  </p>
  --- {{ compSomething }} --- {{ something }}
</template>

<script lang="ts">
import { useRouter } from 'vue-router';
import { ref, defineComponent, computed, toRefs, toRef } from 'vue';
// import { useStore, mapState, mapActions } from 'vuex';
// import { key } from '@/store/store';
import useCommonStore from '@/store/modules/common';
import { mapActions, mapState } from 'pinia';
export default defineComponent({
  name: 'hello-world',
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  /**
   * 使用pinia
   */
  setup() {
    const common = useCommonStore();
    console.log('common', common.something);
    const compSomething = computed(() => common.something);
    const states = mapState(useCommonStore, ['something']);

    const actions = mapActions(useCommonStore, ['act_methodName']);
    function changeRouter() {
      common.act_methodName();
      actions.act_methodName();
      console.log('common', common.something, states);
    }
    console.log('actions', actions);

    return {
      compSomething,
      changeRouter,

      ...mapState(useCommonStore, ['something']),
    };
  },
  data() {
    return {
      asd: 'asdsd',
    };
  },

  /**
   * 使用vuex
   */
  // setup: () => {
  //   const count = ref(0);
  //   const router = useRouter();
  //   const common = mapState('common', ['something']);
  //   const md1 = mapState('module1', ['moduleSomething', 'ksad']);
  //   const asd = mapActions('common', ['act_methodName']);
  //   const store = useStore(key);
  //   // bind作用：https://github.com/vuejs/vuex/blob/4.0/src/helpers.js#L88
  //   // 因为源码中map方法读取了this。setup中没有this，所以得手动绑定$store对象
  //   const act = asd.act_methodName.bind({ $store: store });
  //   console.log('common', common, md1);

  //   const compSomething = computed(common.something.bind({ $store: store }));
  //   const something = computed(() => store.state.common.something);
  //   console.log('store', compSomething.value);

  //   console.log('router', router);
  //   function changeRouter() {
  //     console.log('——coomm', compSomething.value);
  //     // act();
  //     asd.act_methodName();
  //     // router.push('/bbb');
  //   }
  //   return {
  //     count,
  //     changeRouter,
  //     compSomething,
  //     some: computed(() => store.state.common.something),
  //     something,
  //   };
  // },
});
</script>

<style lang="scss" scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
  @include maxLine(2);
}
</style>

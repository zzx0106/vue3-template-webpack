<template>
  <div class="img-preload">
    <img v-if="!loaded" class="my-default-image" :class="{ unshow: loaded }" :src="preSrc" />
    <img class="my-load-image" :class="{ show: loaded }" :src="src" @load="finishLoad" @error="loadError" />
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'g-img-preload',
  props: {
    src: {
      type: String,
      default: '',
    },
    preSrc: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      loaded: false,
    };
  },
  computed: {},
  created() {},
  methods: {
    finishLoad() {
      this.loaded = true;
    },
    loadError() {
      this.loaded = false;
    },
  },
});
</script>

<style lang="scss" scoped>
.img-preload {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  .my-default-image,
  .my-load-image {
    width: 100%;
    height: auto;
    @media only screen and (max-width: 1920px) {
      width: 1920px;
      height: auto;
    }
  }
  .my-default-image {
    position: absolute;
    transition: opacity 0.1s ease 0.1s;
    &.unshow {
      opacity: 0;
    }
  }
  .my-load-image {
    opacity: 0;
    transition: opacity 0.1s ease;
    &.show {
      opacity: 1;
    }
  }
}
</style>

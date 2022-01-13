<script lang="tsx">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'c-sidebar',
  components: {},
  render() {
    return (
      <ul class="sidebar">
        <router-link class="item" to={'/module01/demo01'}>
          demo1
        </router-link>
        <router-link class="item" to={'/module02/demo04'}>
          demo2
        </router-link>
        <router-link class="item" to={'/children'}>
          children
        </router-link>
      </ul>
    );
  },
});
</script>

<style lang="scss" scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  width: 200px;
  height: 100%;
  background-color: #4aaeff;
}
.item:deep {
  padding-left: 20px;
  height: 50px;
  line-height: 50px;
  cursor: pointer;
  color: #fff;
}
.item:hover {
  background-color: #9ecef5;
}
</style>

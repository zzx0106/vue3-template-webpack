方法必须以 export default 的模式导出

v2 → v3 变化
created - 新的！在元素的 attribute 或事件侦听器应用之前调用。
bind → beforeMount
inserted → mounted
beforeUpdate：新的！这是在元素本身更新之前调用的，很像组件生命周期钩子。
update → 移除！有太多的相似之处要更新，所以这是多余的，请改用 updated。
componentUpdated → updated
beforeUnmount：新的！与组件生命周期钩子类似，它将在卸载元素之前调用。
unbind -> unmounted

边界情况：访问组件实例
通常建议保持指令独立于它们所使用的组件实例。从自定义指令中访问实例通常意味着该指令本身应该是一个组件。然而，在某些情况下这是有意义的。

在 Vue 2 中，必须通过 vnode 参数访问组件实例：

bind(el, binding, vnode) {
  const vm = vnode.context
}
在 Vue 3 中，实例是 binding 参数的一个 property：

mounted(el, binding, vnode) {
  const vm = binding.instance
}
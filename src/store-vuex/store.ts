import { App, InjectionKey } from 'vue';
import getters from './getters';
// console.log('getters', getters);

import { createStore, Module, ModuleTree, Store } from 'vuex';

// 获取当前目录下的所有自定义指令
const modulesFiles = require.context('./modules', true, /\.ts$/);
const modules = modulesFiles.keys().reduce((modules: { [key: string]: Function }, modulePath) => {
  // set './app.ts' => 'app'

  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1');
  console.log('modulePath', modulePath, moduleName);
  const value = modulesFiles(modulePath);
  console.log('moduleName', moduleName, value);
  modules[moduleName] = value.default;
  return modules;
}, {}) as ModuleTree<RootState>;

console.log('modules', modules);

import { CommonState } from './modules/common';
import { Module1State } from './modules/module1';

export interface RootState {
  common: CommonState;
  module1: Module1State;
}

export const key: InjectionKey<Store<RootState>> = Symbol();

export default createStore({
  modules,
  getters,
});

/**
 * 限制输入框只能输入数字
 */

import { App } from 'vue';
export default function number(app: App) {
  // app.directive('number', {
  //   beforeMount(el: HTMLElement | HTMLInputElement, binding) {
  //     let wins_0 = /[^\d]/g; //整数判断
  //     let wins_1 = /[^\d^\.]/g; //小数判断
  //     let flag = true;
  //     let points = 0;
  //     let lengths = 0;
  //     let remainder = 0;
  //     let no_int = 0;
  //     const target = (el instanceof HTMLInputElement ? el : el.querySelector('input')) as HTMLInputElement;
  //     target!.addEventListener('compositionstart', (e) => {
  //       flag = false;
  //     });
  //     target!.addEventListener('compositionend', (e) => {
  //       flag = true;
  //     });
  //     document.addEventListener('input', (e: ChangeEvent<HTMLInputElement>) => {
  //       e.target.value;
  //     });
  //     target!.addEventListener('input', (e: Event) => {
  //       setTimeout(function () {
  //         e.target;
  //         const target = e.target as HTMLInputElement;
  //         if (flag) {
  //           if (binding.value == 0) {
  //             if (wins_0.test(target.value)) {
  //               e.target.value = e.target.value.replace(wins_0, '');
  //               e.target.dispatchEvent(new Event('input')); //手动更新v-model值
  //             }
  //           }
  //           if (binding.value == 1) {
  //             if (wins_0.test(e.target.value.toString().replace(/\d+\.(\d*)/, '$1'))) {
  //               remainder = true;
  //             }
  //             if (e.target.value.split('.').length - 1 > 1) {
  //               points = true;
  //             }
  //             if (e.target.value.toString().split('.')[1] != undefined) {
  //               if (e.target.value.toString().split('.')[1].length > 1) {
  //                 lengths = true;
  //               }
  //             }
  //             if (e.target.value.toString().indexOf('.') != -1) {
  //               no_int = false;
  //             } else {
  //               no_int = true;
  //             }
  //             if (wins_1.test(e.target.value) || lengths || points || remainder) {
  //               if (!no_int) {
  //                 e.target.value = e.target.value
  //                   .replace(wins_1, '')
  //                   .replace('.', '$#$')
  //                   .replace(/\./g, '')
  //                   .replace('$#$', '.')
  //                   .replace(/^(\-)*(\d+)\.(\d\d).*$/, '$1$2.$3')
  //                   .substring(0, e.target.value.indexOf('.') + 2);
  //               } else {
  //                 e.target.value = e.target.value.replace(wins_0, '');
  //               }
  //               e.target.dispatchEvent(new Event('input'));
  //             }
  //           }
  //           if (binding.value == 2) {
  //             if (wins_0.test(e.target.value.toString().replace(/\d+\.(\d*)/, '$1'))) {
  //               remainder = true;
  //             }
  //             if (e.target.value.split('.').length - 1 > 1) {
  //               points = true;
  //             }
  //             if (e.target.value.toString().split('.')[1] != undefined) {
  //               if (e.target.value.toString().split('.')[1].length > 2) {
  //                 lengths = true;
  //               }
  //             }
  //             if (e.target.value.toString().indexOf('.') != -1) {
  //               no_int = false;
  //             } else {
  //               no_int = true;
  //             }
  //             if (wins_1.test(e.target.value) || lengths || points || remainder) {
  //               if (!no_int) {
  //                 e.target.value = e.target.value
  //                   .replace(wins_1, '')
  //                   .replace('.', '$#$')
  //                   .replace(/\./g, '')
  //                   .replace('$#$', '.')
  //                   .replace(/^(\-)*(\d+)\.(\d\d).*$/, '$1$2.$3')
  //                   .substring(0, e.target.value.indexOf('.') + 3);
  //               } else {
  //                 e.target.value = e.target.value.replace(wins_0, '');
  //               }
  //               e.target.dispatchEvent(new Event('input'));
  //             }
  //           }
  //         }
  //       }, 0);
  //     });
  //   },
  // });
}

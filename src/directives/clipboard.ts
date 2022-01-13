/**
 * 复制功能
 */

// Inspired by https://github.com/Inndy/vue-clipboard2
import { App } from 'vue';
import Clipboard from 'clipboard';
if (!Clipboard) {
  throw new Error('you should npm install `clipboard` --save at first ');
}

export default function clipboard(app: App) {
  app.directive('copy', {
    beforeMount(el, binding) {
      if (binding.arg === 'success') {
        el._v_clipboard_success = binding.value;
      } else if (binding.arg === 'error') {
        el._v_clipboard_error = binding.value;
      } else {
        const clipboard = new Clipboard(el, {
          text() {
            return binding.value;
          },
          action() {
            return binding.arg === 'cut' ? 'cut' : 'copy';
          },
        });
        clipboard.on('success', (e) => {
          const callback = el._v_clipboard_success;
          callback && callback(e); // eslint-disable-line
        });
        clipboard.on('error', (e) => {
          const callback = el._v_clipboard_error;
          callback && callback(e); // eslint-disable-line
        });
        el._v_clipboard = clipboard;
      }
    },
    updated(el, binding) {
      if (binding.arg === 'success') {
        el._v_clipboard_success = binding.value;
      } else if (binding.arg === 'error') {
        el._v_clipboard_error = binding.value;
      } else {
        el._v_clipboard.text = function () {
          return binding.value;
        };
        el._v_clipboard.action = function () {
          return binding.arg === 'cut' ? 'cut' : 'copy';
        };
      }
    },
    beforeUnmount(el, binding) {
      if (binding.arg === 'success') {
        delete el._v_clipboard_success;
      } else if (binding.arg === 'error') {
        delete el._v_clipboard_error;
      } else {
        el._v_clipboard.destroy();
        delete el._v_clipboard;
      }
    },
  });
}

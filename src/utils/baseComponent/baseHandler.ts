import { ElMessage, ElMessageBox } from 'element-plus';
import { ElMessageBoxOptions } from 'element-plus/lib/el-message-box/src/message-box.type';
import { IMessageOptions, MessageParams } from 'element-plus/lib/el-message/src/types';

export interface SimpleOptions {
  setup?: (props: any, ctx: any, base: Base) => any;
}
// base的接口写在这里
export interface Base {
  Toast(options: MessageParams): Promise<boolean>;
  Message(options: ElMessageBoxOptions): Promise<boolean>;
}
export function baseHandler(options: SimpleOptions) {
  if (options?.setup) {
    // base的方法写在这里
    const base = {
      Toast(options: MessageParams): Promise<boolean> {
        let _options: IMessageOptions = { duration: 3000, message: '' };
        if (Object.prototype.toString.call(options) === '[object String]') {
          _options.message = options as string;
        } else {
          _options = { ..._options, ...(options as IMessageOptions) };
        }
        return new Promise((resolve) => {
          ElMessage(options);
          setTimeout(() => {
            resolve(true);
          }, _options.duration);
        });
      },
      Message(options: ElMessageBoxOptions): Promise<boolean> {
        return new Promise((resolve) => {
          ElMessageBox(options)
            .then((data) => {
              if (data?.action === 'confirm' || data === 'confirm') {
                resolve(true);
              } else {
                resolve(false);
              }
            })
            .catch(() => {
              resolve(false);
            });
        });
      },
    };
    const _setup = options.setup;
    options.setup = function (props, ctx) {
      return _setup!.call(this, props, ctx, base);
    };
  }
  return options;
}

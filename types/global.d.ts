import type { ComponentPublicInstance, FunctionalComponent } from 'vue';

declare global {
  interface ChangeEvent<T = Element> extends Event<T> {
    target: T;
  }
  interface Window {
    ActiveXObject: any;
  }

  // namespace JSX {
  //   // tslint:disable no-empty-interface
  //   interface Element extends VNode {}
  //   // tslint:disable no-empty-interface
  //   interface ElementClass extends Vue {}
  //   interface IntrinsicElements {
  //     [elem: string]: any;
  //   }
  // }
}

declare module 'vue' {
  export type JSXComponent<Props = any> = { new (): ComponentPublicInstance<Props> } | FunctionalComponent<Props>;
}

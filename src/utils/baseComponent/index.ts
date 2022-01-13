import {
  ComponentOptionsBase,
  ComponentOptionsMixin,
  ComponentOptionsWithArrayProps,
  ComponentOptionsWithObjectProps,
  ComponentOptionsWithoutProps,
  ComponentPropsOptions,
  ComputedOptions,
  DefineComponent,
  EmitsOptions,
  MethodOptions,
  RenderFunction,
  SetupContext,
} from '@vue/runtime-core';
import { UnionToIntersection } from 'vue-class-component';
import { Base, baseHandler, SimpleOptions } from './baseHandler';

export const isFunction = (val: unknown): val is Function => typeof val === 'function';
// baseComponent is a utility that is primarily used for type inference
// when declaring components. Type inference is provided in the component
// options (provided as the argument). The returned value has artificial types
// for TSX / manual render function / IDE support.

declare type ExtractOptionProp<T> = T extends ComponentOptionsBase<infer P, any, any, any, any, any, any, any>
  ? unknown extends P
    ? {}
    : P
  : {};

type ExtendOpt<Props, RawBindings, D, C, M, Mixin, Extends, E, EE> = {
  setup?: (
    this: void,
    props: Props & UnionToIntersection<ExtractOptionProp<Mixin>> & UnionToIntersection<ExtractOptionProp<Extends>>,
    ctx: SetupContext<E>,
    base: Base
  ) => Promise<RawBindings> | RawBindings | RenderFunction | void;
};
// overload 1: direct setup function
// (uses user defined props interface)
export function baseComponent<Props, RawBindings = object>(
  setup: (props: Readonly<Props>, ctx: SetupContext, base: Base) => RawBindings | RenderFunction
): DefineComponent<Props, RawBindings>;

// overload 2: object format with no props
// (uses user defined props interface)
// return type is for Vetur and TSX support
export function baseComponent<
  Props = {},
  RawBindings = {},
  D = {},
  C extends ComputedOptions = {},
  M extends MethodOptions = {},
  Mixin extends ComponentOptionsMixin = ComponentOptionsMixin,
  Extends extends ComponentOptionsMixin = ComponentOptionsMixin,
  E extends EmitsOptions = EmitsOptions,
  EE extends string = string
>(
  options:
    | ComponentOptionsWithoutProps<Props, RawBindings, D, C, M, Mixin, Extends, E, EE>
    | ExtendOpt<Props, RawBindings, D, C, M, Mixin, Extends, E, EE>
): DefineComponent<Props, RawBindings, D, C, M, Mixin, Extends, E, EE>;

// overload 3: object format with array props declaration
// props inferred as { [key in PropNames]?: any }
// return type is for Vetur and TSX support
export function baseComponent<
  PropNames extends string,
  RawBindings,
  D,
  C extends ComputedOptions = {},
  M extends MethodOptions = {},
  Mixin extends ComponentOptionsMixin = ComponentOptionsMixin,
  Extends extends ComponentOptionsMixin = ComponentOptionsMixin,
  E extends EmitsOptions = Record<string, any>,
  EE extends string = string
>(
  options:
    | ComponentOptionsWithArrayProps<PropNames, RawBindings, D, C, M, Mixin, Extends, E, EE>
    | ExtendOpt<Readonly<{ [key in PropNames]?: any }>, RawBindings, D, C, M, Mixin, Extends, E, EE>
): DefineComponent<Readonly<{ [key in PropNames]?: any }>, RawBindings, D, C, M, Mixin, Extends, E, EE>;

// overload 4: object format with object props declaration
// see `ExtractPropTypes` in ./componentProps.ts
export function baseComponent<
  // the Readonly constraint allows TS to treat the type of { required: true }
  // as constant instead of boolean.
  PropsOptions extends Readonly<ComponentPropsOptions>,
  RawBindings,
  D,
  C extends ComputedOptions = {},
  M extends MethodOptions = {},
  Mixin extends ComponentOptionsMixin = ComponentOptionsMixin,
  Extends extends ComponentOptionsMixin = ComponentOptionsMixin,
  E extends EmitsOptions = Record<string, any>,
  EE extends string = string
>(
  options:
    | ComponentOptionsWithObjectProps<PropsOptions, RawBindings, D, C, M, Mixin, Extends, E, EE>
    | ExtendOpt<PropsOptions, RawBindings, D, C, M, Mixin, Extends, E, EE>
): DefineComponent<PropsOptions, RawBindings, D, C, M, Mixin, Extends, E, EE>;

// implementation, close to no-op
export function baseComponent(options: unknown) {
  options = isFunction(options) ? { setup: options, name: options.name } : options;
  options = baseHandler(options as SimpleOptions);
  return options;
}

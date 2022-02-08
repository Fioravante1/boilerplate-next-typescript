/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Plugin, NewPlugin } from 'pretty-format';

declare global {
  namespace jest {
    interface AsynmmetricMatcher {
      $$typeof: symbol;
      sample?: string | RegExp | object | Array<any> | Function;
    }

    type Value = string | number | RegExp | AsynmmetricMatcher | undefined;

    interface Options {
      media?: string;
      modifier?: string;
      supports?: string;
    }

    interface Matchers<R, T> {
      toHaveStyleRule(property: string, valeu?: Value, options?: Options): R;
    }
  }
}

export declare const styleSheetSerializer: Exclude<Plugin, NewPlugin>;
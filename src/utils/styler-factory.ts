import { createSequences } from "./create-sequences";
import { regExpStyle, SRGParameters } from "../constants";
import { StylerInstance, SRGParameter, StylerOptions } from "../types";

export function stylerFactory(options: StylerOptions, parent?: StylerInstance, styles?: Array<string | number>) {
  const instance = function instance(this: StylerInstance, ...input: unknown[]): string {
    const [sequences, resetSequences] = createSequences(this.styles);

    const styledInput = input.join('').replace(regExpStyle, (...args) => `${args[1]}${args[2]}${sequences}`);

    return `${sequences}${styledInput}${resetSequences}`;
  } as StylerInstance;

  Object.defineProperties(instance, {
    styles: {
      value: [...(parent?.styles ?? []), ...(styles ?? [])],
      writable: false
    },
    colorLevel: {
      value: options.colorLevel,
      writable: false
    }
  })

  const handler: ProxyHandler<StylerInstance> = {
    apply(target, _thisArg, args) {
      return target.call(target, ...args);
    },
    get(target, prop) {
      const code = SRGParameters[prop as SRGParameter];

      if (code !== undefined) return stylerFactory(options, target, [code]);


      return target[prop as keyof StylerInstance];
    },
  };

  return new Proxy(instance as StylerInstance, handler);
}
import { StandardColorCodes, HighIntensityColorCodes, SRGParameters } from "./constants";

export type StylerOptions = {
  colorLevel?: ColorLevel;
};

export interface StylerInstance {
  (...text: unknown[]): string;
  readonly bold: StylerInstance;
  readonly dim: StylerInstance;
  readonly italic: StylerInstance;
  readonly underline: StylerInstance;
  readonly reset: StylerInstance;
  readonly strikethrough: StylerInstance;
  readonly visible: StylerInstance;
  readonly blink: StylerInstance;

  readonly red: StylerInstance;
  readonly green: StylerInstance;
  readonly yellow: StylerInstance;
  readonly blue: StylerInstance;
  readonly cyan: StylerInstance;
  readonly magenta: StylerInstance;
  readonly white: StylerInstance;

  readonly gray: StylerInstance;
  readonly brightRed: StylerInstance;
  readonly brightGreen: StylerInstance;
  readonly brightYellow: StylerInstance;
  readonly brightBlue: StylerInstance;
  readonly brightCyan: StylerInstance;
  readonly brightMagenta: StylerInstance;
  readonly brightWhite: StylerInstance;

  readonly BgBlack: StylerInstance;
  readonly BgRed: StylerInstance;
  readonly BgGreen: StylerInstance;
  readonly BgYellow: StylerInstance;
  readonly BgBlue: StylerInstance;
  readonly BgMagenta: StylerInstance;
  readonly BgCyan: StylerInstance;
  readonly BgWhite: StylerInstance;

  readonly alternativeFont1: StylerInstance;

  readonly styles: Array<string | number>;
  readonly colorLevel: ColorLevel
}

export type ColorSupport = {
  term?: string
  colorTerm?: string
  colorDepth: {
    stdout: ColorLevel,
    stderr: ColorLevel
  }
}

export type ColorLevel = 0 | 1 | 2 | 3;

export type ColorDepth = 1 | 4 | 8 | 24

export type ColorMode = 'rgb' | 'index' | 'standard'

export type SRGParameter = keyof typeof SRGParameters

export type ColorCodes = typeof StandardColorCodes[keyof typeof StandardColorCodes] | typeof HighIntensityColorCodes[keyof typeof HighIntensityColorCodes];
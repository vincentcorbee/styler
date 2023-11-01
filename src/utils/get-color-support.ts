import { ColorDepth, ColorLevel, ColorSupport } from "../types"

const ColorDepthToLevel: { [color in ColorDepth]: ColorLevel }= {
  1: 0,
  4: 1,
  8: 2,
  24: 3
} as const

export const getColorSupport = (): ColorSupport => {
  const { COLORTERM: colorTerm, TERM: term } = process.env

  return {
    term,
    colorTerm,
    colorDepth: {
      stdout: ColorDepthToLevel[process.stdout.getColorDepth() as ColorDepth],
      stderr: ColorDepthToLevel[process.stderr.getColorDepth() as ColorDepth]
    }
  }
}
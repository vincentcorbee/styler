import { styler } from '../src'

// console.log(styler.bgBrightRed(
//   styler.green.magenta(
//     `Hello ${styler.bold.red('world')}    ${styler.reset('resetted')} `,
//     styler.italic.cyan.bold("I'm italic"),
//     ` ${styler.reset.blue.underline('Underlined')} `,
//     styler.strikethrough('deleted'),
//     styler.bold.bgYellow.brightRed('Hoi'),
//   ),
// ));

console.log(styler.red('Red'))
console.log(styler.brightRed('Bright Red'))

console.log(styler.blue('Blue'))
console.log(styler.brightBlue('Bright Blue'))

console.log(styler.yellow('Yellow'))
console.log(styler.brightYellow('Bright Yellow'))

console.log(styler.magenta('Magenta'))
console.log(styler.brightMagenta('Bright Magenta'))

console.log(styler.cyan('Cyan'))
console.log(styler.brightCyan('Bright Cyan'))

console.log(styler.white('White'))
console.log(styler.brightWhite('Bright White'))

console.log(styler.green('Green'))
console.log(styler.brightGreen('Bright Green'))


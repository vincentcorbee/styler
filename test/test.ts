import { styler } from "../dist";

console.log(
  styler.green.magenta(
    `Hello ${styler.bold.red('world')}    ${styler.reset('resetted')} `,
    styler.italic.cyan.bold("I'm italic"),
    ` ${styler.reset.blue.underline('Underlined')} `,
    styler.strikethrough('deleted'),
    styler.bold.brightRed(' Hoi'),
  ),
);

console.dir (styler.prototype)

import readline from 'readline/promises';

import { styler } from './styler';

type Info = {
  title?: string;
};

type Question = {
  question: string;
  name: string;
  allowed?: any[];
  required?: boolean;
  value?: <T>(input: string) => T;
  show?: (answers: Answers) => boolean;
  default?: any;
};

type Answers = Record<string, any>;

export const askQuestions = async (questions: Question[] = [], info: Info = {}) => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: '',
  });

  const answers: Answers = {};

  let config = questions.shift();

  if (info.title) {
    rl.write(`${styler.bold(info.title)}\n\n`);
  }

  while (config) {
    const { question: q, allowed, name, required, value, show, default: defaultValue } = config;

    if (!show || (typeof show === 'function' && show(answers))) {
      const answer = await rl.question(`${styler.green('?')} ${styler.bold(q)}${allowed ? ` [${styler.cyan(allowed.join(','))}] ` : ' '}`);

      if (!answer && required) {
        rl.write(styler.brightRed(`⚠ ${q} is ${styler.bold('required')}.`));
        rl.write('\n');
      } else if (answer && allowed && !allowed.includes(answer)) {
        rl.write(styler.brightRed(`⚠ Answer is not allowed please use: [${styler.cyan(allowed.join(','))}]`));
        rl.write('\n');
      } else {
        rl.write('\n');

        answers[name] = typeof value === 'function' ? value(answer) : answer || defaultValue;

        config = questions.shift();
      }
    } else {
      config = questions.shift();
    }
  }
  rl.close();

  return answers;
};

import { ESLint } from 'eslint';
import {
  getCwdPath, loggerTiming, loggerSuccess, loggerError,
} from '@/utils/index';
import { baseEslint } from './config/baseEslint';
// 1. Create an instance.
const eslint = new ESLint(baseEslint);

export const getEslint = async (path: string = 'src') => {
  // 默认的检查的入口
  try {
    loggerTiming('Eslint 校验');
    // 2. Lint files.
    const results = await eslint.lintFiles([`${getCwdPath()}/${path}`]);

    // 3. Modify the files with the fixed code.
    await ESLint.outputFixes(results);

    // 4. Format the results.
    const formatter = await eslint.loadFormatter('stylish');

    const resultText = formatter.format(results);

    // 5. Output it.
    if (resultText) {
      loggerError(`请检查===》${resultText}`);
    } else {
      loggerSuccess('完美！');
    }
  } catch (error) {
    process.exitCode = 1;
    console.error('error===>', error);
  } finally {
    loggerTiming('Eslint 校验', false);
  }
};

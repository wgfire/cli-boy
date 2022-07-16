#!/usr/bin/env node

/** 2022年/July/15日/Friday
*@reviewType.Format
*@reviewContent wg
1.尝试用babel 来解析ts 解决路径别名编译后没有替换的问题
*/
import { Command } from 'commander';
import { getEslint } from '@/eslint/index';

const program = new Command();

program
  .version('0.1.0')
  .description('start eslint and fix code')
  .command('eslint')
  .action((value) => {
    console.log(value, '参数');
    getEslint();
  });
program.parse(process.argv);

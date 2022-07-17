#!/usr/bin/env node

/** 2022年/July/15日/Friday
*@reviewType.Format
*@reviewContent wg
1.尝试用babel 来解析ts 解决路径别名编译后没有替换的问题
*/
import { Command, CommandOptions } from "commander";
import { getEslint } from "@/eslint/index";

const program = new Command();

program.version("0.1.0").description("cli-boy eslint webpack add Project");

const eslint = program
  .command("eslint")
  .description("start eslint code")
  .option("-base", "base eslint parser") // 定义options 范围
  .option("-airbnb", "airbnb eslint parser")
  .action((optios, arg) => {
    console.log(optios, arg.args, "参数"); // 第一个参数显示 {Base:true,Airbnb:true} 用了哪个参数
    getEslint();
  });
const webpack = program
  .command("webpack")
  .description("start webpack project")
  .action((value) => {
    console.log(value, "参数");
    getEslint();
  });

program.commands = [eslint, webpack];
program.parse(process.argv);

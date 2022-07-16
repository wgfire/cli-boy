import { ESLint } from "eslint";
import { getDirPath } from "@/utils/index";

/** 2022年/July/15日/Friday
*@reviewType.Perf
*@reviewContent By Name
1.基础的eslint配置文件
*/
export const baseEslint: ESLint.Options = {
  fix: true,
  extensions: [".js", ".ts", ".tsx", ".vue"],
  useEslintrc: false,
  overrideConfig: {
    env: {
      browser: true,
      es2021: true,
    },
    extends: ["plugin:react/recommended", "plugin:vue/recommended"], // 基础版不引入"airbnb" 会校验各种rules
    parser: require.resolve("@typescript-eslint/parser"),
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 12,
      sourceType: "module",
    },
    plugins: ["@typescript-eslint"],
    rules: {
      "react/display-name": 0,
      "no-console": 0,
    },
  },
  resolvePluginsRelativeTo: getDirPath("node_modules"), // 指定 loader 加载路径
};

export default baseEslint;

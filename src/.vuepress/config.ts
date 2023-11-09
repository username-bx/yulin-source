import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "lin",
  description: "record 记录 随便写写",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});

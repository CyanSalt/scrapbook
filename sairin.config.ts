// theme
import { SairinConfig } from "@sairinjs/core";
import BlogTheme from "@sairinjs/sairin-theme-minimal";

export default {
  siteConfig: {
    title: 'CyanSalt'
  },
  theme: BlogTheme,
  themeConfig: {
    title: 'CyanSalt',
    links: [
      {
        title: "GitHub",
        url: "https://github.com/CyanSalt",
      },
      {
        title: "Source",
        url: "https://github.com/CyanSalt/notebook/issues",
      },
    ],
  },
} as SairinConfig;

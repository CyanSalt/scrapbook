// theme
import { SairinConfig } from "@sairinjs/core";
import BlogTheme from "@sairinjs/sairin-theme-minimal";

export default {
  siteConfig: {
    title: 'CyanSalt\'s Scrapbook'
  },
  theme: BlogTheme,
  themeConfig: {
    title: 'CyanSalt\'s Scrapbook',
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

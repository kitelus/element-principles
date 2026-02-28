import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const organizationName = process.env.ORGANIZATION_NAME ?? "kitelus";
const projectName = process.env.PROJECT_NAME ?? "element-principles";
const isUserOrOrgPage = projectName === `${organizationName}.github.io`;

const config: Config = {
  title: "ELEMENT UI Automation Principles",
  tagline: "Stable locators. Low flakiness. Scalable UI test design.",
  favicon: "img/favicon.ico",

  future: {
    v4: true,
  },

  url: process.env.URL ?? `https://${organizationName}.github.io`,
  baseUrl: process.env.BASE_URL ?? (isUserOrOrgPage ? "/" : `/${projectName}/`),

  organizationName,
  projectName,
  deploymentBranch: process.env.DEPLOYMENT_BRANCH ?? "gh-pages",
  trailingSlash: false,

  onBrokenLinks: "throw",

  i18n: {
    defaultLocale: "en",
    locales: ["en", "vi"],
    localeConfigs: {
      en: {
        label: "English",
        htmlLang: "en-US",
      },
      vi: {
        label: "Tiếng Việt",
        htmlLang: "vi-VN",
      },
    },
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
        },
        blog: false,
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "img/docusaurus-social-card.jpg",
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "ELEMENT Principles",
      logo: {
        alt: "ELEMENT Principles Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Docs",
        },
        {
          type: "localeDropdown",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "ELEMENT",
          items: [
            {
              label: "Quick Start",
              to: "/docs/intro",
            },
            {
              label: "7 Principles",
              to: "/docs/principles",
            },
          ],
        },
        {
          title: "Guides",
          items: [
            {
              label: "Component Patterns",
              to: "/docs/patterns",
            },
            {
              label: "Framework Playbook",
              to: "/docs/framework-playbook",
            },
          ],
        },
        {
          title: "Quality",
          items: [
            {
              label: "Checklists",
              to: "/docs/checklists",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} ELEMENT Principles. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Junior Jellies",
  description: "Presented by FTC Team #4654 Jellyfish",
  base: '/juniorjellies/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: nav(),
    sidebar: {
      '/java/': sidebarJava(),
      '': sidebarJava()
    },

  }
})

function nav() {
  return [
    { text: 'Java', link: '/java/getting-started', activeMatch: '/java/' },
    { text: 'Mission Statement', link: '/mission-statement', activeMatch: '/mission-statement' },
  ]
}

function sidebarJava() {
  return [
    {
      text: 'Java Lessons',
      collapsed: false,
      items: [
        {
          text: 'Getting Started',
          link: '/java/getting-started',
          items: [
            {
              text: 'Getting Started Exercises',
              link: '/java/d1-exercises',
            }
          ]
        },
        {
          text: 'Methods',
          link: '/java/methods',
          items: [
            {
              text: 'Methods Exercises',
              link: '/java/d2-exercises',
            }
          ]
        },
        {
          text: 'Conditional Statements',
          link: '/java/conditional-statements',
          items: [
            {
              text: 'Conditional Statements Exercises',
              link: '/java/d3-exercises',
            }
          ]
        },
        {
          text: 'Loops',
          link: '/java/loops',
          items: [
            {
              text: 'Loops Exercises',
              link: '/java/d4-exercises',
            }
          ]
        },
        {
          text: 'Arrays',
          link: '/java/arrays',
          items: [
            {
              text: 'Arrays Exercises',
              link: '/java/d5-exercises',
            }
          ]
        }
      ]
    },
  ]
}
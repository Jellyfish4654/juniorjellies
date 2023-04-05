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
      '/java/': sidebarJava()
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
        { text: 'Getting Started', link: '/java/getting-started' }
      ]
    },
  ]
}
import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/',
  lang: 'en-GB',
  title: 'Imec–IDLab',


  description:
      'This repository contains all documentation for my internship at IMEC–IDLab, supporting research, experimentation, and technical development.',

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }]
  ],

  themeConfig: {
    logo: {
      light: '/logos/IDlab-black-on-white.png',
      dark: '/logos/IDlab-white-on-black.png'
    },

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Overview', link: '/overview' },
      { text: 'Research', link: '/research' },
      { text: 'Logs', link: '/logs' },
      { text: 'References', link: '/references' }
    ],

    sidebar: [
      {
        text: 'Getting Started',
        collapsed: false,
        items: [
          { text: 'Welcome', link: 'introduction'},
          { text: 'Overview', link: '/overview' },
          { text: 'Introduction to IDLab', link: '/about' }
        ]
      },
      {
        text: 'Research',
        collapsed: true,
        items: [
          { text: 'Research Overview', link: '/research' },
          { text: 'Simpl', link: 'research/Simpl' }
        ]
      },
      {
        text: 'Logs',
        collapsed: true,
        items: [
          { text: 'Activity Logs', link: '/logs' },
          { text: '01-02-2026', link: '/logs/01-02-2026'}
        ]
      },
      {
        text: 'References',
        collapsed: true,
        items: [
          { text: 'Bibliography', link: '/references' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Michiel-VandeVelde/Imec-IDlab' }
    ]
  }
})

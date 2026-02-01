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
      { text: 'Introduction', link: '/introduction' },

    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Introduction', link: '/introduction' },
          { text: 'Overview', link: '/overview' }
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Michiel-VandeVelde/Imec-IDlab' }
    ]
  }
})

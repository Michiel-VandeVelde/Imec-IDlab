import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/Imec-IDlab/',
  lang: 'en-GB',
  title: 'Imec–IDLab',

  description:
      'This repository contains all documentation for my internship at IMEC–IDLab, supporting research, experimentation, and technical development.',

  themeConfig: {
    logo: {
      light: '/imec-black-on-white.svg',
      dark: '/imec-white-on-black.png'
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

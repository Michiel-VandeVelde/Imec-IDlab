import { defineConfig } from 'vitepress';

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: 'en-US',
  title: 'Imec-IDlab',
  description: 'This website contains all documentation for my internship at IMEC–IDLab, supporting research, experimentation, and technical development. ',

  themeConfig: {
    nav: [
      { text: 'Introduction', link: '/introduction' },

      // {
      //   text: 'Dropdown Menu',
      //   items: [
      //     { text: 'Item A', link: '/item-1' },
      //     { text: 'Item B', link: '/item-2' },
      //     { text: 'Item C', link: '/item-3' },
      //   ],
      // },

      // ...
    ],

    sidebar: [
      {
        // text: 'Guide',
        items: [
          { text: 'Introduction', link: '/introduction' },
          // ...
        ],
      },
    ],
  },
});

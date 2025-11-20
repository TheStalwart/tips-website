import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "RetroMultiplayer Tech Tips",
  description: "Useful information for building and maintaining retro PC gaming setups",
  head: [
    ['link', { rel: 'apple-touch-icon', href: '/apple-touch-icon.png', sizes: '180x180' }],
    ['link', { rel: 'icon', href: '/favicon.ico', sizes: '48x48' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon-32x32.png', sizes: '32x32' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon-16x16.png', sizes: '16x16' }],
    ['link', { rel: 'manifest', href: '/site.webmanifest' }],
  ],
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local'
    },

    nav: [
      { text: 'Games', link: '/games/Quake3.html' },
      { text: 'Hardware', link: '/hardware/ThinkPadT420s.html' },
      { text: 'Operating Systems', link: '/os/Windows11.html' },
      { text: 'Tutorials', link: '/tutorials/sshd_2fa.html' }
    ],

    sidebar:  generateSidebar({
      /*
       * For detailed instructions, see the links below:
       * https://github.com/jooy2/vitepress-sidebar#options
       */
      documentRootPath: '/',
      // scanStartPath: null,
      // resolvePath: null,
      useTitleFromFileHeading: true,
      // useTitleFromFrontmatter: true,
      useFolderTitleFromIndexFile: true,
      // useFolderLinkFromIndexFile: false,
      // hyphenToSpace: true,
      // underscoreToSpace: true,
      // capitalizeFirst: false,
      // capitalizeEachWords: false,
      // collapsed: true,
      // collapseDepth: 2,
      // sortMenusByName: false,
      // sortMenusByFrontmatterOrder: false,
      // sortMenusByFrontmatterDate: false,
      // sortMenusOrderByDescending: false,
      // sortMenusOrderNumericallyFromTitle: false,
      // sortMenusOrderNumericallyFromLink: false,
      // frontmatterOrderDefaultValue: 0,
      // manualSortFileNameByPriority: ['first.md', 'second', 'third.md'],
      // removePrefixAfterOrdering: false,
      // prefixSeparator: '.',
      excludePattern: ['README.md'],
      // excludeFilesByFrontmatter: false,
      // excludeFolders: ['secret-folder'],
      // includeDotFiles: false,
      // includeRootIndexFile: false,
      // includeFolderIndexFile: false,
      // includeEmptyFolder: false,
      // rootGroupText: 'Contents',
      // rootGroupLink: 'https://github.com/jooy2',
      // rootGroupCollapsed: false,
      // convertSameNameSubFileToGroupIndexPage: false,
      // folderLinkNotIncludesFileName: false,
      // keepMarkdownSyntaxFromTitle: false,
      // debugPrint: false,
    }),

    socialLinks: [
      { icon: 'github', link: 'https://github.com/TheStalwart/tips-website' },
      { icon: 'discord', link: 'https://discord.gg/wuvKNmurPR' },
      { icon: 'facebook', link: 'https://www.facebook.com/RetroMultiplayer' },
      { icon: 'instagram', link: 'https://www.instagram.com/retromultiplayer/' },
      { icon: 'youtube', link: 'https://www.youtube.com/@retromultiplayer4666' },
    ]
  }
})

import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "RetroMultiplayer Tech Tips",
  description: "Useful information for building and maintaining retro PC gaming setups",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local'
    },

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
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
      // useFolderTitleFromIndexFile: false,
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
      // excludeFiles: ['first.md', 'secret.md'],
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
      { icon: 'github', link: 'https://github.com/TheStalwart/tips-website' }
    ]
  }
})

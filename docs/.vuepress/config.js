
let MarkdownIt = require("markdown-it");
let md = new MarkdownIt();

const path = require('path')
module.exports = {
   plugins: ['@vuepress/back-to-top'],
   serviceWorker: true,
   markdown: {
      lineNumbers: true,
      toc:{includeLevel: [1,2,3,4,5,6] },
      externalLinks: { target: '_blank', rel: 'noopener noreferrer' },
      extendMarkdown: md => {
        // 使用更多的 markdown-it 插件!
        md.use(require('markdown-it'))
      }
    },
  
    base:'/ioc-ui/',
    title: 'IOC_UI',
    description: 'Inspiration from Vue',
    head: [
      ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    themeConfig: {
      nav: [
        { text: '首页', link: '/' },
        { text: '组件', link: '/' },
        { 
          text: '开发规范', 
          ariaLabel: 'Language Menu',
          items: [
            { text: 'HTML规范', link: '/views/standard/html/code/' },
            { text: 'CSS规范', link: '/views/standard/css/code/' },
            { text: 'JavaScript规范', link: '/views/standard/js/code/' },
            { text: 'Vue规范', link: '/views/standard/vue/' },
            { text: '命名规范', link: '/views/standard/name/rule/' },
            { text: '图片规范', link: '/views/standard/image/rule/' },
          ]
        },
       
        { text: 'Github', link: 'https://github.com' },
      ],
      sidebar: [
          {
              title: '开发指南',
              collapsable: false,
              children: [
               [ 'views/guide/install.md','安装'],
               [ 'views/guide/get-started.md','开始使用']
              ]
            },
            {
              title: '设计',
              collapsable: false,
              children: [
                'views/standard/html/code/'
              ]
            },
            {
              title: '组件',
              collapsable: false,
              children: [
               // 'views/components/basic/',
                'views/components/chart/',
                //'views/components/form/',
                //'views/components/navigation/',
                //'views/components/notice/',
               // 'views/components/other/'
              ]
            },
            {
              title: 'HTML规范',
              collapsable: true,
              children: [
                'views/standard/html/code/',
                'views/standard/html/comment/',
                'views/standard/html/other/',
              ]
            },
            {
              title: 'CSS规范',
              collapsable: true,
              children: [
                'views/standard/css/code/',
                'views/standard/css/comment/',
                'views/standard/css/style/',
                'views/standard/css/mobile/'
              ]
            },
            {
              title: 'JavaScript规范',
              collapsable: true,
              children: [
                'views/standard/js/code/',
                'views/standard/js/language/',

              ]
            },
            
            {
              title: 'Vue规范',
              collapsable: true,
              children: [
                'views/standard/vue/',
            
              ]
            },
            {
              title: '命名规范',
              collapsable: true,
              children: [
                ['views/standard/name/rule/','命名规范'],
              ]
            },
            {
              title: '图片规范',
              collapsable: true,
              children: [
                ['views/standard/image/rule/','图片规范'],
              ]
            },
            
            
        ]
      },
    scss:{ //配置 scss 根目录
      includePaths: [path.join(__dirname, '../../style')]
    }
  }
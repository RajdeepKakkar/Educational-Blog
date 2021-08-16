export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '611a0c448c68216ea759fa30',
                  title: 'Sanity Studio',
                  name: 'educational-blog-studio',
                  apiId: 'c1cb74ea-2237-42fc-bff2-3c39e14e00ce'
                },
                {
                  buildHookId: '611a0c44853bac9e8d5ffbac',
                  title: 'Blog Website',
                  name: 'educational-blog',
                  apiId: '889c3714-d5c0-4ffc-a78d-25a1647747ae'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/RajdeepKakkar/Educational-Blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://educational-blog.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}

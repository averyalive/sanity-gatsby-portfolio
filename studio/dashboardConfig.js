export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '60d22fa0bbf1a400d2812746',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-o2jwq4wq',
                  apiId: '93d58995-3895-4005-8a3e-824bfbd9f9c9'
                },
                {
                  buildHookId: '60d22fa04d99ab00c5685487',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-mncz8zm4',
                  apiId: 'a2eb98e5-625b-4bd9-9e85-4b4af68d1206'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/averyalive/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-mncz8zm4.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}

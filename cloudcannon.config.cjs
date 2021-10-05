module.exports = {
    _select_data: {
      social_icons: ['Facebook', 'Instagram', 'LinkedIn', 'Pinterest', 'Tumblr', 'Twitter', 'Youtube', 'RSS']
    },

    paths: {
      collections: 'content',
      data: 'content/data',
      static: 'public',
      uploads: 'public/uploads'
    },

    'collections-config': {
      data: { path: 'content/data' },
      clients: {
        path: 'content/clients',
        url: '/clients/[slug]',
        'output': true,
        name: 'Clients'
      },
      webpages: {
        path: 'content/pages',
        url: '/[slug]',
        'output': true,
        name: 'Pages',
        _icon: 'wysiwyg',
        _enabled_editors: ['visual','content']
      },
      'staff-members': {
        path: 'content/staff-members',
        _enabled_editors: ['data'],
        name: 'Staff Members'
      },
      posts: {
        path: 'content/posts',
        'output': true,
        url: '/blog/[slug]',
        name: 'Blog'
      }
    }
  };
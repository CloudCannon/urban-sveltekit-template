module.exports = {
    _comments: {
      title: 'The title of your page.'
    },
    _select_data: {
      categories: ['sales', 'tips', 'marketing', 'growth']
    },
    paths: {
      collections: 'content',
      data: 'src/lib/data',
      static: 'public',
      uploads: 'public/uploads'
    },
    'collections-config': {
      data: { path: 'src/lib/data' },
      clients: {
        path: 'content/clients',
        url: '/clients/[slug]',
        "output": true,
        name: 'Clients'
      },
      webpages: {
        path: 'content/pages',
        url: '/[slug]',
        "output": true,
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
        "output": true,
        url: '/blog/[slug]',
        name: 'Blog'
      }
    }
  };
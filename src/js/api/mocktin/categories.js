export default {
  data: [
    {
      id: '10d830b5-0ddf-4321-b613-a9f32329865b',
      type: 'category',
      status: 'live',
      name: 'Soft Drinks',
      slug: '06-soft-drinks',
      description: '06',
      meta: {
        timestamps: {
          created_at: '2017-11-08T00:04:36+00:00',
          updated_at: '2017-11-14T23:50:00+00:00'
        }
      },
      relationships: {
        products: {
          data: [
            { type: 'product', id: '71987910-dde2-4912-b87b-5d018016a8de' },
            { type: 'product', id: 'b9664616-12af-453c-8888-e902f67a0412' }
          ]
        }
      }
    },
    {
      id: 'e5c6139e-3788-4556-83ed-4e4f05090a7a',
      type: 'category',
      status: 'live',
      name: 'Deserts',
      slug: '05-deserts',
      description: '05',
      meta: {
        timestamps: {
          created_at: '2017-11-05T20:01:31+00:00',
          updated_at: '2017-11-14T23:49:35+00:00'
        }
      },
      relationships: {
        products: {
          data: [
            { type: 'product', id: '978b328b-3756-4c10-9e31-0ec7e23dd7f2' },
            { type: 'product', id: 'caab0d5c-b0f8-4e18-9259-529367976d62' }
          ]
        }
      }
    },
    {
      id: 'f33732ad-a3e4-4d61-a5f2-487544632a75',
      type: 'category',
      status: 'live',
      name: 'Hard drinks',
      slug: '07-hard-drinks',
      description: '07',
      meta: {
        timestamps: {
          created_at: '2017-11-05T20:01:07+00:00',
          updated_at: '2017-11-14T23:50:15+00:00'
        }
      },
      relationships: {
        products: {
          data: [
            { type: 'product', id: 'f5fcc1e9-9295-429d-bffe-4a0e5e641875' },
            { type: 'product', id: '443fe2f4-e589-48c2-a4d3-7a54f0f57fd9' },
            { type: 'product', id: 'f8a4204e-dfc4-4bae-b2fb-b4b7b193fdfd' }
          ]
        }
      }
    },
    {
      id: 'f59c85b2-2e8c-46bf-90b6-94054f6b651f',
      type: 'category',
      status: 'live',
      name: 'Salads',
      slug: '02-salads',
      description: '02',
      meta: {
        timestamps: {
          created_at: '2017-11-05T19:57:28+00:00',
          updated_at: '2017-11-14T23:48:21+00:00'
        }
      },
      relationships: {
        products: {
          data: [
            { type: 'product', id: 'b1b1ae4f-68f1-40d4-8c39-8166cf2283cc' },
            { type: 'product', id: 'c304e42d-9840-4a62-8bab-5126eceb4d4f' }
          ]
        }
      }
    },
    {
      id: 'eff388de-92f9-4436-a0c3-7bcb6f1a773e',
      type: 'category',
      status: 'live',
      name: 'Burgers',
      slug: '04-burgers',
      description: '04',
      meta: {
        timestamps: {
          created_at: '2017-11-05T19:56:45+00:00',
          updated_at: '2017-11-14T23:49:12+00:00'
        }
      },
      relationships: {
        products: {
          data: [
            { type: 'product', id: 'fb7270bc-ed99-48d7-8aa3-ed4542cae16f' },
            { type: 'product', id: 'e673cc8f-26ed-4df7-8d12-1030e12a6ee3' }
          ]
        }
      }
    },
    {
      id: 'b16931c0-573b-42b2-8a6a-bfc3f4505a01',
      type: 'category',
      status: 'live',
      name: 'Soups',
      slug: '03-soups',
      description: '03',
      meta: {
        timestamps: {
          created_at: '2017-11-05T19:56:24+00:00',
          updated_at: '2017-11-14T23:48:46+00:00'
        }
      },
      relationships: {
        products: {
          data: [
            { type: 'product', id: '5dcc07ee-9b4e-4a1b-847d-29761b1bdb78' },
            { type: 'product', id: '6ceae4bb-4c87-4356-8b04-11d171bd2b3e' },
            { type: 'product', id: 'dbac59ce-760b-4573-9b26-469ff3047035' },
            { type: 'product', id: 'd56999c6-d692-47db-8ff8-9392a3ee552b' }
          ]
        }
      }
    },
    {
      id: 'e66859fd-9a7c-47e4-bbf1-c8dac8fab15e',
      type: 'category',
      status: 'live',
      name: 'Starters',
      slug: '01-starters',
      description: '01',
      meta: {
        timestamps: {
          created_at: '2017-11-05T19:55:59+00:00',
          updated_at: '2017-11-14T23:47:20+00:00'
        }
      },
      relationships: {
        products: {
          data: [
            { type: 'product', id: '9f7726ac-4f22-473a-b0c8-3a3f730adc14' }
          ]
        }
      }
    }
  ],
  links: {
    current:
      'https://api.moltin.com/v2/categories?page[limit]=100&page[offset]=0',
    first:
      'https://api.moltin.com/v2/categories?page[limit]=100&page[offset]=0',
    last: null
  },
  meta: {
    results: { total: 7, all: 7 },
    page: { limit: 100, offset: 0, current: 1, total: 1 }
  }
}

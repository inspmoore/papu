export default {
  data: [
    {
      type: 'product',
      id: 'b9664616-12af-453c-8888-e902f67a0412',
      name: 'Polo Cocta',
      slug: 'polo-cocta',
      sku: 'softd-2',
      manage_stock: true,
      description:
        'Classic. Comrade Gierek says it\'s better than the original.',
      price: [{ amount: 89, currency: 'USD', includes_tax: true }],
      status: 'live',
      commodity_type: 'physical',
      meta: {
        timestamps: {
          created_at: '2017-11-08T22:49:18+00:00',
          updated_at: '2017-11-23T23:50:14+00:00'
        },
        display_price: {
          with_tax: { amount: 89, currency: 'USD', formatted: '$0.89' },
          without_tax: {
            amount: 89,
            currency: 'USD',
            formatted: '$0.89'
          }
        },
        stock: { level: 500, availability: 'in-stock' }
      },
      relationships: {
        categories: {
          data: [
            { type: 'category', id: '10d830b5-0ddf-4321-b613-a9f32329865b' }
          ]
        },
        main_image: {
          data: {
            type: 'main_image',
            id: '2c5af4f0-3abf-4c16-9187-3daafb6c6a22'
          }
        }
      }
    },
    {
      type: 'product',
      id: '71987910-dde2-4912-b87b-5d018016a8de',
      name: 'Dried Fruits Compote',
      slug: 'dried-fruits-compote',
      sku: 'softd-k1',
      manage_stock: true,
      description: 'A taste of Christmas you can have every day!',
      price: [{ amount: 80, currency: 'USD', includes_tax: true }],
      status: 'live',
      commodity_type: 'physical',
      meta: {
        timestamps: {
          created_at: '2017-11-08T22:43:13+00:00',
          updated_at: '2017-11-23T23:49:20+00:00'
        },
        display_price: {
          with_tax: { amount: 80, currency: 'USD', formatted: '$0.80' },
          without_tax: {
            amount: 80,
            currency: 'USD',
            formatted: '$0.80'
          }
        },
        stock: { level: 500, availability: 'in-stock' }
      },
      relationships: {
        categories: {
          data: [
            { type: 'category', id: '10d830b5-0ddf-4321-b613-a9f32329865b' }
          ]
        },
        main_image: {
          data: {
            type: 'main_image',
            id: '9bf19baf-327f-4c77-bb93-b74e5b900ae8'
          }
        }
      }
    },
    {
      type: 'product',
      id: '9f7726ac-4f22-473a-b0c8-3a3f730adc14',
      name: 'Lard Sandwich',
      slug: 'lard-sandwich',
      sku: 'start-1',
      manage_stock: true,
      description:
        'Mixed with pork rinds. Serving them without sour pickles would be a heresy.',
      price: [{ amount: 654, currency: 'USD', includes_tax: true }],
      status: 'live',
      commodity_type: 'physical',
      meta: {
        timestamps: {
          created_at: '2017-11-07T23:54:29+00:00',
          updated_at: '2017-11-23T23:49:43+00:00'
        },
        display_price: {
          with_tax: {
            amount: 654,
            currency: 'USD',
            formatted: '$6.54'
          },
          without_tax: {
            amount: 654,
            currency: 'USD',
            formatted: '$6.54'
          }
        },
        stock: { level: 500, availability: 'in-stock' }
      },
      relationships: {
        categories: {
          data: [
            { type: 'category', id: 'e66859fd-9a7c-47e4-bbf1-c8dac8fab15e' }
          ]
        },
        main_image: {
          data: {
            type: 'main_image',
            id: 'bf5507cd-ab78-48cb-b17a-f1bc54199755'
          }
        }
      }
    },
    {
      type: 'product',
      id: 'c304e42d-9840-4a62-8bab-5126eceb4d4f',
      name: 'Vinegret de Leopolis',
      slug: 'vinegret',
      sku: 'sal-2',
      manage_stock: true,
      description:
        'Sheer number of ingredients will make your sense of taste go dizzy.',
      price: [{ amount: 138, currency: 'USD', includes_tax: true }],
      status: 'live',
      commodity_type: 'physical',
      meta: {
        timestamps: {
          created_at: '2017-11-07T23:24:29+00:00',
          updated_at: '2017-11-23T23:50:35+00:00'
        },
        display_price: {
          with_tax: {
            amount: 138,
            currency: 'USD',
            formatted: '$1.38'
          },
          without_tax: {
            amount: 138,
            currency: 'USD',
            formatted: '$1.38'
          }
        },
        stock: { level: 500, availability: 'in-stock' }
      },
      relationships: {
        categories: {
          data: [
            { type: 'category', id: 'f59c85b2-2e8c-46bf-90b6-94054f6b651f' }
          ]
        },
        main_image: {
          data: {
            type: 'main_image',
            id: '90f25a89-ebba-4df1-b8e6-e310db0782f8'
          }
        }
      }
    },
    {
      type: 'product',
      id: 'b1b1ae4f-68f1-40d4-8c39-8166cf2283cc',
      name: 'Misery',
      slug: 'mizeria',
      sku: 'sd-1',
      manage_stock: true,
      description: 'Bad name for a great summer salad.',
      price: [{ amount: 238, currency: 'USD', includes_tax: true }],
      status: 'live',
      commodity_type: 'physical',
      meta: {
        timestamps: {
          created_at: '2017-11-07T23:15:04+00:00',
          updated_at: '2017-11-23T23:49:50+00:00'
        },
        display_price: {
          with_tax: {
            amount: 238,
            currency: 'USD',
            formatted: '$2.38'
          },
          without_tax: {
            amount: 238,
            currency: 'USD',
            formatted: '$2.38'
          }
        },
        stock: { level: 500, availability: 'in-stock' }
      },
      relationships: {
        categories: {
          data: [
            { type: 'category', id: 'f59c85b2-2e8c-46bf-90b6-94054f6b651f' }
          ]
        },
        main_image: {
          data: {
            type: 'main_image',
            id: 'bb514a68-f501-4b58-8398-2401b22de245'
          }
        }
      }
    },
    {
      type: 'product',
      id: 'f8a4204e-dfc4-4bae-b2fb-b4b7b193fdfd',
      name: 'Dwujniak',
      slug: 'dwujniak',
      sku: 'alc-mead',
      manage_stock: true,
      description:
        'Mead to warm up your soul on long winter nights. Don\'t drink it alone.',
      price: [{ amount: 783, currency: 'USD', includes_tax: true }],
      status: 'live',
      commodity_type: 'physical',
      meta: {
        timestamps: {
          created_at: '2017-11-07T23:11:20+00:00',
          updated_at: '2017-11-23T23:49:28+00:00'
        },
        display_price: {
          with_tax: {
            amount: 783,
            currency: 'USD',
            formatted: '$7.83'
          },
          without_tax: {
            amount: 783,
            currency: 'USD',
            formatted: '$7.83'
          }
        },
        stock: { level: 500, availability: 'in-stock' }
      },
      relationships: {
        categories: {
          data: [
            { type: 'category', id: 'f33732ad-a3e4-4d61-a5f2-487544632a75' }
          ]
        },
        main_image: {
          data: {
            type: 'main_image',
            id: '5b2e37df-30ed-4a55-a314-254d37c9db04'
          }
        }
      }
    },
    {
      type: 'product',
      id: '443fe2f4-e589-48c2-a4d3-7a54f0f57fd9',
      name: 'Juniperovka',
      slug: 'jalowcowka',
      sku: 'alc-jal',
      manage_stock: true,
      description: 'Some call me Gin?',
      price: [{ amount: 999, currency: 'USD', includes_tax: true }],
      status: 'live',
      commodity_type: 'physical',
      meta: {
        timestamps: {
          created_at: '2017-11-07T22:59:51+00:00',
          updated_at: '2017-11-23T23:49:35+00:00'
        },
        display_price: {
          with_tax: {
            amount: 999,
            currency: 'USD',
            formatted: '$9.99'
          },
          without_tax: {
            amount: 999,
            currency: 'USD',
            formatted: '$9.99'
          }
        },
        stock: { level: 500, availability: 'in-stock' }
      },
      relationships: {
        categories: {
          data: [
            { type: 'category', id: 'f33732ad-a3e4-4d61-a5f2-487544632a75' }
          ]
        },
        main_image: {
          data: {
            type: 'main_image',
            id: 'b1e752ac-e325-4dbf-80bf-075815c4b3f1'
          }
        }
      }
    },
    {
      type: 'product',
      id: 'f5fcc1e9-9295-429d-bffe-4a0e5e641875',
      name: 'Okovita',
      slug: 'okovita',
      sku: 'alc-oko',
      manage_stock: true,
      description: 'The water of life. Drink it your life is boring.',
      price: [{ amount: 199, currency: 'USD', includes_tax: true }],
      status: 'live',
      commodity_type: 'physical',
      meta: {
        timestamps: {
          created_at: '2017-11-07T22:55:20+00:00',
          updated_at: '2017-11-23T23:50:07+00:00'
        },
        display_price: {
          with_tax: {
            amount: 199,
            currency: 'USD',
            formatted: '$1.99'
          },
          without_tax: {
            amount: 199,
            currency: 'USD',
            formatted: '$1.99'
          }
        },
        stock: { level: 500, availability: 'in-stock' }
      },
      relationships: {
        categories: {
          data: [
            { type: 'category', id: 'f33732ad-a3e4-4d61-a5f2-487544632a75' }
          ]
        },
        main_image: {
          data: {
            type: 'main_image',
            id: 'b870b97d-9e95-4a65-a2f6-f79535e5b4cf'
          }
        }
      }
    },
    {
      type: 'product',
      id: 'caab0d5c-b0f8-4e18-9259-529367976d62',
      name: 'W-Z',
      slug: 'w-z',
      sku: 'ds-2',
      manage_stock: true,
      description: 'An obligatory pastry to any cup of coffee. ',
      price: [{ amount: 249, currency: 'USD', includes_tax: true }],
      status: 'live',
      commodity_type: 'physical',
      meta: {
        timestamps: {
          created_at: '2017-11-07T22:36:28+00:00',
          updated_at: '2017-11-23T23:50:41+00:00'
        },
        display_price: {
          with_tax: {
            amount: 249,
            currency: 'USD',
            formatted: '$2.49'
          },
          without_tax: {
            amount: 249,
            currency: 'USD',
            formatted: '$2.49'
          }
        },
        stock: { level: 500, availability: 'in-stock' }
      },
      relationships: {
        categories: {
          data: [
            { type: 'category', id: 'e5c6139e-3788-4556-83ed-4e4f05090a7a' }
          ]
        },
        main_image: {
          data: {
            type: 'main_image',
            id: '5041c3f6-db8a-45ea-bc12-82253c53a6f9'
          }
        }
      }
    },
    {
      type: 'product',
      id: '978b328b-3756-4c10-9e31-0ec7e23dd7f2',
      name: 'Sultan Cream',
      slug: 'sultan-cream',
      sku: 'ds-1',
      manage_stock: true,
      description: 'Even if you don\'t like it, you\'ll get three portions.',
      price: [{ amount: 200, currency: 'USD', includes_tax: true }],
      status: 'live',
      commodity_type: 'physical',
      meta: {
        timestamps: {
          created_at: '2017-11-07T22:31:07+00:00',
          updated_at: '2017-11-23T23:50:29+00:00'
        },
        display_price: {
          with_tax: {
            amount: 200,
            currency: 'USD',
            formatted: '$2.00'
          },
          without_tax: {
            amount: 200,
            currency: 'USD',
            formatted: '$2.00'
          }
        },
        stock: { level: 500, availability: 'in-stock' }
      },
      relationships: {
        categories: {
          data: [
            { type: 'category', id: 'e5c6139e-3788-4556-83ed-4e4f05090a7a' }
          ]
        },
        main_image: {
          data: {
            type: 'main_image',
            id: 'bd630666-a5ef-4708-b008-21fcd124fc20'
          }
        }
      }
    },
    {
      type: 'product',
      id: 'e673cc8f-26ed-4df7-8d12-1030e12a6ee3',
      name: 'Punch Burger',
      slug: 'punch-burger',
      sku: 'bg-2',
      manage_stock: true,
      description:
        'Healthy food is for suckers! This is what you want to eat. How many calories? Who cares! What\'s in it? Shut up! Put it in your body or you\'re a nerd!',
      price: [{ amount: 1000, currency: 'USD', includes_tax: true }],
      status: 'live',
      commodity_type: 'physical',
      meta: {
        timestamps: {
          created_at: '2017-11-07T21:53:44+00:00',
          updated_at: '2017-11-23T23:50:22+00:00'
        },
        display_price: {
          with_tax: {
            amount: 1000,
            currency: 'USD',
            formatted: '$10.00'
          },
          without_tax: {
            amount: 1000,
            currency: 'USD',
            formatted: '$10.00'
          }
        },
        stock: { level: 500, availability: 'in-stock' }
      },
      relationships: {
        categories: {
          data: [
            { type: 'category', id: 'eff388de-92f9-4436-a0c3-7bcb6f1a773e' }
          ]
        },
        main_image: {
          data: {
            type: 'main_image',
            id: 'e359d27b-1fd9-4d57-bdba-d1ff5c6bbf68'
          }
        }
      }
    },
    {
      type: 'product',
      id: 'fb7270bc-ed99-48d7-8aa3-ed4542cae16f',
      name: 'Basic Burger',
      slug: 'basic-burger',
      sku: 'bg-1',
      manage_stock: true,
      description:
        'A hamburger, made out of meat, on a bun with nothing. Add ketchup if you want, we couldn\'t care less. ',
      price: [{ amount: 99, currency: 'USD', includes_tax: true }],
      status: 'live',
      commodity_type: 'physical',
      meta: {
        timestamps: {
          created_at: '2017-11-07T19:43:06+00:00',
          updated_at: '2017-11-23T23:48:55+00:00'
        },
        display_price: {
          with_tax: { amount: 99, currency: 'USD', formatted: '$0.99' },
          without_tax: {
            amount: 99,
            currency: 'USD',
            formatted: '$0.99'
          }
        },
        stock: { level: 500, availability: 'in-stock' }
      },
      relationships: {
        categories: {
          data: [
            { type: 'category', id: 'eff388de-92f9-4436-a0c3-7bcb6f1a773e' }
          ]
        },
        main_image: {
          data: {
            type: 'main_image',
            id: 'b9d809c5-7f7f-41e4-a0dd-18f30864d96d'
          }
        }
      }
    },
    {
      type: 'product',
      id: 'd56999c6-d692-47db-8ff8-9392a3ee552b',
      name: 'Mushroom Soup',
      slug: 'mushroom-soup',
      sku: 's-ms1',
      manage_stock: true,
      description:
        'Delicious creamy symphony of real forest mushrooms. Get yourself connected to the nature.',
      price: [{ amount: 700, currency: 'USD', includes_tax: true }],
      status: 'live',
      commodity_type: 'physical',
      meta: {
        timestamps: {
          created_at: '2017-11-07T19:30:55+00:00',
          updated_at: '2017-11-23T23:49:56+00:00'
        },
        display_price: {
          with_tax: {
            amount: 700,
            currency: 'USD',
            formatted: '$7.00'
          },
          without_tax: {
            amount: 700,
            currency: 'USD',
            formatted: '$7.00'
          }
        },
        stock: { level: 500, availability: 'in-stock' }
      },
      relationships: {
        categories: {
          data: [
            { type: 'category', id: 'b16931c0-573b-42b2-8a6a-bfc3f4505a01' }
          ]
        },
        main_image: {
          data: {
            type: 'main_image',
            id: '7fff1d78-6f38-4150-b9ef-df6085bd21a4'
          }
        }
      }
    },
    {
      type: 'product',
      id: 'dbac59ce-760b-4573-9b26-469ff3047035',
      name: ' Sour Rye Soup',
      slug: 'rye-soup',
      sku: 's-sr1',
      manage_stock: true,
      description:
        'Is a soup made of soured rye flour and boiled pork sausage. Served with boiled egg. Just like grandma did it!',
      price: [{ amount: 601, currency: 'USD', includes_tax: true }],
      status: 'live',
      commodity_type: 'physical',
      meta: {
        timestamps: {
          created_at: '2017-11-05T23:18:24+00:00',
          updated_at: '2017-11-23T23:48:46+00:00'
        },
        display_price: {
          with_tax: {
            amount: 601,
            currency: 'USD',
            formatted: '$6.01'
          },
          without_tax: {
            amount: 601,
            currency: 'USD',
            formatted: '$6.01'
          }
        },
        stock: { level: 500, availability: 'in-stock' }
      },
      relationships: {
        categories: {
          data: [
            { type: 'category', id: 'b16931c0-573b-42b2-8a6a-bfc3f4505a01' }
          ]
        },
        main_image: {
          data: {
            type: 'main_image',
            id: '6357fd02-055c-4f8d-a7eb-1b86a4e9f727'
          }
        }
      }
    },
    {
      type: 'product',
      id: '6ceae4bb-4c87-4356-8b04-11d171bd2b3e',
      name: 'Blood Soup',
      slug: 'blood-soup',
      sku: 's-bs1',
      manage_stock: true,
      description:
        'The iconic Duck Blood Soup. One of it\'s kind delicacy for any suitor!',
      price: [{ amount: 8, currency: 'USD', includes_tax: true }],
      status: 'live',
      commodity_type: 'physical',
      meta: {
        timestamps: {
          created_at: '2017-11-05T23:10:20+00:00',
          updated_at: '2017-11-23T23:49:03+00:00'
        },
        display_price: {
          with_tax: { amount: 8, currency: 'USD', formatted: '$0.08' },
          without_tax: {
            amount: 8,
            currency: 'USD',
            formatted: '$0.08'
          }
        },
        stock: { level: 500, availability: 'in-stock' }
      },
      relationships: {
        categories: {
          data: [
            { type: 'category', id: 'b16931c0-573b-42b2-8a6a-bfc3f4505a01' }
          ]
        },
        main_image: {
          data: {
            type: 'main_image',
            id: '15681c7f-21d3-4231-aa7f-89eec1f59692'
          }
        }
      }
    },
    {
      type: 'product',
      id: '5dcc07ee-9b4e-4a1b-847d-29761b1bdb78',
      name: 'Borsch',
      slug: 'borsch',
      sku: 's-borsch1',
      manage_stock: true,
      description: 'A legend among the soups! Can\'t beat that beatroot color!',
      price: [{ amount: 5, currency: 'USD', includes_tax: true }],
      status: 'live',
      commodity_type: 'physical',
      meta: {
        timestamps: {
          created_at: '2017-11-05T21:51:33+00:00',
          updated_at: '2017-11-23T23:49:12+00:00'
        },
        display_price: {
          with_tax: { amount: 5, currency: 'USD', formatted: '$0.05' },
          without_tax: {
            amount: 5,
            currency: 'USD',
            formatted: '$0.05'
          }
        },
        stock: { level: 500, availability: 'in-stock' }
      },
      relationships: {
        categories: {
          data: [
            { type: 'category', id: 'b16931c0-573b-42b2-8a6a-bfc3f4505a01' }
          ]
        },
        main_image: {
          data: {
            type: 'main_image',
            id: 'fd31ad22-d057-4048-a62c-6c3411e9ac33'
          }
        }
      }
    }
  ],
  links: {
    current:
      'https://api.moltin.com/v2/products?page[limit]=100&page[offset]=0&include=files',
    first:
      'https://api.moltin.com/v2/products?page[limit]=100&page[offset]=0&include=files',
    last: null
  },
  meta: {
    results: { total: 16, all: 16 },
    page: { limit: 100, offset: 0, current: 1, total: 1 }
  },
  included: {
    main_images: [
      {
        type: 'file',
        id: '2c5af4f0-3abf-4c16-9187-3daafb6c6a22',
        link: {
          href:
            'https://s3-eu-west-1.amazonaws.com/bkt-svc-files-cmty-api-moltin-com/4c77dae7-a166-4417-b207-eadf85107aaa/2c5af4f0-3abf-4c16-9187-3daafb6c6a22.jpg'
        },
        file_name: '1371724459_by_KAOwiec_500.jpg',
        mime_type: 'image/jpeg',
        file_size: 218600,
        public: true,
        meta: {
          dimensions: { width: 516, height: 800 },
          timestamps: { created_at: '2017-11-08T22:49:34.972Z' }
        },
        links: {
          current:
            'https://api.moltin.com/v2/files/2c5af4f0-3abf-4c16-9187-3daafb6c6a22'
        }
      },
      {
        type: 'file',
        id: '9bf19baf-327f-4c77-bb93-b74e5b900ae8',
        link: {
          href:
            'https://s3-eu-west-1.amazonaws.com/bkt-svc-files-cmty-api-moltin-com/4c77dae7-a166-4417-b207-eadf85107aaa/9bf19baf-327f-4c77-bb93-b74e5b900ae8.jpeg'
        },
        file_name: '0b8c56c55c5564a4745a4a9db94b38a408365a36.jpeg',
        mime_type: '',
        file_size: 94704,
        public: true,
        meta: {
          dimensions: {},
          timestamps: { created_at: '2017-11-08T22:44:55.034Z' }
        },
        links: {
          current:
            'https://api.moltin.com/v2/files/9bf19baf-327f-4c77-bb93-b74e5b900ae8'
        }
      },
      {
        type: 'file',
        id: 'bf5507cd-ab78-48cb-b17a-f1bc54199755',
        link: {
          href:
            'https://s3-eu-west-1.amazonaws.com/bkt-svc-files-cmty-api-moltin-com/4c77dae7-a166-4417-b207-eadf85107aaa/bf5507cd-ab78-48cb-b17a-f1bc54199755.jpg'
        },
        file_name: '1438760545_by_krzys_500.jpg',
        mime_type: 'image/jpeg',
        file_size: 108624,
        public: true,
        meta: {
          dimensions: { width: 518, height: 449 },
          timestamps: { created_at: '2017-11-07T23:54:48.817Z' }
        },
        links: {
          current:
            'https://api.moltin.com/v2/files/bf5507cd-ab78-48cb-b17a-f1bc54199755'
        }
      },
      {
        type: 'file',
        id: '90f25a89-ebba-4df1-b8e6-e310db0782f8',
        link: {
          href:
            'https://s3-eu-west-1.amazonaws.com/bkt-svc-files-cmty-api-moltin-com/4c77dae7-a166-4417-b207-eadf85107aaa/90f25a89-ebba-4df1-b8e6-e310db0782f8.jpg'
        },
        file_name: 'z11306198Q,Lwowska-salatka-winegret.jpg',
        mime_type: 'image/jpeg',
        file_size: 44680,
        public: true,
        meta: {
          dimensions: { width: 620, height: 458 },
          timestamps: { created_at: '2017-11-07T23:25:51.093Z' }
        },
        links: {
          current:
            'https://api.moltin.com/v2/files/90f25a89-ebba-4df1-b8e6-e310db0782f8'
        }
      },
      {
        type: 'file',
        id: 'bb514a68-f501-4b58-8398-2401b22de245',
        link: {
          href:
            'https://s3-eu-west-1.amazonaws.com/bkt-svc-files-cmty-api-moltin-com/4c77dae7-a166-4417-b207-eadf85107aaa/bb514a68-f501-4b58-8398-2401b22de245.jpg'
        },
        file_name: 'mizeria.jpg',
        mime_type: 'image/jpeg',
        file_size: 21414,
        public: true,
        meta: {
          dimensions: { width: 424, height: 223 },
          timestamps: { created_at: '2017-11-07T23:15:16.026Z' }
        },
        links: {
          current:
            'https://api.moltin.com/v2/files/bb514a68-f501-4b58-8398-2401b22de245'
        }
      },
      {
        type: 'file',
        id: '5b2e37df-30ed-4a55-a314-254d37c9db04',
        link: {
          href:
            'https://s3-eu-west-1.amazonaws.com/bkt-svc-files-cmty-api-moltin-com/4c77dae7-a166-4417-b207-eadf85107aaa/5b2e37df-30ed-4a55-a314-254d37c9db04.jpg'
        },
        file_name: 'miodpitny.jpg',
        mime_type: 'image/jpeg',
        file_size: 43677,
        public: true,
        meta: {
          dimensions: { width: 480, height: 640 },
          timestamps: { created_at: '2017-11-07T23:11:35.131Z' }
        },
        links: {
          current:
            'https://api.moltin.com/v2/files/5b2e37df-30ed-4a55-a314-254d37c9db04'
        }
      },
      {
        type: 'file',
        id: 'b1e752ac-e325-4dbf-80bf-075815c4b3f1',
        link: {
          href:
            'https://s3-eu-west-1.amazonaws.com/bkt-svc-files-cmty-api-moltin-com/4c77dae7-a166-4417-b207-eadf85107aaa/b1e752ac-e325-4dbf-80bf-075815c4b3f1.jpg'
        },
        file_name:
          'bc1fe296e6957a6fb15bef0e659f7129_44525_5140ed2fcc5df_wm.jpg',
        mime_type: 'image/jpeg',
        file_size: 72446,
        public: true,
        meta: {
          dimensions: { width: 625, height: 455 },
          timestamps: { created_at: '2017-11-07T23:00:04.013Z' }
        },
        links: {
          current:
            'https://api.moltin.com/v2/files/b1e752ac-e325-4dbf-80bf-075815c4b3f1'
        }
      },
      {
        type: 'file',
        id: 'b870b97d-9e95-4a65-a2f6-f79535e5b4cf',
        link: {
          href:
            'https://s3-eu-west-1.amazonaws.com/bkt-svc-files-cmty-api-moltin-com/4c77dae7-a166-4417-b207-eadf85107aaa/b870b97d-9e95-4a65-a2f6-f79535e5b4cf.jpg'
        },
        file_name: 'okowita2_843.jpg',
        mime_type: 'image/jpeg',
        file_size: 51031,
        public: true,
        meta: {
          dimensions: { width: 843, height: 504 },
          timestamps: { created_at: '2017-11-07T22:55:48.849Z' }
        },
        links: {
          current:
            'https://api.moltin.com/v2/files/b870b97d-9e95-4a65-a2f6-f79535e5b4cf'
        }
      },
      {
        type: 'file',
        id: '5041c3f6-db8a-45ea-bc12-82253c53a6f9',
        link: {
          href:
            'https://s3-eu-west-1.amazonaws.com/bkt-svc-files-cmty-api-moltin-com/4c77dae7-a166-4417-b207-eadf85107aaa/5041c3f6-db8a-45ea-bc12-82253c53a6f9.jpg'
        },
        file_name: 'photo_8282_large.jpg',
        mime_type: 'image/jpeg',
        file_size: 88417,
        public: true,
        meta: {
          dimensions: { width: 900, height: 602 },
          timestamps: { created_at: '2017-11-07T22:38:18.098Z' }
        },
        links: {
          current:
            'https://api.moltin.com/v2/files/5041c3f6-db8a-45ea-bc12-82253c53a6f9'
        }
      },
      {
        type: 'file',
        id: 'bd630666-a5ef-4708-b008-21fcd124fc20',
        link: {
          href:
            'https://s3-eu-west-1.amazonaws.com/bkt-svc-files-cmty-api-moltin-com/4c77dae7-a166-4417-b207-eadf85107aaa/bd630666-a5ef-4708-b008-21fcd124fc20.jpg'
        },
        file_name: '161-1912-1-PB.jpg',
        mime_type: 'image/jpeg',
        file_size: 267352,
        public: true,
        meta: {
          dimensions: { width: 1800, height: 1398 },
          timestamps: { created_at: '2017-11-07T22:31:24.449Z' }
        },
        links: {
          current:
            'https://api.moltin.com/v2/files/bd630666-a5ef-4708-b008-21fcd124fc20'
        }
      },
      {
        type: 'file',
        id: 'e359d27b-1fd9-4d57-bdba-d1ff5c6bbf68',
        link: {
          href:
            'https://s3-eu-west-1.amazonaws.com/bkt-svc-files-cmty-api-moltin-com/4c77dae7-a166-4417-b207-eadf85107aaa/e359d27b-1fd9-4d57-bdba-d1ff5c6bbf68.jpg'
        },
        file_name: 'hqdefault.jpg',
        mime_type: 'image/jpeg',
        file_size: 18837,
        public: true,
        meta: {
          dimensions: { width: 480, height: 270 },
          timestamps: { created_at: '2017-11-07T21:53:57.669Z' }
        },
        links: {
          current:
            'https://api.moltin.com/v2/files/e359d27b-1fd9-4d57-bdba-d1ff5c6bbf68'
        }
      },
      {
        type: 'file',
        id: 'b9d809c5-7f7f-41e4-a0dd-18f30864d96d',
        link: {
          href:
            'https://s3-eu-west-1.amazonaws.com/bkt-svc-files-cmty-api-moltin-com/4c77dae7-a166-4417-b207-eadf85107aaa/b9d809c5-7f7f-41e4-a0dd-18f30864d96d.jpg'
        },
        file_name: 'img_7338-version-2.jpg',
        mime_type: 'image/jpeg',
        file_size: 48906,
        public: true,
        meta: {
          dimensions: { width: 500, height: 332 },
          timestamps: { created_at: '2017-11-07T19:43:18.006Z' }
        },
        links: {
          current:
            'https://api.moltin.com/v2/files/b9d809c5-7f7f-41e4-a0dd-18f30864d96d'
        }
      },
      {
        type: 'file',
        id: '7fff1d78-6f38-4150-b9ef-df6085bd21a4',
        link: {
          href:
            'https://s3-eu-west-1.amazonaws.com/bkt-svc-files-cmty-api-moltin-com/4c77dae7-a166-4417-b207-eadf85107aaa/7fff1d78-6f38-4150-b9ef-df6085bd21a4.jpg'
        },
        file_name:
          'a6c774848b9c-ddfeee8c95-zupa_grzybowa_11833_S_-69304_RGB_960x540.jpg',
        mime_type: 'image/jpeg',
        file_size: 62994,
        public: true,
        meta: {
          dimensions: { width: 960, height: 540 },
          timestamps: { created_at: '2017-11-07T19:31:15.627Z' }
        },
        links: {
          current:
            'https://api.moltin.com/v2/files/7fff1d78-6f38-4150-b9ef-df6085bd21a4'
        }
      },
      {
        type: 'file',
        id: '6357fd02-055c-4f8d-a7eb-1b86a4e9f727',
        link: {
          href:
            'https://s3-eu-west-1.amazonaws.com/bkt-svc-files-cmty-api-moltin-com/4c77dae7-a166-4417-b207-eadf85107aaa/6357fd02-055c-4f8d-a7eb-1b86a4e9f727.jpg'
        },
        file_name: 'zur-3.jpg',
        mime_type: 'image/jpeg',
        file_size: 349173,
        public: true,
        meta: {
          dimensions: { width: 900, height: 596 },
          timestamps: { created_at: '2017-11-05T23:19:43.067Z' }
        },
        links: {
          current:
            'https://api.moltin.com/v2/files/6357fd02-055c-4f8d-a7eb-1b86a4e9f727'
        }
      },
      {
        type: 'file',
        id: '15681c7f-21d3-4231-aa7f-89eec1f59692',
        link: {
          href:
            'https://s3-eu-west-1.amazonaws.com/bkt-svc-files-cmty-api-moltin-com/4c77dae7-a166-4417-b207-eadf85107aaa/15681c7f-21d3-4231-aa7f-89eec1f59692.JPG'
        },
        file_name: 'czernina na gęsinie (5).JPG',
        mime_type: 'image/jpeg',
        file_size: 215388,
        public: true,
        meta: {
          dimensions: { width: 1600, height: 1289 },
          timestamps: { created_at: '2017-11-05T23:10:56.182Z' }
        },
        links: {
          current:
            'https://api.moltin.com/v2/files/15681c7f-21d3-4231-aa7f-89eec1f59692'
        }
      },
      {
        type: 'file',
        id: 'fd31ad22-d057-4048-a62c-6c3411e9ac33',
        link: {
          href:
            'https://s3-eu-west-1.amazonaws.com/bkt-svc-files-cmty-api-moltin-com/4c77dae7-a166-4417-b207-eadf85107aaa/fd31ad22-d057-4048-a62c-6c3411e9ac33.jpg'
        },
        file_name: 'z11291859IER,Barszcz-ukrainski.jpg',
        mime_type: 'image/jpeg',
        file_size: 143022,
        public: true,
        meta: {
          dimensions: { width: 1000, height: 782 },
          timestamps: { created_at: '2017-11-05T21:52:57Z' }
        },
        links: {
          current:
            'https://api.moltin.com/v2/files/fd31ad22-d057-4048-a62c-6c3411e9ac33'
        }
      }
    ]
  }
}

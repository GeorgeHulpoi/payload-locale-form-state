import type { CollectionConfig } from 'payload'

export const Tests: CollectionConfig = {
  slug: 'tests',
  fields: [
    {
      name: 'title',
      type: 'text',
      access: {
        create: () => true,
        update: ({ doc }) => !doc?.title,
      },
      required: true,
      localized: true,
    },
  ],
}

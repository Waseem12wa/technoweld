import type { Block } from 'payload'

export const ContentBlock: Block = {
  slug: 'content',
  fields: [
    {
      name: 'layout',
      type: 'select',
      defaultValue: 'full',
      options: [
        { label: 'Full Width', value: 'full' },
        { label: 'Two Columns', value: 'two-column' },
      ],
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
    },
    {
      name: 'secondaryContent',
      type: 'richText',
      admin: {
        condition: (_, siblingData) => siblingData.layout === 'two-column',
      },
    },
  ],
}

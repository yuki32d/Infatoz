export const serviceSchema = {
  name: 'service',
  title: 'Service Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Service Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'heroEyebrow',
      title: 'Hero Eyebrow Category',
      type: 'string',
    },
    {
      name: 'heroTitle',
      title: 'Hero Title Prefix',
      type: 'string',
    },
    {
      name: 'heroHighlight',
      title: 'Hero Title Highlighted Text',
      type: 'string',
    },
    {
      name: 'heroSub',
      title: 'Hero Subtitle / Description',
      type: 'text',
    },
    {
      name: 'heroImg1',
      title: 'Hero Background Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'heroImg2',
      title: 'Secondary / Detail Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'badgeNumber',
      title: 'Badge Number (e.g. 99.9%)',
      type: 'string',
    },
    {
      name: 'badgeLabel',
      title: 'Badge Label',
      type: 'string',
    },
    {
      name: 'stats',
      title: 'Key Statistics',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'num', title: 'Number / Stat', type: 'string' },
            { name: 'label', title: 'Label', type: 'string' },
          ],
        },
      ],
    },
    {
      name: 'overviewTitle',
      title: 'Overview Section Title',
      type: 'string',
    },
    {
      name: 'overviewHighlight',
      title: 'Overview Title Highlight',
      type: 'string',
    },
    {
      name: 'overviewDesc',
      title: 'Overview Description Paragraph',
      type: 'text',
    },
    {
      name: 'overviewList',
      title: 'Overview Bullet Points',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'features',
      title: 'Features List',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Feature Title', type: 'string' },
            { name: 'desc', title: 'Feature Description', type: 'text' },
            { name: 'icon', title: 'Icon Name (e.g. brain, code, cloud)', type: 'string' },
          ],
        },
      ],
    },
    {
      name: 'processTitle',
      title: 'Process Section Title',
      type: 'string',
    },
    {
      name: 'processSteps',
      title: 'Process Steps',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Step Title', type: 'string' },
            { name: 'desc', title: 'Step Description', type: 'text' },
          ],
        },
      ],
    },
    {
      name: 'techTitle',
      title: 'Tech Stack Title',
      type: 'string',
    },
    {
      name: 'faqs',
      title: 'FAQs',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'q', title: 'Question', type: 'string' },
            { name: 'a', title: 'Answer', type: 'text' },
          ],
        },
      ],
    },
  ],
};

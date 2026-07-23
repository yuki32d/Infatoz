export const faqSchema = {
  name: 'faq',
  title: 'FAQ Item',
  type: 'document',
  fields: [
    {
      name: 'question',
      title: 'Question',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'answer',
      title: 'Answer',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category (e.g. General, Services, Billing)',
      type: 'string',
    },
  ],
};

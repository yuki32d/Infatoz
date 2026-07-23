export const testimonialSchema = {
  name: 'testimonial',
  title: 'Client Testimonials',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Client Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'role',
      title: 'Role / Position (e.g. CEO at TechCorp)',
      type: 'string',
    },
    {
      name: 'quote',
      title: 'Testimonial Quote',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'avatar',
      title: 'Client Photo',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'rating',
      title: 'Star Rating (1-5)',
      type: 'number',
      initialValue: 5,
    },
  ],
};

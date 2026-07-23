export const heroSchema = {
  name: 'landingHero',
  title: 'Landing Page Banner',
  type: 'document',
  fields: [
    {
      name: 'eyebrow',
      title: 'Eyebrow Pill Text',
      type: 'string',
    },
    {
      name: 'headline',
      title: 'Main Headline',
      type: 'string',
    },
    {
      name: 'highlight',
      title: 'Highlighted Word(s)',
      type: 'string',
    },
    {
      name: 'subtext',
      title: 'Sub-headline Paragraph',
      type: 'text',
    },
    {
      name: 'ctaText',
      title: 'Primary CTA Button Text',
      type: 'string',
    },
    {
      name: 'ctaLink',
      title: 'Primary CTA Link',
      type: 'string',
    },
    {
      name: 'bgImage',
      title: 'Banner Background Image',
      type: 'image',
      options: { hotspot: true },
    },
  ],
};

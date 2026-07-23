import createImageUrlBuilder from '@sanity/image-url';
import { projectId, dataset } from './client';

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || '6l09h8lt',
  dataset: dataset || 'production',
});

export const urlForImage = (source) => {
  if (!source || !source.asset) return null;
  return imageBuilder.image(source);
};

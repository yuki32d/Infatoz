import { createClient } from 'next-sanity';

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '6l09h8lt';
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';

let rawApiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION;
if (typeof rawApiVersion === 'string') {
  rawApiVersion = rawApiVersion.replace(/['"]/g, '').trim();
}
export const apiVersion = (rawApiVersion && /^\d{4}-\d{2}-\d{2}$/.test(rawApiVersion))
  ? rawApiVersion
  : '2024-01-01';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Set to false to get fresh data immediately on updates
});

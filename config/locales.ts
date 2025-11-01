// Locale configuration that can be imported anywhere
export const locales = ['en', 'no'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'no';

import type { Metadata } from "next";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { locales } from '@/config/locales';
import LangSetter from '@/components/LangSetter';

// Note: Metadata cannot be exported from client component or dynamic route
// Moving to root layout would be better, but for now we'll handle fonts differently

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const { locale } = params;

  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages({ locale });

  return (
    <>
      <LangSetter locale={locale} />
      <NextIntlClientProvider messages={messages}>
        <div className="font-sans">
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </div>
      </NextIntlClientProvider>
    </>
  );
}

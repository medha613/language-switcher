import { routing } from "@/i18n/routing";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { LangChangeHandler } from "../LangChangeHandler";

import ClientProvider from "@/components/ClientProvider";

export default async function LocaleLayout({children,  params }) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    // <html suppressHydrationWarning >
    <html lang={locale}>
      <LangChangeHandler />
      <body>
        <ClientProvider locale={locale}>{children} </ClientProvider>
      </body>
    </html>
  );
}

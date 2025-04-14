import { routing } from "@/i18n/routing";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { LangChangeHandler } from "../LangChangeHandler";
import Header from "../header";

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    // <html suppressHydrationWarning >
    <html lang={locale} >
      <LangChangeHandler />
      <body>
        <NextIntlClientProvider>
          <div >
            <Header />
          </div>

          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

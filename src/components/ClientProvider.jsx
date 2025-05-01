"use client";


import Header from "@/app/header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NextIntlClientProvider } from "next-intl";
import { useState } from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";


export default function ClientProvider({ children, locale }) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <NextIntlClientProvider locale={locale}>
        <div>
          <Header />
        </div>

        {children}
      </NextIntlClientProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

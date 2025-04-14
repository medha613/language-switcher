"use client";

import Link from "next/link";
import { useParams, usePathname, useRouter } from "next/navigation";

import { useTransition } from "react";

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const { locale } = useParams();

  const [isPending, startTransition] = useTransition();

  const getNewPathWithLocale = (locale) => {
    const segments = pathname.split("/");

    const supportedLocales = ["en", "de"];
    const currentLocale = segments[1];
    console.log(currentLocale, "CURRENT LOCALE");
    
    if (supportedLocales.includes(currentLocale)) {
      segments[1] = locale;
    } else {
      segments.splice(1, 0, locale);
    }

    return segments.join("/") || "/";
  };

  const handleLangSwitch = (e) => {
    const newLocale = e.target.value;
    const newPath = getNewPathWithLocale(newLocale);

    startTransition(() => {
      console.log(newPath);
      router.replace(newPath);
    });
  };

  // if (isPending) {
  //   return <div>Loading.....</div>;
  // }

  return (
    <div className=" bg-blue-400 p-3">
      <div className=" flex flex-row justify-between ">
        <h2 className=" font-bold ">Language Switcher</h2>

        <nav>
          <ul className=" flex flex-row gap-4">
            <Link className="font-bold" href="/">
              Home
            </Link>
            <Link className="font-bold" href="/about">
              About
            </Link>
            <Link className="font-bold" href="/about">
              Contact
            </Link>
          </ul>
        </nav>
        {isPending ? (
          <div>Loading.....</div>
        ) : (
          <select value={locale} onChange={handleLangSwitch} className="">
            <option value="en">Eng</option>
            <option value="de">De</option>
          </select>
        )}
      </div>
    </div>
  );
}

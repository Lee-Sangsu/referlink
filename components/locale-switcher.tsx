"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { i18n, type Locale } from "../i18nConfig";
import { useState } from "react";
import { PrimaryButton } from "./basic-ui-elements";

export default function LocaleSwitcher({lang}: {lang: Locale}) {
  const [isSwitcherOpen, setSwitcherOpen] = useState(false);
  const pathName = usePathname();
  const redirectedPathName = (locale: Locale) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  const toggleDropdown = () => setSwitcherOpen(!isSwitcherOpen);

  return (
    <div className="relative inline-block text-left">
      {/*  onMouseEnter={() => setSwitcherOpen(true)} onMouseLeave={() => setSwitcherOpen(false)} will make 'em annoyed */}
      <PrimaryButton onClick={toggleDropdown} innerText={lang === "ko" ? "한국어": "English"} />
      {isSwitcherOpen && (
        <ul className="absolute z-10 mt-2 w-36 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          {i18n.locales.map((locale) => {
            return (
              <li key={locale}>
                <Link href={redirectedPathName(locale)}>{locale === "ko" ? "한국어": "English"}</Link>
              </li>
            );
          })}
        </ul>)}
    </div>
  );
}
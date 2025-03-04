"use client";

import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  // Toggle between 'en' and 'ar'
  const switchLocale = (newLocale: "en" | "ar") => {
    // Replace locale in the pathname
    const newPathname = `/${newLocale}${pathname.substring(3)}`; // Remove old locale
    router.push(newPathname);
  };

  return (
    <div className="flex space-x-2">
      <button
        onClick={() => switchLocale("en")}
        className={`p-2 rounded ${
          locale === "en" ? "bg-blue-500 text-white" : "bg-gray-300 text-black"
        }`}
      >
        🇬🇧 English
      </button>
      <button
        onClick={() => switchLocale("ar")}
        className={`p-2 rounded ${
          locale === "ar" ? "bg-blue-500 text-white" : "bg-gray-300 text-black"
        }`}
      >
        🇸🇦 العربية
      </button>
    </div>
  );
}

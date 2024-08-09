import { type NextRequest, NextResponse } from "next/server";
import { i18n } from '@/i18nConfig';
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";


function getLocale(request: NextRequest): string | undefined {
    // Negotiator expects plain object so we need to transform headers
    const negotiatorHeaders: Record<string, string> = {};
    request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));
  
    // @ts-ignore locales are readonly
    const locales: string[] = i18n.locales;
  
    // Use negotiator and intl-localematcher to get best locale
    let languages = new Negotiator({ headers: negotiatorHeaders }).languages(
      locales,
    );
  
    const locale = match(languages, locales, i18n.defaultLocale);
  
    return locale;
  }
  export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;
    console.log("Current pathname:", pathname);

    const pathnameHasLocale = i18n.locales.some(
      (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );
    if (pathnameHasLocale) return;
    if ([
        '/icons',
        '/imgs',
    ].includes(pathname)) return;

  
    // Check if there is any supported locale in the pathname
    const pathnameIsMissingLocale = i18n.locales.every(
      (locale) =>
        !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
    );
  
    // Redirect if there is no locale
    if (pathnameIsMissingLocale) {
      const locale = getLocale(request);
  
      // e.g. incoming request is /products
      // The new URL is now /en-US/products
      return NextResponse.redirect(
        new URL(
          `/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
          request.url,
        ),
      );
    }
  }
  
 
export const config = {
    matcher: ["/((?!api|_next/static|_next/image).*)"],
}



import Link from "next/link";
import Image from "next/image";
import LocaleSwitcher from "@/components/locale-switcher";
import { AuthOnHeader } from "./elements/authOnHeader";
import { Locale } from "@/i18nConfig";
import { getDictionary } from "@/components/get-dictionary";
import { verifySession } from "@/app/[lang]/lib/auth";
import { SecondaryLink } from "@/components/basic-ui-elements";

export default async function Header({
  params: { lang }
}: {params: { lang: Locale }}) {
  const dictionary: {[key:string]: any} = await getDictionary(lang);
  const session = await verifySession();

    return ( <div className="flex flex-row h-16 w-screen px-[8vw] justify-between items-center bg-white fixed">
        <Link href="/">
          <Image
            src="/icons/logo-full.png"
            alt="Go back to Referlink index page"
            className=""
            width={166}
            height={40}
            priority
          />
        </Link>
        <div className="flex flex-row">
          {/* <ul className="flex space-x-3 ">
            <Link href="https://medium.com/@eatsreal" target="_blank" rel="noopener noreferrer">{dictionary["header-component"].menu.menu1}</Link>
            <Link href="https://wa.me/message/YQQ3DNXOGQGTC1" target="_blank" rel="noopener noreferrer">{dictionary["header-component"].menu.menu2}</Link>
          </ul>
           */}

          <LocaleSwitcher lang={lang} />

          {session?.isAuth === true ? <SecondaryLink href="/profile/references" newTab={false}>
            {dictionary["header-component"].profile}</SecondaryLink> : <AuthOnHeader lang={lang} />}
        </div>
      </div>)
};
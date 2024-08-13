import Link from "next/link";
import Image from "next/image";
import LocaleSwitcher from "@/components/locale-switcher";
import { AuthOnHeader } from "./elements/authOnHeader";
import { Locale } from "@/i18nConfig";
import { getDictionary } from "@/components/get-dictionary";

export default async function Header({
  params: { lang }
}: {params: { lang: Locale }}) {
  const dictionary: {[key:string]: any} = await getDictionary(lang);

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
          <ul className="flex space-x-3 ">
            <Link href="/menu">{dictionary["header-component"].menu.title}</Link>
            <Link href="https://medium.com/@eatsreal" target="_blank" rel="noopener noreferrer">{dictionary["header-component"].menu.menu1}</Link>
            <Link href="https://wa.me/message/YQQ3DNXOGQGTC1" target="_blank" rel="noopener noreferrer">{dictionary["header-component"].menu.menu2}</Link>
          </ul>
          
          {/* {signIn ? <div className={} >
            <Image src={profileImg ? profileImg : "/img/profile.svg"} alt="profile" width={36} height={36} onClick={()=>setMenuVisible(!menuVisible)} />
            <div className="">
              <Link href="/">My Profile</Link>
              <Link href="/">My Orders</Link>
              <Link href="https://wa.me/message/YQQ3DNXOGQGTC1" target="_blank" rel="noopener noreferrer">Contact Us</Link>
            </div>
            
          </div> : <a className={} onClick={() => showSignContainer(true)}>Sign Up</a>} */}
          <LocaleSwitcher lang={lang} />

          <AuthOnHeader />
        </div>
      </div>)
};
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from 'firebase/auth'
import LocaleSwitcher from "@/components/locale-switcher";
import { ProfileOnHeader } from "./elements/authOnHeader";

export default function Header() {
  const [lang, setLang] = useState('en-US');
  const [signIn, setSignIn] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const [profileImg, setProfileImg] = useState<string | null>(null)

    return ( <div className="{}">
        <Link href="/">
          <Image
            src="/imgs/logo.png"
            alt="Go back to Referlink index page"
            className="{}"
            width={174}
            height={44}
            priority
          />
        </Link>
        <button className="{}">
          <div className="{}"></div>
        </button>
        <div className="{}">
          <ul className="{}">
            <Link href="/menu">Menu</Link>
            <Link href="https://medium.com/@eatsreal" target="_blank" rel="noopener noreferrer">Blog</Link>
            <Link href="https://wa.me/message/YQQ3DNXOGQGTC1" target="_blank" rel="noopener noreferrer">Contact Us</Link>
          </ul>
          
          {/* {signIn ? <div className={} >
            <Image src={profileImg ? profileImg : "/img/profile.svg"} alt="profile" width={36} height={36} onClick={()=>setMenuVisible(!menuVisible)} />
            <div className="">
              <Link href="/">My Profile</Link>
              <Link href="/">My Orders</Link>
              <Link href="https://wa.me/message/YQQ3DNXOGQGTC1" target="_blank" rel="noopener noreferrer">Contact Us</Link>
            </div>
            
          </div> : <a className={} onClick={() => showSignContainer(true)}>Sign Up</a>} */}
          <ProfileOnHeader />

          <LocaleSwitcher />
        </div>
      </div>)
};
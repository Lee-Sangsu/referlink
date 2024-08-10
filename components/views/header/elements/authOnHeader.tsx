'use client';

import React from "react";
import Image from "next/image";
import { retrieveUserInfo } from "@/components/airtable-fetching/userFetch";
import Link from "next/link";
import { SignInModal } from "../../modalView";
import { onAuthStateChanged, signOut } from 'firebase/auth'


export function AuthOnHeader() {
    const [signIn, setSignIn] = React.useState(false);
    const [signInContainer, setSignInContainer] = React.useState(false);

    React.useEffect(() => {
        const profileImg = retrieveUserInfo("ass");
        
    })

    return (<div> {signIn ? <div className="{}" >
        {/* <Image src={profileImg ? profileImg : "/img/profile.svg"} alt="profile" width={36} height={36} onClick={()=> setSignInContainer(!menuVisible)} /> */}
        <div className="">
          <Link href="/">My Profile</Link>
          <Link href="/">My Orders</Link>
          <Link href="https://wa.me/message/YQQ3DNXOGQGTC1" target="_blank" rel="noopener noreferrer">Contact Us</Link>
        </div>
        
      </div> : <a className="{}" onClick={() => setSignInContainer(true)}>Sign Up</a>}
      <SignInModal isOpen={signInContainer} setIsOpen={setSignInContainer} />
    </div>)
}
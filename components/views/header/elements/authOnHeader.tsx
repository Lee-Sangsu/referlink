'use client';

import React from "react";
import { SignInModal } from "../../modalView"
import { PrimaryButton, SecondaryButton, SecondaryLink } from "@/components/basic-ui-elements";
import { Locale } from "@/i18nConfig";

export function AuthOnHeader({lang}: {lang: Locale}) {
    const [signInContainer, setSignInContainer] = React.useState(false);

    return (<div> 
      <PrimaryButton onClick={() => setSignInContainer(true)} innerText={lang === "ko" ? "시작하기" : "Get Started"} />
      <SignInModal lang={lang} isOpen={signInContainer} setIsOpen={setSignInContainer} />
    </div>)
}
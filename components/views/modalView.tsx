import Image from "next/image"
import React from "react";
import { SendEmailSignIn } from "@/components/auth/emailAuth";
import { redirect } from "next/navigation";
import { Locale } from "@/i18nConfig";

const DefaultModal = ({children, isOpen, setIsOpen}: {children: React.ReactNode; isOpen: boolean; setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;}) => {

    return (<div className={`fixed flex justify-center items-center h-screen w-screen bg-black bg-opacity-25 inset-0 z-21 ${
        isOpen ? 'block' : 'hidden'
      }`} role="dialog" aria-modal="true">
      <div className="flex flex-col w-[84vw] sm:w-[424px] min-h-[400px] overflow-y-scroll justify-start items-center bg-[var(--modal-bg-color)] p-3 sm:p-6 rounded-[36px]">
        <button className="w-10 h-10 ml-auto text-2xl bg-none bg-opacity-20 transition-opacity border-none cursor-pointer hover:bg-[rgb(var(--background-start-rgb))] hover:rounded-[24px]"
            onClick={() => setIsOpen(!isOpen)}>
            X
        </button>
        {children}
      </div>
    </div>)
};

export function SignInModal ({lang, isOpen, setIsOpen}: {lang: Locale, isOpen: boolean, setIsOpen: React.Dispatch<React.SetStateAction<boolean>>}) {
    const [email, setEmail] = React.useState("");
    const [emailSent, setEmailSent] = React.useState(false);
    // Move to "Client-only-dictionary.json"
    const dictionary = {
      "en": {
        "heading": "Welcome to referlink",
        "email-label": "Email address",
        "email-placeholder": "Please inscribe your email.",
        "email-signin-btn": "Get started free",
        "email-sent-btn": "✅ Email sent",
        "email-sent-alert": "Please check your email.",
        "sns-login": "SNS Sign in",
        "kakao-login": "Sign in with Kakao"
      }, "ko": {
        "heading": "레퍼링크 시작하기",
        "email-label": "이메일 주소",
        "email-placeholder": "이메일을 입력해주세요",
        "email-signin-btn": "이메일로 간편 로그인",
        "email-sent-btn": "✅ 이메일 전송 완료!",
        "email-sent-alert": "이메일을 확인해주세요",
        "sns-login": "SNS 간편 로그인",
        "kakao-login": "Kakao 로그인"
      }
    }
    const textInModal = dictionary[lang];
    
    const emailSignInHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();

      SendEmailSignIn(email).then((value:string) => {
        if (value === "Sent") {
          setEmailSent(true);
        } else {
          setEmailSent(false)
        }
      }).catch((err:string) => {
        window.alert(err);
      })
    }

    return(<DefaultModal isOpen={isOpen} setIsOpen={setIsOpen}>
        <Image src="/icons/logo-full.png" width={166} height={40} alt="Referlink" />
        <h2 className="text-3xl font-semibold">{textInModal.heading}</h2>

        {/* Email Part */}
        <div className="mt-10 mb-6 w-full px-[8%]">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            {textInModal["email-label"]}
          </label>
          <input type="email" id="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder={textInModal["email-placeholder"]}
            value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        
        {emailSent ? <button 
          className="w-[84%] text-blue-500 bg-white py-2 px-[8%] rounded-md border border-blue-500"
          onClick={() => window.alert(textInModal["email-sent-alert"])}>{textInModal["email-sent-btn"]}</button> 
        : <button
          className="w-[84%] bg-blue-500 text-white py-2 px-[8%] rounded-md hover:bg-blue-600 transition duration-300"
          onClick={emailSignInHandler}> {textInModal["email-signin-btn"]} </button>}

        <div className="mt-6 w-[84%]">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">
                {textInModal["sns-login"]}
              </span>
            </div>
          </div>
        </div>
        
        <button
          className="mt-6 mb-8 w-[84%] border border-gray-300 text-gray-700 py-2 rounded-md hover:bg-gray-50 transition duration-300 flex items-center justify-center"
          onClick={() => {/* Implement your Google login logic here */}}>
          <Image src="/google-logo.png" alt="Google Logo" width={20} height={20} className="mr-2" />
          {textInModal["kakao-login"]}
        </button>

        {/* <EmailAuthForm showSignContainer={showSignContainer} signUp={signUp} styles={styles} />
        <GoogleAuthButton showSignContainer={showSignContainer} styles={styles} /> */}
    </DefaultModal>)
}



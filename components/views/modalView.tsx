import Image from "next/image"
import React from "react";
import { SendEmailSignIn } from "@/components/auth/emailAuth";

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

export function SignInModal ({isOpen, setIsOpen}: {isOpen: boolean, setIsOpen: React.Dispatch<React.SetStateAction<boolean>>}) {
    const [signUp, setSignUp] = React.useState(true);
    const [email, setEmail] = React.useState("");
    // const [isOpen, setIsOpen] = React.useState<boolean>(false);
    
    return(<DefaultModal isOpen={isOpen} setIsOpen={setIsOpen}>
        <Image src="/icons/logo-full.png" width={166} height={40} alt="Referlink" />
        <h2 className="text-3xl font-semibold">레퍼링크 시작하기</h2>

        {/* Email Part */}
        <div className="mt-10 mb-6 w-full px-[8%]">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            이메일 주소
          </label>
          <input type="email" id="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="이메일을 입력해주세요."
            value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        
        <button
          className="w-[84%] bg-blue-500 text-white py-2 px-[8%] rounded-md hover:bg-blue-600 transition duration-300"
          onClick={() => SendEmailSignIn(email)}> 이메일로 간편 로그인 </button>

        <div className="mt-6 w-[84%]">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">
                SNS 간편 로그인
              </span>
            </div>
          </div>
        </div>
        
        <button
          className="mt-6 w-[84%] border border-gray-300 text-gray-700 py-2 rounded-md hover:bg-gray-50 transition duration-300 flex items-center justify-center"
          onClick={() => {/* Implement your Google login logic here */}}>
          <Image src="/google-logo.png" alt="Google Logo" width={20} height={20} className="mr-2" />
          Kakao 로그인
        </button>

        {/* <EmailAuthForm showSignContainer={showSignContainer} signUp={signUp} styles={styles} />
        <GoogleAuthButton showSignContainer={showSignContainer} styles={styles} /> */}
        <button className="" onClick={() => setSignUp(!signUp)}>{signUp ? "이미 계정이 있으신가요? Log in" : "Not on Eatsreal yet? Sign up"}</button>
    </DefaultModal>)
}



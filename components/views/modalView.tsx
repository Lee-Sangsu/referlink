import Image from "next/image"
import React from "react";

const DefaultModal = ({children, isOpen, setIsOpen}: {children: React.ReactNode; isOpen: boolean; setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;}) => {

    return (<div className={`fixed flex justify-center items-center h-screen w-screen bg-black bg-opacity-25 inset-0 z-21 ${
        isOpen ? 'block' : 'hidden'
      }`} role="dialog" aria-modal="true">
      <div className="flex flex-col min-h-[400px] overflow-y-scroll justify-start items-center bg-[var(--modal-bg-color)] p-6 rounded-[36px]">
        <button className="w-10 h-10 ml-[360px] text-2xl bg-none bg-opacity-75 transition-opacity border-none cursor-pointer hover:bg-slate-300 hover:rounded-[24px]"
            onClick={() => setIsOpen(!isOpen)}>
            X
        </button>
        {children}
      </div>
    </div>)
};

export function SignInModal ({isOpen, setIsOpen}: {isOpen: boolean, setIsOpen: React.Dispatch<React.SetStateAction<boolean>>}) {
    const [signUp, setSignUp] = React.useState(true);
    // const [isOpen, setIsOpen] = React.useState<boolean>(false);
    
    return(<DefaultModal isOpen={isOpen} setIsOpen={setIsOpen}>
        <button className="" onClick={() => console.log("false")}>X</button>
        <Image src="/symbols/logo-icon.svg" width={50} height={50} alt="Referlink" />
        <h1>레퍼링크 시작하기</h1>
        {/* <EmailAuthForm showSignContainer={showSignContainer} signUp={signUp} styles={styles} />
        <GoogleAuthButton showSignContainer={showSignContainer} styles={styles} /> */}
        <button className="" onClick={() => setSignUp(!signUp)}>{signUp ? "이미 계정이 있으신가요? Log in" : "Not on Eatsreal yet? Sign up"}</button>
    </DefaultModal>)
}



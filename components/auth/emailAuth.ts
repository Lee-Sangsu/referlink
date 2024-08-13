import { getAuth, sendSignInLinkToEmail } from "firebase/auth";

export async function EmailSignIn (email: string): Promise<string> {
  const auth = getAuth();

    const actionCodeSettings = {
        // URL you want to redirect back to. The domain (www.example.com) for this
        url: 'https://referlink.vercel.app/signup?email=' + auth.currentUser?.email,
        handleCodeInApp: true,
    };
    
    try {
      await sendSignInLinkToEmail(auth, email, actionCodeSettings);
      window.localStorage.setItem('emailForSignIn', email);
      return "Email sent";
    }
    catch(error: any) {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ...
      return errorMessage as string;
    };
};


export function EmailSignOut () {
  return "signed out";
};
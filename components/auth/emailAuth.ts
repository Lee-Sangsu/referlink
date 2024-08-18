import { getAdditionalUserInfo, getAuth, isSignInWithEmailLink, sendSignInLinkToEmail, signInWithEmailLink } from "firebase/auth";

export async function SendEmailSignIn (email: string): Promise<string> {
  const auth = getAuth();

    const actionCodeSettings = {
      // As it is just a client side <-> Firebase authentication, airtbale involves once the user succeds the URL below.
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

interface EmailSignInInfo {
  status: number;
  message: string;
  user_profile?: any;
}

// Used in /signup?email=whatever@gmail.com
export async function emailSignIn (): Promise<EmailSignInInfo> {
  const auth = getAuth();
  if (isSignInWithEmailLink(auth, window.location.href)) {
  // Additional state parameters can also be passed via URL.
  // This can be used to continue the user's intended action before triggering
  // the sign-in operation.
  // Get the email if available. This should be available if the user completes
  // the flow on the same device where they started it.
    let email = window.localStorage.getItem('emailForSignIn');
    if (!email) {
      // User opened the link on a different device. To prevent session fixation
      // attacks, ask the user to provide the associated email again. For example:
      // email = window.prompt('Please provide your email for confirmation');
      return {
        status: 1,
        message: "Email not set in local storage"
      }
    } else {
      // The client SDK will parse the code from the link for you.
      try {
        const result = await signInWithEmailLink(auth, email!, window.location.href);
            // Clear email from storage.
        window.localStorage.removeItem('emailForSignIn');
    
        const asdfl = getAdditionalUserInfo(result);
        if (asdfl?.isNewUser) {
          // Airtable
          const profileInfo = asdfl?.profile;
    
          return {
            status: 2,
            message: "New",
            user_profile: asdfl?.profile
          };
        } else {
          return {
            status: 3,
            message: "existing user",
            user_profile: asdfl?.profile
          }
        }
      } catch (error) {
        return {
          status: 4,
          message: `${error}`
        }
      }
  }
  } else {
    return {
      status: 5,
      message: 'It is not sign in with email link.'
    }
  }
}
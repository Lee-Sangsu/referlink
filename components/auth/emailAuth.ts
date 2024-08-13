import { getAuth, sendSignInLinkToEmail } from "firebase/auth";

export function EmailSignIn (email: string) {
    const actionCodeSettings = {
        // URL you want to redirect back to. The domain (www.example.com) for this
        url: 'https://www.example.com/finishSignUp?cartId=1234',
    };
    
    const auth = getAuth();
    sendSignInLinkToEmail(auth, email, actionCodeSettings)
      .then(() => {
        // The link was successfully sent. Inform the user.

        // Save the email locally so you don't need to ask the user for it again
        window.localStorage.setItem('emailForSignIn', email);
        // if they open the link on the same device.
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ...
      });
}

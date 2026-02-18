import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';
 import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>

       <SignUpForm/>
    </div>

   
  );
};

export default SignIn;



/*import { useEffect } from 'react';
import {getRedirectResult} from 'firebase/auth';

import {auth,signInWithGooglePopup,signInWithGoogleRedirect,createUserDocumentFromAuth} from '../../utils/firebase/firebase.utils'

export default function SignIn()
{

   useEffect(() => {
  const checkRedirect = async () => {
    try {
      const response = await getRedirectResult(auth);
      console.log("Redirect result:", response);

      if (response) {
        const { user } = response;
        await createUserDocumentFromAuth(user);
      } else {
        console.log("No redirect result found.");
      }
    } catch (error) {
      console.log("Redirect error:", error);
    }
  };

  checkRedirect();
}, []);


    const logGoogleUser = async()=>{
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);    
    }

  
    return(
        <div>
            <h1>This is the signin page</h1>
            <button onClick={logGoogleUser}>Sign in with google popup</button>
            <button onClick={signInWithGoogleRedirect}>Sign in with google redirect</button>

        </div>
    )
}
    */
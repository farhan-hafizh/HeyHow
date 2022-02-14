import {  getAuth, signInWithPopup, signInWithRedirect} from "firebase/auth";
import app from '../constants/FirebaseConfig';

export default function useGoogleAuth(provider : any) {
    const auth = getAuth(app);
    console.log(auth);

    auth.signInWithPopup(auth, provider).then((result) => {
      console.log("asdasd")
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = provider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        return user;
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = provider.credentialFromError(error);
        return errorMessage;
      });
}

import {
    createContext,
    // useContext,
    //  useEffect,
    useState,
  } from "react";
  import {
    db,
    auth,
    //  analytics
  } from "../firebase.config";
  import {
    createUserWithEmailAndPassword,
    // signInWithEmailAndPassword,
    // signOut,
    // onAuthStateChanged,
    AuthErrorCodes,
  } from "firebase/auth";
  import { setDoc, doc } from "firebase/firestore";
  import { Context } from "../shared/types";
  
  // type value = {
  //   signUp: () => void;
  //   error: () => void;
  // };
  // type UserProviderProps = {
  //   value: string;
  //   // children: ReactNode
  // };
  
  export const AuthContext = createContext<Context | null>(null);
  
  export function AuthProvider({}) {
    const [error, setError] = useState<boolean | string>(false);
  
    const signUp = async (email: string, password: string, username: string) => {
      setError(true);
      createUserWithEmailAndPassword(auth, email, password)
        .then(async (result) => {
          console.log(result);
          try {
            const ref = doc(db, "userinfo", result.user.uid);
            const docRef = await setDoc(ref, { username });
            alert("Wellcome new User create successfully");
            console.log("Document written with ID: ", docRef);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          if (errorCode === "auth/email-already-in-use") {
            setInterval(() => {
              setError("");
            }, 5000);
            setError("email already in use try another email");
          } else if (errorCode === AuthErrorCodes.WEAK_PASSWORD) {
            setInterval(() => {
              setError("");
            }, 5000);
            setError("Password Must be 6 charecter");
          } else {
            setError(errorMessage);
          }
        });
      const value = {
        signUp,
        error,
      };
      value
    };
     //return(
       //     <AuthContext.Provider value={value} >
       //        {children}
        //    </AuthContext.Provider>
   //  )
     }
  
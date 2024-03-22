 import { useState } from "react";
 //import { createContext, useContext } from "react";
 //import google from "../assets/images/google.png";
 //import apple from "../assets/images/apple.png";
 import { auth } from "../firebase.config";
 import { Link } from "react-router-dom";
 import { createUserWithEmailAndPassword } from "firebase/auth";

//type Props = {};

const Signup = () => {
    const [email, setEmail] = useState<any>();
    const [password, setPassword] = useState<any>();
  
    const handleSubmit = async (e: any) => {
      e.preventDefault();
      try {
        const userCredentials = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
      
        
        const user = userCredentials.user;
        // localStorage.setItem("token", user.accessToken);
        localStorage.setItem("user", JSON.stringify(user));
        console.log(userCredentials);
      } catch (err) {
        console.log(err);
      }
    };
  
    return (
      <section className="w-screen h-screen ">
        <div className="w-[100%] flex justify-center items-center absolute">
          <div className="itemswrap w-[50%]  flex justify-center items-center flex-col gap-4 ">
            <div className="othersignup w-[90%] h-fit ">
              {/* GOOGLE AND APPLE SIGN UP */}
              <div className="flex justify-center items-center flex-col gap-6 p-10 pb-2">
                <h2>Sign up with:</h2>
                <div className=" flex gap-7 border-solid border-2 border-transparent border-b-gray-700 pb-10">
                  <button className="bg-secondary-300 py-2 px-4 flex items-center gap-2 rounded">
                    {" "}
                    <span>
                      <img src="../assets/images/google.png" alt="google" />
                    </span>
                    Google
                  </button>
                  <button className="bg-secondary-300 py-2 px-4 flex items-center gap-2 rounded">
                    {" "}
                    <span>
                      {" "}
                      <img src="../assets/images/apple.png" alt="apple" />{" "}
                    </span>{" "}
                    apple
                  </button>
                </div>
                <div className="h-10 w-10 rounded-full bg-white relative bottom-11 flex justify-center">
                  or
                </div>
              </div>
            </div>
  
            {/* SIGN UP FORM */}
            <form onSubmit={handleSubmit}>
              < div className="signupform w-[90%] relative">
                <div className="flex justify-center items-center flex-col gap-6 ">
                  {/* <input
                    type="text"
                    name="text"
                    placeholder="Username"
                    className="w-[100%] border-2 border-secondary-300 px-2 py-3 rounded-lg"
                  /> */}
                  <input
                    type="text"
                    name="text"
                    placeholder="Email"
                    className="w-[100%] border-2 border-secondary-300 px-2 py-3 rounded-lg"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                  <input
                    type="password"
                    name="text"
                    placeholder="Password"
                    className="w-[100%] border-2 border-secondary-300 px-2 py-3 rounded-lg"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                  {/* <input
                    type="password"
                    name="text"
                    placeholder="Retype Password"
                    className="w-[100%] border-2 border-secondary-300 px-2 py-3 rounded-lg"
                  /> */}
  
                  <p className="text-xs text-gray-500">
                    6 or more characters, one number, one uppercase & one lower
                    case.
                  </p>
  
                  <button className="w-[100%] bg-secondary-300 py-3 px-5 flex justify-center gap-2 rounded-full text-center text-primary-100 ">
                    Sign up with Email
                  </button>
                </div>;
              </div>;
            </form>;
            {/* OTHER STUFF */}
            <div className="flex items-center flex-col gap-6 w-[70%]">
              <h4>
                Already have an Account?{" "}
                <Link to="/login" className="text-secondary-300">
                  Log In
                </Link>
              </h4>
  
              <div className="flex items-center flex-col text-gray-500">
               <p className="text-xs">By signing up, you agree to </p>
                <p>
                 Scissor's{" "}
                 <span className="text-primary-text">
                     Terms of Service, Privacy Policy
                 </span>{" "}
                   and{" "}
                   <span className="text-primary-text">
                    Acceptable Use Policy.
                  </span>
               </p>
               </div>
           </div>
           </div>
           </div>
       </section>
      );
    };

    export default Signup;

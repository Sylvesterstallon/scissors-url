// import { useNavigate } from "react-router-dom";
 import { Link } from "react-router-dom";
 //import google from "../assets/images/google.png"
 //import apple from "../assets/images/apple.png";
 // type Props = {};

 const Login = () => {
      // const navigate = useNavigate();
     return (
       <section className="containers forms" id="Login">
         <div className="w-[100%] flex justify-center items-center absolute">
          <div className="itemswrap w-[50%]  flex justify-center items-center flex-col gap-4 ">
            <div className="othersignup w-[90%] h-fit ">
               {/* GOOGLE AND APPLE SIGN UP */}
              <div className="flex justify-center items-center flex-col gap-6 p-10 pb-2">
                 <h2>Log in with:</h2>
                 <div className=" flex gap-7 border-solid border-2 border-transparent border-b-gray-700 pb-10">
                   <button className="bg-secondary-300 py-2 px-4 flex items-center gap-2 rounded">
                    {" "}
                    <span>
                       <img src="../assets/images/google.png" alt="google.png" />
                    </span>
                    Google
                  </button>
                  <button className="bg-secondary-300 py-2 px-4 flex items-center gap-2 rounded">
                     {" "}
                    <span>
                      {" "}
                      <img src="../assets/images/apple.png" alt="apple.png" />{" "}
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
            <div className="signupform w-[90%] relative">
              <div className="flex justify-center items-center flex-col gap-6 ">
                 <input
                   type="text"
                   name="text"
                   placeholder="Email address or Username"
                   className="w-[100%] border-2 border-secondary-300 px-2 py-3 rounded-lg"
                 />
                <input
                  type="password"
                  name="text"
                  placeholder="Password"
                  className="w-[100%] border-2 border-secondary-300 px-2 py-3 rounded-lg"
                />
                  <p className="text-sm text-secondary-300">
                  Forgot your password?
                 </p>
  
                <button className="w-[100%] bg-secondary-300 py-3 px-5 flex justify-center gap-2 rounded-full text-center text-primary-100 ">
                  Log in with Email
                </button>
              </div>
             </div>
  
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
  
  export default Login;
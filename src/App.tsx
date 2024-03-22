import "./App.css";
// import Navbar from "@/components/navbar/Navbar";
// import { useState } from "react";
// import { SelectedPage } from "@/shared/types";
// import Features from "@/components/features/Features";
// import Pricing from "@/components/pricing/Pricing";
// import Analytics from "@/components/analytics/Analytics";
// import Faqs from "@/components/faqs/Faqs";
// import MyUrls from "./MyURLs/MyUrls";
import { Routes, Route } from "react-router-dom";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import { BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
//import { initializeApp } from "firebase/app";

//initializeApp(config.firebaseConfig);

function App() {
  // const [selectedPage, setSelectedPage] = useState<SelectedPage>(
  //   SelectedPage.MyURLs
  // );
  return (
    <>
      <BrowserRouter>
        {
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
          </Routes>
          // ) && (
          // <section className="app bg-primary-100 w-screen h-screen">
          //   <Navbar
          //     selectedPage={selectedPage}
          //     setSelectedPage={setSelectedPage}
          //   />

          //   <MyUrls
          //     selectedPage={selectedPage}
          //     setSelectedPage={setSelectedPage}
          //   />
          //   {/* <create my url component for the main home component> */}
          //   <Features
          //     selectedPage={selectedPage}
          //     setSelectedPage={setSelectedPage}
          //   />
          //   <Pricing
          //     selectedPage={selectedPage}
          //     setSelectedPage={setSelectedPage}
          //   />
          //   <Analytics
          //     selectedPage={selectedPage}
          //     setSelectedPage={setSelectedPage}
          //   />
          //   <Faqs
          //     selectedPage={selectedPage}
          //     setSelectedPage={setSelectedPage}
          //   />
          // </section>
        }
      </BrowserRouter>
    </>
  );
}

export default App;

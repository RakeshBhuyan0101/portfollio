import Navbar from "./components/Navbar";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LandingPage from "./components/LandingPage.tsx";
import ContactUs from "./components/ContactUs.tsx";
import ProfilePage from "./components/ProfilePage.tsx";
import Works from "./components/Works.tsx";
import Blog from "./components/Blog.tsx";

const router = createBrowserRouter ([
  {
    path : '/',
    element : <div> <Navbar/>  <LandingPage/></div>
  },
  {
    path : '/contact',
    element : <div> <Navbar/>  <ContactUs/></div>
  },
  {
    path : "/about",
    element :<div> <Navbar/>  <ProfilePage/></div>
  },
  {
    path : '/works',
    element : <div> <Navbar/>  <Works/></div>
  },
  {
    path : "/blog",
    element : <div> <Navbar/> <Blog/>  </div>
  }
])

function App() {

  return (
    <>

      <RouterProvider router={router} />
    </>
  );
}

export default App;

import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About"
import Contact from "./components/Contact";

function App() {
  const router=createBrowserRouter([
    //defining routes
    {path:'/',element:<Home/>},
    {path:'/about',element:<About/>},
    {path:'/contact',element:<Contact/>}
  ])
  return (
   <>
   {/* providing routes to app */}
   <RouterProvider router={router}/>
  
   </>
  );
}

export default App;

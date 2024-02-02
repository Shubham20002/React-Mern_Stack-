import {createBrowserRouter,RouterProvider,} from 'react-router-dom'
import Navbar from './component/Navbar';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';

function App() {
  const router=createBrowserRouter([
    {path:'/',element:<Navbar/>,children:[
      {path:'',element:<Home/>},
      {path:'/about',element:<About/>},
      {path:'/contact',element:<Contact/>},
    ]}
  ])
  return (
   <>
  <RouterProvider router={router}/>
   </>
  );
}

export default App;

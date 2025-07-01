
import './App.css'
import FlagLine from './components/FlagLine.tsx';
import Footer from './components/footer.tsx';
import Navbar from './components/navbar.tsx';
import Home from "./pages/home.tsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Discover from "./pages/discover.tsx";
import History from "./components/history.tsx";
import Economy from "./components/economy.tsx";
import Potentiality from "./components/potentiality.tsx";
import TouristicAtraction from "./components/touristic_atraction.tsx";

const  router = createBrowserRouter([
    {
        path:"/",element: <Home/>

    },
    {path:"/discover", element:<Discover/>},
    {path: "/history", element: <History />},
    {path:"/economy", element:<Economy/>},
    {path:"/potentialities", element:<Potentiality/>},
    {path:"attractions", element: <TouristicAtraction/>}
])
const App= ()=> {

  return (
      <div>
        <Navbar />
        <div className="scroll-smooth">
            <RouterProvider router={router}/>
        </div>
          <FlagLine height={`h-2`}/>
          <Footer />
      </div>
    );
}

export default App

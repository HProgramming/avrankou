
import './App.css'
import FlagLine from './components/FlagLine.tsx';
import Footer from './components/footer.tsx';
import Navbar from './components/navbar.tsx';
import Home from "./pages/home.tsx";

const App= ()=> {

  return (
      <div>
        <Navbar />
        <div className="scroll-smooth">
          <Home />
        </div>
        <Footer />
        <FlagLine />
      </div>
    );
}

export default App


import './App.css'
import Footer from './components/footer.tsx';
import Navbar from './components/navbar.tsx';
import Home from "./pages/home.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Discover from "./pages/discover.tsx";
import History from "./components/history.tsx";
import Economy from "./components/economy.tsx";
import Potentiality from "./components/potentiality.tsx";
import TouristicAtraction from "./components/touristic_atraction.tsx";
import AttractionDetail from "./pages/attraction-detail.tsx";
import WriteToMayor from "./pages/write-to-mayor.tsx";
import WriteToExecutiveSecretary from "./pages/write-to-executive-secretary.tsx";
import ReportIssue from "./pages/report-issue.tsx";
import Services from "./pages/services.tsx";
import Documentation from "./pages/documentation.tsx";
import Geography from "./pages/geography.tsx";
import Demography from "./pages/demography.tsx";
import Actualites from "./pages/actualites.tsx";

const App = () => {
    return (
        <Router>
            <div className="flex flex-col min-h-screen">
                <Navbar />
                <main className="flex-grow scroll-smooth">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/discover" element={<Discover />} />
                        <Route path="/history" element={<History />} />
                        <Route path="/economy" element={<Economy />} />
                        <Route path="/potentialities" element={<Potentiality />} />
                        <Route path="/attractions" element={<TouristicAtraction />} />
                        <Route path="/attractions/:id" element={<AttractionDetail />} />
                        <Route path="/write-to-mayor" element={<WriteToMayor />} />
                        <Route path="/write-to-executive-secretary" element={<WriteToExecutiveSecretary />} />
                        <Route path="/signaler" element={<ReportIssue />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/documentations" element={<Documentation />} />
                        <Route path="/geographie" element={<Geography />} />
                        <Route path="/demographie" element={<Demography />} />
                        <Route path="/actualites" element={<Actualites />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App

import Footer from "../components/footer.tsx";
import Navbar from "../components/navbar.tsx";
import Discover from "./discover.tsx";

const Home = ()=> {
    return (
        <div className={`bg-white`}>
            <Navbar />
            <Discover></Discover>
            <Footer />
        </div>
    );
}

export default Home;
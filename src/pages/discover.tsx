import Economy from "../components/economy.tsx";
import Hero from "../components/hero.tsx";
import History from "../components/history.tsx";
import Potentiality from "../components/potentiality.tsx";
import TouristicAtraction from "../components/touristic_atraction.tsx";

const Discover = () => {
    return (<div>
        <Hero/>
        <History/>
        <Economy/>
        <Potentiality/>
        <TouristicAtraction/>
    </div>);
}
export default Discover;
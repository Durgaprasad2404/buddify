import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/AnavBar";
import Aboutus from "./Components/Baboutus";
import Butwhy from "./Components/Cbutwhy";
import Ourbuds from "./Components/Dourbuds";
import Package from "./Components/Epackage";
import Safety from "./Components/Fsafety";
import HowitWork from "./Components/Gtestimonials";
import Touchin from "./Components/Itouch";
import Contact from "./Components/Jcontact";
import HomePage from "./Components/Main";

function App() {
  return (
    <div>
      <NavBar />
      <HomePage />
      <Aboutus />
      <Butwhy />
      <Ourbuds />
      <Package />
      <Safety />
      <HowitWork />
      <Touchin />
      <Contact />
    </div>
  );
}

export default App;

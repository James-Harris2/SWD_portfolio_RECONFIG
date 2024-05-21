// import Footer from './Footer'
import Particles from "react-particles";
import Home from "../components/Home";
// import Home2 from "../components/Home2";
import NavBar from "./NavBar"
import Type from "./Type";
function App() {
  return (
    <div>
        <NavBar />
        <Home />
        {/* <Home2 />  */}
        <Particles />
        <Type />

        {/* <Footer/> */}
    </div>
  )
}

export default App;
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

import { NavBar,Hero,AboutUs } from "./components";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div class="">
        <Hero/> 
        <AboutUs/>
      </div>
    </div>
  );
}

export default App;

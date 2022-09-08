import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

import { NavBar,Hero } from "./components";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div class="container">
        <Hero/> 
      </div>
    </div>
  );
}

export default App;

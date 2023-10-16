import Nav from "./components/Nav";
import Home from "./components/Home";
import Project from "./components/Project";
import Skills from "./components/skills"
// import Cards from "./components/cards";
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <Nav/>
      <Home/>
      {/* <Cards/> */}
      <Skills/>
      <Project/>
    </div>
  );
}

export default App;


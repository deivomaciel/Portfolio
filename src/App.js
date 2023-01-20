import About from "./Components/About/About";
import Contacts from "./Components/Contacts/Contacts";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Projects from "./Components/Projects/Projects";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Projects />
      <Contacts />
    </div>
  );
}

export default App;

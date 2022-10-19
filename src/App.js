import "./App.css";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import { BrowserRoute as Router, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route />
        <Home />
        <Footer />
      </div>
    </Router>
  );
}

export default App;

import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/nav" element={<Nav />} />
        <Route path="/" element={<Home />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </Router>
        </div>
  );
}

export default App;




/*

<Nav />
<Route />
<Home />
<Footer /> 

        <Route path="/nav" element={<Nav />} />
        <Route path="/" element={<Home />} />
        <Route path="/footer" element={<Footer />} />

      <div className="App">

      </div>
*/

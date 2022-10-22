import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Books from "./pages/Books";
import Booksinfo from "./pages/Booksinfo";
import { books } from "./data";

function App() {
  return (
    <Router>
      <div className="App">
      <Nav />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books" exact element={<Books books={books} />} />
      <Route path="/books/1" element={<Booksinfo books={books} />} />
      </Routes>
      <Footer />
    </div>
    </Router>
  );
}

export default App;




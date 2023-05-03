import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import News from "./screens/News";
import Search from "./screens/Search";
import Categories from "./screens/Categories";
import CountryNews from "./screens/CountryNews";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<News />} />
        <Route path="/search" element={<Search />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/countrynews/:id" element={<CountryNews />} />
      </Routes>
    </Router>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import About from "./pages/about/About"
import Home from './pages/home/Home'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;

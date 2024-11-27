import { Navbar } from "./components/Navbar.tsx"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Home} from "./pages/Home";
import {Analytics} from "./pages/Analytics";
import {Marketplace} from "./pages/Marketplace"
import {About} from "./pages/About";

function App() {
const User = () => <h1>User Page</h1>;
  return(
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/about" element={<About />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </Router>
  )
  
}

export default App

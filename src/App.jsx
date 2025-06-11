import Navbar from "./components/Navbar";
import Home from "./pages/home";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="min-h-screen ">
      <Navbar />
      <main className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </div>
  );
}

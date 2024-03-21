import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Form1Page from "./pages/Form1Page";
import Form4Page from "./pages/Form4Page";
import Form5Page from "./pages/Form5Page";
import './App.css'
function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/form1" element={<Form1Page />} />
        <Route path="/form4" element={<Form4Page />} />
        <Route path="/form5" element={<Form5Page />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

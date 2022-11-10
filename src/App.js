import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./pages/Layout";
import Duck from "./pages/Duck";
import Fox from "./pages/Fox";
import Contact from "./pages/Contact";

function App() {
  // gif 38;

  return (
    
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Duck />} />
          <Route path="Fox" element={<Fox />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" />}  />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
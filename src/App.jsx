import Home from "./assets/pages/Home";
import About from './assets/pages/About';
import UsersPage from "./assets/pages/Users";

import Header from "./assets/components/Header";
import Sidebar from "./assets/components/Sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (

    <BrowserRouter>
      <Header />
      <Sidebar />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/user/:userId" element={<UsersPage />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App;

// import { useState , useEffect} from 'react';
// import './App.css'
// import Home from './Pages/Home'
// import Login from './Pages/Login'
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

// function App() {
//   const [count,setCount] = useState(0);
//   useEffect(() => {
//     alert("Welcome to e-commerce site")
//   }, [])

//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path='/login' element={<Login/>} />
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }

// export default App

import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Support from "./pages/Support";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/support" element={<Support />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;


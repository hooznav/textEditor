//import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Funnight from "./components/Funnight";

import React from "react";
import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";

function App({children}) {
  return (
    <>
       <Navbar title="Zubie Doobie" about="Fun Night" />
   {children || <Outlet/>}
    </>
  );
}
// <>
{
  /* //     <nav>
//       <li>Home</li>
//       <li>About</li>
//       <li>Contact</li>
//     </nav>
//     // for -- Forhtml, tab-- tabIndex, class -- className

//     <div className="container">
//       <h1>Favourite number {n}</h1>
//       <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum tenetur laudantium voluptate nemo quas consectetur ipsam, recusandae expedita vero voluptatem sapiente molestias quaerat, pariatur temporibus, ex qui? Aliquam dolore non eum. Exercitationem, cumque laboriosam?</p>
//     </div> */
}
{
  /* <Router>
     
        <Routes>
          <Route path="/" element={<Textform />} />
          <Route path="/Funnight" element={<Funnight />} />

        </Routes>
     
      </Router> */
}

{
  /* // Navbar.propTypes = {title: PropTypes.string, about: PropTypes.string} */
}

export default App;

//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';

import PropTypes from 'prop-types'
import Textform from './components/Textform';


// function MyButton() {
//   return (
//     <button>
//       I'm a button
//     </button>
//   );
// }

// let n = 275
function App() {
  return (
    <>
    {/* <nav>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </nav>
    // for -- Forhtml, tab-- tabIndex, class -- className

    <div className="container">
      <h1>Favourite number {n}</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum tenetur laudantium voluptate nemo quas consectetur ipsam, recusandae expedita vero voluptatem sapiente molestias quaerat, pariatur temporibus, ex qui? Aliquam dolore non eum. Exercitationem, cumque laboriosam?</p>
    </div> */}
    <Navbar title = "Zubie Doobie" about = "Fun Night"/>
    <Textform heading = "Enter the text to analyze"/>
    
    </>
  );
}

//Navbar.propTypes = {title: PropTypes.string, about: PropTypes.string}


export default App;

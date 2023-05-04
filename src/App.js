// import logo from './logo.svg';
import './App.css';

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home } from './home';
import { About } from './about';
import { Contact } from './contact';
import './home.css';


function App() {
  return (
    
    <Router>
      
      <body>
        
        <div>
          

            <Link style={{position:'absolute',right:'300px'}}  to="/">Home</Link>

            <Link style={{position:'absolute',right:'200px'}} to="/about">About</Link>


            <Link style={{position:'absolute',right:'100px'}} to="/contact">Contact</Link>


          

          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </body>
    </Router>
   
  );
}


export default App;


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

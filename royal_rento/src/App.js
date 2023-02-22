// import logo from './logo.svg';
import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Home from './AllPages/HomePage/Home';
// import GridBlurredBackdrop from './AllPages/HomePage/Reviews';
import AllRoutes from './Components/AllRoutes';

function App() {
  return (
    <div className="App">
      <Navbar/>  {/* navabr */}
      <AllRoutes/>
      <Footer/>  {/* footer */}
    </div>
  );
}

export default App;

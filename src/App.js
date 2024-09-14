
import './App.css';
import About from './components/about';
import Choose from './components/choose';
import Cta from './components/cta';
import Footer from './components/footer';
import Hero from './components/hero';
import Navbar from './components/navbar';
import Services from './components/services';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <About/>
      <Choose/>
      <Services/>
      <Cta/>
      <Footer/>
    </div>
  );
}

export default App;

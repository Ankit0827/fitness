import './App.css';
import Hero from './Components/Hero';
import Program from './Components/Program'
import Reason from './Components/Reason';
import Plan from './Components/Plan';
import Testimonial from './Components/Testimonial'
import Join from './Components/Join'
import Footer from './Components/subcomponents/Footer';

function App() {
  return (
   <div className='App'>
   <Hero/>
   <Program/>
   <Reason/>
   <Plan/>
   <Testimonial/>
   <Join/>
   <Footer/>
   </div>
  );
}

export default App;



import Headcheck from './components/CeckHead';
import Footer1 from './components/Footer';
import './App.css';
import Hoc from './Hoc';
import Demo from './components/DataEntry';
function App() {
  return (<div className="foot" ><div className='foot1'>
  <Headcheck/><Demo/></div><Footer1/></div>
  );
}

export default Hoc(App);

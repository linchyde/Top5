import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import SimpleViewCard from './Components/SimpleViewCard/SimpleViewCard';
import AllSimpleViews from './Components/AllSimpleViews/AllSimpleViews';
import ExpandedViewCard from './Components/ExpandedViewCard/ExpandedViewCard';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header content={'Buy the top 5 performing Defi tokens in their category in a single transaction'}/>
      < AllSimpleViews />
      < ExpandedViewCard />
    </div>
  );
}

export default App;

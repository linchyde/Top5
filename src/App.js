import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import AllSimpleViews from './Components/AllSimpleViews/AllSimpleViews';
import ExpandedViewCard from './Components/ExpandedViewCard/ExpandedViewCard';
import PopupCard from './Components/PopupCard/PopupCard';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import Modal from './Components/Modal/Modal';


function App() {
  return (
    <Router >
      <div className="App">
      <Navbar />
      <Switch >
      <Route path='/expandedView'>
        < ExpandedViewCard />

        </Route>
        
        <Route path='/' >

        <Header content={'Buy the top 5 performing Defi tokens in their category in a single transaction'}/>
      < AllSimpleViews />
      <Modal />
      < PopupCard />

        </Route>

       


      </Switch>

   

      
    </div>

    </Router>
    
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import SimpleViewCard from './Components/SimpleViewCard/SimpleViewCard';
import AllSimpleViews from './Components/AllSimpleViews/AllSimpleViews';
import ExpandedViewCard from './Components/ExpandedViewCard/ExpandedViewCard';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';


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

        </Route>

       


      </Switch>

   

      
    </div>

    </Router>
    
  );
}

export default App;

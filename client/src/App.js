import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './Views/Home/Home';
import Landing from './Views/Landing/Landing';
import Detail from './Views/Detail/Detail';
import Create from './Views/Create/Create';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
    <div className='App'>
      <Route path='/' component={Navbar}/>
      <Switch>
        <Route exact path='/' component={Landing}/>
        <Route path='/home' component={Home}/>
        <Route path='/detail/:name' component={Detail}/>
        <Route path='/create' component={Create}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;

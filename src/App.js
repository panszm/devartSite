import React from 'react';
import './App.css';
import './styles/common.css';
import './styles/menu.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './routes/Home'
import Wallpapers from './routes/Wallpapers';
import ArtTips from './routes/ArtTips';
import Giveaway from './routes/Giveaway';

const home = props=> <Home/>
const wallpapers = props=> <Wallpapers/>
const art_tips = props=> <ArtTips/>
const giveaway = props=> <Giveaway/>

function App() {
  return (
    <div>
      <Navbar/>
        <Router>
          <Switch>
            <Route exact path="/" component={home}/>
            <Route path="/wallpapers/" component={wallpapers}/>
            <Route path="/tips/" component={art_tips}/>
            <Route path="/giveaway/" component={giveaway}/>
          </Switch>
        </Router>
    </div>
  );
}

export default App;

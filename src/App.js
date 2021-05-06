import React from 'react';
import './App.css';
import './styles/common.css';
import './styles/menu.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './routes/Home'
import Wallpapers from './routes/Wallpapers';
import ArtTips from './routes/ArtTips';

const home = props=> <Home/>
const wallpapers = props=> <Wallpapers/>
const art_tips = props=> <ArtTips/>

function App() {
  return (
    <Router>

    <Switch>
      <Route exact path="/" component={home}/>
      <Route path="/wallpapers/" component={wallpapers}/>
      <Route path="/tips/" component={art_tips}/>
    </Switch>

    </Router>
  );
}

export default App;

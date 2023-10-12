import './App.css';

import React, { useState } from 'react';
import Navbar from './component/Navbar';
import News from './component/News';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

const App = () => {
  const pageSize = 12;
  // eslint-disable-next-line
  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar height={3} color='#f11946' progress={progress} />
        <Switch>
          <Route exact path='/'>
          <News setProgress={setProgress} pageSize={pageSize} country='us' category='General' />
          </Route>
          <Route exact path='/business'>
            <News setProgress={setProgress} key='Business' pageSize={pageSize} country='us' category='Business' />
          </Route>
          <Route exact path='/entertainment'>
            <News setProgress={setProgress} key='entertainment' pageSize={pageSize} country='us' category='Entertainment' />
          </Route>
          <Route exact path='/health'>
            <News setProgress={setProgress} key='Health' pageSize={pageSize} country='us' category='Health' />
          </Route>
          <Route exact path='/science'>
            <News setProgress={setProgress} key='Science' pageSize={pageSize} country='us' category='Science' />
          </Route>
          <Route exact path='/sports'>
            <News setProgress={setProgress} key='Sports' pageSize={pageSize} country='us' category='Sports' />
          </Route>
          <Route exact path='/technology'>
            <News setProgress={setProgress} key='Technology' pageSize={pageSize} country='us' category='Technology' />
          </Route>
          {/* Add more categories if needed */}
        </Switch>
      </Router>
    </div>
  );
};

export default App;

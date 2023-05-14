import React, { Component, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/login';
import Home from './components/home';
import Menu from './components/menu';
import Watchout from './components/watchout'
import Navigation from './components/Navigation';
import Clickme from './components/Clickme';
import money from './components/money';
import bill from './components/bill';
class App extends Component {
  state = {  } 

  render() { 
    
    return (
      <React.Fragment >
        <div className='sticky-top'><Clickme /></div>

        <div >
        
          <BrowserRouter >
          <div>
                <Navigation />
                
                <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/menu" component={Menu}/>
                <Route path="/watchout" component={Watchout}/>
                <Route path="/login" component={Login}/>
                <Route path="/money" component={money}/>
                <Route path="/bill/:id" component={bill} />
              </Switch>
            </div> 
          </BrowserRouter>
        </div>  
      </React.Fragment>
    );
  }
}
 
export default App;
import React, { Component } from 'react';
import './App.css';

import store from "./store"
import {Provider} from "react-redux"
import {Route,BrowserRouter,Switch,Link} from "react-router-dom"
import Home from "./Home"
import Post from "./Post"

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Link to="/">首页</Link>
            <Link to="/post/1">功能页</Link>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/post/:id" component={Post} />
            </Switch>
          </div>

        </BrowserRouter>
      </Provider>

    )
  }
}

export default App;

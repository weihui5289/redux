import React, { Component } from 'react';
import './App.css'
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom'
import HomePage from "./HomePage"
import SignupPage from "./SignupPage"
import Header from "./Header"
import {Provider} from "react-redux"
import store from "./redux/store"
import axios from "axios"

class App extends Component {
  //读取登陆的个人的用户名字和信息
  componentDidMount(){
    let userId =localStorage.getItem("userId")
    if(userId){
      axios.get(`http://192.168.0.122:3008/user/${userId}`)
      .then(res=>{
        // console.log(res.data.user.username)
        store.dispatch({type:"AUTH_USER",peoplename:res.data.user.username})
      })
    }
  }
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Header />
            <Switch>
              <Route path="/" exact component={HomePage}></Route>
              <Route path="/signup" component={SignupPage}></Route>
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>

    )
  }
}

export default App;

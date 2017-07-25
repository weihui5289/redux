import React from "react"
import {Link} from "react-router-dom"
import img from "./images/28445969-5896e9a8-6dfa-11e7-97e9-9e0ad4dab299_03.png"

class HomePage extends React.Component{

  render(){
    return(
      <div className="wrap">
        <div className="main">
          <header>
            <div className="main-top">
              <img src={img} />
              <p style={{fontSize:"0.9rem",color:"#fff"}}>吮指</p>
              <p style={{fontSize:"0.5rem",color:"#fff"}}>享受舌尖艳遇</p>
            </div>
            <div className="main-bottom">
              <Link to="/signup">注册</Link>
              <Link to="/login">登录</Link>
            </div>
          </header>
        </div>
      </div>
    )
  }
}
export default HomePage

import React from "react"
import {Link} from "react-router-dom"
import store from "./redux/store"

import {connect} from "react-redux"
class Header extends React.Component{
    //退出按钮
    logout=()=>{
      store.dispatch({type:"LOG_OUT"})
      localStorage.removeItem("userId")
    }
    render(){
    // console.log(this.props)打印登陆false,然后用户名为空
    let authStr=(
    <div>
      <Link to="/signup">注册</Link>
      <Link to="/login">登陆</Link>
    </div>
  )

    let userInfo =(
    <div>
      {this.props.yonghu}|
      <Link to="" onClick={this.logout}>退出</Link>
    </div>
  )

    return(
      <header>
        {this.props.denglu?userInfo:authStr}
      </header>
    )
  }
}

const mapStateToProps =(state)=>({
  // 打印 state  输出 account  和  user  里面的对象
  denglu:state.account.isAuthenticated,
  yonghu:state.account.currentUser
})
export default connect(mapStateToProps)(Header)

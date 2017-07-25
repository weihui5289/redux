import React from "react"
import {Icon} from 'antd'
import {Link} from "react-router-dom"


class LoginPage extends React.Component{
  render(){
    return(
      <div className="sp-wrap">
        <div className="sp-main">
          <div className="spmain-top">
        
            <span>Loginup</span>
          </div>

          <div className="spmain-mid">
            <h1>登录</h1>
            <p>链接一个个小而确定的幸福</p>
          </div>

            <div className="spmain-bottom">
                <form ref={xxx=>this.signupForm=xxx} onSubmit={this.signUp}>
                  <div className="biaodan">
                    <input ref={xxx=>this.usernameInput=xxx} type="text" placeholder="用户名" />
                    <input ref={value=>this.passwordInput=value} type="password" placeholder="请输入密码" />
                  </div>

                  <div className="lp-bottom">
                    <button>登录</button>
                    <Link to="/signup">没有账号？&nbsp;&nbsp;&nbsp;点此注册</Link>
                  </div>

                </form>
            </div>
        </div>
      </div>
    )
  }
}
export default LoginPage

import React from "react"
import axios from "axios"
import store from "./redux/store"
import {Link} from "react-router-dom"


class SignupPage extends React.Component{

  signUp=(e)=>{
    e.preventDefault()
    let username=this.usernameInput.value
    let password=this.passwordInput.value
    let data={username,password}
      axios.post('http://192.168.0.122:3008/user/signup',data).then(res => {
      // console.log(res.data)
      // console.log(this.props)
      if(res.data.username){
        store.dispatch({type:"AUTH_USER",peoplename:res.data.username})
        //存入浏览器 localStorage里面，刷新页面也不会流失数据
        localStorage.setItem("userId",res.data.userId)
        //清空表单内容
        this.signupForm.reset()
        //输入成功跳转到首页
        this.props.history.push("/")

      }

    }).catch(err=>
      alert(err.response.data.msg)
    )
  }


  render(){
    return(
      <div className="sp-wrap">
        <div className="sp-main">
          <div className="spmain-top">
            <span>signup</span>
          </div>

          <div className="spmain-mid">
            <h1>注册</h1>
            <p>链接一个个小而确定的幸福</p>
          </div>

            <div className="spmain-bottom">
                <form ref={xxx=>this.signupForm=xxx} onSubmit={this.signUp}>
                  <div className="biaodan">
                    <input ref={xxx=>this.usernameInput=xxx} type="text" placeholder="用户名" />
                    <input type="text" placeholder="邮箱" />
                    <input ref={value=>this.passwordInput=value} type="password" placeholder="请输入密码" />
                    <input type="password" placeholder="在输入一次" />
                  </div>

                  <div>
                    <button>注册</button>
                    <Link to="/login">已有账号？&nbsp;&nbsp;&nbsp;点此登陆</Link>
                  </div>

                </form>
            </div>
        </div>
      </div>
    )
  }
}
export default SignupPage

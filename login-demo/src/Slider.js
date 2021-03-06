import React from "react"
import {Link} from "react-router-dom"
import {slide as Menu } from 'react-burger-menu'

class Slider extends React.Component{
  state={
    isOpen:true
  }
  closeBmMenu =()=>{
    this.setstate({
      isOpen:false
    })
  }

  render(){
    return(
      <div className="siderbar">
        <Menu>
          <div className="bm-user-info">
            <img src="http://media.haoduoshipin.com/yummy/default-avatar.png" alt="avatar" />
            <div className="bm-user-auth">
              <Link to="" className="bm-user-left">
                weihui
              </Link>
              <Link to="" className="bm-user-right">
                退出
              </Link>
            </div>
          </div>

          <div className="bm-link-list">
            <Link onClick={this.closeBmMenu} to="/home">首页</Link>
            <Link onClick={this.closeBmMenu} to="/signup">注册</Link>
            <Link onClick={this.closeBmMenu} to="/cart">购物车</Link>
            <Link onClick={this.closeBmMenu} to="/dishes">猜你喜欢</Link>
          </div>

          <div className="bm-close-button">
            <button onClick={this.closeBmMenu}>关闭</button>
          </div>
        </Menu>
      </div>
      )
    }
  }

export default Slider

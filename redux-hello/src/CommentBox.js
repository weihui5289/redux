import React, { Component } from 'react';
import store from "./store"
import {connect} from "react-redux"
class CommentBox extends Component {

  handleSubmit=(e)=>{
    e.preventDefault()
    // console.log(this.value.value)
    let newComment=this.value.value

    store.dispatch({type:"ADD_COMMENT",tianjia:newComment})
    // this.value.value=""
    this.word.reset()
  }
  render() {
    let commentList=this.props.comments.map(item=>(
      <li className="comment" key={Math.random()}>{item}</li>
    ))
    return (
      <div className="comment-box">
        {commentList}
        <form ref={word=>this.word=word} className="comment-form" onSubmit={this.handleSubmit}>
          <input ref={xxx=>this.value=xxx} className="input" type="text"/>
          <button type="submit" className="submit-btn" >提交</button>
        </form>
        <div className="underline"></div>

      </div>

    )
  }
}
const mapStateToProps=(state)=>({
  comments:state
})
export default connect(mapStateToProps)(CommentBox)

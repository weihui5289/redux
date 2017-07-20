import React, { Component } from 'react';
import store from "./store"
import {connect} from "react-redux"
class CommentBox extends Component {

  handleSubmit=(e)=>{
    e.preventDefault()
    // console.log(this.value.value)
    let newComment=this.value.value

    store.dispatch({type:"ADD_COMMENT",tianjia:newComment,Id:this.props.postId})
    console.log(store.getState())
    console.log(this.props.comments)
    // this.value.value=""
    this.word.reset()
  }
  render() {
    let { postId, comments } = this.props
    let myComments= comments.filter(function(item){
        return postId===item.postId
    }
   )
  //  console.log(myComments)
    //   let myComments = comments.filter(value => value.postId ===  postId ).map(item => {
    //    return item.content;
    //  })
    return (
      <div className="comment-box">
        {
            myComments.map(item => (
              <li className="comment" key={Math.random()}>{item.content}</li>
            ))
          }
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
  comments:state.comments
})
export default connect(mapStateToProps)(CommentBox)

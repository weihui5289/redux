import React, { Component } from 'react';
import {connect} from "react-redux"
import store from "./store"
class PostBody extends Component {

  handleClick=()=>{
    store.dispatch({type:"INCREMENT_LIKE",Id:this.props.postId})
  }

  render() {

    let {postId,likes}=this.props
    // console.log(this.props)
    let newArr=likes.filter(item => item.postId === postId)[0]


    console.log(this.props)

    return (
        <div className="post-body">
          <div className="title">
            {newArr.title}
          </div>
          <div className="likes-num num" onClick={this.handleClick}>{newArr.likes}人 赞</div>

          <div className="comment-num num">
          {this.props.comments.length}评论
          </div>
  			</div>

    )
  }
}
const mapStateToProps=(state)=>({
    comments:state.comments,
    likes:state.likesPost
})

export default connect(mapStateToProps)(PostBody)

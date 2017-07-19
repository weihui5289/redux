import React, { Component } from 'react';

class CommentBox extends Component {
  constructor(){
    super()
    this.state={
      comments:[
        "第一条评论",
        "第二条评论"
      ]
    }
  }
  handleSubmit=(e)=>{
    e.preventDefault()
    // console.log(this.value.value)
    let newComment=this.value.value
    this.setState({comments:[...this.state.comments,newComment]})
    // this.value.value=""
    this.word.reset()
  }
  render() {
    let commentList=this.state.comments.map(item=>(
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

export default CommentBox

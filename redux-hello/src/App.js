import React, { Component } from 'react';
import './App.css';
import PostBody from "./PostBody"
import CommentBox from "./CommentBox"

class App extends Component {
  state={
    comments:[
      "第一条评论",
      "第二条评论"
    ]
  }
  addComment=(newComment)=>{
    this.setState({
      comments:[...this.state.comments,newComment]
    })
  }
  render() {
    return (
      <div>
        <div>
          <PostBody comments={this.state.comments} />
        </div>

        <div>
            <CommentBox comments={this.state.comments} addComment={this.addComment} />
        </div>

      </div>

    )
  }
}

export default App;

import React from "react"
import PostBody from "./PostBody"
import CommentBox from "./CommentBox"
class Post extends React.Component{
  render(){
    // console.log(this.props)
    let {id}=this.props.match.params
    return(
      <div>
      <div className="top  clearfix">
        <PostBody  postId={id} />
      </div>
      <div className="bottom clearfix">
        <CommentBox  postId={id} />
      </div>
    </div>
    )
  }
}
export default Post

import React from "react"
import {connect} from "react-redux"
import PostBody from "./PostBody"
class Home extends React.Component{
  render(){
    // console.log(this.props)
    let {likes}=this.props
    let postList=likes.map(item=>{
      return( <PostBody key={item.postId} postId={item.postId}/>)
    })
    // console.log(postList)
    return(
      <div className="home">
        {postList}
      </div>

    )
  }
}
const mapStateToProps=(state)=>({
  likes:state.likesPost
})
export default connect(mapStateToProps)(Home)

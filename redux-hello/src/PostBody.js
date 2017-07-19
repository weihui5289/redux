import React, { Component } from 'react';

class PostBody extends Component {
  render() {
    return (
        <div className="post-body">
          <div className="comment-num num">
            {this.props.comments.length}
          </div>
  			</div>

    )
  }
}

export default PostBody

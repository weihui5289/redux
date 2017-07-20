let comments=
[
  {
    content:"第一条",
    postId:"1"
  },
  {
    content:"666",
    postId:"1"
  },
  {
    content:"第二条",
    postId:"2"
  }
]
export default function commentReducer(state=comments,action){
  switch(action.type){
    case "ADD_COMMENT":
      return[...state,{content:action.tianjia,postId:action.Id}]
      default:return state
  }

}

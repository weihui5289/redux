
// export default function likeReducer(state=0,action){
//   console.log(action)
//   switch(action.type){
//     case "INCREMENT_LIKE":
//       return state+=action.num
//       default:return state
//   }
//
// }

let likesPost=[
  {
    postId:"1",
    likes:100,
    title:"Git 技巧"
  },
  {
    postId:"2",
    likes:200,
    title:"学习 Redux"
  }
]



export default function likeReducer(state=likesPost,action){
  switch(action.type){
    case "INCREMENT_LIKE":
    // console.log(state)
      let otherArr=state.filter(item=>item.postId!==action.postId)
      // console.log(otherArr)
      let nowArr =state.filter(item=>item.postId===action.postId)[0]
      // console.log(nowArr)
    return[...otherArr,{...nowArr,likes:nowArr.likes+1}]
      default:return state
  }
}

let userInfo = {
  username:"",
  email:"",
  avatar:""

}

export default function userReducer(state=userInfo,action){
  switch(action.type){
    case "XXX":
      return state
    default:
      return state;
  }
}

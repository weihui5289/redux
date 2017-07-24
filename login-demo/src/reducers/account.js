let account = {
  isAuthenticated:false,
  currentUser:""

}

export default function accoutReducer(state=account,action){
  switch (action.type) {
    case 'AUTH_USER':
      return { isAuthenticated: true, currentUser: action.peoplename}
    //点击退出按钮实现的功能，状态变成未登录。用户名为空
    case "LOG_OUT":
      return {isAuthenticated: false, currentUser:""}
    default:
      return state;
  }
}

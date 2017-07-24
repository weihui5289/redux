import accoutReducer from "./account"
import userReducer from "./user"
import {combineReducers}  from "redux"

const rootReducer = combineReducers({
  account:accoutReducer,
  user:userReducer

})
export default rootReducer

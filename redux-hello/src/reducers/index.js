import likeReducer from "./like"
import commentReducer from "./comment"
import {combineReducers} from "redux"

const rootReducer =combineReducers({
  comments:commentReducer,
  likesPost:likeReducer
})
export default rootReducer

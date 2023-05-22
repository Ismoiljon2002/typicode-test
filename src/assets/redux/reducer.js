import { combineReducers } from "redux"
const initialState = {
    posts: []
}



const GET_POSTS = (state = initialState) => {
    return { state }
}


export default combineReducers({
    GET_POSTS
})
import cityReducer from "./cityReducer";
import hotelReduce from "./hotelReducer";
import userReducer from "./userReducer";
import reactionReducer from './reactionReducer';
import commentReducer from './commentReducer';




const rootReducer = {
    city: cityReducer,
    hotel: hotelReduce,
    user: userReducer,
    reaction: reactionReducer,
    comment: commentReducer
}

export default rootReducer
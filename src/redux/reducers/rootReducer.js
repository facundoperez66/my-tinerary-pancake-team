import cityReducer from "./cityReducer";
import hotelReduce from "./hotelReducer";
import userReducer from "./userReducer";
import reactionReducer from './reactionReducer';

const rootReducer = {
    city: cityReducer,
    hotel: hotelReduce,
    user: userReducer,
    reaction: reactionReducer
}

export default rootReducer
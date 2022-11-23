import { createReducer } from "@reduxjs/toolkit";
import hotelActions from "../actions/hotelActions";

const {getHotels,hotelsFiltred,createHotel}= hotelActions
const initialstate= {
    hotels:[],
    order:"",
    name: "",
}

const hotelReduce = createReducer(initialstate,(builder)=>{
    builder
    .addCase(getHotels.fulfilled, (state, action) => {
        
        return { ...state, hotels: action.payload, };
    })
    .addCase(hotelsFiltred.fulfilled, (state, action) => {
        
        return { ...state, hotels: action.payload.res,order:action.payload.order,name:action.payload.name };
    })
    .addCase(createHotel.fulfilled, (state, action) =>{
        if(action.payload.success){
            state.hotels.push(action.payload)
        }
    })
})

export default hotelReduce
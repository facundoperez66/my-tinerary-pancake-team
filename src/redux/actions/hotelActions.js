import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { BASE_URL } from '../../api/url'

const getHotels = createAsyncThunk("getHotels", async () => {
    try{
        const res = await axios.get(`${BASE_URL}/api/hotels`)
        return res.data.response
    }catch(error){
        console.log(error)
        return {
            payload: "Error"
        }
    }
})

const hotelsFiltred = createAsyncThunk("hotelsFiltred", async (data) => {
    try{
        const res = await axios.get(`${BASE_URL}/api/hotels?name=${data.name}&order=${data.order}`)
        const dataReduce = {
            res: res.data.response,
            order: data.order,
            name: data.name,
            
        }
        return dataReduce
    } catch(error){
        console.log(error)
        return{
            payload: "Error"
        }
    }
})

const createHotel = createAsyncThunk("createHotel", async (newHotel) => {
    try{
        const res = await axios.post(`${BASE_URL}/api/hotels`, newHotel)

        if (res.data.id) {
            return {
                id: res.data.id,
                success: true,
                response: newHotel,
            }
        } else {
            return {
                success: false,
                messages: res.data.message,

            }
        }
    }catch(error){
        return {
            success: false,
            response: 'Ocurrio un error'
        }
    }
})
const hotelActions={hotelsFiltred,getHotels, createHotel}

export default hotelActions
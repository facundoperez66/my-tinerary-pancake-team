import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { BASE_URL } from '../../api/url'

const getCities = createAsyncThunk("getCities", async (data) => {
    try{
        const res = await axios.get(`${BASE_URL}/api/cities`)
        return res.data.data
    }catch(error){
        console.log(error)
        return {
            payload: "Error"
        }
    }
})

const citiesFiltred = createAsyncThunk("citiesFiltred", async (data) => {
    try{
        const res = await axios.get(`${BASE_URL}/api/cities?${data.checks}&name=${data.name}`)
        const dataReduce = {
            res: res.data.data,
            checks: data.checks,
            name: data.name,
            checked: data.checked
        }
        return dataReduce
    } catch(error){
        console.log(error)
        return{
            payload: "Error"
        }
    }
})
const createCity = createAsyncThunk("createCity", async (newCity) => {
    try{
        const res = await axios.post(`${BASE_URL}/api/cities`, newCity)

        if (res.data.id) {
            return {
                id: res.data.id,
                success: true,
                response: newCity,
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

 



const actionsCity = {
    getCities,
    citiesFiltred,
    createCity
}

export default actionsCity
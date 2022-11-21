import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { act } from "react-dom/test-utils";
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

const actionsCity = {
    getCities,
    citiesFiltred
}

export default actionsCity
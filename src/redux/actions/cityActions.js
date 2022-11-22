import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { BASE_URL } from '../../api/url'

const getCities = createAsyncThunk("getCities", async () => {
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

const getCitiesAdmin = createAsyncThunk("getCitiesAdmin", async (id) => {
  try{
      const res = await axios.get(`${BASE_URL}/api/cities?userId=${id}`)
      return res.data.data
  }catch(error){
      console.log(error)
      return {
          payload: 'Error'
      }
  }
})

const deleteCity = createAsyncThunk("deleteCity", async (id) => {
  try{
      const res = await axios.delete(`${BASE_URL}/api/cities/${id}`)
      return res.data
  }catch(error){
      console.log(error)
      return {
          payload: 'Error'
      }
  }
})

const updateCity = createAsyncThunk("updateCity", async (data) => {
  try{
      const res = await axios.put(`${BASE_URL}/api/cities/${data.id}`, data.citie)
      return res.data
  }catch(error){
      console.log(error)
      return {
          payload: 'Error'
      }
  }


  
})
const getItineraries = createAsyncThunk("getItineraries", async (id) => {
    try{
        const res = await axios.get(`${BASE_URL}/api/itineraries?userId=${id}`)
        return res.data.data
    }catch(error){
        console.log(error)
        return {
            payload: 'Error'
        }
    }
})

const updateItinerary = createAsyncThunk("updateItinerary", async (data) => {
    try{
        const res = await axios.put(`${BASE_URL}/api/itineraries/${data.id}`, data.itinerary)
        return res.data
    }catch(error){
        console.log(error)
        return {
            payload: 'Error'
        }
    }
})

const deleteItinerary = createAsyncThunk("deleteItinerary", async (id) => {
    try{
        const res = await axios.delete(`${BASE_URL}/api/itineraries/${id}`)
        return res.data
    }catch(error){
        console.log(error)
        return {
            payload: 'Error'
        }
    }
})




  




const actionsCity = {
    getCities,
    citiesFiltred,
    createCity,
    getCitiesAdmin,
    deleteCity,
    updateCity,
    getItineraries,
    updateItinerary,
    deleteItinerary

    
    
}

export default actionsCity
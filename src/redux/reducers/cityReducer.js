import { createReducer } from "@reduxjs/toolkit";
import actionsCity from "../actions/cityActions";

const { getCities, citiesFiltred, createCity, getCitiesAdmin, deleteCity, updateCity, getItineraries, updateItinerary, deleteItinerary } = actionsCity;

const iState = {
    cities: [],
    checks: "",
    name: "",
    continent: [],
    checked: [],
    citiesAdmin: [],
    itineraries: []
};

const cityReducer = createReducer(iState, (builder) => {
    builder
        .addCase(getCities.fulfilled, (state, action) => {
            let continent = [...new Set(action.payload.map(city => city.continent))]
            return { ...state, cities: action.payload, continent: continent };

        })
        .addCase(citiesFiltred.fulfilled, (state, action) => {
            return { ...state, cities: action.payload.res, checks: action.payload.checks, name: action.payload.name, checked: action.payload.checked }
        })
        .addCase(createCity.fulfilled, (state, action) => {
            if (action.payload.success) {
                state.cities.push(action.payload)
            }
        })
        
        .addCase(getCitiesAdmin.fulfilled, (state, action) => {
            return { ...state, citiesAdmin: action.payload};
        })
        .addCase(deleteCity.fulfilled, (state, action) => {
            let city = state.citiesAdmin.filter(city => city.id !== action.payload.data._id)
            return { ...state, citiesAdmin: city};
        })
        .addCase(updateCity.fulfilled, (state, action) => {
            return { ...state};
        })
        .addCase(getItineraries.fulfilled, (state, action) => {
            return { ...state, itineraries: action.payload};
        })
        .addCase(updateItinerary.fulfilled, (state, action) => {
            return { ...state};
        })
        .addCase(deleteItinerary.fulfilled, (state, action) => {
            let itinerary = state.itineraries.filter(itinerary => itinerary._id !== action.payload.data._id)
            return { ...state, itineraries: itinerary};
        })





})
export default cityReducer
import { createReducer } from "@reduxjs/toolkit";
import actionsCity from "../actions/cityActions";

const { getCities, citiesFiltred, createCity, getCitiesAdmin, deleteCity, updateCity } = actionsCity;

const iState = {
    cities: [],
    checks: "",
    name: "",
    continent: [],
    checked: [],
    citiesAdmin: [],
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





})
export default cityReducer
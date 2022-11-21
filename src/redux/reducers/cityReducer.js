import { createAction, createReducer } from "@reduxjs/toolkit";
import actionsCity from "../actions/cityActions";

const { getCities, citiesFiltred} = actionsCity;

const iState = {
    cities: [],
    checks: "",
    name: "",
    continent: [],
    checked: []
};

const cityReducer = createReducer(iState, (builder) => {
    builder
    .addCase(getCities.fulfilled, (state, action) => {
        let continent = [...new Set(action.payload.map(city => city.continent))]
        return {...state, cities: action.payload, continent: continent};

    })
    .addCase(citiesFiltred.fulfilled, (state, action) => {
        return { ...state, cities: action.payload.res, checks: action.payload.checks, name: action.payload.name, checked: action.payload.checked}
 } )
}
)

export default cityReducer
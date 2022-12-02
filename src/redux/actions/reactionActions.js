import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../api/url";

const createReaction = createAsyncThunk("createReaction", async (datos) => {
    let headers = { headers: { 'Authorization': `Bearer ${datos.token}` } }
    try {
        const res = await axios.post(`${BASE_URL}/api/reactions`, datos.reaction, headers)
        console.log(res)
        return res.data
    } catch (error) {
        return {
            payload: error.response.data,
        }
    }
})

const getReactions = createAsyncThunk("getReactions", async (datos) => {
    let headers = { headers: { 'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzODc3MmY3MGY4OWQ0MGQ4ZGUxZDcxMyIsImlhdCI6MTY2OTkzOTIwNywiZXhwIjoxNjcwMDI1NjA3fQ.nf-RojC1RzAn41KjkrYnDZd3WDDcqEs6d7nCpHLQtGg` } }
    try {
        if (datos.type === 'show') {
            const res = await axios.get(`${BASE_URL}/api/reactions?showId=${datos.eventId}`, headers)
            return res.data
        } else if (datos.type === 'itinerary') {
            const res = await axios.get(`${BASE_URL}/api/reactions?itineraryId=${datos.eventId}`, headers)
            return res.data
        }
    } catch (error) {
        return {
            payload: error.response.data,
        }
    }
})

const updateReaction = createAsyncThunk("updateReaction", async (datos) => {
    let headers = { headers: { 'Authorization': `Bearer ${datos.token}` } }
    try {
        if (datos.type === 'show') {
            const res = await axios.put(`${BASE_URL}/api/reactions?name=${datos.name}&showId=${datos.id}`, null, headers)
            return res.data
        } else if (datos.type === 'itinerary') {
            const res = await axios.put(`${BASE_URL}/api/reactions?name=${datos.name}&itineraryId=${datos.id}`, null, headers)
            return res.data
        }
    } catch (error) {
        return {
            payload: error.response.data,
        }
    }
})

const getMyReactions = createAsyncThunk("getMyReactions", async ({ id, token }) => {
    let headers = { headers: { 'Authorization': `Bearer ${token}` } }
    try {
        const res = await axios.get(`${BASE_URL}/api/reactions?userId=${id}`, headers)
        return res.data.data
    } catch (error) {
        return {
            payload: error.response.data,
        }
    }
})

const deleteReaction = createAsyncThunk("deleteReaction", async ({ id, token }) => {
    let headers = { headers: { 'Authorization': `Bearer ${token}` } }
    try {
        const res = await axios.put(`${BASE_URL}/api/reactions/${id}`, null, headers)
        console.log(res.data)
        return res.data
    } catch (error) {
        return {
            payload: error.response.data,
        }
    }
})

const reactionActions = {
    createReaction,
    getReactions,
    updateReaction,
    getMyReactions,
    deleteReaction
}

export default reactionActions
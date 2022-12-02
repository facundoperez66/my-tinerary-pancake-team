import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../api/url";


const createReaction = createAsyncThunk("createReaction", async (datos) => {
    let headers = { headers: { 'Authorization': `Bearer ${datos.token}` } }
    try {
        const res = await axios.post(`${BASE_URL}/api/reactions`, datos.reaction, headers)
        return res.data
    } catch (error) {
        return {
            payload: error.response.data,
        }
    }
})

const getReactions = createAsyncThunk("getReactions", async (datos) => {
    let headers = { headers: { 'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzODc3MmY3MGY4OWQ0MGQ4ZGUxZDcxMyIsIm5hbWUiOiJGZWRlcmljbyIsInBob3RvIjoiaHR0cHM6Ly93Ny5wbmd3aW5nLmNvbS9wbmdzLzEwMDgvMzc3L3BuZy10cmFuc3BhcmVudC1jb21wdXRlci1pY29ucy1hdmF0YXItdXNlci1wcm9maWxlLWF2YXRhci1oZXJvZXMtYmxhY2staGFpci1jb21wdXRlci5wbmciLCJsb2dnZWQiOnRydWUsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY2OTk5NTQzNCwiZXhwIjoxNjcwMDgxODM0fQ.gD9EVvfyrS3l_teoc3_1z151Vl3VJ7TowZ3wstrT04M` } }
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
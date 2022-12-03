import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import{BASE_URL} from '../../api/url'

const getComments = createAsyncThunk("getComments", async (datos) => {
    let headers = { headers: { 'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzODc3MmY3MGY4OWQ0MGQ4ZGUxZDcxMyIsIm5hbWUiOiJGZWRlcmljbyIsInBob3RvIjoiaHR0cHM6Ly93Ny5wbmd3aW5nLmNvbS9wbmdzLzEwMDgvMzc3L3BuZy10cmFuc3BhcmVudC1jb21wdXRlci1pY29ucy1hdmF0YXItdXNlci1wcm9maWxlLWF2YXRhci1oZXJvZXMtYmxhY2staGFpci1jb21wdXRlci5wbmciLCJsb2dnZWQiOnRydWUsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY2OTk5NTQzNCwiZXhwIjoxNjcwMDgxODM0fQ.gD9EVvfyrS3l_teoc3_1z151Vl3VJ7TowZ3wstrT04M` } }
    try {
        if (datos.type === 'show') {
            const res = await axios.get(`${BASE_URL}/api/comments?showId=${datos.eventId}&order=desc`, headers)
            return res.data
        } else if (datos.type === 'itinerary') {
            const res = await axios.get(`${BASE_URL}/api/comments?itineraryId=${datos.eventId}&order=desc`, headers)
            return res.data
        }
    } catch (error) {
        return {
            payload: error.response.data,
        }
    }
});



const createComment = createAsyncThunk("createComment", async (datos) => {
    let headers = { headers: { 'Authorization': `Bearer ${datos.token}` } }
    try {
        const res = await axios.post(`${BASE_URL}/api/comments`, datos.comment, headers)
        return res.data
    } catch (error) {
        return {
            payload: error.response.data,
        }
    }
});

const updateComment = createAsyncThunk("updateComment", async (datos) => {
    let headers = { headers: { 'Authorization': `Bearer ${datos.token}` } }
    try {
        const res = await axios.put(`${BASE_URL}/api/comments/${datos.id}`, datos.comment, headers)
        return res.data
    } catch (error) {
        return {
            payload: error.response.data,
        }
    }
})

const deleteComment = createAsyncThunk("deleteComment", async (datos) => {
    let headers = { headers: { 'Authorization': `Bearer ${datos.token}` } }
    console.log(datos.id)
    try {
        const res = await axios.delete(`${BASE_URL}/api/comments/${datos.id}`, headers)
        return res.data
    } catch (error) {
        return {
            payload: error.response.data,
        }
    }
})

const commentActions = {
    getComments,
    createComment,
    updateComment,
    deleteComment
}

export default commentActions
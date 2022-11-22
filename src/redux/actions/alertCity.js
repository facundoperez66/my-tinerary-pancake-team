import { createAction } from "@reduxjs/toolkit"

const alert = createAction("alert", (data) => {
    return {
        payload: data
    }

})

const alertActions = {
    alert
}


export default alertActions
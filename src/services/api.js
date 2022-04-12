const axios = require("axios")

const token = localStorage.getItem("kipiai-token")

const api = axios.create({
    headers:{
        authorization:"Bearer "+token
    },
    baseURL:"http://localhost:4000"
})

export default api
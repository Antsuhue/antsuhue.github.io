const mongoose = require("mongoose")

const views = new mongoose.Schema({
    views:{
        type: Array
    },
    permission: {
        type: String
    }
})

const Views = mongoose.model("views", views, "views")

module.exports = Views
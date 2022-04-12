const mongoose = require("mongoose")

const card = new mongoose.Schema({
    viewId:{
        type:String,
        require: true
    },
    nameCompany: {
        type:String,
    },
    revenue: {
        type:String,
        require:true
    },
    costPerOrder:{
        type:String,
        required:true
    },
    lastConsult:{
        type:String
    }

    
})

const Card = mongoose.model("cards", card, "cards")

module.exports = Card
const modelViews = require("../model/views")

async function insertViews(req, res){
    
}

async function getViews(req, res){
    const views = await modelViews.find()

    return res
    .status(200)
    .json({ result:views.views })

}

module.exports = {
    getViews
}
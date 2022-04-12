const modelCards = require("../model/card")
const google = require("../controller/google")
const moment = require("moment")


async function createCard(viewId) {

    const response = await google.googleData(viewId) 

    var newCard = new modelCards ({
        viewId: viewId,
        revenue: response.adCost,
        costPerOrder: response.orderCost,
        lastConsult: moment().format("L")
    })

    const doc = await newCard.save()
    
    return doc
}

async function updateCard(viewId){

    const response = await google.googleData(viewId) 

    const update = {
        revenue: response.adCost,
        costPerOrder: response.orderCost,
        lastConsult: moment().format()
    }

    await modelCards.findOneAndUpdate({viewId:viewId},update)

    return response
}

async function consultCard(req, res){
    const { viewId } = req.body
    
    const card = await modelCards.findOne({viewId: viewId})

    if (card){

        const time = moment(card.lastConsult)
        const now = moment(moment().format())

        const diference = now.diff(time, "hour")

        if (diference >= 1){
        const up = await updateCard(viewId)
        return res.status(200).json(up)
        }else{
            return res.status(200).json(card)
        }
    }
    else{
        
        const newCard = await createCard(viewId)
        return res.status(200).json({ newCard })
        
    }

}
module.exports = {
    consultCard
}
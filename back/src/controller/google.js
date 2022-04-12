const { google } = require('googleapis')
const scopes = 'https://www.googleapis.com/auth/analytics.readonly'
const key = require("../config/auth.json")
const jwt = new google.auth.JWT(key.client_email, null, key.private_key, scopes)
require("dotenv");

// const view_id =  "156007659" //'247206534'
let obj = {}

let listMetrics = ["emplooyer","adCost", "transactions", "transactionRevenue"]

async function getData(metrica, viewId) {
  console.log("Teste => "+viewId)

  try{
  const response = await jwt.authorize()

  objGoogle = {
    'auth': jwt,
    'ids': 'ga:' +viewId,
    'start-date': '1daysAgo',
    'end-date': 'today',
    'metrics': "ga:"+metrica
  }

  switch (metrica){
    case "emplooyer":
      objGoogle["metrics"] = "ga:adCost"
      const result = await google.analytics('v3').data.ga.get(objGoogle)
      return result.data.profileInfo.profileName
  }
  const result = await google.analytics('v3').data.ga.get(objGoogle)

  let resGoogle = result.data.rows[0][0]

  return resGoogle

}catch(error){
  console.log(error);
    }
}

async function googleData(viewId){
  const promises = await listMetrics.map(async element => {
      const data = await getData(element, viewId)
      obj[element] = data
  })

  await Promise.all(promises)

  obj["orderCost"] = parseFloat(obj["adCost"]/obj["transactions"]).toFixed(2)

  return obj
  
}

module.exports = { googleData }
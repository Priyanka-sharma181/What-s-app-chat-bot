const express = require("express")
const { sendTextMessage } = require("./messages")
const app = express()

app.use(express.json())



app.post("/webhook",(req,res)=>{
    const body = req.body
    const contacts = req.body.contacts
    const message = req.body.messages[0]
    if(message.type =="text"){
      return  sendTextMessage()
    }
})


app.listen(3000,()=>{
    console.log("listining ");
})
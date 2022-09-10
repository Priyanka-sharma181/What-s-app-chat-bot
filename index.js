const express = require("express")

const app = express()

const port = process.env.port || 3000
app.use(express.json())

app.post("/webhook",(req,res)=>{
    const contacts = req.body.contacts[0]
    const message = req.body.messages[0]
    if(message.type =="text"){
      if(message.text.body.toLowerCase()=="hii"){
        // console.log(`hii ${contacts.profile.name}`);
          return  `hii ${contacts.profile.name}`
      }
    }
})


app.listen(port,()=>{
    console.log("listining ");
})
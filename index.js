const express = require("express")
const app = express()
const fileUplode = require("express-fileupload")
const router  = require("./routers/routes")

const port = process.env.port || 3000
app.use(express.json())
app.use(fileUplode())
app.use("/",router)





app.listen(port,()=>{
    console.log("listining ");
})
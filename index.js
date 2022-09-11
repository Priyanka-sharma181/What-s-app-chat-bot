const express = require("express")
const app = express()
const fileUplode = require("express-fileupload")
let router  = require("./routers/routes")

const port = process.env.PORT || 8080;
app.use(express.json())
app.use(fileUplode())
app.use("/",router)


app.listen(port,()=>{
    console.log("listining ");
})
const express = require("express")
const { sendMessage } = require("../controller/chatbot")
const router = express.Router()

router.post("/sendMessage",sendMessage)

module.exports={router}


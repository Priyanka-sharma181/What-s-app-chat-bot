const axios = require("axios")

async function sendTextMessage(){
 try {
    const response= await axios.post(
        "https://whatsapp.turn.io/v1/messages",
        {
            "preview_url":false,
            "recipient_type": "individual",
            "to": "918085540441",
            "type": "text",
            "text": {
              "body": "Hii Priyanka"
            }
        },
        {
        headers: {
            Authorization:
                "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJUdXJuIiwiZXhwIjoxNzIzMjk0MDQ4LCJpYXQiOjE2NjIxMjI4OTAsImlzcyI6IlR1cm4iLCJqdGkiOiJkZmQzZjViNy04ZWMxLTQxMGMtYjg2OC1hMTJkY2EwMWQ3NTUiLCJuYmYiOjE2NjIxMjI4ODksInN1YiI6Im51bWJlcjozNDQ1IiwidHlwIjoiYWNjZXNzIn0.8x2Ba-VjPmcnVtfByytROQKN0nWQIvjZBQqG--AtF2hPtIEkUhLt82NqXMMdd4fcmtAIcWvaZImvW8VBbtifAQ",
            "content-type": "application/json",
        },
    })
    const id = response.data.messages[0].id
    return id
    
 } catch (error) {
    return error
 }
}
sendTextMessage()

data = {  
    "recipient_type": "individual",
     "to": "918085540441",
     "type": "image",
     "image": {
         "id": "9a71578c-bd6c-4b62-83f7-d5665c8754ea",
         "caption": "image is good"
         }
}


async function sendImage(data){
    try {
        const response =await axios.post('https://whatsapp.turn.io/v1/messages',data,
        {
            headers: {
                Authorization:
                    "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJUdXJuIiwiZXhwIjoxNzIzMjk0MDQ4LCJpYXQiOjE2NjIxMjI4OTAsImlzcyI6IlR1cm4iLCJqdGkiOiJkZmQzZjViNy04ZWMxLTQxMGMtYjg2OC1hMTJkY2EwMWQ3NTUiLCJuYmYiOjE2NjIxMjI4ODksInN1YiI6Im51bWJlcjozNDQ1IiwidHlwIjoiYWNjZXNzIn0.8x2Ba-VjPmcnVtfByytROQKN0nWQIvjZBQqG--AtF2hPtIEkUhLt82NqXMMdd4fcmtAIcWvaZImvW8VBbtifAQ",
                "content-type": "application/json",
            }
        }
        )
    } catch (error) {
        console.log(error);
    }
}

sendImage(data)

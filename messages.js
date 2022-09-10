const axios = require('axios')

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
    // return id
    // console.log(response.data);
    
 } catch (error) {
    // console.log(error);
    return error
 }
}
// sendTextMessage()
//  for media msg 

//async function sendMedia(){
//     try {
//         const response = await axios.post("https://whatsapp.turn.io/v1/media",

//         {
//             headers: {
//                 Authorization:
//                     "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJUdXJuIiwiZXhwIjoxNzIzMjk0MDQ4LCJpYXQiOjE2NjIxMjI4OTAsImlzcyI6IlR1cm4iLCJqdGkiOiJkZmQzZjViNy04ZWMxLTQxMGMtYjg2OC1hMTJkY2EwMWQ3NTUiLCJuYmYiOjE2NjIxMjI4ODksInN1YiI6Im51bWJlcjozNDQ1IiwidHlwIjoiYWNjZXNzIn0.8x2Ba-VjPmcnVtfByytROQKN0nWQIvjZBQqG--AtF2hPtIEkUhLt82NqXMMdd4fcmtAIcWvaZImvW8VBbtifAQ",
//                 "content-type": "image/webp",
//             }
//         } 
//         )
//     } catch (error) {
        
//     }
// }

data = {  
    "recipient_type": "individual",
     "to": "918085540441",
     "type": "image",
     "image": {
         "id": "9a71578c-bd6c-4b62-83f7-d5665c8754ea",
         "caption": "image is good"
         }
}

function sendMedia(data){
  if(data.type=="image"){
    return data
  }else if(data.type=="audio"){
    return data
  }else if(data.type== "sticker"){
    return data
  }
}

async function sendImage(){
    try {
        const response =await axios.post('https://whatsapp.turn.io/v1/messages',sendMedia(data),
        {
            headers: {
                Authorization:
                    "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJUdXJuIiwiZXhwIjoxNzIzMjk0MDQ4LCJpYXQiOjE2NjIxMjI4OTAsImlzcyI6IlR1cm4iLCJqdGkiOiJkZmQzZjViNy04ZWMxLTQxMGMtYjg2OC1hMTJkY2EwMWQ3NTUiLCJuYmYiOjE2NjIxMjI4ODksInN1YiI6Im51bWJlcjozNDQ1IiwidHlwIjoiYWNjZXNzIn0.8x2Ba-VjPmcnVtfByytROQKN0nWQIvjZBQqG--AtF2hPtIEkUhLt82NqXMMdd4fcmtAIcWvaZImvW8VBbtifAQ",
                "content-type": "application/json",
            }
        }
        )
        // console.log(response);
    } catch (error) {
        console.log(error);
    }
}


module.exports = {sendTextMessage,sendImage}
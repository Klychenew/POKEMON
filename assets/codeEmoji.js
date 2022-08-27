let consumoEmoji_api = fetch("https://emojihub.herokuapp.com/api/all")
consumoEmoji_api.then(respuesta => respuesta.json())
.then (emojis => {
console.log(emojis)

})


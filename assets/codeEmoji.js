let emoji_url = " https://emojihub.herokuapp.com/api/all"
let consumoEmoji_api = fetch(emoji_url)

consumo_api_emoji.then( respuestaEmoji => respuestaEmoji.json())
   .then((data_emoji) => {
    console.log(data_emoji)

   }
      )










// consumoEmoji_api.then(respondaEmoji => respondaEmoji.json())
//     .then(data_emoji => {
//         for (const emojis of data_emoji) {
//             let ingreso_data_emoji = fetch(emojis.url)
//                 .then(emoji_info => {
//                     document.querySelector("#cartas_emoji").innerHTML += `
//                         <div class="col">
//                             <div class="card border border-danger">
//                                 <img src="..." class="card-img-top" alt="...">
//                                 <div class="card-body">
//                                     <label class="fs-6 text-muted">Nombre EMOJI:</label>
//                                     <h5 class="text-success fs-2  text-uppercase"> ${emoji_info.name} </h5>
//                                     <label class="fs-6 text-muted">Peso:</label>
//                                     <h2 class="text-primary fs-6 "> ----  </h2>
//                                     <label class="fs-6 text-muted">Altura:</label>
                                    
//                                 </div>
//                             </div>
//                         </div>
//                     `
//                 })
//         }

//     })






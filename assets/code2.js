let pokemon_url = "https://pokeapi.co/api/v2/pokemon/"
let consumo_api = fetch(pokemon_url)

consumo_api.then(responda => responda.json())
    .then(data_pokemon => {
        for (const pokemones of data_pokemon.results) {
            let ingreso_data_pokemon = fetch(pokemones.url)
            ingreso_data_pokemon.then(responda1 => responda1.json())
                .then(pokemon_info => {
                    let velocidad_pokemon = pokemon_info.stats[5].base_stat
                    let ataque_pokemon = pokemon_info.stats[1].base_stat
                    document.querySelector("#cartas_pokemones").innerHTML += `
                        <div class="col">
                            <div class="card border border-danger">
                                <img src="${pokemon_info.sprites.front_default}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <label class="fs-6 text-muted">Nombre Personaje:</label>
                                    <h5 class="text-success fs-2  text-uppercase"> ${pokemon_info.name} </h5>
                                    <label class="fs-6 text-muted">Peso:</label>
                                    <h2 class="text-primary fs-6 "> ${pokemon_info.weight} hectogramos </h2>
                                    <label class="fs-6 text-muted">Altura:</label>
                                    <h2 class="text-danger fs-6 "> ${pokemon_info.height} decimetros</h2>
                                    <label class="fs-6 text-muted">Forma:</label>
                                    <h2 class="fs-6 text-black" > ${pokemon_info.forms[0].url} No pude </h2> 
                                    <label class="fs-6 text-muted">Tipo de Pokemon :</label>
                                    <h2 class="text-primary fs-6 "> No pude jjajaja </h2>
                                    
                                    <div class="container mt-3 p-3" style="background-color: rgb(227, 227, 227);">
                                    <label class="fs-6 text-dark">Velocidad:</label>
                                    <div class="progress">
                                    <div class="progress-bar bg-info" role="progressbar" style="width: ${velocidad_pokemon}%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">${velocidad_pokemon} </div>
                                    </div>
                                    <label class="fs-6 text-dark">Ataque:</label>
                                    <div class="progress">
                                    <div class="progress-bar bg-danger" role="progressbar" style="width: ${ataque_pokemon}%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">${ataque_pokemon} </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `
                })
        }

    })



// NO PUDE INGRESAR A MAS DATOS EN LA LINEA DE CODIGO DEL FORM, DEJE SOLO LA URL y en tipo de pokemon 
// deje esto en ${pokemon_info.types[0].slot.type.name}





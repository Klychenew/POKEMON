let pokemon_url = "https://pokeapi.co/api/v2/pokemon/"
let consumo_api = fetch(pokemon_url)

consumo_api.then(responda => responda.json())
    .then(data_pokemon => {
        for (const pokemones of data_pokemon.results) {
            let ingreso_data_pokemon = fetch(pokemones.url)
            ingreso_data_pokemon.then(responda1 => responda1.json())
                .then(pokemon_info => {
                    
                    for (const habilidades of pokemones.url) {
                      

                    }

            

                    document.querySelector("#cartas_pokemones").innerHTML += `
                        <div class="col">
                            <div class="card">
                                <img src="${pokemon_info.sprites.front_default}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <label class="fs-6 text-muted">Nombre Personaje:</label>
                                    <h5 class="text-success fs-2  text-uppercase"> ${pokemon_info.name} </h5>
                                    <label class="fs-6 text-muted">Peso:</label>
                                    <h2 class="text-primary fs-6 "> ${pokemon_info.weight} hectogramos </h2>
                                    <label class="fs-6 text-muted">Altura:</label>
                                    <h2 class="text-danger fs-6 "> ${pokemon_info.height} decimetros</h2>
                                    
                                </div>
                            </div>
                        </div>
                    `
                })
        }

    })





let pokemon_url = "https://pokeapi.co/api/v2/pokemon/"
let consumo_api = fetch(pokemon_url)

consumo_api.then(responda => responda.json())
    .then(data_pokemon => {
        for (const pokemones of data_pokemon.results) {
            let ingreso_data_pokemon = fetch(pokemones.url)
            ingreso_data_pokemon.then(responda1 => responda1.json())
                .then(pokemon_info => {





                    
                    pokemon_info.abilities.forEach(habilidad_esp => {
                        let habilidadPokemon = habilidad_esp.ability.name
                        console.log(habilidad_esp.ability.name)


                    });
                    document.querySelector("#cartas_pokemones").innerHTML += `
                        <div class="col">
                            <div class="card">
                                <img src="${pokemon_info.sprites.front_default}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <label class="fs-6 text-muted">Nombre Personaje:</label>
                                    <h5 class="text-success fs-2 "> ${pokemon_info.name} </h5>
                                    <label class="fs-6 text-muted">Habilidades:</label>
                                    <h2 class="text-primary fs-6 "> descripcion </h2>
                                    
                                    
                                </div>
                            </div>
                        </div>
                    `
                })

        }

    })





function consumo_api_total (url_a_consumir) {
    // la funcion que recibe la funcion cousumo_api_total. es ahora la URL de la api
    // let pokemon_url = "https://pokeapi.co/api/v2/pokemon/"
    // let consumo_api = fetch(pokemon_url)
    document.querySelector("#cartas_pokemones").innerHTML = ''
    // LA LINEA 5 se hace para borrar cada vez que cargue el contenido borre todo lo que esta 
    //cargando y si se carga otra pagina, solo traiga los nuevos pokemones 
    let consumo_api = fetch(url_a_consumir) 
    // Se deja en el fetch se deja la url dinamica y se llama en la funcion al final del ejercicio

    consumo_api.then(responda => responda.json())
        .then(data_pokemon => {
            console.log (data_pokemon)
            for (const pokemones of data_pokemon.results) {
                let ingreso_data_pokemon = fetch(pokemones.url)
                ingreso_data_pokemon.then(responda1 => responda1.json())
                    .then(pokemon_info => {
                        let velocidad_pokemon = pokemon_info.stats[5].base_stat
                        let ataque_pokemon = pokemon_info.stats[1].base_stat
                            
                            // for (const habilidad_pokemon of pokemon_info.abilities) {
                            //     let habilidades_data_pokemon = fetch(habilidad_pokemon.url)
                            //     habilidades_data_pokemon.then(responder2 => responder2.json())
                                // .then(habilidades_data_pokemon => { 
                                //     let Pokemon_habilidad = habilidades_data_pokemon.abilities[0].url.effect_entries.effect
                                // })
                            // }

                        document.querySelector("#cartas_pokemones").innerHTML += `
                            <div class="col">
                                <div class="card border border-danger">
                                    <img src="${pokemon_info.sprites.front_default}" class="card-img-top" alt="...">
                                    <div class="card-body">
                                        <label class="fs-6 text-muted">Nombre Personaje:</label>
                                        <h5 class="text-success fs-2  text-uppercase" style="font-family: Pixelada2";> ${pokemon_info.name} </h5>
                                        <label class="fs-6 text-muted">Peso:</label>
                                        <h2 class="text-primary fs-6 "> ${pokemon_info.weight} hectogramos </h2>
                                        <label class="fs-6 text-muted">Altura:</label>
                                        <h2 class="text-danger fs-6 "> ${pokemon_info.height} decimetros</h2>
                                        <label class="fs-6 text-muted">otraaaa:</label>
                                        <h2 class="fs-6 text-black" >  No pude </h2> 
                                        <label class="fs-6 text-muted">Tipo de Pokemon :</label>
                                        <h2 class="text-info fs-3 "> ${pokemon_info.types[0].type.name} </h2>
                                        
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
            crear_botones(data_pokemon.next, data_pokemon.previous)  
        })
    // NO PUDE INGRESAR A MAS DATOS EN LA LINEA DE CODIGO DEL FORM, DEJE SOLO LA URL y en tipo de pokemon 
    // deje esto en ${pokemon_info.types[0].slot.type.name}
}

function crear_botones (url_pagina_siguiente, url_pagina_anterior){
    let div_paginacion = document.querySelector ("#paginacion")
    div_paginacion.innerHTML = ''
    //boton ANTERIOR
    let boton_anterior = document.createElement("button")
    if (url_pagina_anterior != null){
        boton_anterior.setAttribute("onclick",`consumo_api_total('${url_pagina_anterior}')`)
        boton_anterior.className = "btn btn-danger"
        boton_anterior.innerText = "VER Pokemones Anteriores"
        div_paginacion.appendChild(boton_anterior)
    }
    //boton SIGUIENTE 
    let boton_siguiente = document.createElement ( "button")
    if(url_pagina_siguiente != null){
        boton_siguiente.className = "btn btn-success"
        // boton_siguiente.classList.add ("btn","btn-warning") 
        // el classList no borra las clases que ya tiene , agrega clases, el classlist cambias las que ya tiene 
        boton_siguiente.innerText = "VER Más Pokemones"
        boton_siguiente.setAttribute("onclick",`consumo_api_total('${url_pagina_siguiente}')`)
        // antes que se padre tenga su hijo, Como el boton es el que va a recubir los parametros dela funcion consumo_api_total, se utiliza el setAttribute para crear un atributo
        // al boton, es un metodo que recibe  2 parametros 1, nombre de atributo , valor de ese elemento, en este caso la url que alimentara la
        div_paginacion.appendChild(boton_siguiente)
        // la funcion appendChild hace que cree un hijo, app recibe com parametro variable boton siguiente
    }
}
     consumo_api_total ("https://pokeapi.co/api/v2/pokemon")

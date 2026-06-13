let pagina = 1;

cargarPersonajes();

function cargarPersonajes(){

    fetch(`https://dragonball-api.com/api/characters?page=${pagina}&limit=10`)
    .then(respuesta => respuesta.json())
    .then(datos => {

        const contenedor = document.getElementById("contenedor");

        contenedor.innerHTML = "";

        datos.items.forEach(personaje => {

            contenedor.innerHTML += `
                <div class="card">

                    <img src="${personaje.image}">

                    <h3>${personaje.name}</h3>

                    <p><b>KI:</b> ${personaje.ki}</p>

                    <p>${personaje.description}</p>

                </div>
            `;
        });

        document.getElementById("paginaActual").textContent = pagina;
    });
}

function siguiente(){

    if(pagina < 6){
        pagina++;
        cargarPersonajes();
    }
}

function anterior(){

    if(pagina > 1){
        pagina--;
        cargarPersonajes();
    }
}
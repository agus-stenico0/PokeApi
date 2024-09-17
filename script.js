fetch("https://pokeapi.co/api/v2/pokemon/")
  .then(res => res.json())
  .then((data) => {
    crearCard(data)
  });

let container = document.getElementById("container")

function crearCard(data) {
   container.innerHTML = '';
   
   for (let i = 0; i < 20; i++) {
    
    let card = `
      <div class="card">
        <p class="text-target">${data.results[i].name}</p>
        <a href="${data.results[i].url}">${data.results[i].url}</a>
        
      </div>
    `;

    // Agregar la tarjeta al contenedor
    container.innerHTML += card;
  }

}

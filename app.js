let amigos=[];
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();
    let regex = /^[a-zA-ZáéíóúÁÉÍÓÚüÜ\s]+$/;
  if (regex.test(nombre)) { 
    amigos.push(nombre);
} else {
    alert("El nombre no es válido. Solo se permiten letras."); 
}

    if (nombre === '') { 
        alert("Por Favor, ingresa un nombre válido.");
        return;
  }

actualizarListaAmigos(); 
limpiarCaja();

}

function limpiarCaja(){
    document.querySelector("#amigo").value=""; 
   

}

function actualizarListaAmigos() { 
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";
  amigos.forEach((nombre) => {
    let li = document.createElement("li");
    li.textContent = nombre;
    lista.appendChild(li);
  });
}


function sortearAmigo() { 
    if (amigos.length === 0) {
        alert("No has agregado ningun amigo"); 
    return;
 }
  let indice = Math.floor(Math.random() * amigos.length);
  let elegido = amigos[indice];

  let listaResultado = document.getElementById("resultado");
    listaResultado.innerHTML = '';
  const li = document.createElement("li");
  li.textContent = "El amigo secreto sorteado es: " + elegido;
  listaResultado.appendChild(li);
} 

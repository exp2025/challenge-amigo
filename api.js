let amigos = []; //arreglo lista

function agregarAmigo() { // Función para agregar un amigo a la lista
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();  // Eliminar espacios antes y después del nombre

    
    if (nombre === '' || !isNaN(nombre)) { // Verificar si el nombre está vacío o contiene números
        alert("Por favor, ingresa un nombre válido (no números o vacío).");
    } else {
        amigos.push(nombre);  // Agregar  nombre al array
        input.value = '';  // Limpiar el campo de texto
        mostrarLista(); 
    }
}

// Función para mostrar la lista de amigos 
function mostrarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';  

    // Agregar los amigos a l lista
    amigos.forEach((amigo,index) => {
        const li = document.createElement('li');
        li.textContent = amigo;

        li.addEventListener('click',() => eliminarAmigo(index));
        lista.appendChild(li);
    });
}

function eliminarAmigo(index) {
    amigos.splice(index, 1);
    mostrarLista();
}

// Función para el sorteo de amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay nombres en la lista para hacer el sorteo.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    const resultado = document.getElementById('resultado');
    resultado.innerHTML =`<li>¡Tu amigo secreto es: ${amigoSorteado}!</li>`;

    // Eliminar el amigo sorteado de la lista
    amigos.splice(indiceAleatorio, 1);

    // Actualizar la lista 
    mostrarLista();
}
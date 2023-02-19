const boton = document.getElementById('btn__api');
const botonCargar = document.getElementById('btn__cargar');
const imagen = document.getElementById('imagen');
const nombre = document.getElementById('texto__nombre');
const textPkmn = document.getElementById('text__pkmn');


let pokemon = ''


const cargarPkmn = () => {
    console.log("Valor de textPkmn: " + textPkmn.value)
    if (textPkmn.value) {
        pokemon = textPkmn.value;
        alert('Pokemon elegido: ' + pokemon.toLowerCase());
    }
    else {
        pokemon = 'Golem';
        alert('No se eligió pokemon, mostrando: ' + pokemon);
    }

};

const llamarApi = () => {
    fetch('https://pokeapi.co/api/v2/pokemon/' + pokemon.toLowerCase())
        .then(res => res.json())
        .then(data => {
            nombre.innerText = "Es " + data.forms[0].name.toUpperCase() + "!";
            imagen.src = data.sprites.other.home.front_default;
        }
        );
};

botonCargar.addEventListener('click', cargarPkmn);

boton.addEventListener('click', llamarApi);
// Javascript

const dadoCaras = 6;

let enemigoNombre = 'Lucifer';
let enemigoVida = 100;

const tirarDado = (caras) => {
    // Genero el valor pseudo aleatorio de un dado de n caras
    return Math.ceil(Math.random() * caras)
}

const verVida = () => {
    return enemigoVida;
}

const atacar = () => {
    let danio = tirarDado(dadoCaras);
    if (verVida())
}


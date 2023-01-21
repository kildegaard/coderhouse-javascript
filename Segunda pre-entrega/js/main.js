const dadoCaras = 6;
let enemigoNombre = 'Lucifer';
let enemigoVida = 100;
let danio = 0;
let opcion;


const tirarDado = (caras) => {
    // Genero el valor pseudo aleatorio de un dado de n caras
    return Math.ceil(Math.random() * caras)
}

const verVida = () => {
    return enemigoVida
}

const atacar = () => {
    let danio = 0;
    danio = tirarDado(dadoCaras) * 10;
    if ((verVida() - danio) < 0) {
        enemigoVida = 0;
        danio = 0
    }
    else {
        enemigoVida -= danio;
    }
    return danio
}

const menu = () => {

    alert('Bienvenidos a la primera pre-entrega del curso de Javascript de coderhouse!');
    alert('Prototipo de juego de rol\n\nNombre del enemigo: ' + enemigoNombre + '\nVida del enemigo: ' + enemigoVida);

    do {
        opcion = parseInt(prompt("Opciones disponibles:\n1 - Ver vida restante del enemigo\n2 - Atacar al enemigo\n3 - Salir del juego\n\nIngrese una opción: "));
        switch (opcion) {
            case 1:
                alert("Opción 1 elegida\n" + "Vida del enemigo: " + verVida());
                break;
            case 2:
                danio = atacar();
                alert("Opción 2 elegida\nAtacaste al enemigo!\n\nDaño realizado: " + danio + "\nVida restante: " + verVida());
                break;
            case 3:
                alert("Opción 3 elegida\nAdiós!");
                break;
            default:
                alert("Opción incorrecta, vuelva a ingresar");
        }
    } while (opcion != 3)
}

const main = () => {
    menu()
}


main()


// const bienvenida = () => {
//     const text1 = 'Bienvenidos a la segunda pre-entrega del curso de Javascript de coderhouse!\nA continuación se dará explicación del prototipo de videojuego realizado'
//     const text2 = 'El videojuego (por ahora en fase ultra alpha) tiene un enemigo y un personaje(uno mismo)\nPor turnos, uno puede ir atacando al enemigo y éste atacarlo a uno. Existe la posibilidad de defenderse, lo cual reduce el daño recibido.\nHay muchas funcionalidades que aún no están habilitadas, esperando a la próxima entrega! Keep calm and roll your dices!'

//     const lista_textos = [text1, text2]

//     lista_textos.forEach(texto => alert(texto))
// }

const cargaDePersonajes = () => {

    displayTexto.innerHTML = 'Se están cargando los personajes..'
    alert('Se están cargando los personajes..')
    let personaje = new Personaje(nombre = 'Cain', vida = 20, mana = 100)
    let enemigo = new Enemigo(nombre = 'Lucifer', vida = 20)
    let devuelvo = [personaje, enemigo]
    alert('Personajes cargados!!')
    return devuelvo
}

const turnoEnemigo = (enemigo, pers) => {
    const tiradaDeAzar = tirarDado(2)
    if (tiradaDeAzar == 1) {
        alert('El enemigo te está atacando!')
        enemigo.atacarFisico(pers)
        if (pers.vida > 0) {
            alert(`Tu vida actual es ${pers.vida}`)
        }
    }
    else {
        // El enemigo se pone en posición defensiva para el siguiente turno
        enemigo.defender()
        // alert('El enemigo se pone en posición defensiva')
    }
}

const mostrarSituacion = (personaje, enemigo) => {
    displayVida.innerHTML = `Vida del personaje: <strong>${personaje.vida}</strong> &nbsp&nbsp&nbsp Vida del enemigo: <strong>${enemigo.vida}</strong>`
    console.log('eee')
}

const menuDeJugador = () => {
    let opcion

    do {
        opcion = parseInt(prompt("Opciones disponibles:\n1 - Atacar al enemigo\n2 - Defenderse el próximo turno\n3 - Salir del juego\n\nIngrese una opción: "))
        switch (opcion) {
            case 1:
                alert("Opción 1 elegida\nAtacando al enemigo!")
                break
            case 2:
                alert('Opcion 2 elegida\nEl siguiente turno estarás defendiéndote')
                break
            case 3:
                alert("Opción 3 elegida\nAdiós!")
                break
            default:
                alert("Opción incorrecta")
        }
    }
    while (opcion != 1 && opcion != 2 && opcion != 3)
    return opcion
}

const main = () => {

    // bienvenida()
    let opcion
    let contrincantes = cargaDePersonajes()
    let personaje = contrincantes[0]
    let enemigo = contrincantes[1]

    alert(`Vos sos ${personaje.nombre} y tenés ${personaje.vida} puntos de vida\nEl enemigo es ${enemigo.nombre} y tiene ${enemigo.vida} puntos de vida\n\nQué comience la batalla!`)

    while (personaje.vida > 0 || enemigo.vida > 0) {

        alert('Turno del jugador')
        opcion = menuDeJugador()
        if (opcion == 1) {
            // Ataco al enemigo
            personaje.atacarFisico(enemigo)
            if (enemigo.vida > 0) {
                alert(`La vida del enemigo ahora es ${enemigo.vida}`)
            }
            else {
                alert('El enemigo sucumbió!')
                break
            }
        }
        else if (opcion == 2) {
            // Me defiendo
            personaje.defender()
        }
        else if (opcion == 3) {
            break
        }

        alert('Turno del enemigo')
        turnoEnemigo(enemigo, personaje)
        if (personaje.vida <= 0) {
            alert('HAS MUERTO!')
            break
        }

        mostrarSituacion(personaje, enemigo)
    }

    // Termina el juego
    alert('Fin del juego!')

}

// Inicio de ejecución del programa

let botonEjecutar = document.getElementById('btn-ejecutar')
let botonAtacar = document.getElementById('btn-atacar')
let botonDefender = document.getElementById('btn-defender')
let displayTexto = document.getElementById('caja-display-texto')
let displayVida = document.getElementById('caja-display-vidas')

botonEjecutar.addEventListener('click', main)

botonAtacar.addEventListener('click', () => {
    displayTexto.innerText = 'Apreté ATACAR!'
})

botonDefender.addEventListener('click', () => {
    displayTexto.innerText = 'Apreté DEFENDER!'
})

Swal.fire({
    html: 'Bienvenidos a la tercera pre-entrega del curso de Javascript de coderhouse!<br>A continuación se dará explicación del prototipo de videojuego realizado<br><br>El videojuego (por ahora en fase ultra alpha) tiene un enemigo y un personaje(uno mismo)\nPor turnos, uno puede ir atacando al enemigo y éste atacarlo a uno. Existe la posibilidad de defenderse, lo cual reduce el daño recibido.<br>Hay muchas funcionalidades que aún no están habilitadas, esperando a la próxima entrega!<br><br>Keep calm and roll your dices!',
    icon: 'info',
    confirmButtonText: "Vamo a juga"
})

// Uso del Storage
const dev = {
    'nombre': 'Gustavo',
    'apellido': 'Kildegaard',
    'entrega': 'tercera pre entrega',
}

devJson = JSON.stringify(dev)
sessionStorage.setItem('gameDeveloper', devJson)

let mostrarDev = () => {
    let desarrollador = JSON.parse(sessionStorage.getItem('gameDeveloper'))
    cartelito(`Juego desarrollado por: ${desarrollador.nombre} ${desarrollador.apellido}`)
    cartelito(`Tipo de trabajo: ${desarrollador.entrega}`)
}

const cartelito = (mensaje) => {
    Toastify({
        text: mensaje,
        duration: 1000,
        destination: "https://github.com/kildegaard",
        newWindow: true,
        close: true,
        gravity: "bottom",
        position: "right",
        stopOnFocus: true,
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
        }
    }).showToast()
}

const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms))
}

const cargaDePersonajes = () => {
    let personaje = new Personaje(nombre = 'Cain', vida = 20, mana = 100)
    let enemigo = new Enemigo(nombre = 'Lucifer', vida = 20)
    let devuelvo = [personaje, enemigo]

    return devuelvo
}

const turnoEnemigo = (enemigo, pers) => {
    const tiradaDeAzar = tirarDado(2)
    if (tiradaDeAzar == 1) {
        displayTexto.innerHTML = 'El enemigo te está atacando!'
        console.log('El enemigo te está atacando!')
        enemigo.atacarFisico(pers)
        if (pers.vida > 0) {
            displayTexto.innerHTML = `Tu vida actual es ${pers.vida}`
            console.log(`Tu vida actual es ${pers.vida}`)
        }
    }
    else {
        enemigo.defender()
    }
}

const mostrarSituacion = (personaje, enemigo) => {
    displayVida.innerHTML = `Vida del personaje: <strong>${personaje.vida}</strong> &nbsp&nbsp&nbsp Vida del enemigo: <strong>${enemigo.vida}</strong>`
    console.log(`Vida del personaje: <strong>${personaje.vida}</strong> &nbsp&nbsp&nbsp Vida del enemigo: <strong>${enemigo.vida}</strong>`)
}

const main = () => {


    // Habilitar los botones de juego
    botonesJuego.style.display = 'flex'

    let contrincantes = cargaDePersonajes()
    let personaje = contrincantes[0]
    let enemigo = contrincantes[1]

    displayTexto.innerHTML = `Jugador: ${personaje.nombre} - Vida: ${personaje.vida}<br>Enemigo: ${enemigo.nombre} - Vida: ${enemigo.vida}<br>Qué comience la batalla!`

    botonAtacar.addEventListener('click', () => {
        // Ataco al enemigo
        personaje.atacarFisico(enemigo)
        mostrarSituacion(personaje, enemigo)
        if (enemigo.vida > 0) {
            displayTexto.innerHTML = `La vida del enemigo ahora es ${enemigo.vida}`
            console.log(`La vida del enemigo ahora es ${enemigo.vida}`)
        }
        else {
            displayTexto.innerHTML = 'El enemigo sucumbió!'
            console.log('El enemigo sucumbió!')
        }
        // turno del enemigo
        turnoEnemigo(enemigo, personaje)
        mostrarSituacion(personaje, enemigo)


        if (enemigo.vida == 0 || personaje.vida == 0) {
            //Termina el juego
            Swal.fire('Fin del juego!')
        }
    })

    botonDefender.addEventListener('click', () => {
        personaje.defender()
        mostrarSituacion(personaje, enemigo)

        // turno del enemigo
        turnoEnemigo(enemigo, personaje)
        mostrarSituacion(personaje, enemigo)

        if (enemigo.vida == 0 || personaje.vida == 0) {
            //Termina el juego
            Swal.fire('Fin del juego!')
        }
    })

}

// Inicio de ejecución del programa

let botonEjecutar = document.getElementById('btn-ejecutar')
let botonesJuego = document.getElementById('btn-juego')
let botonAtacar = document.getElementById('btn-atacar')
let botonDefender = document.getElementById('btn-defender')
let displayTexto = document.getElementById('caja-display-texto')
let displayVida = document.getElementById('caja-display-vidas')
let devBtn = document.getElementById('dev-btn')

Swal.fire({
    html: 'Bienvenidos a la tercera pre-entrega del curso de Javascript de coderhouse!<br>A continuación se dará explicación del prototipo de videojuego realizado<br><br>El videojuego (por ahora en fase ultra alpha) tiene un enemigo y un personaje(uno mismo)\nPor turnos, uno puede ir atacando al enemigo y éste atacarlo a uno. Existe la posibilidad de defenderse, lo cual reduce el daño recibido.<br>Hay muchas funcionalidades que aún no están habilitadas, esperando a la próxima entrega!<br><br>Keep calm and roll your dices!',
    icon: 'info',
    confirmButtonText: "Vamo a juga"
})

botonEjecutar.addEventListener('click', main)
devBtn.addEventListener('click', mostrarDev)
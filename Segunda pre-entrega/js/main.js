const bienvenida = () => {
    const text1 = 'Bienvenidos a la segunda pre-entrega del curso de Javascript de coderhouse!\nA continuación se dará explicación del prototipo de videojuego realizado'
    const text2 = 'El videojuego (por ahora en fase ultra alpha) tiene un enemigo y un personaje(uno mismo)\nPor turnos, uno puede ir atacando al enemigo y éste atacarlo a uno. Existe la posibilidad de defenderse, lo cual reduce el daño recibido.\nHay muchas funcionalidades que aún no están habilitadas, esperando a la próxima entrega! Keep calm and roll your dices!'

    alert(text1)
    alert(text2)
}

const menu = () => {
    let opcion
    do {
        opcion = parseInt(prompt("Opciones disponibles:\n1 - Ver vida restante del enemigo\n2 - Atacar al enemigo\n3 - Salir del juego\n\nIngrese una opción: "))

        switch (opcion) {
            case 1:
                alert("Opción 1 elegida\n" + "Vida del enemigo: " + verVida())
                break
            case 2:
                danio = atacar()
                alert("Opción 2 elegida\nAtacaste al enemigo!\n\nDaño realizado: " + danio + "\nVida restante: " + verVida())
                break
            case 3:
                alert("Opción 3 elegida\nAdiós!")
                break
            default:
                alert("Opción incorrecta, vuelva a ingresar")
        }
    } while (opcion != 3)
}

const main = () => {
    bienvenida()
    // menu()
}


main()
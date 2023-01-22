// Constantes y Variables globales
const dadoCaras = 12

// Métodos comunes
const tirarDado = (caras) => {
    // Genero el valor pseudo aleatorio de un dado de n caras
    return Math.ceil(Math.random() * caras)
}


class SerVivo {
    constructor(nombre, vida) {
        this.nombre = nombre
        this.vida = vida
        this.estaDefendiendo = false // Flag para saber si se está defendiendo o no
    }

    atacarFisico(enemigo) {
        let danio = tirarDado(dadoCaras)
        let danioRealizado

        // Evalúo la situación de DEFENDA o NO DEFENSA
        if (enemigo.estaDefendiendo) {
            danioRealizado = danio * 0.5 // Defenderse hace que haga la mitad del daño
            enemigo.estaDefendiendo = false
        }
        else {
            danioRealizado = danio
        }

        // Evalúo si el daño realizado supera la vida que queda
        if ((enemigo.vida - danioRealizado) < 0) {
            enemigo.vida = 0
            // danio = 0
        }
        else {
            enemigo.vida -= danioRealizado
        }
    }

    defender() {
        if (!this.estaDefendiendo) {
            console.log('Defendiendo!')
            this.estaDefendiendo = true
        }
        else {
            console.log('Bajando la guardia..')
            this.estaDefendiendo = false
        }
    }

}

class Personaje extends SerVivo {
    // Lista de objetos disponibles para el personaje
    obj_items = {
        'armas': [
            'Espada',
            'Daga'
        ],
        'pociones': [
            'Poción de vida',
            'Gran poción de vida',
            'Poción de mana'
        ],
        'municiones': [
            'flecha'
        ]
    }

    constructor(nombre, vida, mana) {
        super(nombre, vida)
        this.mana = mana
        this.armas = this.obj_items['armas']
        this.pociones = this.obj_items['pociones']
    }

    // atacarArco(enemigo) { }

    // atacarMagia() { }

    // usarPocion() { }

}

class Enemigo extends SerVivo {
    constructor(nombre, vida) {
        super(nombre, vida)
    }

}


// ################### PRUEBAS ######################

// Declaro un personaje y un enemigo
/*
let personaje = new Personaje(nombre = 'Gus', vida = 100, mana = 100)
let enem = new Enemigo(nombre = 'Monster', vida = 100)
*/
// Viendo si se pueden leer las variables
/*
console.log(personaje.vida)
console.log(personaje.nombre)
console.log(personaje.mana)
*/

// Viendo si puedo ver las armas del personaje
/*
for (const arma of personaje.armas) {
    console.log(arma)
}
*/

// Viendo si puedo ver las pociones del personaje
/*
for (const pocion of personaje.pociones) {
    console.log(pocion)
}
*/

// Personaje atacando al enemigo
/*
personaje.atacar(enem)
console.log(enem.vida)
*/

// Enemigo defendiendose
/*
enem.vida = 100
enem.defender()
personaje.atacar(enem)
console.log(enem.vida)
*/

// Enemigo atacando al PJ
/*
enem.atacar(personaje)
console.log(personaje.vida)
*/

// Personaje defendiendose
/*
personaje.vida = 100
personaje.defender()
enem.atacar(personaje)
console.log(personaje.vida)
*/
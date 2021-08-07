"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Juego = void 0;
const Jugador_1 = require("./Jugador");
const Pista_1 = require("./Pista");
const Podio_1 = require("./Podio");
const Menu_1 = require("../helpers/Menu");
class Juego {
    constructor(jugadores, distanciaPista) {
        this._jugadores = [];
        jugadores.map((jugador, index) => {
            this._jugadores.push(new Jugador_1.Jugador(this, jugador[0], jugador[1], jugador[2], index + 1));
        });
        this._pista = new Pista_1.Pista(this, distanciaPista);
        this._podio = new Podio_1.Podio();
    }
    get jugadores() {
        return this._jugadores;
    }
    get pista() {
        return this._pista;
    }
    set jugadores(jugador) {
        this._jugadores.push();
    }
    set pista(pista) {
        this._pista = pista;
    }
    iniciarJuego() {
        /**
         * Inicializa el juego haciendo un ciclo y llamando al metodo avanzar hasta que los carros avancen la distancia de la pista
         */
        let jugadores = [];
        let jugadoresOrdenados = [];
        let jugadoresFinalizados = [];
        let posicion = 1;
        do {
            this._jugadores.map(jugador => {
                jugador.conductor.carro.avanzar();
            });
            Menu_1.Menu.banner();
            Menu_1.Menu.title('Estado del juego');
            this._jugadores.map(jugador => {
                if (jugador.conductor.carro.distanciaRecorrida >= this._pista.distanciaPista && jugador.conductor.carro.posicion === 0) {
                    jugador.conductor.carro.posicion = posicion;
                    jugadoresFinalizados.push(jugador);
                    posicion++;
                }
            });
            jugadores = this._jugadores.filter(jugador => jugador.conductor.carro.posicion === 0);
            jugadoresOrdenados = jugadores.sort((a, b) => b.conductor.carro.distanciaRecorrida - a.conductor.carro.distanciaRecorrida);
            jugadoresFinalizados.map((jugador, index) => {
                console.log(`${index + 1}. ${jugador.nombre.yellow} ...... ${'Finalizado'.red}.`);
            });
            jugadoresOrdenados.map((jugador, index) => {
                console.log(`${index + posicion}. ${jugador.nombre.yellow} ...... ${jugador.conductor.carro.distanciaRecorrida} m.`);
            });
            this.sleep(1000);
        } while (!(posicion >= this._jugadores.length));
        jugadores = [...this._jugadores];
        jugadoresOrdenados = jugadores.sort((a, b) => b.conductor.carro.posicion - a.conductor.carro.posicion);
        this._podio.ganadores = jugadoresFinalizados.slice(0, 3);
        this._podio.anunciarGanadores();
    }
    sleep(milliseconds) {
        /** Pausa la ejecucion del programa por los milisegundos especificados */
        let start = new Date().getTime();
        for (var i = 0; i < 1e7; i++) {
            if ((new Date().getTime() - start) > milliseconds) {
                break;
            }
        }
    }
}
exports.Juego = Juego;
//# sourceMappingURL=Juego.js.map
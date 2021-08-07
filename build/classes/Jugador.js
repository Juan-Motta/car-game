"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jugador = void 0;
const Conductor_1 = require("./Conductor");
class Jugador {
    constructor(juego, nombre, modelo, nombreConductor, numero) {
        this._juego = juego;
        this._nombre = nombre;
        this._numero = numero;
        this._conductor = new Conductor_1.Conductor(this, modelo, nombreConductor);
    }
    get conductor() {
        return this._conductor;
    }
    get nombre() {
        return this._nombre;
    }
    get numero() {
        return this._numero;
    }
}
exports.Jugador = Jugador;
//# sourceMappingURL=Jugador.js.map
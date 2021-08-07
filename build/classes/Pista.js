"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pista = void 0;
const Carril_1 = require("./Carril");
class Pista {
    constructor(juego, distanciaPista) {
        this._carriles = [];
        this._distanciaPista = distanciaPista;
        this._juego = juego;
        this._juego.jugadores.map(jugador => {
            this._carriles.push(new Carril_1.Carril(this, jugador.conductor.carro));
        });
    }
    get juego() {
        return this._juego;
    }
    get carriles() {
        return this._carriles;
    }
    get distanciaPista() {
        return this._distanciaPista;
    }
}
exports.Pista = Pista;
//# sourceMappingURL=Pista.js.map
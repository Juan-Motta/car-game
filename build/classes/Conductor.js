"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conductor = void 0;
const Carro_1 = require("./Carro");
class Conductor {
    constructor(jugador, modelo, nombreConductor) {
        this._nombre = nombreConductor;
        this._jugador = jugador;
        this._carro = new Carro_1.Carro(this, modelo);
    }
    get carro() {
        return this._carro;
    }
    get nombre() {
        return this._nombre;
    }
    get jugador() {
        return this._jugador;
    }
}
exports.Conductor = Conductor;
//# sourceMappingURL=Conductor.js.map
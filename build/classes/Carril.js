"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carril = void 0;
class Carril {
    constructor(pista, carro) {
        this._numero = carro.conductor.jugador.numero;
        this._pista = pista;
        this._carro = carro;
        this._carro.carril = this;
    }
}
exports.Carril = Carril;
//# sourceMappingURL=Carril.js.map
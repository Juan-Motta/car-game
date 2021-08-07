"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carro = void 0;
class Carro {
    constructor(conductor, modelo) {
        this._modelo = modelo;
        this._conductor = conductor;
        this._distanciaRecorrida = 0;
        this._posicion = 0;
    }
    get modelo() {
        return this._modelo;
    }
    get carril() {
        return this._carril;
    }
    get conductor() {
        return this._conductor;
    }
    set carril(carril) {
        this._carril = carril;
    }
    get distanciaRecorrida() {
        return this._distanciaRecorrida;
    }
    get posicion() {
        return this._posicion;
    }
    set posicion(posicion) {
        this._posicion = posicion;
    }
    avanzar() {
        this._distanciaRecorrida += (Math.floor(Math.random() * (7 - 1)) + 1) * 100;
    }
}
exports.Carro = Carro;
//# sourceMappingURL=Carro.js.map
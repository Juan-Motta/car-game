import { Carro } from './Carro';
import { Pista } from './Pista';

export class Carril {
    /**
     * Clase encargada de la funcionalidad del carril
     */

    private _numero: number;
    private _carro: Carro;
    private _pista: Pista

    constructor(pista: Pista, carro: Carro) {
        this._numero = carro.conductor.jugador.numero;
        this._pista = pista;
        this._carro = carro;
        this._carro.carril = this;
    }

}
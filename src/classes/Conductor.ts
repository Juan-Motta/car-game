import { Carro } from './Carro';
import { Jugador } from './Jugador';

export class Conductor {
    /**
     * Clase encargada de la funcionalidad del conductor
     */

    private _nombre: string;
    private _carro: Carro;
    private _jugador: Jugador;

    constructor(jugador: Jugador, modelo: string, nombreConductor: string) {
        this._nombre = nombreConductor;
        this._jugador = jugador;
        this._carro = new Carro(this, modelo);
    }

    public get carro() {
        return this._carro;
    }

    public get nombre() {
        return this._nombre;
    }

    public get jugador() {
        return this._jugador;
    }
}
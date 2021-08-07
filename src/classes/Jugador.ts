import { Conductor } from './Conductor';
import { Juego } from './Juego';

export class Jugador {
    /**
     * Clase encargada de la funcionalidad del jugador
     */

    private _nombre: string;
    private _numero: number;
    private _juego: Juego;
    private _conductor: Conductor;

    constructor(juego: Juego, nombre: string, modelo: string, nombreConductor: string, numero: number) {
        this._juego = juego;
        this._nombre = nombre;
        this._numero = numero;
        this._conductor = new Conductor(this, modelo, nombreConductor);
    }

    public get conductor() {
        return this._conductor;
    }

    public get nombre() {
        return this._nombre;
    }

    public get numero() {
        return this._numero;
    }
}
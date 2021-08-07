import { Carril } from "./Carril";
import { Juego } from './Juego';

export class Pista {
    /**
     * Clase encargada de la funcionalidad de la pista
     */

    private _carriles: Carril[];
    private _juego: Juego;
    private _distanciaPista: number;

    constructor(juego: Juego, distanciaPista: number) {
        this._carriles = [];
        this._distanciaPista = distanciaPista;
        this._juego = juego;
        this._juego.jugadores.map(jugador => {
            this._carriles.push(new Carril(this, jugador.conductor.carro));
        });

    }

    public get juego() {
        return this._juego;
    }

    public get carriles() {
        return this._carriles;
    }

    public get distanciaPista() {
        return this._distanciaPista;
    }
}
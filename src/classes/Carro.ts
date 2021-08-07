import { Conductor } from './Conductor';
import { Carril } from './Carril';

export class Carro {
    /**
     * Clase encargada de la funcionalidad del carro
     */

    private _conductor: Conductor;
    private _modelo: string;
    private _distanciaRecorrida: number;
    private _carril?: Carril;
    private _posicion: number;

    constructor(conductor: Conductor, modelo: string) {
        this._modelo = modelo;
        this._conductor = conductor;
        this._distanciaRecorrida = 0;
        this._posicion = 0;
    }


    public get modelo() {
        return this._modelo;
    }

    public get carril() {
        return this._carril;
    }

    public get conductor() {
        return this._conductor;
    }

    public set carril(carril) {
        this._carril = carril;
    }

    public get distanciaRecorrida() {
        return this._distanciaRecorrida;
    }

    public get posicion() {
        return this._posicion;
    }

    public set posicion(posicion: number) {
        this._posicion = posicion;
    }

    public avanzar(): void {
        this._distanciaRecorrida += (Math.floor(Math.random() * (7 - 1)) + 1) * 100;
    }

}
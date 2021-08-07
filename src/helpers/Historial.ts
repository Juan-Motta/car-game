import { Leaderboard } from "../models/Leaderboard";
import 'colors';

export class Historial {
    /**
     * Clase encargada de mostrar el historial de victorias
     */

    private _leaderboard: any;
    private _sortedLeaaderboard: any[];

    constructor() {
        this._leaderboard = (new Leaderboard()).dbData;
        this._sortedLeaaderboard = [];
    }

    public mostrarLeaderboard() {
        /**
         * Muestra los datos almacenados en la db en pantalla de manera ordenada por victorias
         */

        Object.keys(this._leaderboard).map(key => {
            this._sortedLeaaderboard.push({ nombre: key, victorias: this._leaderboard[key] })
        })

        this._sortedLeaaderboard.sort((a, b) => b.victorias - a.victorias);

        this._sortedLeaaderboard.map((item, index) => {
            const i = `${index + 1}`.green;
            console.log(`${i}. ${item.nombre} - ${item.victorias}`);

        })
    }
}
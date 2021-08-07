"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Historial = void 0;
const Leaderboard_1 = require("../models/Leaderboard");
require("colors");
class Historial {
    constructor() {
        this._leaderboard = (new Leaderboard_1.Leaderboard()).dbData;
        this._sortedLeaaderboard = [];
    }
    mostrarLeaderboard() {
        /**
         * Muestra los datos almacenados en la db en pantalla de manera ordenada por victorias
         */
        Object.keys(this._leaderboard).map(key => {
            this._sortedLeaaderboard.push({ nombre: key, victorias: this._leaderboard[key] });
        });
        this._sortedLeaaderboard.sort((a, b) => b.victorias - a.victorias);
        this._sortedLeaaderboard.map((item, index) => {
            const i = `${index + 1}`.green;
            console.log(`${i}. ${item.nombre} - ${item.victorias}`);
        });
    }
}
exports.Historial = Historial;
//# sourceMappingURL=Historial.js.map
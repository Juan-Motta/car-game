"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Podio = void 0;
const Menu_1 = require("../helpers/Menu");
const Leaderboard_1 = require("../models/Leaderboard");
class Podio {
    constructor() {
        this._ganadores = [];
    }
    get ganadores() {
        return this._ganadores;
    }
    set ganadores(ganadores) {
        this._ganadores = ganadores;
    }
    anunciarGanadores() {
        /**
         * Imprime los ganadores en consola y los envia a la clase Leaderboard para ser tratados y guardados.
         */
        Menu_1.Menu.banner();
        Menu_1.Menu.title('Ganadores');
        this._ganadores.map((ganador, index) => {
            console.log(`${index + 1} ${ganador.nombre} - ${ganador.conductor.carro.modelo}`);
        });
        (new Leaderboard_1.Leaderboard()).guardarDb(this._ganadores[0].nombre);
    }
}
exports.Podio = Podio;
//# sourceMappingURL=Podio.js.map
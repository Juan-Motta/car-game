import { Menu } from '../helpers/Menu';
import { Jugador } from './Jugador';
import { Leaderboard } from '../models/Leaderboard';

export class Podio {
    /**
     * Clase encargada de la funcionalidad del podio
     */

    private _ganadores: Jugador[];

    constructor() {
        this._ganadores = [];
    }

    public get ganadores() {
        return this._ganadores;
    }

    public set ganadores(ganadores: Jugador[]) {
        this._ganadores = ganadores;
    }

    public anunciarGanadores() {
        /**
         * Imprime los ganadores en consola y los envia a la clase Leaderboard para ser tratados y guardados.
         */
        Menu.banner();

        Menu.title('Ganadores');

        this._ganadores.map((ganador, index) => {
            console.log(`${index + 1} ${ganador.nombre} - ${ganador.conductor.carro.modelo}`);
        });

        (new Leaderboard()).guardarDb(this._ganadores[0].nombre);
    }
}
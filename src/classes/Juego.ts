import { Jugador } from './Jugador';
import { Pista } from './Pista';
import { Podio } from './Podio';
import { Menu } from '../helpers/Menu';

export class Juego {
    /**
     * Clase encargada de la funcionalidad del juego
     */

    private _jugadores: Jugador[];
    private _pista: Pista;
    private _podio: Podio;

    constructor(jugadores: [string, string, string][], distanciaPista: number) {
        this._jugadores = [];
        jugadores.map((jugador, index) => {
            this._jugadores.push(new Jugador(this, jugador[0], jugador[1], jugador[2], index + 1));
        });
        this._pista = new Pista(this, distanciaPista);
        this._podio = new Podio();
    }

    public get jugadores() {
        return this._jugadores;
    }

    public get pista() {
        return this._pista;
    }

    public set jugadores(jugador) {
        this._jugadores.push();
    }

    public set pista(pista) {
        this._pista = pista;
    }

    public iniciarJuego() {
        /**
         * Inicializa el juego haciendo un ciclo y llamando al metodo avanzar hasta que los carros avancen la distancia de la pista
         */

        let jugadores: Jugador[] = [];
        let jugadoresOrdenados: Jugador[] = [];
        let jugadoresFinalizados: Jugador[] = [];
        let posicion = 1;

        do {
            this._jugadores.map(jugador => {
                jugador.conductor.carro.avanzar();
            });

            Menu.banner();

            Menu.title('Estado del juego');

            this._jugadores.map(jugador => {
                if (jugador.conductor.carro.distanciaRecorrida >= this._pista.distanciaPista && jugador.conductor.carro.posicion === 0) {
                    jugador.conductor.carro.posicion = posicion;
                    jugadoresFinalizados.push(jugador);
                    posicion++;
                }
            });

            jugadores = this._jugadores.filter(jugador => jugador.conductor.carro.posicion === 0);

            jugadoresOrdenados = jugadores.sort((a, b) => b.conductor.carro.distanciaRecorrida - a.conductor.carro.distanciaRecorrida);

            jugadoresFinalizados.map((jugador, index) => {
                console.log(`${index + 1}. ${jugador.nombre.yellow} ...... ${'Finalizado'.red}.`);
            });

            jugadoresOrdenados.map((jugador, index) => {
                console.log(`${index + posicion}. ${jugador.nombre.yellow} ...... ${jugador.conductor.carro.distanciaRecorrida} m.`);
            });

            this.sleep(1000);


        } while (!(posicion >= this._jugadores.length));

        jugadores = [...this._jugadores];
        jugadoresOrdenados = jugadores.sort((a, b) => b.conductor.carro.posicion - a.conductor.carro.posicion);

        this._podio.ganadores = jugadoresFinalizados.slice(0, 3);
        this._podio.anunciarGanadores();
    }

    private sleep(milliseconds: number) {
        /** Pausa la ejecucion del programa por los milisegundos especificados */
        let start = new Date().getTime();
        for (var i = 0; i < 1e7; i++) {
            if ((new Date().getTime() - start) > milliseconds) {
                break;
            }
        }
    }

}
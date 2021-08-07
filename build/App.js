"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
require("colors");
const Juego_1 = require("./classes/Juego");
const Historial_1 = require("./helpers/Historial");
const Menu_1 = require("./helpers/Menu");
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    let opcion = '';
    do {
        opcion = yield Menu_1.Menu.menu();
        switch (opcion) {
            case '1':
                //Iniciar el juego
                Menu_1.Menu.banner();
                Menu_1.Menu.title('Datos pista');
                const distanciaPista = yield Menu_1.Menu.leerInput('Ingrese la distancia de la pista [metros]: ');
                Menu_1.Menu.banner();
                Menu_1.Menu.title('Datos jugadores');
                const numJugadores = yield Menu_1.Menu.leerInput('Ingrese el numero de jugadores: ');
                const jugadores = [];
                for (let i = 0; i < numJugadores; i++) {
                    Menu_1.Menu.banner();
                    Menu_1.Menu.title(`Jugador ${i + 1}`);
                    const nombreJugador = yield Menu_1.Menu.leerInput(`Ingrese el nombre de jugador: `);
                    const modeloCarro = yield Menu_1.Menu.leerInput(`Ingrese el modelo del carro del jugador: `);
                    const esConductor = yield Menu_1.Menu.validacionConductor();
                    let nombreConductor;
                    if (esConductor === '1') {
                        nombreConductor = nombreJugador;
                    }
                    else {
                        nombreConductor = yield Menu_1.Menu.leerInput(`Ingrese el nombre del conductor del jugador: `);
                    }
                    jugadores.push([nombreJugador, modeloCarro, nombreConductor]);
                    yield Menu_1.Menu.pausa();
                }
                const juego = new Juego_1.Juego(jugadores, distanciaPista);
                juego.iniciarJuego();
                break;
            case '2':
                //Leaderrboard
                Menu_1.Menu.banner();
                Menu_1.Menu.title('Leaderboard');
                (new Historial_1.Historial()).mostrarLeaderboard();
                break;
            default:
                break;
        }
        yield Menu_1.Menu.pausa();
    } while (opcion !== '0');
});
console.clear();
main();
//# sourceMappingURL=App.js.map
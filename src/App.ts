import 'colors';

import { Juego } from './classes/Juego';
import { Historial } from './helpers/Historial';
import { Menu } from './helpers/Menu';


const main = async () => {

    let opcion: string = '';

    do {

        opcion = await Menu.menu();

        switch (opcion) {
            case '1':
                //Iniciar el juego

                Menu.banner();

                Menu.title('Datos pista');

                const distanciaPista = await Menu.leerInput('Ingrese la distancia de la pista [metros]: ');

                Menu.banner();
                Menu.title('Datos jugadores');

                const numJugadores = await Menu.leerInput('Ingrese el numero de jugadores: ');

                const jugadores: [string, string, string][] = [];

                for (let i = 0; i < numJugadores; i++) {

                    Menu.banner();
                    Menu.title(`Jugador ${i + 1}`);

                    const nombreJugador = await Menu.leerInput(`Ingrese el nombre de jugador: `);
                    const modeloCarro = await Menu.leerInput(`Ingrese el modelo del carro del jugador: `);
                    const esConductor = await Menu.validacionConductor();
                    let nombreConductor;
                    if (esConductor === '1') {
                        nombreConductor = nombreJugador;
                    } else {
                        nombreConductor = await Menu.leerInput(`Ingrese el nombre del conductor del jugador: `);
                    }
                    jugadores.push([nombreJugador, modeloCarro, nombreConductor]);

                    await Menu.pausa();
                }

                const juego = new Juego(jugadores, distanciaPista);

                juego.iniciarJuego();

                break;

            case '2':
                //Leaderrboard

                Menu.banner();
                Menu.title('Leaderboard');
                (new Historial()).mostrarLeaderboard();

                break;

            default:
                break;
        }

        await Menu.pausa();


    } while (opcion !== '0');
}

console.clear();
main();


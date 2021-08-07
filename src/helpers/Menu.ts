import 'colors';
import inquirer from 'inquirer';

export class Menu {
    /**
     * Clase encargado de la funcionalidad y visualizacion de los menus de la aplicacion.
     */

    public static banner() {
        /**
         * Imprime el titulo en consola
         */
        console.clear();
        console.log('============================================'.green);
        console.log('              Console Cars Game             '.green);
        console.log('============================================\n'.green);
    }

    public static title(title: string) {
        const spaces = Math.floor((44 - title.length) / 2);
        console.log(`${' '.repeat(spaces)}${title}${' '.repeat(spaces)}\n`);
    }


    public static async menu() {
        /**
         * Genera el menu de opciones en el menu principal
         */

        const menuOptions = [
            {
                type: 'list',
                name: 'opcion',
                message: '¿Que desea hacer?',
                choices: [
                    {
                        value: '1',
                        name: `${'1.'.green} Iniciar juego`
                    },
                    {
                        value: '2',
                        name: `${'2.'.green} Historial de juegos`
                    },
                    {
                        value: '0',
                        name: `${'0.'.green} Salir`
                    }
                ]
            }
        ];

        this.banner();

        const { opcion } = await inquirer.prompt(menuOptions);

        return opcion;
    }


    public static async validacionConductor() {
        /**
         * Pregunta si el jugador tiene o no conductor
         */

        const validationDriverOptions = [
            {
                type: 'list',
                name: 'opcion',
                message: '¿El jugador conduce el vehiculo?',
                choices: [
                    {
                        value: '1',
                        name: `${'1.'.green} Si`
                    },
                    {
                        value: '0',
                        name: `${'2.'.green} No`
                    },
                ]
            }
        ];

        const { opcion } = await inquirer.prompt(validationDriverOptions);

        return opcion;
    }


    public static async pausa() {
        /**
         * Crea una pausa bloqueando la ejecucion y finaliza presionando enter..
         */

        const pausaOptions = [
            {
                type: 'input',
                name: 'enter',
                message: `Presione ${'ENTER'.green} para continuar`
            }
        ];

        console.log('\n');
        await inquirer.prompt(pausaOptions);
    }


    public static async leerInput(message: string) {
        /**
         * Lee un input en consola
         */

        const question = [
            {
                type: 'input',
                name: 'input',
                message,
                validate(value: string) {
                    if (value.length === 0) {
                        return 'Por favor ingrese un valor';
                    }
                    return true;
                }
            }
        ]

        const { input } = await inquirer.prompt(question);

        return input;
    }

}



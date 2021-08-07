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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = void 0;
require("colors");
const inquirer_1 = __importDefault(require("inquirer"));
class Menu {
    /**
     * Clase encargado de la funcionalidad y visualizacion de los menus de la aplicacion.
     */
    static banner() {
        /**
         * Imprime el titulo en consola
         */
        console.clear();
        console.log('============================================'.green);
        console.log('              Console Cars Game             '.green);
        console.log('============================================\n'.green);
    }
    static title(title) {
        const spaces = Math.floor((44 - title.length) / 2);
        console.log(`${' '.repeat(spaces)}${title}${' '.repeat(spaces)}\n`);
    }
    static menu() {
        return __awaiter(this, void 0, void 0, function* () {
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
            const { opcion } = yield inquirer_1.default.prompt(menuOptions);
            return opcion;
        });
    }
    static validacionConductor() {
        return __awaiter(this, void 0, void 0, function* () {
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
            const { opcion } = yield inquirer_1.default.prompt(validationDriverOptions);
            return opcion;
        });
    }
    static pausa() {
        return __awaiter(this, void 0, void 0, function* () {
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
            yield inquirer_1.default.prompt(pausaOptions);
        });
    }
    static leerInput(message) {
        return __awaiter(this, void 0, void 0, function* () {
            /**
             * Lee un input en consola
             */
            const question = [
                {
                    type: 'input',
                    name: 'input',
                    message,
                    validate(value) {
                        if (value.length === 0) {
                            return 'Por favor ingrese un valor';
                        }
                        return true;
                    }
                }
            ];
            const { input } = yield inquirer_1.default.prompt(question);
            return input;
        });
    }
}
exports.Menu = Menu;
//# sourceMappingURL=Menu.js.map
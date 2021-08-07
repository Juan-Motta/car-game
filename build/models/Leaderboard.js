"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Leaderboard = void 0;
const fs = require("fs");
class Leaderboard {
    constructor() {
        this._dbData = {};
        this.dbPath = './src/db/database.json';
        this.leerDb();
    }
    guardarDb(ganador) {
        /**
         * Guarda el nombre del jugador en un archivo json simulando una base de datos
         */
        if (this._dbData[ganador]) {
            this._dbData[ganador] += 1;
        }
        else {
            this._dbData[ganador] = 1;
        }
        fs.writeFileSync(this.dbPath, JSON.stringify(this._dbData), (err) => {
            if (err) {
                return err;
            }
        });
    }
    leerDb() {
        /**
         * Lee los datos guardados en el archivo json
         */
        if (!fs.existsSync(this.dbPath)) {
            return;
        }
        const data = fs.readFileSync(this.dbPath, { encoding: 'utf-8' });
        if (!data) {
            this._dbData = {};
        }
        else {
            this._dbData = JSON.parse(data);
        }
    }
    get dbData() {
        return this._dbData;
    }
}
exports.Leaderboard = Leaderboard;
//# sourceMappingURL=Leaderboard.js.map
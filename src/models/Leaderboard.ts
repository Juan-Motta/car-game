const fs = require("fs");

export class Leaderboard {
    /**
     * Clase encargada de guardar la informacion de los ganadores
     */


    private _dbData: any;
    private dbPath: string;

    constructor() {
        this._dbData = {};
        this.dbPath = './src/db/database.json';
        this.leerDb();
    }


    public guardarDb(ganador: string) {
        /**
         * Guarda el nombre del jugador en un archivo json simulando una base de datos
         */

        if (this._dbData[ganador]) {
            this._dbData[ganador] += 1;
        } else {
            this._dbData[ganador] = 1;
        }

        fs.writeFileSync(this.dbPath, JSON.stringify(this._dbData), (err: any) => {
            if (err) {
                return err;
            }
        });
    }

    public leerDb() {
        /**
         * Lee los datos guardados en el archivo json
         */
        if (!fs.existsSync(this.dbPath)) {
            return
        }

        const data = fs.readFileSync(this.dbPath, { encoding: 'utf-8' });
        if (!data) {
            this._dbData = {}
        } else {
            this._dbData = JSON.parse(data);
        }

    }

    public get dbData() {
        return this._dbData;
    }


}
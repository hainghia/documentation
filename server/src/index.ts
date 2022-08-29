import 'reflect-metadata'
import {AppDataSource} from "./data-source";

const main = async () => {

    /**
     * to initialize initial connection with the database, register all entities
     * and "synchronize" database schema, call "initialize()" method of a newly created database
     * once in your application bootstrap
     */
    await AppDataSource.initialize()
        .then(() => {
            // here you can start to work with your database
        })
        .catch((error) => console.log(error))
}

main().catch(error => console.log(error))

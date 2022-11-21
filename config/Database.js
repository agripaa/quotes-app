import {Sequelize} from 'sequelize';

const db = new Sequelize('quotes', 'root', '',{
    host: 'localhost',
    dialect: 'mysql'
})

export default db;
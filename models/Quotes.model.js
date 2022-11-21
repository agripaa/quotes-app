import {Sequelize} from 'sequelize';
import db from '../config/Database';

const {DataTypes} = Sequelize;

const Quotes = db.define('quote',{
    quote:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notNull: true,
            notEmpty: true,
            len: [5, 100]
        }
    },
    user:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notNull: true,
            notEmpty: true,
            len: [5, 100]
        }
    }
})

export default Quotes;

(async() => {
    await db.sync();
})();
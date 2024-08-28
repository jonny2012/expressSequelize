import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

export const App = sequelize.define("App", {
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
 
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    size:{
        type:DataTypes.INTEGER,
        allowNull:false
        
    }
},
{
    tableName:"App",
    timestamps:false
})

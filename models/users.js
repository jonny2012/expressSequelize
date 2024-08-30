import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

export const User = sequelize.define("User", {
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
 
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true 
    },
    createdAt:{
        type:DataTypes.DATE,
        defaultValue:DataTypes.NOW
    }
},
{
    tableName:"Users",
    timestamps:false
})
// User.sync({ force: true })
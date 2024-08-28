import express from "express"
import { sequelize } from "./config/db.js"
import { App } from "./models/app.js"


const port =5001
const app = express()


app.use(express.json())
 
app.post("/app", async (req, res)=>{
    const {name, size}= req.body
    try{
        const app = await App.create({name, size})
        res.status(201).json(app)
    }
    catch(err){
        console.error(err.stack)
    }

})

app.get("/apps", async (req, res)=>{

    try{
        const apps = await App.findAll()
        res.json(apps)
    }
    catch(err){
        console.error(err)
    }
})

async function startApp(){
    
    try{
        sequelize.authenticate()
        console.log("successfull")
        app.listen(port)
    }
    catch(e){
        console.log(e)
    }
}

//npm run dev 
startApp().catch(console.dir)

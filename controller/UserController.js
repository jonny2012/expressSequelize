import Service from "../Service/UserService.js"

 class Controller {
   async getOneUser(req,res){
   // я пробовал через params  но не хочет работать
        const userEmail = await req.body.email
        if(!userEmail){
            console.log("Email is not entered")
            res.status(500).json({message:"Email not found"})
            return
        }
        try{
            const user = await Service.getOneUser(userEmail)
            res.json(user)
        }
        catch(err){
            console.error("Error"+err)
        }
    }
      async  getUsers(req, res){
        try{
            const Users = await Service.getAllUsers()
            res.json(Users)
        }
        catch(err){
            console.error(err)
        }
    }

    async createUser(req, res){
        
        try{
            const createUser = await Service.createUser(req.body)
            res.json(createUser)
        }
        catch(err){
            console.log(err.stack)
        }
    }
    async createPost(req, res){
        
        try{
            const Post = await Service.createPost(req.body)
            res.json(Post)
        }
        catch(err){
            console.log(err.stack)
        }
    }
    async deleteUser(req, res){
        const userid = await req.body.id
        if(!userid){
            console.log("Wrong id")
            return 
        }
        try{
            const  deletedUser = await Service.deleteUser(userid)
            res.json(deletedUser)
        }
        catch(err){
            console.log(err.stack)
        }
    }
    async  updateUserInfo(req,res){
        const userData  =await req.body
        if(!userData){
            console.log("No userData")
            return
        }
        try{
            const updatedData = await Service.updateUserInfo(userData)
            res.json(updatedData)

        }
        catch(error){
                console.error(error)
        }
    }
}
export default new Controller()
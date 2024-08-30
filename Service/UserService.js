import { Post } from "../models/post.js";
import { User } from "../models/users.js";

 class Service{
    async getOneUser(userId){
        const user = await User.findOne({where:{email:userId}})
        return user
    }
    async findUserbyId(userId){
      const user = User.findByPk(userId)
      return user
  }


    async getAllUsers() {

        const users = await User.findAll();
        return users
    }
    async createUser(userdata){
      const user =  await User.create(userdata)
      return user
    }

      async deleteUser(userId){
        const user =  await User.destroy({where:{id:userId}})
        return user
      }

      async updateUserInfo(userData){
        const  updatedData = await User.update({name:userData.name, email:userData.email},
                                                {where:{id: userData.id}})
                return updatedData
      }




      async createPost(postData){
        const user = await User.findByPk(userId)
        const createPost =    await Post.create({where:User.id})
        return createPost
      }
}

export default new Service()
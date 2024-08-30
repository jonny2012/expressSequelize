import { Post } from "../models/post.js"
import { User } from "../models/users.js"


export class PostService {

    async getAllPosts(){
        const Posts = await Post.findAll()
        return Posts
    }

    async createPost(PostData){

        const createdPost = await Post.create(PostData)
        return createdPost
    }
    async getPostsbyUserId(userId){
        const Posts = await Post.findAll({where:{userId:userId}})
        return Posts
    }
    async deletePost(postId){
        const post = await Post.destroy({where:{id:postId}})
        return post
      }

      async updatePostInfo(postData){
        const  updatedData = await Post.update({title:postData.title, description:postData.description},
                                                {where:{id:postData.id}})
                return updatedData
      }
 

}
export default new PostService
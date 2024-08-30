import PostService from "../Service/PostService.js"
import UserService from "../Service/UserService.js"


class PostController {

    async getAllPosts(req, res) {
        try {

            const Posts = await PostService.getAllPosts()
            res.json(Posts)

        }
        catch (err) {
            console.error(err.stack)

        }
    }
    async getAllPostsByUserId(req, res) {
        const userId = await req.body.id
        if (!userId) {
            res.json({ message: "userId not entered" })
            return
        }
        try {
            const allUserPosts = await PostService.getPostsbyUserId(userId)
            if (!allUserPosts) {
                res.json({ message: "UserId not found, or no User posts" })
                return
            } else
                res.json(allUserPosts)

        }
        catch (err) {
            console.error(err.stack)
        }

    }
    async createPost(req, res) {
        const postData = await req.body

        if (!postData) {
            console.log("Invalid data")
            res.json({ message: "Invalid postData" })
            return
        }
        const user = await UserService.findUserbyId(postData.userId)
        if (!user) {
            res.json({ message: "User not found" })
            return
        }
        try {
            const Post = await PostService.createPost({
                title: postData.title,
                description: postData.description,
                userId: user.id
            })
            res.json({ message: "Post by User successful created" })
        }
        catch (err) {
            console.log(err.stack)
        }
    }
    async updateUserPost(req, res){
        const updateData = await req.body
        
        try{
            const updatedPost = await PostService.updatePostInfo(updateData)
            res.json(updatedPost)

        }
        catch(err){
            console.log(err)
        }
    }
    async deletePost(req, res){
        const postId = await req.body.id
        if(!postId){
            console.log("Wrong  post id")
            return 
        }
        try{
            const  deletedPost = await PostService.deletePost(postId)
            res.json(deletedPost)
        }
        catch(err){
            console.log(err.stack)
        }
    }

}

export default new PostController
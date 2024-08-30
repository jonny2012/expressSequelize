
import { User } from "./users.js";
import { Post } from "./post.js";
  User.belongsToMany(Post, { through: "userPosts",  as:"posts", foreignKey:"userId",})
 Post.belongsToMany(User, {through:"userPosts",as:"users", foreignKey:"postId",  })


export {User,Post}
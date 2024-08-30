import { Router } from "express";
import UserController from "./controller/UserController.js";
import  PostController  from "./controller/PostController.js";



export const router = new Router()
router.get("/users", UserController.getUsers)
router.get("/user",  UserController.getOneUser)
router.post("/user", UserController.createUser)
router.delete("/user", UserController.deleteUser)
router.put("/user", UserController.updateUserInfo)

router.get("/posts", PostController.getAllPosts)
router.get("/userPosts",  PostController.getAllPostsByUserId)
router.post("/post", PostController.createPost)
router.delete("/post", PostController.deletePost)
router.put("/post", PostController.updateUserPost)
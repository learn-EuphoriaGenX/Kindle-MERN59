const commentModel = require("../models/comment.model");
const dislikeModel = require("../models/dislike.model");
const likeModel = require("../models/like.model");
const postModel = require("../models/post.model");
const userModel = require("../models/user.model");

module.exports.createPost = async (req, res) => { // create post route
    let userId = req.user._id
    try {
        let { title, description } = req.body;
        if (!title || !description) {
            return res.status(400).send({ message: "Please fill all fields", success: false })
        } else {
            let newPost = await postModel.create({
                user: userId,
                title,
                description,
            })
            let user = await userModel.findById(userId)
            user.posts.push(newPost._id)
            await user.save();
            return res.status(200).send({ message: "New Post added successfully!", success: true, post: newPost })
        }
    } catch (error) {
        return res.status(500).send({ message: "Internal Server Error", success: false })
    }
}
module.exports.getAllPosts = async (req, res) => {// get all posts
    try {
        let posts = await postModel.find()
        return res.status(200).send({ message: "All posts", success: true, posts: posts })
    } catch (error) {
        return res.status(500).send({ message: "Internal Server Error", success: false })
    }
}
module.exports.getPostById = async (req, res) => {// get post By Id
    let id = req.params.id;
    try {
        let post = await postModel.findById(id).populate('comments', 'text createdAt')
        return res.status(200).send({ message: "Post Details", success: true, post: post })
    } catch (error) {
        return res.status(500).send({ message: "Internal Server Error", success: false })
    }
}
module.exports.deletePostById = async (req, res) => {// delete post By Id
    let id = req.params.id;
    console.log("user:=>>>>>>>>>>>>>", req.user);

    let userId = req?.user?._id
    try {
        let postdetails = await postModel.findById(id)
        console.log(postdetails);

        if (postdetails.user != userId) {
            return res.status(200).send({ message: "You have Not Deleted this", success: false })
        }

        await postModel.findByIdAndDelete(id)
        return res.status(200).send({ message: "Post Deleted Successfull", success: true })
    } catch (error) {
        console.log(error);

        return res.status(500).send({ message: "Internal Server Error", success: false })
    }
}

module.exports.commentAdd = async (req, res) => {// add comment on Particular Post
    let postId = req.params.id;
    let userId = req.user._id
    try {
        let { text } = req.body;
        if (!text) {
            return res.status(400).send({ message: "Fill All Fields", success: false })
        } else {
            let newComment = await commentModel.create({
                user: userId,
                post: postId,
                text: text
            })
            let post = await postModel.findById(postId);
            post.comments.push(newComment._id);
            await post.save();
            return res.status(200).send({ message: "New Comment added successfully!", success: true, comment: newComment })
        }
    } catch (error) {
        return res.status(500).send({ message: "Internal Server Error", success: false })
    }
}

module.exports.makeLike = async (req, res) => { // make like on Particular Post
    let postId = req.params.id;
    let userId = req.user._id;
    try {

        let existing = await likeModel.find({ post: postId, user: userId })
        
        
        if (existing) {
            return res.status(400).send({ message: "You Have Already Liked!", success: false })
        }

        let newLike = await likeModel.create({
            post: postId,
            user: userId
        })
        let user = await userModel.findById(userId)
        user.likes.push(newLike._id)
        await user.save()
        let post = await postModel.findById(postId)
        post.likes.push(newLike._id)
        await post.save();
        return res.status(200).send({ message: "Post Liked Successfully!", success: true })

    } catch (error) {
        return res.status(500).send({ message: "Internal Server Error", success: false })
    }
}
module.exports.makeDislike = async (req, res) => { // make dislike on Particular Post
    let postId = req.params.id;
    let userId = req.user._id;
    try {
        let existing = await dislikeModel.find({ post: postId, user: userId })
        console.log(existing);
        if (existing.length) {
            return res.status(400).send({ message: "You Have Already Uniked!", success: false })
        }

        let newDislike = await dislikeModel.create({
            post: postId,
            user: userId
        })
        let post = await postModel.findById(postId)
        post.dislikes.push(newDislike._id)
        await post.save();
        return res.status(200).send({ message: "Post Disliked Liked Successfully!", success: true })

    } catch (error) {
        return res.status(500).send({ message: "Internal Server Error", success: false })
    }
} 
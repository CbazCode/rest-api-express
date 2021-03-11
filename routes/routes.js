const express = require('express')
const router = express.Router();

const Post = require('../models/Post')

router.route('/').get(async(req, res) =>{
        
    try {
        const posts = await Post.find();
        res.status(200).json({
            posts
        })
    } catch (error) {
        res.status(400),json({
            message:error
        })
        
    }
    
})



router.route('/posts').post(async(req, res) => {

    const post = new Post ({
        title: req.body.title,
        description: req.body.description,
    })

    try {
        const savedPost = await post.save();
        res.json(savedPost);
    } catch (error) {
        res.status(400).send(error);
    }

    console.log(post);
})

router.route('/posts/:id').get(async(req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json({
            post
        })
    } catch (error) {
        res.status(400).json({
            message: error
        })
    }
})

router.route('/posts/:id').delete(async(req, res)=>{
    try{
    const removedPost = await Post.deleteOne({_id: req.params.id})
        res.status(200).json({
            removedPost
        })
    } catch (error) {
        res.status(400).json({
            message: error
        })
    }
})

router.route('/posts/:id').patch(async(req, res) =>{
    try {
        const updatePost = await Post.updateOne({_id: req.params.id}, { $set: {
            title: req.body.title
        }})
        res.status(200).json({
            updatePost
        })
        
    } catch (error) {
        res.status(400).json({
            message: error
        })
    }
})


module.exports = router;
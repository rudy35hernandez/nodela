const Post = require("../models/Post");

module.exports = {
    getIndex: async (req,res)=>{
        console.log("user: ", req.user)
        try{
            const postItems = await Post.find()
            console.log(postItems);
            res.render('index.ejs', {posts: postItems.reverse(), user: req.user})
        }   catch(err){
            console.log(err)
        }
    }
}
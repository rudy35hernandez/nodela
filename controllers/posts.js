const Post = require("../models/Post");

module.exports = {
  
  getPosts: async (req, res) => {
    console.log("user: ", req.user);
    try {
      console.log("id: ", req.user.id);
      const postItems = await Post.find({ userId: req.user.id, userName: req.user.nodellaUsername });
      console.log(postItems);
      res.render("profile.ejs", { posts: postItems.reverse(), user: req.user });
    } catch (err) {
      console.log(err);
    }
  },

  getPost: async (req, res) => {
    try{
    const post = await Post.findById(req.params.id)
    res.render("story.ejs", {post: post, user: req.user})
  } catch(err) {
    console.log(err)
  }
  },

  createPost: async (req, res) => {
    console.log(req.user);
    console.log(req.body)
    try {
      await Post.create({
        title: req.body.title,
        story: req.body.story,
        userId: req.user.id,
        userName: req.user.nodellaUsername
      });
      console.log("Post has been added!");
      res.redirect("/profile");
    } catch (err) {
      console.log(err);
    }
  },

  addComment: async(req, res) => {
    try{
      await Post.findOneAndUpdate({ _id: req.params.id}, {
        $push: {
          comments: {
            text: req.body.text,
            user: req.user
          }
        },
        $inc: { commentsLength: 1 }
      } )
      console.log(req.body.text)
      console.log(req.user)
      res.redirect(`/posts/${req.params.id}`)
    
    } catch(err){
        console.log(err)
    }
  },

  likePost: async (req, res) => {
    try {
      await Post.findOneAndUpdate(
        { _id: req.params.id },
        {
          $inc: { likes: 1 },
        }
      );
      console.log("Likes +1");
      res.redirect("/profile");
    } catch (err) {
      console.log(err);
    }
  },

  deletePost: async (req, res) => {
    console.log(req.body.postIdFromJSFile);
    try {
      await Post.findOneAndDelete({ userId: req.user.id, _id: req.body.postIdFromJSFile});
      console.log("Deleted Post");
      res.json("Deleted It");
      res.redirect('/profile')
    } catch (err) {
      console.log(err);
    }
  },

  deleteComment: async (req, res) => {
    console.log('the postId with the comments: '+req.body.catchPostId)
    console.log('the comment id: '+req.body.commentId)

  try {
    await Post.findOneAndUpdate({ _id: req.body.postId},
      {
        $pull: {
          comments: { _id: req.body.commentId}
        },
        $inc: {commentsLength: -1}
      })
      console.log('Deleted Comment')
      res.json('Delete Comment')
  } catch(err){
    console.log(err)
  }

  }
};
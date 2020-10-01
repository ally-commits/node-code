const Post = require("../models/posts");

const index = (req,res) => {
    Post.find()
    .then(result => {
      res.render('index',{
        title: "HOME PAGE FROM SERVER",
        posts: result
      })
    }).catch(err => {
      console.log(err)
    })
}

const create = (req,res) => {
    res.render("create");
}

const store = (req,res) => {
    const post = new Post(req.body)

    post.save()
    .then(result => {
        res.redirect("/")
    })
    .catch(err => {
        console.log(err);
    })
}

const show = (req,res) => {
    Post.findById(req.params.id)
    .then(result => {
        res.render('post',{blog: result})
    })
    .catch(err => {
        console.log(err);
    })
}

const destroy = (req,res) => {
    Post.findByIdAndDelete(req.params.id)
    .then(result => {
        res.json({done: true})
    })
    .catch(err => {
        console.log(err);
    })
}

module.exports = {
    index,
    create,
    store,
    show,
    destroy
}
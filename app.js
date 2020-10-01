const express = require("express")
const morgan = require('morgan')
const mongoose = require("mongoose")
const postRoute = require('./routes/postRoute')

const app = express();

app.set('view engine','ejs');
app.set('views','static');

 
// app.use((req,res,next) => {
//   console.log("--------------------------------")
//   console.log("NEW REQUEST")
//   console.log("HOST:" , req.hostname)
//   console.log("PATH:",req.path)
//   console.log("METHOD:", req.method)
//   next()
// })

mongoose.connect(dbUrl, {useNewUrlParser: true,useUnifiedTopology: true})
  .then((result) => {
    console.log("MONGO CONNECTED")
    app.listen(3000,() => {
      console.log("SERVER STARTED IN POST 3000")
    })
  })
  .catch(err => console.log(err))


// app.use(morgan('tiny'));

app.use(express.static("public"))
app.use(express.urlencoded({extended: true}))

// app.get("/add-post",(req,res) => {
//   const post = new Post({
//     title: "NE WPOST",
//     snippet: "NEW SNIPPET",
//     body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae illo doloribus, numquam nostrum modi voluptas! Culpa magni officia quibusdam, consequatur voluptas quasi mollitia earum? Hic officiis veniam deleniti voluptates natus?"
//   })

//   post.save()
//     .then(result => {
//       res.send({result})
//     })
//     .catch(err => {
//       console.log(err);
//     })
// })



// app.get("/single-blog",(req,res) => {

// });

app.use('/blogs',postRoute)


app.get("/",(req,res) => {
  res.redirect("/blogs")
});

app.get("/about",(req,res) => {
  res.render("about")
}); 

app.use((req,res) => {
  res.status(404).render("404");
})
  



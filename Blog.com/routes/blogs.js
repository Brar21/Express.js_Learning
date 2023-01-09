const express = require('express')
const path=require('path')
const router = express.Router()
const blog=require('../data/blog')
router.get('/',(req,res)=>{
    res.render('home')
})

router.get('/blog', (req, res) => {
    res.render('blogHome',{
        blog:blog
    })
    //res.sendFile(path.join(__dirname, '../views/blogs.html'))
})
router.get('/blogpost/:slug', (req, res) => {
    myBlog = blog.filter((e) => {
        return e.slug == req.params.slug
    })
    res.render('blogPage',{
        title: myBlog[0].title,
        content: myBlog[0].content
    })
    //console.log(myBlog)
    //res.sendFile(path.join(__dirname, '../views/blogpage.html'))
})
module.exports = router;
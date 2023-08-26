let express = require('express')
let app = express()

app.get('/cats',(req,res)=>{
    res.send("I am the cat")
})

app.get('/dogs',(req,res)=>{
    res.send("I am the dog")
})

app.get('/',(req,res)=>{
    res.send('This is the home page')
})

app.get('/r/:search',(req,res)=>{
    let {search} = req.params
    res.send(`<h1>Your search is ${search}`)
})

app.get('/r/:search/:postId',(req,res)=>{
    let {search,postId} = req.params
    res.send(`<h1>This is Id no ${postId} of search ${search}`)
})

app.get('/search',(req,res)=>{
    let {q} = req.query
    res.send(`<h1>The search is about ${q}`)
})

app.get('*',(req,res)=>{
    res.send("Sorry we dont have data")
})
app.listen(3000,()=>{
    console.log('listning on port 3000')
})
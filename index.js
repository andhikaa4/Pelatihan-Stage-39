const express = require('express')
const imageUpload = require('express-fileupload')
const path = require ('path')
const { isBuffer } = require('util')

const app = express()
const port = 8000

app.set('view engine', 'hbs')
app.use('/assets', express.static(__dirname + '/assets'))
app.use(express.urlencoded({extended: false}))

const db = require('./connection/db')


app.use(imageUpload())

let isLogin = true

app.get('/', function(req, res){

    db.connect(function(err, client, done){
        if(err) throw err
           
        client.query('SELECT * FROM tb_project', function(err, result){
            if (err) throw err

            console.log(result.rows);
            let data = result.rows

            res.render('index', {isLogin, project : data})
        })
    })


})

app.get('/Project-detail/:index', function(req, res){
    res.render('Project-detail')
})

app.get('/Project', function(req, res){
    res.render('Project')
})

app.get('/contact', function(req, res){
    res.render('contact')
})

app.post('/Project', function(req, res){


})

app.get('/Project-edit/:index', function(req,res){

})

app.post('/project-edit/:index', function(req, res){
   

})

app.get('/delete-project/:index', function(req, res) {
    let index = req.params.index

    dataProject.splice(index, 1)

    res.redirect('/')
})


function monthDiff(d1, d2) {
    var months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth();
    months += d2.getMonth();
    return months <= 0 ? 0 : months;
}

app.listen(port, function(){
    console.log(`server running on port ${port}`);
})
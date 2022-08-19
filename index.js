const express = require('express')

const app = express()
const port = 8000

app.set('view engine', 'hbs')
app.use('/assets', express.static(__dirname + '/assets'))
app.use(express.urlencoded({extended: false}))

app.get('/', function(req, res){
    res.render('index')
})



app.get('/Project', function(req, res){
    res.render('Project')
})

app.get('/contact', function(req, res){
    res.render('contact')
})

app.post('/Project', function(req, res){
    let title = req.body.projectTitle
    let start = req.body.startDate
    let end = req.body.endDate
    let nodeJs = req.body.tech1
    let reactJs = req.body.tech2
    let nextJs = req.body.tech3
    let typescript = req.body.tech4
    let content = req.body.pDesc

    if(nodeJs){
        nodeJs = req.body.tech1
    } else {
        nodeJs = ''
    }
    if(nextJs){
        nextJs = req.body.tech3
    } else {
        nextJs = ''
    }
    if(reactJs){
        reactJs = req.body.tech2
    } else {
        reactJs = ''
    }
    if(typescript){
        typescript = req.body.tech4
    } else {
        typescript = ''
    }

    console.log(title);
    console.log(start);
    console.log(end);
    console.log(nodeJs);
    console.log(reactJs);
    console.log(nextJs);
    console.log(typescript);
    console.log(content);

    res.redirect('/')

})

app.get('/Project-detail', function(req, res){
    res.render('Project-detail')
})


app.listen(port, function(){
    console.log(`server running on port ${port}`);
})
const { log } = require('console')
const express = require('express')
const imageUpload = require('express-fileupload')
const path = require ('path')

const app = express()
const port = 8000

app.set('view engine', 'hbs')
app.use('/assets', express.static(__dirname + '/assets'))
app.use(express.urlencoded({extended: false}))


app.use(imageUpload())

let dataProject = []


app.get('/', function(req, res){
    
    let data = dataProject.map(function(item){
        return {
            ...item,
            

        }
    })
    
    
    res.render('index', {project: data})

})

app.get('/Project-detail/:index', function(req, res){
    let index = req.params.index

    let data = dataProject[index]
    data = {
        title: data.title,
        content: data.content,
        start: data.start,
        end: data.end,
        node: data.nodeJs,
        react: data.reactJs,
        next: data.nextJs,
        typescript: data.typescript,
        duration: monthDiff(new Date(data.start), new Date(data.end)),

    }

    res.render('Project-detail', {data})
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
    //let image = req.files.img
    //let path = __dirname + '/assets/upload/' + image.name
    //image.mv(path, null)

    let contentResult = content.slice(0, 50) + ".....";
    

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

    let project = {
        title,
        start,
        end,
        nodeJs,
        reactJs,  
        nextJs,
        typescript,
        contentResult,
        content,
        //image,
    }

   

    dataProject.push(project)
    res.redirect('/')

})

app.get('/Project-edit/:index', function(req,res){
    let index = req.params.index

    let data = {
        title: dataProject[index].title,
        content: dataProject[index].content,
        start: dataProject[index].start,
        end: dataProject[index].end,
    }
    res.render('Project-edit', {index, data})
})

app.post('/project-edit/:index', function(req, res){
    let index = req.params.index

    dataProject[index].title = req.body.projectTitle
    dataProject[index].content = req.body.pDesc
    dataProject[index].start = req.body.startDate
    dataProject[index].end = req.body.endDate
    
    dataProject[index].contentResult = dataProject[index].content.slice(0, 50) + "....."

    dataProject[index].nodeJs = req.body.tech1
    dataProject[index].reactJs = req.body.tech2
    dataProject[index].nextJs = req.body.tech3
    dataProject[index].typescript = req.body.tech4


    console.log(req.body);
    res.redirect('/')

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
let dataProject = []
function addProject(event){
    event.preventDefault()

    let title = document.getElementById("project-name").value
    let content = document.getElementById("desc").value
    let node = document.getElementById ("c1").value
    let next = document.getElementById ("c2").value
    let react = document.getElementById ("c3").value
    let typescript = document.getElementById ("c4").value
    let image = document.getElementById("input-upload-image").files

    if(node){
        node = document.getElementById("c1").value
    } else {
        node = ''
    }
    if(next){
        next = document.getElementById("c2").value
    } else {
        next = ''
    }
    if(react){
        react = document.getElementById("c3").value
    } else {
        react = ''
    }
    if(typescript){
        typescript = document.getElementById("c4").value
    } else {
        typescript = ''
    }

    // untuk membuat url gambar, agar tampil
    image = URL.createObjectURL(image[0])

    let Project = {
        title,
        content,
        duration:new Date(),
        node,
        next,
        react,
        typescript,
        image,
    }

    dataProject.push(Project)
    //console.log(dataProject);

   renderProject()
}

function renderProject(){
    
    document.getElementById("contents").innerHTML = ''

    console.log(dataProject);
    
    for (let index = 0; index < dataProject.length; index++) {
        
        // console.log(dataBlog[index]);
        document.getElementById("contents").innerHTML += 

        `<div id="contents" class="project-content">
        <div class="project-img">
            <img src=" ${dataProject[index].image}" alt="image">
            <a href="Project-detail.html">
            <h4>${dataProject[index].title}</h4></a>
            <p>Post At : ${getPostTime(dataProject[index].duration)} </p>
        </div>
        <div class="content-fill">
            <p>${dataProject[index].content}</p>
        </div>
        <div class="i-tech">
            <i class="fa-brands fa-${dataProject[index].node}-js"></i>
            <i class="fa-brands fa-${dataProject[index].next}"></i>
            <i class="cib-${dataProject[index].react}-js"></i>
            <i class="cib-${dataProject[index].typescript}"></i> 
        </div>
        <div class="button-group">
            <button class="btn-edit">Edit</button>
            <button class="btn-delete">Delete</button>
        </div>

    </div>`
    }
}

function getPostTime(time){
    let month = ["Januari", "Febuari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "Nopember", "Desember"]

    let date = time.getDate()
    let monthIndex = time.getMonth()
    let year = time.getFullYear()

    let hours = time.getHours()
    let minutes = time.getMinutes()

    if(hours < 10){
        hours = "0" + hours
    }else if(minutes < 10){
        minutes = "0" + minutes
    }
    
    let post = `${date} ${month[monthIndex]} ${year} ${hours}:${minutes} WIB`

    return post
}
    


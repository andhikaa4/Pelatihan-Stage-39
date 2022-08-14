let dataProject = []
function addProject(event){
    event.preventDefault()

    let title = document.getElementById("project-name").value
    let content = document.getElementById("desc").value
    let image = document.getElementById("input-upload-image").files

    // untuk membuat url gambar, agar tampil
    image = URL.createObjectURL(image[0])

    let Project = {
        title,
        content,
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
            <p>Durasi : 3 Bulan</p>
        </div>
        <div class="content-fill">
            <p>${dataProject[index].content}</p>
        </div>
        <div class="i-tech">
            <i class="fa-brands fa-node-js"></i>
            <i class="fa-brands fa-react"></i>
            <i class="cib-next-js"></i>
            <i class="cib-typescript"></i> 
        </div>
        <div class="button-group">
            <button class="btn-edit">Edit</button>
            <button class="btn-delete">Delete</button>
        </div>

    </div>`
    }
}
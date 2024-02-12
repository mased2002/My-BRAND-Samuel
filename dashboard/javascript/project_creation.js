import { addToLS } from "./common_local.js"

// capturing inputs
let projectForm = document.getElementById("projects_form")
let projectTitle = document.getElementById("Ptitle");
let technologies = document.getElementById("techs")
let projectLink = document.getElementById("project_link")
let shortDescription = document.getElementById("short_descript")


// definition of variables  i'll need
let projects = JSON.parse(localStorage.getItem("projects")) || [];

// function addToLS(project, projectValue){
//     localStorage.setItem(project, projectValue)
// }

projectForm.onsubmit = (e) => {
    e.preventDefault();
    projects.push(newProject())
    console.log(projects)
    addToLS("projects", JSON.stringify(projects))
    window.open("projects_dash.html")
}

function newProject(){
    return{
        title : projectTitle.value,
        techs : technologies.value,
        link : projectLink.value,
        description : shortDescription.value,
        id: generateRandomId()
    }
}
function generateRandomId() {
    return Math.random().toString(36).substr(2, 9);
}
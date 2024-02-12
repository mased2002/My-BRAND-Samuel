import { addToLS } from "./common_local.js"
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');
    const projects = JSON.parse(localStorage.getItem("projects"))
    
let projectForm = document.getElementById("projects_form")
let projectTitle = document.getElementById("Ptitle");
let technologies = document.getElementById("techs")
let projectLink = document.getElementById("project_link")
let shortDescription = document.getElementById("short_descript")

// for(let i = 0; i < projects.length; i++){
//     if(projectId === projects[i].id){

//     }
// }
// let filteredProjects;
// const index = projects.findIndex(proj => proj.id === projectId)
// for(let i = 0; i < projects.length; i++){
//     if(projects[i].id === projectId){
//        filteredProjects = projects.splice(index, 1) 
//     }
// }
// console.log(filteredProjects[0])
const filteredProjects = projects.filter((project) => {
     return project.id === projectId
})
console.log(filteredProjects)

for(let i = 0; i < filteredProjects.length; i++){
    projectTitle.value = filteredProjects[i].title
    technologies.value = filteredProjects[i].techs
    projectLink.value = filteredProjects[i].link
    shortDescription.value = filteredProjects[i].description
}
projectForm.onsubmit = (e) => {
    e.preventDefault();
for(let i =0; i < projects.length; i ++){
    if(projects[i].id === projectId){
        projects[i].title = projectTitle.value
        projects[i].techs = technologies.value
        projects[i].link = projectLink.value
        projects[i].description = shortDescription.value
    }
}
console.log(projects)
addToLS("projects", JSON.stringify(projects))
window.open("projects_dash.html")
}

// projectForm.onsubmit = (e) => {
//     addToLS("projects", JSON.stringify(projects))
// }
// function addToLS(project, projectValue){

//     localStorage.setItem(project, projectValue)

// }
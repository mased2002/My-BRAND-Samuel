import { makeDeleteButton, makeEditButton } from "./common_local.js"

let projects_cont = document.querySelector(".projects")

let projects = JSON.parse(localStorage.getItem("projects")) || [];
// const projectElementMap = {};


function createProject(proj){


    // create elements
    const projectCont = document.createElement("div")
    const projectHr = document.createElement("hr")
    const project = document.createElement("div")
    const projectTitle = document.createElement("p")
    const projectDate = document.createElement("p")
    const projectBtns = document.createElement("div")
    const projectEdit = document.createElement("p")
    const projectId = document.createElement("p")





    // fill content(
        projectTitle.textContent = proj.title;
        projectDate.textContent = proj.techs;
        projectEdit.textContent = proj.link;
        projectId.textContent = proj.id



    // set classes
    projectCont.classList.add("project_cont")
    projectHr.classList.add("control_hr")
    project.classList.add("project")
    projectTitle.classList.add("name_of_project")
    projectDate.classList.add("date")
    projectBtns.classList.add("buttons")
    projectId.classList.add("nodisplay")

    // const projectId  = proj.id
    // console.log(projectId)
    // projectElementMap[projectId] = projectCont
    // let sam = JSON.stringify(projectElementMap)
    // console.log("this is the project element map: " + sam)

    // buttons

    const deleteBtn = makeDeleteButton(deleteLogic);
const editBtn = makeEditButton(editLogic);


    // position elements
    projectBtns.append(editBtn, deleteBtn);
    project.append(projectTitle, projectDate, projectBtns, projectId);
    projectCont.append(project, projectHr);

    // 
    projects_cont.appendChild(projectCont)


}
const editLogic = (elementToEdit) => {
    console.log(elementToEdit)
    // const projectId = Object.keys(projectElementMap).find(key => projectElementMap[key] === elementToEdit)
    const projectId = elementToEdit.querySelector(".nodisplay").textContent
  
    window.location.href = `project_edit.html?id=${projectId}`;
    // window.open("project_edit.html")
}

 const deleteLogic = (elementToDelete) => {
        console.log(elementToDelete)
        // Retrieve the project ID from the map
        // const projectId = Object.keys(projectElementMap).find(key => projectElementMap[key] === elementToDelete);
        const projectId = elementToDelete.querySelector(".nodisplay").textContent
        console.log(projectId)
        // Assuming elementToDelete is the project element to be deleted
        const key = "projects"; // Change this to your specific key
        const projects = JSON.parse(localStorage.getItem(key)) || [];
        console.log("this is the project" , projects)
    
        // Find the index of the project in the array
        const index = projects.findIndex(proj => proj.id === projectId);
    
        if (index !== -1) {
            // Remove the project from the array
            projects.splice(index, 1);
    
            // Update LocalStorage
            localStorage.setItem(key, JSON.stringify(projects));
    
            // Remove the project element from the DOM
            elementToDelete.remove();
            location.reload()
    
            // Remove the project element from the map
            // delete projectElementMap[projectId];
        } else {
            console.log(projectId)
            // console.error("Project not found in LocalStorage.");
        }
};

// function generateRandomId() {
//     return Math.random().toString(36).substr(2, 9);
// }

for(let i = 0; i < projects.length; i++){
    createProject(projects[i]);
}


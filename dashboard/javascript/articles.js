import { makeDeleteButton, makeEditButton } from "./common_local.js";

const articles_cont = document.querySelector(".articles")

let articles = JSON.parse(localStorage.getItem("articles")) || [];

let authors;

function createArticle(art){

    // create elments
    const articleCont = document.createElement("div")
    const articleHr = document.createElement("hr")
    const article = document.createElement("div")
    const articleTitle = document.createElement("p")
    const articleAuthor = document.createElement("p")
    const articleDate = document.createElement("p")
    const articleEditIcon = document.createElement("div")
    const articleDeleteIcon = document.createElement("div")
    const articleId = document.createElement("p")
    let articleIcon;
    // the article icon i will have to make in script file
    const articleBtns = document.createElement("div")


    const deleteBtn = makeDeleteButton(deleteLogic)
    const editBtn = makeEditButton(editLogic)
    
    // the article edit button and delete button are there.

    let authors;
    // fill content
    articleTitle.textContent = art.blogTitle;
    if(Array.isArray(art.blogAuthors)){
        articleAuthor.textContent = art.blogAuthors[0]
    }else{
        articleAuthor.textContent = art.blogAuthors
    }
    articleId.textContent = art.blogId
    articleDate.textContent = getFormattedDate();

    // set classes
    articleCont.classList.add("article_cont")
    articleHr.classList.add("control_hr")
    articleTitle.classList.add("name_of_article")
    articleAuthor.classList.add("name_of_author")
    articleDate.classList.add("date")
    article.classList.add("article")
    articleBtns.classList.add("buttons")
    articleId.classList.add("nodisplay")
    articleEditIcon.classList.add("article_btn")
    articleDeleteIcon.classList.add("article_btn")

    // append things
    // articleDeleteIcon.appendChild(deleteBtn)
    // articleEditIcon.appendChild(editBtn)
    articleBtns.append(editBtn, deleteBtn)
    article.append(articleTitle, articleAuthor, articleDate, articleBtns, articleId)
    articleCont.append(article, articleHr)
    articles_cont.appendChild(articleCont)

}

// delete logic
const deleteLogic = (elementToDelete) =>{
    const articleId = elementToDelete.querySelector(".nodisplay").textContent

    const key = "articles"
    const articles = JSON.parse(localStorage.getItem("articles")) || [];
    console.log("this is the articles" , articles)

    const index = articles.findIndex(art => art.blogId === articleId);

    if (index !== -1) {
        // Remove the project from the array
        articles.splice(index, 1);

        // Update LocalStorage
        localStorage.setItem(key, JSON.stringify(articles));

        // Remove the project element from the DOM
        elementToDelete.remove();
        location.reload()

        // Remove the project element from the map
        // delete projectElementMap[projectId];
    } else {
        console.log(articleId)
        console.error("Project not found in LocalStorage.");
    }
}

// edit logic
const editLogic = (elementToEdit) => {
    const articleId = elementToEdit.querySelector(".nodisplay").textContent
    window.location.href = `article_edit.html?id=${articleId}`;
}

// create date
function getFormattedDate() {
    let currentDate = new Date();
    let day = currentDate.getDate();
    let month = currentDate.getMonth() + 1; // Month is zero-based, so add 1
    let year = currentDate.getFullYear();

    // Add leading zeros if necessary
    if (day < 10) {
        day = '0' + day;
    }
    if (month < 10) {
        month = '0' + month;
    }

    // Concatenate the day, month, and year with hyphens
    let formattedDate = day + '-' + month + '-' + year;

    return formattedDate; // Return the formatted date string
}

// function authorsOf(){
//     if(articleAuthors.value.includes(",")){
//         authors = articleAuthors.value.split(",").map(author => author.trim()).filter(author => author !== "")
//         console.log("this is the author", authors)
//     }else{
//         authors = articleAuthors.value
//         console.log("this is the author", authors)
//     }
// }

for(let i = 0; i < articles.length; i++){
    createArticle(articles[i])
}
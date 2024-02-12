import { addToLS } from "./common_local.js";
import { validTitle, validAuthors, validTags, validateArrays, validLink } from "./article_creation.js";

const urlParams = new URLSearchParams(window.location.search);
const articleId = urlParams.get('id');
const articles = JSON.parse(localStorage.getItem("articles"))

// capturing inputs
let articleForm = document.querySelector(".article_form")
let articleTitle = document.getElementById("Atitle")
let articleTags = document.getElementById("tags")
let articleAuthors = document.getElementById("authors")
let articleImage = document.getElementById("image")
let articleContent = document.getElementById("content")


const filteredArticles = articles.filter((article) => {
    return article.blogId === articleId
})
console.log(filteredArticles)

for(let i = 0; i < filteredArticles.length; i++){
    articleTitle.value = filteredArticles[i].blogTitle
    if(Array.isArray(filteredArticles[i].blogTags)){
        articleTags.value = filteredArticles[i].blogTags.join(",")
    }else{
        articleTags.value = filteredArticles[i].blogTags
    }

    if(Array.isArray(filteredArticles[i].blogAuthors)){
        articleAuthors.value = filteredArticles[i].blogAuthors.join(",")
    }else{
        articleAuthors.value = filteredArticles[i].blogAuthors
    }
    articleImage.value = filteredArticles[i].blogImage
    articleContent.value = filteredArticles[i].blogContent
}


function tagsOf(){
    let tags;
    if(articleTags.value.includes(",")){
        tags = articleTags.value.split(",").map(tag => tag.trim()).filter(tag => tag !== "");
        console.log(tags)
    }else{
    tags = articleTags.value
    console.log(tags)
    }
    return tags;
}
function authorsOf(){
    let authors;
    if(articleAuthors.value.includes(",")){
        authors = articleAuthors.value.split(",").map(author => author.trim()).filter(author => author !== "")
        console.log("this is the author", authors)
    }else{
        authors = articleAuthors.value
        console.log("this is the author", authors)
    }
    return authors
}
articleForm.onsubmit = (e) =>{
    e.preventDefault();
    for(let i = 0; i < articles.length; i++){
        if(articles[i].blogId === articleId){
            articles[i].blogTitle = articleTitle.value
            articles[i].blogTags = tagsOf()
            articles[i].blogAuthors = authorsOf()
            articles[i].blogImage = articleImage.value
            articles[i].blogContent = articleContent.value
        }
    }
    addToLS("articles", JSON.stringify(articles))
    window.open("articles.html")
}
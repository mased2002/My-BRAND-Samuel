import { addToLS } from "./common_local.js"


let articles = JSON.parse(localStorage.getItem("articles")) || [];
// error elements
let articleTilteError = document.getElementById("error_a_title")
let articleTagsError = document.getElementById("error_a_tags")
let articleAuthorsError = document.getElementById("error_a_authors")
let articleImageError = document.getElementById("error_a_image")
let articleContentError = document.getElementById("error_a_content")
let submitButton = document.getElementById("create_art")

// regex patterns
const titlePattern = /^[a-zA-Z0-9\s]{5,}$/;
const tagsPattern = /^[a-zA-Z0-9]+$/
const authorPattern = /^[a-zA-Z]{3,}$/;
const linkParttern = /^(http|https):\/\/[\w\-]+(\.[a-z]{2,}){1,}([\w\-._~:/?#[\]@!$&'()*+,;=]*)?$/i;


let tags;
let authors;
let title;

// capturing inputs
let articleForm = document.querySelector(".article_form")
let articleTitle = document.getElementById("Atitle")
let articleTags = document.getElementById("tags")
let articleAuthors = document.getElementById("authors")
let articleImage = document.getElementById("image")
let articleContent = document.getElementById("content")

// authors on input
articleAuthors.oninput = () => {
    validAuthors()
}

// tags input
articleTags.oninput = ()  => {
   validTags()
}

// title input
articleTitle.oninput = () => {

    validTitle();
}

//image link
articleImage.onchange =() => {
    validLink()
}

articleForm.onsubmit = (e) => {
   
    if(!validateForm()){
        e.preventDefault()
    }else{
    articles.push(newArticle())
    addToLS("articles", JSON.stringify(articles))
    }
}


// function lookForErrors(){
//     if(articleTitle.value = ""){
//         articleTilteError.textContent = "needs a title"}
//     // }else if(articleTitle.onchange = () => {})
// }


// link image handling
export function validLink(){
    if(articleImage.value === ""){
        articleImageError.textContent = "article needs link"
        articleImageError.style.display = "block"
    }
    if(linkParttern.test(articleImage.value)){
        articleImageError.textContent = ""
        articleImageError.style.display = "none"
    }else{
        articleImageError.style.display = "block"
        articleImageError.textContent = "link should be start with https and should have a TTL"
    }
}
// title error handling
export function validTitle(){
    title = articleTitle.value
    if(title === ""){
        articleTilteError.textContent = "needs a title"
    }else{
        articleTilteError.textContent = "";
        if(titlePattern.test(title)){
            articleTilteError.textContent = ""
            articleTilteError.style.display = "none"
            console.log(title)
        }else{
            articleTilteError.style.display = "block"
            articleTilteError.textContent = "should be atleast 5 characters"
        }
       }
   

}

// tags error handling
export function validTags(){
    if(articleTags.value.includes(",")){
        tags = articleTags.value.split(",").map(tag => tag.trim()).filter(tag => tag !== "");
        console.log(tags)
   }else{
       tags = articleTags.value
       console.log(tags)
   }
   if(tags === ""){
     articleTagsError.style.display = "none"
   }else{
    validateArrays(tags, tagsPattern, articleTagsError, "should be letters or numbers")
   } 
//     if(tags === ""){
//         articleTagsError.style.display = "none"
//     }else{
//     if(Array.isArray(tags) && tags.length >= 1){
//         for(let i = 0; i < tags.length; i++){
//             if(tagsPattern.test(tags[i])){
//                 articleTagsError.style.display = "none"
//             }else{
//                 articleTagsError.style.display = "block"
//                 articleTagsError.textContent = "tags should be characters and nums"
//             }
//         }
//     }else{
//         if(tagsPattern.test(tags)){
//             articleTagsError.style.display = "none"
//         }else{
//             articleTagsError.style.display = "block"
//             articleTagsError.textContent = "tags should be characters and nums"
//         }
//     }
// }
}



// authors error handling
export function validAuthors(){
    if(articleAuthors.value.includes(',')){
        authors = articleAuthors.value.split(",").map(author => author.trim()).filter(author => author !== "");
        console.log(authors)
    }else{
        authors = articleAuthors.value
        console.log(authors)
    }
    if(authors === ""){
        articleAuthorsError.style.display = "block"
        articleAuthorsError.textContent = "blog should have author"
    }else{
    validateArrays(authors, authorPattern, articleAuthorsError, "should be 3+ characters")
    }
}

// validate arrays
export function validateArrays(array_or_not, regex, error, errormessage){

    // if(Array.isArray(array_or_not) && array_or_not.length >= 1){
    //     for(let i = 0; i < array_or_not.length; i++){
    //         if(regex.test(array_or_not[i])){
    //             error.style.display = "none"
    //         }else{
    //             error.style.display = "block"
    //             error.textContent = errormessage;
    //         }
    //     }
    // }else{
    //     if(regex.test(array_or_not)){
    //         error.style.display = "none"
    //     }else{
    //         error.style.display = "block"
    //         error.textContent = errormessage;
    //     }
    // }

    let hasError = false;

    if (Array.isArray(array_or_not) && array_or_not.length >= 1) {
        for (let i = 0; i < array_or_not.length; i++) {
            if (!regex.test(array_or_not[i])) {
                hasError = true;
                break; // Exit the loop early if an error is found
            }
        }
    } else {
        if (!regex.test(array_or_not)) {
            hasError = true;
        }
    }

    // Set the error message based on the flag
    if (hasError) {
        error.style.display = "block";
        error.textContent = errormessage;
    } else {
        error.style.display = "none";
    }
}

// new article function
function newArticle(){
    return{
        blogTitle : title,
        blogTags : tags,
        blogAuthors : authors,
        blogImage : articleImage.value,
        blogId: generateRandomId(),
        blogContent: articleContent.value
    }
}
function generateRandomId() {
    return Math.random().toString(36).substr(2, 9);
}

function validateForm(){
    validTitle();
    validTags();
    validAuthors();
    validLink();

    return articleTilteError.style.display === "none" && 
    articleAuthorsError.style.display === "none" && articleTagsError.style.display === "none" && articleImageError.style.display === "none";
}
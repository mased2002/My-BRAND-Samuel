// capture the elements
let articles = JSON.parse(localStorage.getItem("articles")) || [];
const blogs = document.querySelector(".content")
function createBlog(article){
    // create elements
    // const BlogContainer = document.createElement("div")
    const blog = document.createElement("div")
    const hoverBlogContainer = document.createElement("div")
    const blogImgLink = makeImg()
    const blogTitle = document.createElement("h1")
    const blogDescipt = document.createElement("p")

    // fill content
    blogTitle.textContent = article.blogTitle
    blogDescipt.textContent = article.blogDescipt

    // setting classes
    // BlogContainer.classList.add("content")
    blog.classList.add("card")
    hoverBlogContainer.classList.add("hover_card")
    blogImgLink.classList.add("preview_img")
    blogTitle.classList.add("article_title")
    blogDescipt.classList.add("article_short_description")

    // setting in the dom
    blog.append(hoverBlogContainer, blogImgLink, blogTitle, blogDescipt)
    blogs.appendChild(blog)
}

function makeImg(art){
    const blogImg = document.createElement("img")
    const blogImgUrl = art.blogImg
    blogImg.src = blogImgUrl;

    return blogImg;
}
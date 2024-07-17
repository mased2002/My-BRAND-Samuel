// crate elements
const comment_container = document.querySelectorAll(".comment_cont")
// const comment = document.getElementsByClassName("comment")
const commentator = document.querySelectorAll(".name_of_comment")
const blog = document.getElementsByClassName("blog_comment_on")
const comment = document.querySelectorAll("comment_content")
get_comments();

async function get_comments(){
    const response = await fetch("https://my-brand-samuel-backend.onrender.com/api/comments/getAll",{
        headers:{"Content-Type": "application/json"},
        method: "GET",
      
      })
      const json =await response.json()
      console.log(json.comments)
      console.log(json)
      console.log(response.status)
      if(response.status == 200){
        const comments = json.comments
        if(comments){
          comment.forEach((com, index)=> {
            if(index < comments.length){
              com.textContent = comments[index].content
            }
          })
        }
      }


}
// const comments = get_comments()
// if(comments){
//   comment.forEach((com, index) => {
//     if(index ){}
//   })
// }
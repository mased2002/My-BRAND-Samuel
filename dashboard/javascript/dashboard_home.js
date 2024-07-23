// crate elements
const comment_container = document.querySelectorAll(".comment_cont")
// const comment = document.getElementsByClassName("comment")
const commentator = document.querySelectorAll(".name_of_comment")
const blog = document.querySelectorAll(".blog_comment_on")
const comment = document.querySelectorAll(".comment_content")
get_comments();
get_data();
const text = document.getElementsByClassName("p.number_messages")

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
        const approved = comments.filter(comment => comment.onBlog)
        if(comments){
          comment.forEach((com, index)=> {
            if(index < comments.length){
              com.textContent = comments[index].content
            }
          })
          commentator.forEach((comm, index)=> {
            if(index < comments.length){
              comm.textContent = comments[index].name
            }
          })
          blog.forEach((blo, index)=> {
            if(index < approved.length){
              blo.textContent = comments[index].onBlog
            }
          })
        }
      }


}
async function get_data(){
  const messages_response = await fetch("https://my-brand-samuel-backend.onrender.com/api/comments/getAll", {
    headers:{"Content-Type": "aplication/json"},
    method: "GET",
  })
  const comments_data = await messages_response.json()
  // console.log(comments_data)
  const data_comments = comments_data.comments
  console.log(data_comments)
  text.textContent = data_comments.length
}

// const comments = get_comments()
// if(comments){
//   comment.forEach((com, index) => {
//     if(index ){}
//   })
// }
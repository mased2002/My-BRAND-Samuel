import { makeReplyIcon, makeDeleteButton } from "./common_local.js";


let messages = JSON.parse(localStorage.getItem("messages")) || [];
// capture elements
const messagesContainer = document.querySelector(".messages")
function createMessage(msg){
    const messageCont = document.createElement("div")
    const messageHr = document.createElement("hr")
    const message = document.createElement("div")
    const messageContentCont = document.createElement("div")
    const messageContent = document.createElement("p")
    const senderName = document.createElement("p")
    const date = document.createElement("p")
    const messageId = document.createElement("p")
    const buttons = document.createElement("div")

    const replyBtn = makeReplyIcon(replylogic)
    const deleteBtn = makeDeleteButton(deleteLogic)
    // fill content
    messageContent.textContent = msg.message;
    senderName.textContent = msg.senderEmail;
    date.textContent = msg.messageDate;
    messageId.textContent = msg.messageId;

    //class add
    messageCont.classList.add("message_cont")
    messageHr.classList.add("message_hr")
    message.classList.add("message")
    messageContentCont.classList.add("message_content_cont")
    messageContent.classList.add("message_content")
    senderName.classList.add("name_of_sender")
    date.classList.add("message_date")
    messageId.classList.add("nodisplay")
    buttons.classList.add("buttons")
    replyBtn.classList.add("reply_icon")
    deleteBtn.classList.add("delete_icon")

    // append things
    buttons.append(replyBtn, deleteBtn)
    messageContentCont.appendChild(messageContent)
    message.append(messageContentCont, senderName, date, buttons)
    messageCont.append(message, messageHr)
    messagesContainer.appendChild(messageCont)
}

const deleteLogic = (elementToDelete) =>{
    const msgId = elementToDelete.querySelector(".nodisplay").textContent

    const key = "messages"
    const messages = JSON.parse(localStorage.getItem("messages")) || [];
    console.log("this is the messages" , messages)

    const index = messages.findIndex(msg => msg.messageId === msgId);

    if (index !== -1) {
        // Remove the project from the array
        messages.splice(index, 1);

        // Update LocalStorage
        localStorage.setItem(key, JSON.stringify(messages));

        // Remove the project element from the DOM
        elementToDelete.remove();
        location.reload()

        // Remove the project element from the map
        // delete projectElementMap[projectId];
    } else {
        console.log(msgId)
        console.error("message not found in LocalStorage.");
    }
}

function replylogic(elmentToReply){
    const messageId = elmentToReply.querySelector(".nodisplay").textContent
    window.location.href =  `message_reply.html?id=${messageId}`
}

for(let i = 0; i < messages.length; i++){
    createMessage(messages[i])
}
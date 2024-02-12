export function makeDeleteButton(deleteFunction) {
    const deleteIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    deleteIcon.setAttribute("class", "article_icon delete_icon");
    deleteIcon.setAttribute("viewBox", "0 0 50 50");

    // Create the path element with the specified path data
    const pathElement = document.createElementNS("http://www.w3.org/2000/svg", "path");
    pathElement.setAttribute("d", "M37.8127 19.0516L37.1877 37.9688C37.1345 39.5889 36.452 41.1245 35.2851 42.2497C34.1182 43.3749 32.5587 44.0011 30.9377 43.9953H19.0627C17.4427 44.0011 15.8842 43.3758 14.7175 42.252C13.5507 41.1281 12.8675 39.5941 12.8127 37.975L12.1877 19.0516C12.174 18.6372 12.3255 18.2343 12.6089 17.9316C12.8922 17.6289 13.2842 17.4512 13.6986 17.4375C14.113 17.4238 14.5159 17.5753 14.8186 17.8587C15.1213 18.142 15.299 18.534 15.3127 18.9484L15.9377 37.8703C15.9688 38.6781 16.3117 39.4424 16.8945 40.0026C17.4772 40.5629 18.2543 40.8756 19.0627 40.875H30.9377C31.7471 40.8755 32.5252 40.562 33.108 40.0004C33.6909 39.4388 34.0331 38.6729 34.0627 37.8641L34.6877 18.9484C34.7014 18.534 34.8791 18.142 35.1818 17.8587C35.4845 17.5753 35.8874 17.4238 36.3018 17.4375C36.7162 17.4512 37.1082 17.6289 37.3915 17.9316C37.6749 18.2343 37.8264 18.6372 37.8127 19.0516ZM39.8799 12.7563C39.8799 13.1707 39.7153 13.5681 39.4222 13.8611C39.1292 14.1541 38.7318 14.3188 38.3174 14.3188H11.6846C11.2702 14.3188 10.8727 14.1541 10.5797 13.8611C10.2867 13.5681 10.1221 13.1707 10.1221 12.7563C10.1221 12.3419 10.2867 11.9444 10.5797 11.6514C10.8727 11.3584 11.2702 11.1938 11.6846 11.1938H16.5283C17.0234 11.1951 17.5013 11.0122 17.8689 10.6806C18.2366 10.3491 18.4677 9.89258 18.5174 9.4C18.6327 8.24451 19.174 7.17333 20.036 6.39517C20.8979 5.61701 22.0187 5.18761 23.1799 5.19063H26.8205C27.9817 5.18761 29.1025 5.61701 29.9644 6.39517C30.8263 7.17333 31.3677 8.24451 31.483 9.4C31.5327 9.89258 31.7638 10.3491 32.1315 10.6806C32.4991 11.0122 32.977 11.1951 33.4721 11.1938H38.3158C38.7302 11.1938 39.1276 11.3584 39.4207 11.6514C39.7137 11.9444 39.8783 12.3419 39.8783 12.7563H39.8799ZM21.2299 11.1938H28.7736C28.5683 10.7246 28.434 10.2275 28.3752 9.71875C28.3365 9.33361 28.1562 8.97654 27.8693 8.71674C27.5823 8.45693 27.2092 8.31289 26.8221 8.3125H23.1814C22.7944 8.31289 22.4212 8.45693 22.1343 8.71674C21.8473 8.97654 21.667 9.33361 21.6283 9.71875C21.569 10.2276 21.4357 10.7247 21.2299 11.1938ZM22.8033 34.8672V21.5625C22.8033 21.1481 22.6387 20.7507 22.3457 20.4576C22.0526 20.1646 21.6552 20 21.2408 20C20.8264 20 20.429 20.1646 20.136 20.4576C19.8429 20.7507 19.6783 21.1481 19.6783 21.5625V34.8734C19.6783 35.2878 19.8429 35.6853 20.136 35.9783C20.429 36.2713 20.8264 36.4359 21.2408 36.4359C21.6552 36.4359 22.0526 36.2713 22.3457 35.9783C22.6387 35.6853 22.8033 35.2878 22.8033 34.8734V34.8672ZM30.3252 34.8672V21.5625C30.3252 21.1481 30.1606 20.7507 29.8675 20.4576C29.5745 20.1646 29.1771 20 28.7627 20C28.3483 20 27.9509 20.1646 27.6578 20.4576C27.3648 20.7507 27.2002 21.1481 27.2002 21.5625V34.8734C27.2002 35.2878 27.3648 35.6853 27.6578 35.9783C27.9509 36.2713 28.3483 36.4359 28.7627 36.4359C29.1771 36.4359 29.5745 36.2713 29.8675 35.9783C30.1606 35.6853 30.3252 35.2878 30.3252 34.8734V34.8672Z");
    deleteIcon.appendChild(pathElement);

    // Attach the delete function to the click event
    deleteIcon.onclick = function() {
        // Pass the clicked element to the delete function
        deleteFunction(this.parentElement.parentElement);
    };

    return deleteIcon;
}

export function makeEditButton(openEditPage){
    const editIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    editIcon.setAttribute("class", "article_icon edit_icon");
    editIcon.setAttribute("viewBox", "0 -960 960 960");

    // Create the path element with the specified path data
    const pathElement = document.createElementNS("http://www.w3.org/2000/svg", "path");
    pathElement.setAttribute("d", "M160-400v-80h280v80H160Zm0-160v-80h440v80H160Zm0-160v-80h440v80H160Zm360 560v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T863-380L643-160H520Zm300-263-37-37 37 37ZM580-220h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19Z");
    editIcon.appendChild(pathElement);

    // Attach the delete function to the click event
    editIcon.onclick = function(){
        // openEditPage(this.parentElement.parentElement)
        openEditPage(this.parentElement.parentElement)
    }
    // editIcon.onclick = function() 
    //     // Pass the clicked element to the delete function
    //     editFunction(this.parentElement.parentElement);
    // };
    return editIcon;
}

export function addToLS(project, projectValue){

    localStorage.setItem(project, projectValue)

}

export function makeViewsIcon(){
    const viewIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    viewIcon.setAttribute("class", "article_icon edit_icon")
    viewIcon.setAttribute("viewBox", "0 -960 960 960")

    // create the path element with the specified path data
    const pathElement = document.createElementNS("http://www.w3.org/2000/svg", "path");
    pathElement.setAttribute("d", "M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z");
    viewIcon.appendChild(pathElement);

    return viewIcon;
}

export function makeReplyIcon(){
    const replyIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    replyIcon.setAttribute("class", "reply_icon")
    replyIcon.setAttribute("viewBox", "0 -960 960 960")

    // create the path element with the specified path data
    const pathElement = document.createElementNS("http://www.w3.org/2000/svg", "path")
    pathElement.setAttribute("d", "M760-200v-160q0-50-35-85t-85-35H273l144 144-57 56-240-240 240-240 57 56-144 144h367q83 0 141.5 58.5T840-360v160h-80Z")
    replyIcon.appendChild(pathElement)

    return replyIcon;
}
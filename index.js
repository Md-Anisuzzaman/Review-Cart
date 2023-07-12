const btnContainer = document.querySelector(".btn__container");
const forward = document.querySelector(".forward")
const next = document.querySelector(".next")

const comments = [
    {
        comment: "Great work! Keep it up!",
        user_name: "John Persian",
        image: "https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?w=740&t=st=1689132039~exp=1689132639~hmac=78a175a32c12b4c3d9c63e872dc3d801090a2060e904a66ffa5c5d4d9a0a2550",
        user_profession: "Engineer"
    },
    {
        comment: "I love it! Amazing job!",
        user_name: "Emily Header",
        image: "https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?w=740&t=st=1689132039~exp=1689132639~hmac=78a175a32c12b4c3d9c63e872dc3d801090a2060e904a66ffa5c5d4d9a0a2550",
        user_profession: "Designer"
    },
    {
        comment: "Very informative and well-explained!",
        user_name: "Sarah Taylor",
        image: "https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?w=740&t=st=1689132039~exp=1689132639~hmac=78a175a32c12b4c3d9c63e872dc3d801090a2060e904a66ffa5c5d4d9a0a2550",
        user_profession: "Teacher"
    },
    {
        comment: "Impressive work! I'm captivated by your writing!",
        user_name: "Michael Trott",
        image: "https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?w=740&t=st=1689132039~exp=1689132639~hmac=78a175a32c12b4c3d9c63e872dc3d801090a2060e904a66ffa5c5d4d9a0a2550",
        user_profession: "Writer"
    },
    {
        comment: "Well done! Your attention to detail is commendable!",
        user_name: "David",
        image: "https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?w=740&t=st=1689132039~exp=1689132639~hmac=78a175a32c12b4c3d9c63e872dc3d801090a2060e904a66ffa5c5d4d9a0a2550",
        user_profession: "Accountant"
    }
];

console.log();
const par = document.querySelector("p")
const img = document.querySelector(".myImage")
const user = document.querySelector("h3")
const prof = document.querySelector("span")
// console.log(comments[-1].comment);
// btnContainer.addEventListener("click", (e) => {
//     let inc = 0;
//     if (e.target.classList.contains("next")) {
//         inc + 1;
//         par.innerText = `${comments[inc].comment}`
//     }
//     if (e.target.classList.contains("forward")) {
//         if (inc === -1) {
//             inc = 0;
//         }
//         inc += 1;
//         console.log(inc);
//         par.innerText = `${comments[inc].comment}`
//     }
// })



let currentCommentIndex = 0;

const renderComment = (commentIndex) => {
    const comment = comments[commentIndex];
    par.innerText = `" ${comment.comment} "`
    user.innerText = comment.user_name
    img.src = comment.image
    prof.innerText = comment.user_profession
}


const forwardButton = document.querySelector(".forward");
forwardButton.addEventListener("click", () => {
    currentCommentIndex = (currentCommentIndex + 1) % comments.length;
    renderComment(currentCommentIndex);
});

const nextButton = document.querySelector(".next");
nextButton.addEventListener("click", () => {
    currentCommentIndex = (currentCommentIndex - 1 + comments.length) % comments.length;
    renderComment(currentCommentIndex);
});

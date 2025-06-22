// const el = document.getElementById("clickButton");

// el.onclick = function () {
//   console.log("hey i am clicked");
// };

// el.addEventListener("click", () => {
//   console.log("heyt");
// });

// el.addEventListener("click", () => {
//   console.log("hacked");
// });

// const nameBlock = document.getElementById("name-block");

// el.addEventListener("click", () => {
//   if (nameBlock.style.color === "pink") {
//     nameBlock.style.color = "green";
//   } else {
//     nameBlock.style.color = "pink";
//   }
// });

// if we want to remove the children element

const allChildren = document.querySelector("body").children;
console.log(allChildren);

for (let i = 0; i < allChildren.length; i++) {
  allChildren.item(i).addEventListener("click", () => {
    allChildren.item(i).remove();
  });
}

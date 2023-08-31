let suggestion = document.querySelector("h3");
let addFriend = document.querySelector("#add");
let remove = document.querySelector("#remove");
let flag = 0;

addFriend.addEventListener("click", () => {
  if (flag == 1) {
    suggestion.innerHTML = "friend";
    suggestion.style.color = "green";
    addFriend.innerHTML = "Remove" 
    flag = 0;
  } else {
    suggestion.innerHTML = "Stranger";
    suggestion.style.color = "red"; 
    addFriend.innerHTML = "Add Friend"   
    flag = 1;
  }
});



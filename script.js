let red = document.querySelectorAll(".red");
let submit = document.getElementsByClassName("btn-submit")[0];
let hidden0 = document.getElementsByClassName("hidden0")[0];
let hidden1 = document.getElementsByClassName("hidden1")[0];
let select = document.querySelector("#select");
let rating = "";

for (const e of red) {
    e.addEventListener("click",(v)=>{
        rating = v.target.innerText;
    })
};

submit.addEventListener("click",()=>{

    if (rating == "") {
       rating="no rating";
        select.innerText = "You selected " + rating + " out of 5";
        hidden0.style.display = "none";
        hidden1.style.display = "inline-block"
    } else {    
        select.textContent = "You selected " + rating + " out of 5";
        hidden0.style.display = "none"
        hidden1.style.display = "inline-block"
   }

});
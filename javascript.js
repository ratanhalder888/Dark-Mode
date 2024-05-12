let modeBtn = document.querySelector("#mode");
let body = document.querySelector("body");
let curMode = "Light";
let butOver = document.querySelector("#butOver");

 modeBtn.addEventListener("click", () => {
     if (curMode === "Light") {
         modeBtn.textContent = "light mode";
         butOver.textContent = "LIGHT MODE"
         curMode = "Dark";
         body.classList.add("dark");
         body.classList.remove("light")
     } else {
         modeBtn.textContent = "dark mode";
         butOver.textContent = "DARK MODE";
         curMode = "Light";
         body.classList.add("light");
         body.classList.remove("dark");
     }
     console.log(curMode);

   });



 
 butOver.addEventListener("mouseover", () => {
     if (curMode === "Light") {
         modeBtn.textContent = "light mode";
         butOver.textContent = "LIGHT MODE";
         curMode = "Dark";
         body.classList.add("dark");
         body.classList.remove("light")
     } else {
         modeBtn.textContent = "dark mode";
         butOver.textContent = "DARK MODE";
         curMode = "Light";
         body.classList.add("light");
         body.classList.remove("dark");
     }
     console.log(curMode);
 }
 )


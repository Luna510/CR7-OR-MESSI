let button = document.querySelector("button");
let result = document.querySelector(".result");

button.onclick = function() {
    let ans1 = document.querySelector(".q1").value;
    let ans2 = document.querySelector(".q2").value;
    console.log(ans1);
    if (ans1 === '10' && ans2 === "PINK JERSEY") {
        result.innerHTML = "YOU ARE MESSI";
    }
    
  if (ans1 === '7' && ans2 === "YELLOW JERSEY") {
        result.innerHTML = "YOU ARE RONALDO";
        
        
    }



};





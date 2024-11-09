var a=Math.random()
var random=Math.floor(a*10)+1
var button=document.getElementById("check")
var score=document.getElementById("score")
var result=document.getElementById("para")
scr=10
var lose=document.querySelector(".popup-lose")
var win=document.querySelector(".popup-win")
var overlay=document.querySelector(".overlay")
var back=document.getElementById("back")
function check()
{
    let input=document.getElementById("num").value
    if(isNaN(input) || input<1 || input>10)
        {
            alert("Please enter number from 1 to 10")
            return;
        }
    if(random==input)
        {
          result.textContent="Right"  
          win.style.display="block"
          overlay.style.display="block"
        }
    else
    {
        result.textContent="Wrong"
        scr--
        score.textContent="Score: " + scr
  
if(scr==0)
    {
        lose.style.display="block"
        overlay.style.display="block"
    }
}
}
function resetGame() {
    lose.style.display = "none";
    overlay.style.display = "none";
    win.style.display = "none";
    scr = 10;
    score.textContent = "Score: " + scr;
    result.textContent = "Your Result will be displayed here";
    random = Math.floor(Math.random() * 10) + 1;
    document.getElementById("num").value = ""
}
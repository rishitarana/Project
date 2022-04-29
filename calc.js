let screen = document.getElementById("screen");
console.log("hi",screen)
buttons = document.querySelectorAll("button");
console.log("hu",buttons)
let screenValue = "";
for (item of buttons) {
  item.addEventListener("click", (e) => {
    buttonText = e.target.innerText;
    console.log("hui",buttonText);

    if (buttonText == "C") {
      screenValue = "";
      screen.innerText = screenValue;
    } else if (buttonText == "=") {
      screen.innerText = eval(screenValue);
      screenValue = eval(screenValue);
    } 
    else if(buttonText=="(" || buttonText==")"){
       screenValue += buttonText;
       screen.innerText = screenValue;
    }
    else {
      screenValue += buttonText;
      screen.innerText = screenValue;
    }
  });
}

function ValidateEmail(){
    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let input = document.getElementById("input");
    let a = document.getElementsByTagName("a");

    if (input.value.match(validRegex)) {

        a[0].href="sub.html";
    
        return true;
    
      } 
      else {
       let valid = document.getElementById("valid");
       let border = document.getElementById("input");
       border.style.border = "1px solid #FF5B66";
       border.style.backgroundColor = "rgb(255, 91, 102, 10%)";
       border.style.color = "#FF5B66";
       border.placeholder = "ash#loremcompany.com"
       valid.style.display = "inline";
      return false;
    }
}
/* ========================WRITE YOUR JS FROM HERE======================== */
function Validate()
{
var mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
if(document.getElementById("email").value.match(mailformat))
{
alert("You have entered a valid email address!");    //The pop up alert for a valid email address
}
else
{
alert("You have entered an invalid email address!");    //The pop up alert for an invalid email address
return false;
}
var x = document.getElementById("username").value;
  if (x == "") {
    alert("userName must be filled out");
    return false;
  }
  if (document.getElementById("pswd1")!=document.getElementById("pswd2")) {
    alert("Password do not match");
    return false;
  }
}

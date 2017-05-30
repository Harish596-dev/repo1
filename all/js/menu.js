//
  // Menu Bar
//
document.getElementById("myTopNav").addEventListener("click", menuChange);
function menuChange()
{
  var x = document.getElementById("myTopNav");
  if (x.className === "topnav")
  {
    x.className += " responsive";
  }
  else
  {
    x.className = "topnav";
  }
};

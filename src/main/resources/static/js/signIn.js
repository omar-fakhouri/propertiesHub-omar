 localStorage.removeItem("id");
    $("#signInForm").submit(function (event) {
  event.preventDefault();

   email= $("#email").val(),
   password = $("#password").val()
  $.ajax({
  type: "Get",
  url: "/users/login/"+email+"/"+password,
  contentType: "application/json",
  success: function (user) {
  if(user==null){
     document.getElementById("error-message").style.display = "block";

  }
  else{

  localStorage.setItem("id", user.id);
  window.location.href="index.html";
  }

},
  error: function (error) {
  alert("sorry, some thing went wrong.", error);
}
});
});

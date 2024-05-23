var user;

$.ajax({
    type: "Get",
    url: "/users/findUserId/" + localStorage.getItem("id"),
    success: function(userData) {
        user = userData; // Assigning userData to the global user object
        document.getElementById("phoneNumber-pr").innerText = user.phoneNumber;
        document.getElementById("userName-pr").innerText = user.userName;

        var hiddenPassword = user.password.replace(/./g, '*');
        document.getElementById("password-pr").innerText = hiddenPassword;

        document.getElementById("email-pr").innerText = user.email;

        document.getElementById("phoneNumber-pu").innerText = user.phoneNumber;
        document.getElementById("userName-pu").innerText = user.userName;
        document.getElementById("email-pu").innerText = user.email;
    },
    error: function(error) {
        console.log("Error finding your account", error);
    }
});

function logout(){
    localStorage.clear();
      window.location.href="signIn.html";
    }


// Toggle password visibility when eye icon is clicked
var eyeIcon = document.querySelector('.fa-eye');
var passwordField = document.getElementById('password-pr');
eyeIcon.addEventListener('click', function() {
    if (passwordField.innerText.includes('*')) {
        // If password is hidden, show it
        passwordField.innerText = user.password;
        eyeIcon.classList.remove('fa-eye');
        eyeIcon.classList.add('fa-eye-slash');
    } else {
        // If password is visible, hide it
        var hiddenPassword = user.password.replace(/./g, '*');
        passwordField.innerText = hiddenPassword;
        eyeIcon.classList.remove('fa-eye-slash');
        eyeIcon.classList.add('fa-eye');
    }
});


        $.ajax({
            type: "Get",
            url: "/realEstate/getRealEstateCount/"+localStorage.getItem("id"),
            success: function (realEstateCount) {
             document.getElementById("PublishedRealEstate-pr").innerText = realEstateCount;
              document.getElementById("PublishedRealEstate-pu").innerText = realEstateCount;
            },
            error: function (error) {
                console.log("Error getting your Published real estate", error);
            }
        });




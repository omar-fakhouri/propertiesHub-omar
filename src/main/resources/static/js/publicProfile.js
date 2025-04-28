var userId;
$.ajax({
    type: "Get",
    url: "/users/findUserId/" + (getQueryParam('id')),
    success: function(user) {
        document.getElementById("phoneNumber").innerText = user.phoneNumber;
        document.getElementById("userName").innerText = user.userName;
        document.getElementById("email").innerText = user.email;
        document.getElementById("showUserPropertiesBtn").innerText = "show "+user.userName+"'s properties";
        document.getElementById("thUserName").innerText = user.userName+"'s properties";
        if(user.profileImage==null){
            document.getElementById("profileImage").src = 'https://drive.google.com/file/d/1IK7XX6qLswVpZTsBAwn1NNl3P6YY40pN/preview';    
        }else{
            document.getElementById("profileImage").src = user.profileImage;
        }
        userId=user.id;
    },
    error: function(error) {
        console.log("Error finding your account", error);
    }
});

function getQueryParam(name)
{
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
 }


 $.ajax({
    type: "Get",
    url: "/realEstate/getRealEstateCount/"+(getQueryParam('id')),
    success: function (realEstateCount) {
      document.getElementById("PublishedRealEstate").innerText = realEstateCount;
    },
    error: function (error) {
        console.log("Error getting your Published real estate", error);
    }
});

document.addEventListener("DOMContentLoaded", function() {
    var btn = document.getElementById('showUserPropertiesBtn');

    // Event listener for button click
    btn.addEventListener("click", function() {
        // Change background color of the button
        btn.style.background = "gray";
        btn.style.border = "gray";
        document.getElementById("listStart").style.display ="block";
        showProperties();
        
    });

});

function showProperties(){
    
    $.ajax({
        type: "GET",
        url: "/realEstate/getAll/" + userId,
        success: function (realEstate) {
              if(realEstate==null){
                  document.getElementById("noRealEstate").innerText ="No real estates found. ";
                    var tableBody = $("#list tbody");
                           tableBody.empty();
                 }
              else{
              document.getElementById("noRealEstate").innerText ="";
              fillTable(realEstate);
              }
               },
            error: function (error) {
                console.error("Error fetching product data: ", error);
            }
    });
    }
    


function fillTable(data) {
    var tableBody = $("#list tbody");
        tableBody.empty(); // Clear existing rows

    // Iterate through the real estate data and create rows
    $.each(data, function(index, estate) {
                var row = `
                    <tr id="estate_${estate.id}" class="candidates-list" style="background-color:rgb(231, 245, 245);margin-left: 10px;border: solid 2px  rgb(176, 206, 255);border-radius: 10px;display:block">
                        <td class="title" style="margin-left:10px">
                            <div class="thumb">
                              <iframe src="${estate.mainImage}" class="img-fluid" style="width:200px;hight:70px;border-radius: 30px; border: 1px solid rgb(41, 168, 215)"  ></iframe>
                            </div>
                            <div class="candidate-list-details">
                                <div class="candidate-list-info">
                                    <div class="candidate-list-title">
                                        <h5 class="mb-0"><a href="#" style="font-size:20px;" id="name">${estate.name}</a></h5>
                                    </div>
                                    <div class="candidate-list-option">
                                        <ul class="list-unstyled">
                                            <li style="font-size:15px"><i class="fas fa-map-marker-alt pr-1"></i><span id="city">${estate.city}</span></li>
                                            <li style="font-size:15px"><span id="area">area: ${estate.area}</span>m</li>
                                            <li style="font-size:15px"><span id="area">${estate.price}</span>$</li>
                                            <li style="font-size:15px"><span id="area">for ${estate.saleOrRent}</span></li>
                                            <li style="font-size:15px"><span id="area">${estate.realEstateType}</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td style="margin:10px 0;">
                            <ul class="list-unstyled mb-0 d-flex justify-content-start">
                                <li><a onclick="goProperty(${estate.id})" class="text-info" data-toggle="tooltip" style="background-color: rgb(186, 232, 255); padding: 5px; border: solid 2px rgb(74, 171, 255); border-radius: 10px; font-size: 15px; width: 200px; display: block; text-align: center;">Show Real Estate</a></li>
                            </ul>
                        </td>
                    </tr>
                `;
                tableBody.append(row);
                
    });
}

function goProperty(id)
{
  localStorage.setItem("real-estate", id);
  window.location.href="property.html";
}

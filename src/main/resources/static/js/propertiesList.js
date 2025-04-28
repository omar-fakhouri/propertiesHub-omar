
    $.ajax({
        type: "GET",
        url: "/users/getFa/" + localStorage.getItem("id"),
        success: function (abc) {
              var realEstatesId=abc;
              if(realEstatesId!=null){
                $.ajax({
                    type: "GET",
                    url: "/realEstate/getAllByArrayList/"+realEstatesId,
                    success: function (realEstates) {
                        if(realEstates==null){
                            document.getElementById("noRealEstate").innerText ="You do not have any Favorite real estates.";
                           document.getElementById("noRealEstatea").innerText ="";
                            var tableBody = $("#list tbody");
                                   tableBody.empty(); // Clear existing rows
                        }
                        else
                     fillFaTable(realEstates);
                          },
                        error: function (error) {
                            console.error("Error fetching product data: ", error);
                        }
                });}
                else{
                document.getElementById("noRealEstate").innerText ="You do not have any Favorite real estates.";
                document.getElementById("noRealEstatea").innerText ="";}
              },
            error: function (error) {
                console.error("Error fetching product data: ", error);
            }
    });


    function fillMyTable(data) {
              document.getElementById("noRealEstate").innerText ="";
        var tableBody = $("#list tbody");
        tableBody.empty(); // Clear existing rows

        // Iterate through the real estate data and create rows
        $.each(data, function(index, estate) {
            $.ajax({
                type: "GET",
                url: "/realEstate/checkIsActivate/" + estate.id,
                success: function (isActivate) {
    
                    const color = isActivate ? 'rgb(52, 152, 219)' : 'grey';
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
                            <td>
                                <ul class="list-unstyled mb-0 d-flex justify-content-end">
                                    <a onclick="deactivatePro(this, ${estate.id})" class="deactivate-button hover-btn" data-toggle="tooltip" title="Deactivate" style="margin:0 10px 0 5px; color:${color}"><i class="fas fa-ban"></i></a>
                                    <li><a onclick="confirmDelete(${estate.id})" class="text-danger hover-btn" data-toggle="tooltip" title="" data-original-title="Delete"><i class="far fa-trash-alt"></i></a></li>
                                </ul>
                            </td>
                        </tr>
                    `;
                    tableBody.append(row);
                },
                error: function (error) {
                    alert("Error checking favorite for property ID " + property.id);
                }
            });
            

        });
    }



    function fillFaTable(data) {
              document.getElementById("noRealEstate").innerText ="";
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
                                                <h5 class="mb-0"><a href="#" style="font-size:20px;" id="name">${estate.availability ? estate.name : estate.name + ' (Unavailable)'}</a></h5>
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
                                        <li><button onclick="removeEstate(${estate.id})" class="btn btn-danger" style="background-color: #ffcccc; border: solid 2px #ff3333; border-radius: 10px; font-size: 15px; width: 150px; display: block; text-align: center;color: #ff3333;" >Remove</button></li>
                                    </ul>
                                </td>
                            </tr>
                        `;
                        tableBody.append(row);
                            })
            
        }


    function deactivatePro(ele, id) {
        if ($(ele).find("i").css("color") === 'rgb(52, 152, 219)') {
            $.ajax({
            type: "PUT",
            url: "/realEstate/deactivatePro/" + id,
            contentType: "application/json",
            success: function (response) {
                $(ele).find("i").css("color", "grey");
                alert(response);
            },
            error: function (error) {
                alert("Error deactivating the real estate: " + error);
            }
        });
     }
     else{
        $.ajax({
            type: "PUT",
            url: "/realEstate/activatePro/" + id,
            contentType: "application/json",
            success: function (response) {
                $(ele).find("i").css("color", "rgb(52, 152, 219)");
                alert(response);
            },
            error: function (error) {
                alert("Error deactivating the real estate: " + error);
            }
        });
     }
    }
    
    function confirmDelete(id) {
      if (confirm("Are you sure you want to delete?")) {
        // If user clicks 'OK' (yes), execute delete function
        deletePro(id);
      } else {
        return;
      }
    }

function deletePro(id) {
    $.ajax({
        type: "DELETE",
        url: "/realEstate/deletePro/" + id,
        contentType: "application/json",
        success: function (response) {
            $("#estate_" + id).remove();
        },
        error: function (error) {
            alert("Error deleting the real estate: " + error);
        }
    });
}

function removeEstate(realEstateId){
 $.ajax({
        type: "PUT",
        url: "/users/"+localStorage.getItem("id")+"/removeFromFavorites/"+realEstateId,
        success: function (String) {
            $("#estate_" + realEstateId).remove();

        },
        error: function (error) {
            console.log("Error removing this real estate From Favorites ", error);
        }
    });

}

//going to property page page
function goProperty(id)
{
  localStorage.setItem("real-estate", id);
  window.location.href="property.html";
}


function showMyProperties(){

document.getElementById("favoritesBtn").style.color = "#1a1c32";
document.getElementById("myPropertiesBtn").style.color = "rgba(9,185,144,255)";
var tableBody = $("#list tbody");
tableBody.empty();
$.ajax({
    type: "GET",
    url: "/realEstate/getAll/" + localStorage.getItem("id"),
    success: function (realEstate) {
          if(realEstate==null){
            
              document.getElementById("noRealEstate").innerText ="You do not have any real estates, ";
               document.getElementById("noRealEstatea").innerText ="add one.";
                var tableBody = $("#list tbody");
                       tableBody.empty();
             }
          else{
          document.getElementById("noRealEstate").innerText ="";
          fillMyTable(realEstate);
          }
           },
        error: function (error) {
            console.error("Error fetching product data: ", error);
        }
});
}


function showFaProperties(){
document.getElementById("favoritesBtn").style.color = "rgba(9,185,144,255)";
document.getElementById("myPropertiesBtn").style.color = "#1a1c32";
document.getElementById("noRealEstate").innerText ="";
document.getElementById("noRealEstatea").innerText ="";
var tableBody = $("#list tbody");
tableBody.empty();
$.ajax({
    type: "GET",
    url: "/users/getFa/" + localStorage.getItem("id"),
    success: function (abc) {
          var realEstatesId=abc;
          if(realEstatesId!=null){
            $.ajax({
                type: "GET",
                url: "/realEstate/getAllByArrayList/"+realEstatesId,
                success: function (realEstates) {
                    if(realEstates==null){
                        document.getElementById("noRealEstate").innerText ="You do not have any Favorite real estates.";
                       document.getElementById("noRealEstatea").innerText ="";
                        var tableBody = $("#list tbody");
                               tableBody.empty(); // Clear existing rows
                    }
                    else
                 fillFaTable(realEstates);
                      },
                    error: function (error) {
                        console.error("Error fetching product data: ", error);
                    }
            });}
            else{
            document.getElementById("noRealEstate").innerText ="You do not have any Favorite real estates.";
            document.getElementById("noRealEstatea").innerText ="";}
          },
        error: function (error) {
            console.error("Error fetching product data: ", error);
        }
});
    }


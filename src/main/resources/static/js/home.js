
$("#search").submit(function (event) {
    event.preventDefault();
    city = $("#city").val(),
    saleOrRent =$("#saleOrRent").val(),
    realEstateType = $("#realEstateType").val(),
    bedRooms = $("#bedRooms").val(),
    minPrice = $("#minPrice").val(),
    maxPrice = $("#maxPrice").val(),
    $.ajax({
        type: "GET",
        url: "/realEstate/search/"+city+"/"+saleOrRent+"/"+realEstateType+"/"+bedRooms+"/"+minPrice+"/"+maxPrice,
        contentType: "application/json",
        success: function (realEstate) {
            const container = document.getElementById('list');
            container.innerHTML = '';
            document.getElementById("welWord").style.display = "none";
            if (realEstate == null) {
                document.getElementById("resultsWord").style.display = "none";
                document.getElementById("noWord").style.display = "block";
            } else {
                document.getElementById("resultsWord").style.display = "block";
                document.getElementById("noWord").style.display = "none";
                document.getElementById("realEstatesCount").innerText = realEstate.length;

                realEstate.forEach((property) => {
                    if(localStorage.getItem("id") != null){
                        $.ajax({
                        type: "GET",
                        url: "/users/checkIsFav/"+ property.id+"/"+localStorage.getItem("id"), // Assuming this is the endpoint to check if the property is in favorites
                        success: function (isFavorite) {
                            const heartImageSrc = isFavorite ? 'img/red-heart.png' : 'img/white-heart.png';
                            container.innerHTML += `
                                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                    <div class="property-item rounded overflow-hidden">
                                        <div class="position-relative overflow-hidden">
                                            <a onclick="goProperty(${property.id})">
                                                <img class="img-fluid"  src="img/property-3.jpg" alt="" ></a>
                                            <div class="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For ${property.saleOrRent}</div>
                                            <div class="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">${property.realEstateType}</div>
                                        </div>
                                        <div class="p-4 pb-0">
                                            <img src="${heartImageSrc}" alt="Add to Favorites" class="add-to-favorites trans" onclick="toggleFavorite(this,${property.id})" id="heart-img">
                                            <h5 class="text-primary mb-3">${property.price}$</h5>
                                            <a class="d-block h5 mb-2" onclick="goProperty(${property.id})">${property.name}</a>
                                            <p><i class="fa fa-map-marker-alt text-primary me-2"></i>${property.city}</p>
                                        </div>
                                        <div class="d-flex border-top">
                                            <small class="flex-fill text-center border-end py-2"><i class="fa fa-ruler-combined text-primary me-2"></i>${property.area} Sq m</small>
                                            <small class="flex-fill text-center border-end py-2"><i class="fa fa-bed text-primary me-2"></i>${property.bedrooms} Bed</small>
                                            <small class="flex-fill text-center py-2"><i class="fa fa-bath text-primary me-2"></i>${property.bathrooms} Bath</small>
                                        </div>
                                    </div>
                                </div>
                            `;
                        },
                        error: function (error) {
                            alert("Error checking favorite for property ID " + property.id);
                        }
                    });
                }
                else{
                               container.innerHTML += `
                                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                    <div class="property-item rounded overflow-hidden">
                                        <div class="position-relative overflow-hidden">
                                            <a onclick="goProperty(${property.id})">
                                                <img class="img-fluid"  src="img/property-3.jpg" alt="" ></a>
                                            <div class="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For ${property.saleOrRent}</div>
                                            <div class="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">${property.realEstateType}</div>
                                        </div>
                                        <div class="p-4 pb-0">
                                            <img src="img/white-heart.png" alt="Add to Favorites" class="add-to-favorites trans" onclick="alertLogIn()" id="heart-img">
                                            <h5 class="text-primary mb-3">${property.price}$</h5>
                                            <a class="d-block h5 mb-2" onclick="goProperty(${property.id})">${property.name}</a>
                                            <p><i class="fa fa-map-marker-alt text-primary me-2"></i>${property.city}</p>
                                        </div>
                                        <div class="d-flex border-top">
                                            <small class="flex-fill text-center border-end py-2"><i class="fa fa-ruler-combined text-primary me-2"></i>${property.area} Sq m</small>
                                            <small class="flex-fill text-center border-end py-2"><i class="fa fa-bed text-primary me-2"></i>${property.bedrooms} Bed</small>
                                            <small class="flex-fill text-center py-2"><i class="fa fa-bath text-primary me-2"></i>${property.bathrooms} Bath</small>
                                        </div>
                                    </div>
                                </div>
                            `;
                }
                });
            }
        },
        error: function (error) {
            alert("Error searching ", error);
        }
    });
    window.scrollTo({
        top: 550,
        behavior: 'smooth'
    });
});

function alertLogIn(){
    alert("You must log in before adding any property to your favorites");
}

    //going to property page page
function goProperty(id)
{
localStorage.setItem("real-estate", id);
    window.location.href="property.html";
}




function toggleFavorite(element,realEstateId) {
    if (element.src.endsWith("white-heart.png")) {
     //   element.src = "img/red-heart.png"; // Change the image to red heart
        element.style.opacity = "0";
        setTimeout(function() {
            element.src  = "img/red-heart.png";
          element.alt= "img/red-heart.png";
          element.style.opacity = "1";
        }, 200);
         $.ajax({
                    type: "PUT",
                    url: "/users/"+localStorage.getItem("id")+"/favorites/"+realEstateId,
                    success: function (String) {
                    },
                    error: function (error) {
                        console.log("Error saving this real estate", error);
                    }
                });
            }
            else {
     //   element.src = "img/white-heart.png";kkk
     element.style.opacity = "0";
     setTimeout(function() {
         element.src  = "img/white-heart.png";
       element.alt= "img/white-heart.png";
       element.style.opacity = "1";
     }, 200);
         $.ajax({
                    type: "PUT",
                    url: "/users/"+localStorage.getItem("id")+"/removeFromFavorites/"+realEstateId,
                    success: function (String) {
                    },
                    error: function (error) {
                        console.log("Error saving this real estate", error);
                    }
                });
            }
    }


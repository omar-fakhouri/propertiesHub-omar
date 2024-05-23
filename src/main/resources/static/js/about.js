$.ajax({
    type: "Get",
    url: "/realEstate/getRealEstates",
    success: function(realEstate) {
        document.getElementById("apartment").innerText = realEstate[0]+" apartments";
        document.getElementById("villa").innerText = realEstate[1]+" villas";
        document.getElementById("house").innerText = realEstate[2]+" houses";
        document.getElementById("condo").innerText = realEstate[3]+" condo";
    },
    error: function(error) {
        console.log("Error", error);
    }
});

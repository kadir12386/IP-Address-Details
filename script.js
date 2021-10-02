
// // For Ip Loading

function getdata() {
    const url ="https://freegeoip.app/json/"
    fetch(url)
    .then(response => response.json())
    .then(data => {
        initMap(data)
        createElements(data);
    });
}

// Creating Map for Ip Location
// function initMap(data){
//     let lati = data.latitude;
//     let long = data.longitude;
//     var map = new google.maps.Map(document.getElementById("map"), {
//     center: { lat: lati, lng: long },
//     zoom: 8,
//  });
//     var marker = new google.maps.Marker({
//         position: {lat:lati, lng:long},
//         map:map
//     });
// }

// Creating and updating Html Elements
function createElements(data){
    // console.log("in HTML",data)
    const ip_add = document.querySelector(".ip");
    ip_add.innerHTML ="IP Adress:"+data.ip;
    const la_det = document.querySelector(".latitude");
    la_det.innerHTML ="Latitude:"+data.latitude;
    const lo_det = document.querySelector(".longitude");
    lo_det.innerHTML ="Longitude:"+data.longitude;
    const co_det = document.querySelector(".country");
    co_det.innerHTML ="Country:"+data.country_name;
    const ci_det = document.querySelector(".city");
    ci_det.innerHTML ="City:"+data.city;
    const zc_det = document.querySelector(".zipcode");
    zc_det.innerHTML ="Zip-Code:"+data.zip_code;
}



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
function initMap(data){
    let lati = data.latitude;
    let long = data.longitude;
    var map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: lati, lng: long },
    zoom: 8,
 });
    var marker = new google.maps.Marker({
        position: {lat:lati, lng:long},
        map:map
    });
}

// Creating and updating Html Elements
function createElements(data){
    // console.log("in HTML",data)
    const ip = document.querySelector(".ip");
    ip.innerHTML ="IP Adress:"+data.ip;
    const la = document.querySelector(".latitude");
    la.innerHTML ="Latitude:"+data.latitude;
    const lo = document.querySelector(".longitude");
    lo.innerHTML ="Longitude:"+data.longitude;
    const co = document.querySelector(".country");
    co.innerHTML ="Country:"+data.country_name;
    const ci = document.querySelector(".city");
    ci.innerHTML ="City:"+data.city;
    const zc = document.querySelector(".zipcode");
    zc.innerHTML ="Zip-Code:"+data.zip_code;
}


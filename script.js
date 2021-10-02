
// // For Ip Loading

function getdata() {
    const url ="https://freegeoip.app/json/"
    fetch(url)
    .then(response => response.json())
    .then(data => {
        createElements(data);
    });
}

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
}


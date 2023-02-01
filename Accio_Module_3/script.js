let url=''
var firedAlready = false;
function getLocation() {
    console.log("step1")
    if (navigator.geolocation) {
            navigator.geolocation.watchPosition(showPosition);
    } else {
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }
  function showPosition(position) {
    if(!firedAlready) {
        firedAlready = true;
       url=`https://api.geoapify.com/v1/geocode/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&format=json&apiKey=127a41d65ddc43478357a7ca1ddbebe3`
      console.log("urrrr==>",url)
      getip(url)
      async function getip(url){
        fetch(url)
        .then(response => response.text())
        .then(data => {
          let finalData=JSON.parse(data).results[0]
          console.log(finalData);
          document.getElementById('id3').innerHTML=finalData.timezone.name
          document.getElementById('id4').innerHTML=finalData.lat
          document.getElementById('id5').innerHTML=finalData.lon
          document.getElementById('id6').innerHTML=finalData.timezone.offset_STD
          document.getElementById('id1').innerHTML=finalData.timezone.offset_STD_seconds
          document.getElementById('id7').innerHTML=finalData.timezone.offset_DST
          document.getElementById('id8').innerHTML=finalData.timezone.offset_DST_seconds
          document.getElementById('id9').innerHTML=finalData.country
          document.getElementById('id10').innerHTML=finalData.postcode
          document.getElementById('id2').innerHTML=finalData.city
        })
        .catch(error => {
          console.error(error);
        });
     }
    }
 }
  getLocation()
  
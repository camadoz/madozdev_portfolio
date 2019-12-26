


var API_key = 'AIzaSyB9811_bTr_LFxMpe06ZAxBuJiQDn3VHV8';
var weather_api_key = 'a238910df31e98e2626a88484e5407ca';
var txtSource = "";

var txtTarget = document.getElementById("txtTarget");

var request = false;

//check browser
if (window.XMLHttpRequest) {
    request = new XMLHttpRequest();

} else if (window.ActiveXObject) {
    request = new ActiveXObject("Microsoft.XMLHTTP");
}


$("#btnTranslate").click(function () {


    var txtSource = $('#txtSource').val();
    var url = "https://www.googleapis.com/language/translate/v2?q=" + txtSource + "&target=fr&source=en&key=" + API_key + "";


    request.onreadystatechange = function ()
    {
        if (request.readyState == 4 && request.status == 200) {
            //parse into JSON
            var json = JSON.parse(request.responseText);
            //raw return value
            var translatedText = json.data.translations[0].translatedText;
            //cleanup	
            translatedText = translatedText.replace(/&quot;/g, '"');
            //output
            txtTarget.value = translatedText;
        }
    }
    request.open('GET', url, true);
    
    request.send(null);
});


$("#btnWeather").click(function () {

    //Geolocation section
    var center = new google.maps.LatLng(0.0, 0.0);
    var mapOptions = null;
    var map = null;
    var geocoder = null;
    var infowindow = null;
    var weather_api_key = 'AIzaSyB9811_bTr_LFxMpe06ZAxBuJiQDn3VHV8';
    let location = "";
    var latitude = 0.0;
    var longitude = 0.0;

    function initialize() {

        mapOptions = {
            zoom: 7,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            center: center
        };

        map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
        geocoder = new google.maps.Geocoder;
        infowindow = new google.maps.InfoWindow;

        var marker = new google.maps.Marker({
            map: map,
            position: center
        });


        //======================== Current location =============

        navigator.geolocation.getCurrentPosition(function (position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            var latitude = Number(pos.lat);
            var longitude = Number(pos.lng);
            latitude_formated = latitude.toFixed(4);
            longitude_formated = longitude.toFixed(4);

            $("#latitude").val(latitude_formated);

            $("#longitude").val(longitude_formated);

            $("#txtLatitude").text(latitude_formated + "°");
            $("#txtLongitude").text(longitude_formated + "°");


            latitude = pos.lat;
            longitude = pos.lng;

            getWeather(pos.lat, pos.lng);

            infowindow.setPosition(pos);
            infowindow.setContent('Location found.');
            infowindow.open(map);
            map.setCenter(pos);
geocodeLatLng(geocoder,map, infowindow,latitude,longitude);
        }, function () {
            //handleLocationError(true, infoWindow, map.getCenter());
        });

        //====================================================

        
    }

    initialize();

    function geocodeLatLng(geocoder, map, infowindow, latitude, longitude) {
 

        //var latitude = $("#latitude").val();
       //var longitude = $("#longitude").val();
        var latitude = $("#txtLatitude").text();
        var longitude = $("#txtLongitude").text();
               
        var latlng = { lat: parseFloat(latitude), lng: parseFloat(longitude) };
        geocoder.geocode({ 'location': latlng }, function (results, status) {
            if (status === 'OK') {
                if (results[0]) {
                    map.setZoom(11);
                    var marker = new google.maps.Marker({
                        position: latlng,
                        map: map
                    });
                    let addressfr = results[0].address_components;

                    console.log(addressfr[0].short_name + " " + addressfr[1].short_name + " " + addressfr[2].short_name);
                    

                    infowindow.setContent(results[0].formatted_address);

                    $("#location2").text(addressfr[0].short_name + " " + addressfr[1].short_name + " " + addressfr[2].short_name);
                    $("#txtAddressLocation").text(addressfr[0].short_name + " " + addressfr[1].short_name + " " + addressfr[2].short_name);
                    infowindow.open(map, marker);
                }
                else {
                    //window.alert('No results found');
                }
            }
            else {
                //window.alert('Geocoder failed due to: ' + status);
            }
        });


        var options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        };

        

        navigator.geolocation.getCurrentPosition(success, error, options);
    }//End of geolocation function

    function success(pos) {
        var crd = pos.coords;

        console.log('Your current position is:');
        console.log(`Latitude : ${crd.latitude}`);
        console.log(`Longitude: ${crd.longitude}`);
        console.log(`More or less ${crd.accuracy} meters.`);
    }

    function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    function getWeather(latitude,longitude)
    {

        var weather_api_key = 'a238910df31e98e2626a88484e5407ca';
        //Build url 
        var url = "https://api.darksky.net/forecast/" + weather_api_key + "/" + latitude + "," + longitude + "";

        //Call API 

        $.ajax({
            type: "GET",
            url: url,
            crossDomain: true,
            dataType: 'jsonp',
            success: function (results) {
                console.log(results.currently.summary);


                $("#summary").text(results.currently.summary);

                if (results.currently.summary == "Clear") {

                    $("#summary").append("<img src=\"images/day.svg\" \/>");

                }
                else if (results.currently.summary == "Mostly Cloudy") {
                    $("#summary").append("<img style=\" padding-left:20px;\" src=\"images/cloudy.svg\" \/>");
                }
                else if (results.currently.summary == "Overcast") {
                    $("#summary").append("<img style=\" padding-left:20px;\" src=\"images/cloudy-day-1.svg\" \/>");
                }

                $("#timezone").text(results.timezone);
                $("#temperature").text(results.currently.temperature + " F");

                $("#dewPoint").text(results.currently.dewPoint + " F");
                $("#humidity").text(results.currently.humidity + "%");
                $("#pressure").text(results.currently.pressure + " mbar");
                $("#windSpeed").text(results.currently.windSpeed + "mbar");
                $("#windSpeed").text(results.currently.uvIndex + "mbar");
                $("#windSpeed").text(results.currently.visibility + "mbar");
                $("#ozone").text(results.currently.ozone + "mbar");

                $("#precipProbability").text(results.currently.precipProbability + " %");
            }
        });

    }

});





/*******************************************************************************
Client ID: 16437
Client Secret:	dd28359ad869748580c826c8018f3676403abe0e
Your Access Token: e0fe44acef9298ee3d51e683e233e1cd9b00e657 (permissions: public)
App Name: Cycler
MY User ID: 7063168
Rate Limits (?)	600 requests every 15 minutes, 30000 daily
*******************************************************************************/

var myAppID = '16437';
var myUserID = 7063168;
var myPublicToken = "e0fe44acef9298ee3d51e683e233e1cd9b00e657";
var myPrivateToken = "5790071f9d2df8f76786447c9067324aadc924b2"; // Not VALID

function authorize(client_id, response_type, redirect_uri, scope, state, approval_prompt) {
  this.client_id = myAppID;
  this.response_type = "code";
  this.redirect_uri = "http://localhost/exchange_token";
  this.scope = "view_private"; //options://'public', 'write', 'view_private', 'view_private,write'
  this.state="mystate";
  this.approval_prompt="force";
}


function athlete(accessToken ,id, Fname, Lname, sex, city, state, country, pic) {
  this.accessToken = accessToken;
  this.id = id;
  this.Fname = Fname;
  this.Lname = Lname;
  this.sex = sex;
  this.city = city;
  this.state = state;
  this.country = country;
  this.pic  = pic;
  //this.sports = {sports};
}


/******************* CORS WON'T WORK *****************************************
document.addEventListener('DOMContentLoaded', bindButtons);
var authReq = new XMLHttpRequest();
function bindButtons(){
  document.getElementById('userAuth').addEventListener('click', function(event){
    //resuest user access token
//    var authReq = new XMLHttpRequest();
    var authUser = new authorize();
    var url = "https://www.strava.com/oauth/authorize?";
    authReq.open('GET', url+"client_id="+authUser.client_id+"&response_type="+authUser.response_type+"&redirect_uri="+authUser.redirect_uri+"&scope="+authUser.scope+"&state="+authUser.state+"&approval_prompt="+authUser.approval_prompt, true);
    authReq.addEventListener('load', function() {
      if (authReq.status >= 200 && authReq.status < 400) {//WORKS (bellow)
    //https://www.strava.com/oauth/authorize?client_id=16437&response_type=code&redirect_uri=http://localhost/Users/Jake/Documents/gitMaster/Jake8K.github.io/index.html&scope=view_private&state=mystate&approval_prompt=force
        var authResponse = JSON.parse(authReq.responseText);
        var mainUser = new athlete(authResponse.accessToken, authResponse.athlete.id, authResponse.athlete.firstname,
                                   authResponse.athlete.lastname, authResponse.athlete.profile, authResponse.athlete.sex,
                                   authResponse.athlete.city, authResponse.athlete.state, authResponse.athlete.country);
        console.log(mainUser);
      }
      else {
        console.log("Error in network request: " + req.statusText);
      }
      })
    authReq.send();
    event.preventDefault();
  })
}
//the code above is activated by
   //  <input class="btn btn-default page-scroll" type="submit" id="userAuth" value="Authorize Strava"><br/>
******************************* NOT WORKING **********************************

var athReq = new XMLHttpRequest();
var myUrl = "https://www.strava.com/api/v3/athletes/";
athReq.open('GET', myUrl + myUserID + "?access_token=" + myPublicToken, false);
// https://www.strava.com/api/v3/athletes/7063168?access_token=e0fe44acef9298ee3d51e683e233e1cd9b00e657 //my JSON
// https://www.strava.com/api/v3/athlete?access_token=e0fe44acef9298ee3d51e683e233e1cd9b00e657  //also my
athReq.send();
var athResponse = JSON.parse(athReq.responseText);
var me = new athlete (myPublicToken, athResponse.athlete.id, athResponse.athlete.firstname,
                           athResponse.athlete.lastname, athResponse.athlete.profile, athResponse.athlete.sex,
                           athResponse.athlete.city, athResponse.athlete.state, athResponse.athlete.country);
console.console.log(me);

//ASYNCH REQ BELLOW WORKS
var athReq = new XMLHttpRequest();
var myUrl = "https://www.strava.com/api/v3/athletes/";
athReq.open('GET', myUrl + myUserID + "?access_token=" + myPublicToken, true);
athReq.addEventListener('load', function() {
      if (athReq.status >= 200 && athReq.status < 400) {
    //https://www.strava.com/oauth/authorize?client_id=16437&response_type=code&redirect_uri=http://localhost/Users/Jake/Documents/gitMaster/Jake8K.github.io/index.html&scope=view_private&state=mystate&approval_prompt=force
    var athResponse = JSON.parse(athReq.responseText);
    var me = new athlete (myPublicToken, athResponse.id, athResponse.firstname,
                               athResponse.lastname, athResponse.profile, athResponse.sex,
                               athResponse.city, athResponse.state, athResponse.country);
    console.log(me);
      }
      else {
        console.log("Error in network request: " + req.statusText);
      }
  })
athReq.send();

****************/
    var athReq = new XMLHttpRequest();
    var myUrl = "https://www.strava.com/api/v3/athletes/";
    athReq.open('GET', myUrl + myUserID + "?access_token=" + myPublicToken, false);
    athReq.addEventListener('load', function() {
//      if (athReq.status >= 200 && athReq.status < 400) {
        //https://www.strava.com/oauth/authorize?client_id=16437&response_type=code&redirect_uri=http://localhost/Users/Jake/Documents/gitMaster/Jake8K.github.io/index.html&scope=view_private&state=mystate&approval_prompt=force
        var athResponse = JSON.parse(athReq.responseText);
        var me = new athlete (myPublicToken, athResponse.id, athResponse.firstname,
                                   athResponse.lastname, athResponse.profile, athResponse.sex,
                                   athResponse.city, athResponse.state, athResponse.country);
        console.log(me);
//      }
//      else {
//        console.log("Error in network request: " + req.statusText);
//      }
      })
    athReq.send();
    //event.preventDefault();
//the code above is activated by
   //  <input class="btn btn-default page-scroll" type="submit" id="userAuth" value="Authorize Strava"><br/>

/*
document.addEventListener('DOMContentLoaded', bindButtons);

function bindButtons(){
  document.getElementById('weatherSubmit').addEventListener('click', function(event){
    var req = new XMLHttpRequest();
    var weather = new weatherObj();   // <–––
    var url = "http://api.openweathermap.org/data/2.5/weather";
    var input = document.getElementById('userInput').value;
    var alpha =/^[a-zA-Z\s]+$/; //regular expression == city name
    var nums = /^[0-9]+$/;      //regular expresson == zip code
    if (input.match(alpha)) {
      var location = "?q=" + input + ",us";
    }
    else if (input.match(nums)) {
      var location = "?zip=" + document.getElementById('userInput').value + ",us";
    }
    //req.open('GET', "http://api.openweathermap.org/data/2.5/weather?zip=92122,us&appid=" + appid, false);
    req.open('GET', url + location + "&appid=" + appid, true);
    req.addEventListener('load', function() {
      if (req.status >= 200 && req.status < 400) {
        var response = JSON.parse(req.responseText);
        weather.city = response.name;
        weather.temp = Math.round(response.main.temp*(9/5)-459.67);	//Convert K to F
        weather.maxTemp = Math.round(response.main.temp_max*(9/5)-459.67);
        weather.minTemp = Math.round(response.main.temp_max*(9/5)-459.67);
        weather.hum = response.main.humidity;
        var sunUp = new Date(response.sys.sunrise*1000); //convert unix UTC time to real time
        var sunRiseTime = sunUp.getHours() + ":" + sunUp.getMinutes() + "am";
        var sunDown = new Date(response.sys.sunset*1000);
        var sunSetTime = sunDown.getHours() + ":" + sunDown.getMinutes() + "pm";
        var windspeedMPH = Math.round(response.wind.speed * 3600 / 1610.3*1000)/1000; // meters/sec -> mph
        document.getElementById('userCity').textContent = "  " + weather.city;
        document.getElementById('curTemp').textContent = "  " + weather.temp + " F";
        //document.getElementById('maximumTemp').textContent = "  " + weather.maxTemp + " F"; //only gets
        //document.getElementById('minimumTemp').textContent = "  " + weather.minTemp + " F"; //current temp
        document.getElementById('humidity').textContent = "  " + weather.hum;
        document.getElementById('sunRise').textContent = "  " + sunRiseTime;
        document.getElementById('forecast').textContent = "  " + response.weather.description; //undefined?
        document.getElementById('windSpeed').textContent = "  " + windspeedMPH + " mph";
        document.getElementById('windDir').textContent = "  " + response.wind.deg + " degrees";
        document.getElementById('sunSet').textContent = "  " + sunSetTime;
        console.log(weather.city);
        console.log(weather.temp);
        console.log(response);
      }
      else {
        console.log("Error in network request: " + req.statusText);
      }
    })
    req.send();
    event.preventDefault();
  })
}
*/
/****************
* httpBin app
****************
document.addEventListener('DOMContentLoaded', bindPostButton);

function bindPostButton(){
  document.getElementById("binPOSTinput").addEventListener('click', function(event){
    var req = new XMLHttpRequest();
    var payload = document.getElementById("stringStuff").value;
    req.open('POST', 'http://httpbin.org/post', true);
    req.setRequestHeader('Content-Type', 'application/json');
    req.addEventListener('load', function(){
      if (req.status >= 200 && req.status < 400){
        var response = JSON.parse(req.responseText);
        //document.getElementById("binPOSToutput").textContent = JSON.stringify(response.data);
        document.getElementById("binPOSToutput").textContent = "You submitted " + response.data + " to httpBin.";
      }
    });
    req.send(JSON.stringify(payload));
    event.preventDefault();
  });
}
****************/


{
  "id":7063168,
  "username":null,
  "resource_state":3,
  "firstname":"Jake",
  "lastname":"K",
  "city":"San Diego",
  "state":"California",
  "country":"United States",
  "sex":"M","premium":false,
  "created_at":"2014-11-12T17:11:36Z",
  "updated_at":"2017-02-23T23:30:22Z",
  "badge_type_id":0,
  "profile_medium":"https://dgalywyr863hv.cloudfront.net/pictures/athletes/7063168/5788505/1/medium.jpg",
  "profile":"https://dgalywyr863hv.cloudfront.net/pictures/athletes/7063168/5788505/1/large.jpg",
  "friend":null,
  "follower":null,
  "follower_count":0,
  "friend_count":0,
  "mutual_friend_count":0,
  "athlete_type":0,
  "date_preference":"%m/%d/%Y",
  "measurement_preference":"feet",
  "clubs":[],
  "email":"jikarcz@gmail.com",
  "ftp":null,
  "weight":77.3375,
  "bikes":[
    {"id":"b3603670","primary":true,"name":"Fury","resource_state":2,"distance":0.0},
    {"id":"b3603674","primary":false,"name":"Val","resource_state":2,"distance":0.0}
  ],"shoes":[
    {"id":"g2058670","primary":false,"name":"Hoka One One Mafate 4 Trail-Running Shoes Heavy Duty Trail Hokas","resource_state":2,"distance":0.0},
    {"id":"g2058668","primary":true,"name":"Hoka One One Challenger ATR 2 Trail-Running Shoes trail hokas","resource_state":2,"distance":0.0}
  ]}

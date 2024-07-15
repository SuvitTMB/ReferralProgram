var dateString = new Date().toLocaleString('en-US', { timeZone: 'Asia/Jakarta' });
var datetoday = "";
var thistoday = "";
var thistoday_th = "";
var xHeaderLog = "";
var xHeaderNews = "";
var xHeaderPoint = 0;
var xProfile = "";
//NewDate();
//NavMenu();

function Connect_DB() {
  var firebaseConfig = {
    apiKey: "AIzaSyDfTJJ425U4OY0xac6jdhtSxDeuJ-OF-lE",
    authDomain: "retailproject-6f4fc.firebaseapp.com",
    projectId: "retailproject-6f4fc",
    databaseURL: "https://file-upload-6f4fc.firebaseio.com",
    storageBucket: "retailproject-6f4fc.appspot.com",
    messagingSenderId: "653667385625",
    appId: "1:653667385625:web:a5aed08500de80839f0588",
    measurementId: "G-9SKTRHHSW9"
  };
  firebase.initializeApp(firebaseConfig);
  dbCheckProfile = firebase.firestore().collection("CheckProfile");

}



function Clicklink(x) {
  location.href = "addreferral.html";
}


function getParameterByName(name, url) {
  str = '';
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}


function ClickApp(x) {
  var xLink = "";

  switch(x) {
    case 1:
      xLink = "https://lgs-uat.digioth.dev/form/publishes/a3e61670-567e-4d91-b00a-41f36bf08dbd?utm_id=20641&utm_campaign=ttb_referral_credit_card-referral-ttb_referral_for_staff&utm_source=website&utm_medium=referral";
      break;
    case 2:
      xLink = "https://lgs-uat.digioth.dev/form/publishes/162a84f9-6d2e-4b49-afe2-7f99a7dd6c47?utm_id=20642&utm_campaign=ttb_referral_personal_loan-referral-ttb_referral_for_staff&utm_source=website&utm_medium=referral";
      break;
    case 3:
      xLink = "https://lgs-uat.digioth.dev/form/publishes/774eb6e3-2638-43da-957c-4c54b5c95be6?utm_id=20699&utm_campaign=ttb_referral_home_loan-referral-ttb_referral_for_staff&utm_source=website&utm_medium=referral";
      break;
    case 4:
      xLink = "https://lgs-uat.digioth.dev/form/publishes/b0c7e158-582e-4a8c-abf3-17e00140ee0f?utm_id=20640&utm_campaign=ttb_referral_auto_loan-referral-ttb_referral_for_staff&utm_source=website&utm_medium=referral";
      break;
    case 5:
      xLink = "https://lgs-uat.digioth.dev/form/publishes/7e6e336d-2901-4236-aed0-5ff576121f9e?utm_id=20643&utm_campaign=ttb_referral_ba_life-referral-ttb_referral_for_staff&utm_source=website&utm_medium=referral";
      break;
    case 6:
      xLink = "https://lgs-uat.digioth.dev/form/publishes/ce11cc83-c781-4cc0-94fc-d41d551f2835?utm_id=20644&utm_campaign=ttb_referral_ba_motor-referral-ttb_referral_for_staff&utm_source=website&utm_medium=referral";
      break;
    case 7:
      xLink = "https://lgs-uat.digioth.dev/form/publishes/2f0b6920-7263-4472-a63f-441d473455a6?utm_id=20645&utm_campaign=ttb_referral_mf-referral-ttb_referral_for_staff&utm_source=website&utm_medium=referral";
      break;
    case 8:
      xLink = "referral-program.html";
      break;
  }  
  $("#DisplayWeb").html('<iframe src="'+ xLink +'" height="700" width="100%" title="Iframe Example"></iframe>');  
  //console.log(x);
}



function imgError(image) {
    image.onerror = "";
    image.src = "./img/box.jpg";
    return true;
}


function imgErrorLearning(image) {
    image.onerror = "";
    image.src = "./clip/vdo.jpg";
    return true;
}


function imgErrorStory(image) {
    image.onerror = "";
    image.src = "./clip/story.jpg";
    return true;
}


function GotoHome() {
  location.href = "index.html";
}


function NewDate() {
  var months = new Array(12);
  months[0] = "January";
  months[1] = "February";
  months[2] = "March";
  months[3] = "April";
  months[4] = "May";
  months[5] = "June";
  months[6] = "July";
  months[7] = "August";
  months[8] = "September";
  months[9] = "October";
  months[10] = "November";
  months[11] = "December";
  var today = new Date();
  var day = today.getDate() + "";
  var monthEN = (today.getMonth()) + "";
  var month = (today.getMonth() + 1) + "";
  var year = today.getFullYear() + "";
  var hour = today.getHours() + "";
  var minutes = today.getMinutes() + "";
  var seconds = today.getSeconds() + "";
  var ampm = hour >= 12 ? 'PM' : 'AM';
  day = checkZero(day);
  month = checkZero(month);
  year = checkZero(year);
  year_th = parseFloat(checkZero(year))+543;
  hour = checkZero(hour);
  minutes = checkZero(minutes);
  seconds = checkZero(seconds);
  dateString = day + "/" + month + "/" + year + " " + hour + ":" + minutes + ":" + seconds +" "+ ampm;
  xdateCheck = months[monthEN] + " " + day + ", " + year + " " + hour + ":" + minutes + ":" + seconds ;
  datetoday = day + "/" + month + "/" + year;
  thistoday = day + "/" + month + "/" + year;
  thistoday_th = day + "/" + month + "/" + year_th;
}


function checkZero(data){
  if(data.length == 1){
    data = "0" + data;
  }
  return data;
}

var ReadID = "";

$(document).ready(function () {
  ReadID = getParameterByName('gid');
  if(ReadID==null) { ReadID = 1; }
  //alert("Check==="+ReadID);
  ClickOpenApp(ReadID);
  //ReadGroup = getParameterByName('groupid');
  //Clicklink(ReadID);
  //Connect_DB();
});

/*
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
*/
function ClickOpenApp(x) {
  //console.log(x);
  for (let i = 1; i < 8; i++) {
    var element = document.getElementById(i);
    element.classList.add("filter");
  }
  var element = document.getElementById(x);
  element.classList.remove("filter");

  document.getElementById('loading').style.display='block';
  document.getElementById('DisplayWeb').style.display='none';
  ClickApp(x);
}


function ClickApp(x) {
  console.log(x);
  var xLink = "";
  var aPage = x;

  switch(aPage) {
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
  //alert(x);
  document.getElementById('loading').style.display='none';
  document.getElementById('DisplayWeb').style.display='block';
  console.log("Line67==="+aPage);
}

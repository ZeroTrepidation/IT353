var username=null;
var searchCount  = 0;
var data = "";

var url = "http://opentable.herokuapp.com/api/restaurants?";
/*
serch name ex: https://opentable.herokuapp.com/api/restaurants?name=sola
*/

function searchControl(){
  var choice = $("#filter1").children("option:selected").val().toLowerCase();
  var input = $("#input").val();
  //$("#greetings").append('<p> Welcome, '+ choice +' </p>');
  if (choice === "name")
  {
    data = data + "name=" + input + "&";
    search();
  }
  else if(choice === "city")
  {
    data = data + "city=" + input + "&";
    search();
  }
  else
  {
    data = data + "state=" + input + "&";
    search();
  }
}

function addCity(){
  var choice = $("#cityFilter").children("option:selected").val().toLowerCase();
  var input = $("#input").val();
  data = data + "name=" + input + "&";
  data = data + "city=" + choice + "&";
  search();
}

function addState(){
  var choice = $("#stateFilter").children("option:selected").val().toLowerCase();
  var input = $("#input").val();
  data = data + "name=" + input + "&";
  data = data + "state=" + choice + "&";
  search();
}


function searchReset() {
  clearBox('mainBody');
  data = "";
}



function search(){
  //change this later to be some input
  clearBox('mainBody');

  $.get(url, data).done(function(response) {

    $("#mainBody").append('<h3> Return top 10 results </h3>');

    for (var i = 0; i < 10; i++) {
      $("#mainBody").append('<p>' + response.restaurants[i].name + '</p>');
      $("#mainBody").append('<button type="button" value="leave a comment" id="' + response.restaurants[i].id + '" onClick="reviewRedirect(this.id)">Write a review</button>');
    }
  });
}

function reviewRedirect(id){


  url = "review.html?id=" + id;

  window.location.assign(url);
}



function clearBox(elementID)
{
    document.getElementById(elementID).innerHTML = "";
}


function getName(){
  var v1 = new URLSearchParams(location.search);
  var name = v1.get('uName');
  if(name != null){
    $("#greetings").append('<span> Welcome, '+ name +' </span>');
  }
  else{
      $("#greetings").append('<span> Welcome </span>');
  }
}

function login(){
  var v1 = new URLSearchParams(location.search);

  var name = v1.get('uName');
  var url = "login.html?uName=";
  window.location.href = "login.html";
}

function signUp(){
  var v1 = new URLSearchParams(location.search);

  var name = v1.get('uName');
  var url = "sign_up.html?uName=";
  window.location.href = "sign_up.html";
}

function homepage(){
  var input = $("#uname").val();
  var url = "default.html?uName=" + input;

  window.location.href = url;
}

function noUserHomepage(){
  var input = $("#uname").val();
  var url = "defaultNoUser.html?uName=" + input;

  window.location.href = url;
}

function logout() {
  var url = "defaultNoUser.html";
  window.location.href = url;

}

function generateReviews()
{
  var reviews = ["'5/7 would not recommend'","'thanks. i hate it'", "'they don't even have burgers'"];
  $("#mainBody").append("<p>bs reviews here </p>");
  for(var i = 0; i < reviews.length;i++){
    $("#mainBody").append('<p>' + reviews[i] + '</p>');
  }
  $("#mainBody").append("<button name = 'createReview' id = 'createReview' onclick='generateTextBox()'>Leave A review</button>");

}

function generateTextBox(){
  var element = document.getElementById('createReview');
  element.remove();
  $("#mainBody").append("</br><textarea id='userReview' rows='4' cols='50'></textarea>");


}

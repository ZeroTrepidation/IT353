
var reviewArr = [4,6];

function showReview(){
  $(".commentForm").show();
  $("#reviewButton").hide();
}

function hideReview() {
  $("#commentText").val('');
  $(".commentForm").hide();
  $("#reviewButton").show();
}

function submitReview() {
  var comment = $("#commentText").val();
  var rating = parseInt($("#reviewSelector").val());


  reviewArr.push(rating);

  var sum = 0;
  for (var i = 0; i < reviewArr.length; i++) {
    sum = sum + reviewArr[i];
  }

  var average = sum / reviewArr.length;
  average = average.toFixed(2);

  $("#reviewValue").empty();
  $("#reviewValue").append(average);

  $(".reviewSection").append(

    '<div class="reviewContainer"><div id="profilePicture" style="float: left;"><img src="images/placeholder-profile-pic.png" alt="" style="width: 100px"></div><div><p id="fieldComment" row="10" cols="120" readonly="readonly">'+comment+'</p></div><div id="fieldRating"><h3 id=fieldRating>Review: '+ rating +'  / 10</h3></div>'

  );

  hideReview();
}

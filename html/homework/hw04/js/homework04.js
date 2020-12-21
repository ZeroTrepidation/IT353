
/*
Name: Seth
Course: IT353
Homework 4

Write your code here
*/


function highlight(){
  this.style.background = "#ffcc66";
}

function unhighlight() {
  this.style.background = "white";
}



window.onload = function(){


  var fields = document.querySelectorAll(".hilightable");

  for(var i = 0; i < fields.length; i++){
    fields[i].addEventListener('focus', highlight);
    fields[i].addEventListener('blur', unhighlight);
    fields[i].addEventListener('change', function() {
      this.classList.remove("error");
    });
  }


  document.getElementById('mainForm').addEventListener('submit', function(e) {
    var flag = true;

    var required = document.querySelectorAll(".required");
    for (var i = 0; i < required.length; i++) {
      var value = required[i].value;
      if (value == "" || value == null) {
        required[i].classList.add("error");
        flag = false;
      }
    }
    if(flag == false){
      e.preventDefault();
    }
  });


};

/* Greetings Example */
function greetings() {
  var date = new Date();
  var hourOfDay = date.getHours();
  if (hourOfDay > 4 && hourOfDay < 12) {
    greeting = "Good Morning";
  } else if (hourOfDay >= 12 && hourOfDay < 18) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }

  return greeting;

}


function multiply(number1, number2) {
  return number1 * number2;
}

function add(number1, number2) {
  return number1+number2;
}


function createTable(rows, cols) {
  document.write("<table border='1' width='300' cellspacing='0' cellpadding='5'>")
  for (var i = 0; i < rows; i++) {
    document.write("<tr>");
    document.write("</tr>");
    for (var j = 0; j < cols; j++) {
      document.write("<td>");
      document.write(rows + ", " + cols);
      document.write("</td>");
    }
  }
  document.write("</table>")
}

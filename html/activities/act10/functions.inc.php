<?php

function compute($number1, $number2, $operator){

  $value = 0;

  switch ($operator) {

    case '+':
      $value = $number1 + $number2;
      break;
    case '-':
      $value = $number1 - $number2;
      break;
    case '/':
      $value = $number1 / $number2;
      break;
    case '*':
      $value = $number1 * $number2;
      break;
    default:
      return "Not a valid operator";
      break;
  }
  return $value;
}

function greetings() : string{
  $hour = date("H");
  if (hour < 12) {
    return "Good Morning";
  } else if(hour < 18) {
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }

}

?>

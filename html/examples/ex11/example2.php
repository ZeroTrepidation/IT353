<?php include 'functions.inc.php' ?>

<html>
<body>
  <header>
    <h1> Processing form input with PHP </h1>
  </header>
<h2> Welcome  <?php echo $_GET['user'] ?> </h2>

<div id = "compute">
Your lucky number is: <?php echo compute($_GET['number1'],$_GET['number2']); ?>
</div>


</body>

</html>

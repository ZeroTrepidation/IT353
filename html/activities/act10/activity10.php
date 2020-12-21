<?php include 'functions.inc.php' ?>

<html>
<header style="background: #b3ecff">
  <h1> Processing form input with PHP </h1>
</header>

<main>
  <h2> <?php  echo greetings();  echo " ".$_GET['user'] ?>!</h2>

  <div id="compute">
    Your lucky number is: <?php echo compute($_GET['number1'],$_GET['number2'],$_GET['operator']); ?>
  </div>
</main>

</html>

<?php include 'footer.inc.html' ?>

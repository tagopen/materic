<?php
$form = htmlspecialchars($_POST["form"]);

$user_name = '';

$user_phone = '';

$user_message = '';

$user_email = '';

if ($_POST["name"]) {
  $user_email = "Имя: ".htmlspecialchars($_POST["name"])."<br/>";
}
if ($_POST["phone"]) {
  $user_email = "Телефон: ".htmlspecialchars($_POST["phone"])."<br/>";
}
if ($_POST["email"]) {
	$user_email = "Почта: ".htmlspecialchars($_POST["email"])."<br/>";
}
if ($_POST["message"]) {
  $user_email = "Сообщение: ".htmlspecialchars($_POST["message"])."<br/>";
}

$source = $form."<br/>".$user_name."".$user_phone."".$user_message."".$user_email."";

$headers= "MIME-Version: 1.0\r\n";

$headers .= "Content-type: text/html; charset=utf-8\r\n"; 
$result = mail('marchik88@rambler.ru', "Материк - ".$theme, $source, $headers);
if ($result) {
   header("Location:thanks.html");
} 
else{
   header("Location:index.html?status=false");
}
?>



<?php
    $name = trim($_POST['name']);
	$phone = trim($_POST['phone']);
	$email = trim($_POST['email']);
	$interest = trim($_POST['interest']);
    $message = trim($_POST['message']);
    
    // Введите свою почту, на которую будут приходить письма, при проверке смотрите папку СПАМ, они могут приходить туда
	$to = "yourbeautifulwallet@gmail.com"; 
	$date = date ("d.m.Y"); 
	$time = date ("h:i");
	date_default_timezone_set("Europe/Samara");

	$from = $email;

	$subject = "Заявка с Your beautiful crypto wallet";
    
    // Формирование письма
	$msg=
	"Сообщение с сайта Your beautiful crypto wallet
	[ Отправлена " . date('d-m-Y' . " в " . 'G:i:s') . " ]
	Имя клиента: [ " . $name . " ]
    Эл. почта: [ " . $email . " ]
	Телефон: [ " . $phone . " ]
    Чем интересуется: [ " . $interest . " ]
	Сообщение: [ " . $message . " ]"; 	

	mail($to, $subject, $msg, "From: $from ")
?>
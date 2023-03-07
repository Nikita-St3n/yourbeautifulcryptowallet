<?php
    $email_mailing = trim($_POST['email_mailing']);
    
    // Введите свою почту, на которую будут приходить письма, при проверке смотрите папку СПАМ, они могут приходить туда
	$to = "yourbeautifulwallet@gmail.com"; 
	$date = date ("d.m.Y"); 
	$time = date ("h:i");
	date_default_timezone_set("Europe/Samara");

	$from = $email;

	$subject = "Подписка на рассылку с сайта Your beautiful crypto wallet";
    
    // Формирование письма
	$msg=
	"Сообщение с сайта Your beautiful crypto wallet
	[ Отправлена " . date('d-m-Y' . " в " . 'G:i:s') . " ]
	Эл. почта: [ " . $email_mailing . " ] подписался на рассылку.";

	mail($to, $subject, $msg, "From: $from ")
?>
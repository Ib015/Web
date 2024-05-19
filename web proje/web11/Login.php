<?php
$kadi ="b221210006@sakarya.edu.tr";
$şifre="b221210006";

if (($_POST['username']==$kadi) and ($_POST['password']==$şifre) ){
    echo "HOŞGELDİN b221210006 SENİ ANA SAYFAYA YÖNLENDİRİYORUM.";

    header("refresh:5;Anasayfa.html");
}
else if(!$_POST)
{
    echo("Veri girmeden sayfaya giriş yapmış bulunmaktasınız !");
}
else {


    (header('location: Login.php'));
}


?>
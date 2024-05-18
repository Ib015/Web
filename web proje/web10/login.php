<?php
$mail = "b221210006@sakarya.edu.tr";
$sifre = 12345678;

if(isset($_POST['onay']))
{
    if(isset($_POST['mail'], $_POST['sifre']) && ($_POST['mail'] == $mail) && ($_POST['sifre'] == $sifre))
    {
        echo "Hoşgeldiniz B221210006";
        echo "<script>setTimeout(function(){window.location.href='index.html'}, 2000);</script>";
    }
    else
    {
        echo "Bilgilerinizi kontrol edin";
        echo "<script>setTimeout(function(){window.location.href='login.html'}, 2000);</script>";
    }
}
else
{
    echo "Lütfen Kutuyu İşaretleyin";
    echo "<script>setTimeout(function(){window.location.href='login.html'}, 2000);</script>";
}




?>
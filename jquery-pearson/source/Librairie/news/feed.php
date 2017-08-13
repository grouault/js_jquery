<?php
  // Si file_get_contents() est disponible sur le serveur,
  // cette solution courte suffit.
  header('Content-Type: text/xml');
  print file_get_contents('http://jquery.com/blog/feed');
?>

<?php
  // Cette solution alternative fonctionne lorsque file_get_contents()
  // n'est pas disponible, contrairement à la bibliothèque cURL.
  // header('Content-Type: text/xml');
  // $curl = curl_init();
  // $timeout = 5; // Mettre à zéro pour aucun deélai.
  // curl_setopt($curl, CURLOPT_URL, 'http://feedproxy.feedburner.com/jquery/');
  // curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
  // curl_setopt($curl, CURLOPT_CONNECTTIMEOUT, $timeout);
  // print curl_exec($curl);
  // curl_close($curl);
?>
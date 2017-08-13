<?php
$ajax = $_SERVER['HTTP_X_REQUESTED_WITH'];


if (!$ajax):
// inclure l'en-tête uniquement si la page n'est PAS retournée via AJAX.
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" 
        "http://www.w3.org/TR/html4/strict.dtd">

<html lang="fr">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<title>Livraison</title>
  <link rel="stylesheet" href="../styles/bookstore.css" type="text/css" media="screen" />
  <link rel="stylesheet" href="../styles/tables.css" type="text/css" media="screen" />
  <link rel="stylesheet" href="../styles/forms.css" type="text/css" media="screen" />
  <link rel="stylesheet" href="../styles/rotators.css" type="text/css" media="screen" />
  <script src="../scripts/jquery.js" type="text/javascript"></script>
  <script src="../scripts/cookbook.js" type="text/javascript"></script>
  <script src="../scripts/tables.js" type="text/javascript"></script>
  <script src="../scripts/rotators.js" type="text/javascript"></script>

</head>
<body>

  <div id="wrapper">
  	<div id="branding">
			<h1><a href="../index.html">Librairie jQuery</a></h1>
  	</div>
  	<div id="container">
  		<div id="content">
  			<h2>Livraison</h2>  
<?php
endif;

if (isset($_POST['op']) && $_POST['op'] == 'Save') {
  // Le code pourrait enregistrer la nouvelle adresse dans la base de données ou une varaible de session.
  $name = $_POST['first-name'] .' '. $_POST['last-name'];
  print('<p id="shipping-name"><a href="shipping.php">'. $name .'</a></p>');
} else {
  $shipping = array();
  $shipping['first-name'] = 'Paul';
  $shipping['last-name'] = 'Martin';
  $shipping['address'] = '30 allée des acacias';
  $shipping['city'] = 'Préfailles';
  $shipping['zip'] = '44770';
  $shipping['message'] = 'Nous vous souhaitons une bonne lecture ! Vous allez adorer le héros.';
?>
<form action="shipping.php" method="post" accept-charset="utf-8">
  <ol>
    <li><label for="first-name">Prénom&nbsp;:</label><input type="text" name="first-name" value="<?php print $shipping['first-name']; ?>" id="first-name" /></li>
    <li><label for="last-name">Nom&nbsp;:</label><input type="text" name="last-name" value="<?php print $shipping['last-name']; ?>" id="last-name" /></li>
    <li><label for="address">Adresse&nbsp;:</label><input type="text" name="address" value="<?php print $shipping['address']; ?>" id="address" /></li>
    <li><label for="city">Ville&nbsp;:</label><input type="text" name="city" value="<?php print $shipping['city']; ?>" id="city" /></li>
    <li><label for="zip">Code postal&nbsp;:</label><input type="text" name="zip" value="<?php print $shipping['zip']; ?>" id="zip" /></li>
    <li><label for="message">Message&nbsp;:</label><textarea name="message" id="message"><?php print $shipping['message']; ?></textarea></li>
    <li>
      <input type="submit" name="op" id="op" value="Enregistrer" />  
    </li>
  </ol>
</form>
  <?php
}
if (!$ajax):
// inclure le pied uniquement si la page n'est PAS retournée via AJAX.
?>
  
  	  </div> <!-- fin de content -->
      <div id="primary-nav">
    		<ul>
    			<li><a href="../books/index.html">Livres</a></li>
    			<li><a href="../news/index.html">Actualité</a></li>
    			<li><a href="../contact/index.html">Contact</a></li>
    		</ul>    
      </div>
  	  
  	</div> <!-- fin de container -->
  	<div id="secondary-nav">
  		<h3><a href="./index.html">Votre panier</a></h3>
        			<ul>
        				<li>Lorem ipsum dolor</li>
        				<li>Lorem ipsum dolor</li>

        				<li>Lorem ipsum dolor</li>
        				<li>Lorem ipsum dolor</li>
        				<li>Lorem ipsum dolor</li>
        				<li>Lorem ipsum dolor</li>
        				<li>Lorem ipsum dolor</li>
        			</ul>
      
  	</div> 

  	<div id="sidebar">

  			<h2>Barre latérale</h2>
        <div>
  			  <form id="search" action="search/index.php" method="post" accept-charset="utf-8">
            <label for="search-text">rechercher sur le site</label><input type="text" name="search-text" id="search-text" />
    			</form>
        </div>
  			<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nam adipiscing, risus quis fringilla venenatis, diam nisi adipiscing magna, sit amet rutrum risus nunc sit amet odio. Praesent ullamcorper. Donec sit amet ipsum. Nam consequat rhoncus lacus. Pellentesque libero erat, elementum a, mattis in, molestie id, magna. Integer sed libero vitae lacus elementum egestas. Nullam massa magna, gravida sed, porta vel, ultricies at, purus. Maecenas turpis. Vivamus ante risus, eleifend sed, scelerisque at, lacinia vitae, nunc. Vestibulum ut arcu. Cras ut magna. Pellentesque eleifend commodo est. Sed vitae odio eget ipsum tristique hendrerit. Cras elementum turpis ut sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut sed erat at velit bibendum varius. Sed venenatis sagittis lectus. Cras ligula felis, ultrices et, imperdiet et, laoreet sed, odio. Morbi nunc tellus, hendrerit in, aliquet eget, rutrum a, magna. Nunc nunc.</p>

  	</div> <!-- fin de sidebar -->
  	<div id="footer">
  		Pied de page.
  	</div>
  </div> <!-- fin de wrapper -->

</body>
</html>
<?php endif;
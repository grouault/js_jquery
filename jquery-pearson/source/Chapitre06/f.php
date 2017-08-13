<?php

$entries = array(
  'FAÇON' => array(
    'part' => 'n.',
    'definition' => "Je vais vous dire ma façon de penser. -- Dites-moi simplement votre pensée ; je ne tiens pas à la façon.",
  ),
  'FAIM' => array(
    'part' => 'n.',
    'definition' => "Au commencement d'un grand festin, où tout le monde dévorait sans rien dire, un convive s'écria : -- Que signifie ce silence ? -- Il annonce la faim du monde, répondit un autre.",
  ),
  'FAIRE' => array(
    'part' => 'v. tr.',
    'definition' => "Pétition de Sans-Culottes du faubourg Saint-Antoine à l'Assemblée nationale :",
    'quote' => array(
      "Ah ! que nous serions satisfaits,",
      "Si, toujours patriotes,",
      "Au lieu de faire des décrets,",
      "Vous faisiez des culottes.",
    ),
  ),
  'FATALITÉ' => array(
    'part' => 'n.',
    'definition' => "On attribue à Boileau ce faible calembour. On lui disait qu'un homme dont il méprisait la fatuité était tombé malade. -- Quelle fat alité ! se serait écrié l'auteur de la satire contre l'équivoque. -- Mais nous ne le croyons pas.",
  ),
  'FAUX PAS' => array(
    'part' => 'n.',
    'definition' => "Le marquis de Bièvre disait d'une dame boiteuse : « Voilà une femme qui a fait bien des faux pas. »",
  ),
  'FENÊTRE' => array(
    'part' => 'n.',
    'definition' => "Danières disait qu'une croisée s'appelle une fenêtre, parce que c'est elle qui dans une chambre le jour fait naître...",
  ),
  'FERRAILLEUR' => array(
    'part' => 'n.',
    'definition' => "Lorsqu'on expulsa les étalages de vieilles ferrailles du quai de la Mégisserie, à Paris, on afficha ce distique :",
    'quote' => array(
      "Allez donc tous, vieux ferrailleurs,",
      "Vendre votre vieux fer ailleurs.",
    ),
  ),
  'FÊTE' => array(
    'part' => 'n.',
    'definition' => "Une dame disait qu'il n'y a pas de fêtes sans lendemain. -- Pardon, lui dit quelqu'un, le faîte des grandeurs peut en avoir, mais le faîte d'une maison n'en a pas.",
  ),
  'FIÈVRE' => array(
    'part' => 'n.',
    'definition' => "Dans une chanson de madame Constance Pipelet, il y a un couplet qui exprime élégamment les divers emplois du mot fièvre.",
    'quote' => array(
      "Ah ! qu'il est beau pour un grand coeur",
      "D'avoir la fièvre de la gloire !",
      "C'est par sa fièvre qu'un auteur",
      "S'inscrit au temple de Mémoire,",
      "On voit peu d'hommes ici bas",
      "Avoir la fièvre du génie ;",
	  "Mais on en voit beaucoup, hélas !",
	  "Nourrir la fièvre de l'envie.",
    ),
    'author' => 'Constance Pipelet',
  ),
  'FOURMI' => array(
    'part' => 'n.',
    'definition' => "Lorsque les fous, ayant recouvré leur raison, quittent Bicêtre, qu'est-ce qu'ils sont ! -- Guéris. -- Non, ce sont des fous remis.",
  ),
);

foreach ($entries as $term => $entry) {
  if (strpos($term, mb_strtoupper($_REQUEST['term'], 'utf-8')) !== FALSE) {
    $html = '<div class="entry">';

    $html .= '<h3 class="term">';
    $html .= $term;
    $html .= '</h3>';

    $html .= '<div class="part">';
    $html .= $entry['part'];
    $html .= '</div>';

    $html .= '<div class="definition">';
    $html .= $entry['definition'];
    if (isset($entry['quote'])) {
      foreach ($entry['quote'] as $line) {
        $html .= '<div class="quote-line">'. $line .'</div>';
      }
      if (isset($entry['author'])) {
        $html .= '<div class="quote-author">'.
          $entry['author'] .'</div>';
      }      
    }
    $html .= '</div>';
  
    $html .= '</div>';
  
    print($html);
  }
}

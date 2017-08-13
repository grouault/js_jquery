<?php

$entries = array(
  'ÉCRIRE' => array(
    'part' => 'v. tr.',
    'definition' => "Un savant, connu par un nasillement extraordinaire, assistait à la lecture d'un ouvrage historique. -- Cet ouvrage est mal écrit, s'écria-t-il, un style prétentieux, plein d'affectation ! Il faut avant tout écrire comme on parle. -- C'est fort bien, dit un ami de l'auteur, mais alors, vous qui parlez du nez, vous devez écrire de même.",
  ),
  'EFFORT' => array(
    'part' => 'n.',
    'definition' => "Voyant un homme qui avait le nez très-gros, Odry disait : -- En faisant cet homme-là la nature a fait un nez fort.",
  ),
  'EMPLOI' => array(
    'part' => 'n.',
    'definition' => "Un capitaine qui avait été barbier, partant pour aller au siége d'une ville, on lui dit : --Si l'on rase cette ville, vous pourrez bien y avoir de l'emploi.",
  ),
  'ENCORNÉ' => array(
    'part' => 'adj.',
    'definition' => "Un farceur se vantait d'avoir mangé d'un veau qui n'était pas encorné.",
  ),
  'ENCRE' => array(
    'part' => 'n.',
    'definition' => "Un voyageur revenant d'Angleterre s'excusait auprès de sa femme de ne lui avoir pas écrit. -- C'était mon intention, disait-il, mais je ne l'ai pas pu, parce qu'en arrivant à Douvres on a jeté l'ancre.",
  ),
  'ENSEIGNER' => array(
    'part' => 'v. tr.',
    'definition' => "Un homme s'était piqué jusqu'au sang de la pointe d'une grosse alêne. C'était un cordonnier. -- Le voilà devenu professeur, dit un plaisant. -- Et comment cela ? s'écria un témoin intrigué. -- Mais, riposta le farceur, il s'est piqué et il en saigne.",
  ),
  'ENVIEUX' => array(
    'part' => 'adj.',
    'definition' => "Il y a des marchands en vieux qu'on n'évite pourtant pas et qui ne se confessent pas du péché d'envie; ce sont les fripiers.",
  ),
  'ÉPICIERS' => array(
    'part' => 'n.',
    'definition' => "En temps de moisson, on voit en campagne des masses d'épis sciés, dont beaucoup sont en bottes.",
  ),
  'ESPRIT' => array(
    'part' => 'n.',
    'definition' => "C'est agréable d'avoir de l'esprit, dit Alcide Tousez, on a toujours quelques bêtises à dire.",
  ),
  'ÉTÉ' => array(
    'part' => 'n.',
    'definition' => "On boit tant de thé en hiver dans les soirées de Londres, qu'on a dit que les Anglais faisaient de l'hiver la saison des thés.",
  ),
  'EXÉCUTIF' => array(
    'part' => 'n.',
    'definition' => "Quand l'Assemblée constituante eut restreint, comme on sait, l'autorité royale de Louis XVI, on fit cette épigramme :",
    'quote' => array(
      "Entre savants, quelquefois on dispute.",
      "D'où vient ce nom : pouvoir exécutif",
      "Que donne au roi le corps législatif ?",
      "Eh ! le voici : trop faible pour la lutte,",
      "C'est un pouvoir, hélas ! qui s'exécute.",
    ),
  ),
);

if (isset($entries[mb_strtoupper($_REQUEST['term'], 'utf-8')])) {
  $entry = $entries[mb_strtoupper($_REQUEST['term'], 'utf-8')];
  
  $html = '<div class="entry">';

  $html .= '<h3 class="term">';
  $html .= mb_strtoupper($_REQUEST['term'], 'utf-8');
  $html .= '</h3>';

  $html .= '<div class="part">';
  $html .= $entry['part'];
  $html .= '</div>';

  $html .= '<div class="definition">';
  $html .= $entry['definition'];
  if (isset($entry['quote'])) {
    $html .= '<div class="quote">';
    foreach ($entry['quote'] as $line) {
      $html .= '<div class="quote-line">'. $line .'</div>';
    }
    if (isset($entry['author'])) {
      $html .= '<div class="quote-author">'. $entry['author'] .'</div>';
    }      
    $html .= '</div>';
  }
  $html .= '</div>';
  
  $html .= '</div>';
  
  print($html);
}

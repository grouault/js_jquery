<?php

$data = '
[
  {
    "term": "GAMME",
    "part": "n.",
    "definition": "Chantée à Genève au citoyen Proudhon :",
    "quote": [
      "Ut-opiste infernal, sans Dieu comme sans âme,",
      "Ré-trograde prôneur d\'un vieux système usé,",
      "Mi-racle d\'impudence en ce siècle abusé,",
      "Fa-vorable aux fripons, dont tu fais la réclame,",
	  "Sol-eil dont la lumière est propice au voleur,",
	  "La terre connaîtrait ta funeste valeur,",
	  "Si tout homme de sens te chantait cette gamme,",
	  "Ut-opiste infernal, sans Dieu comme sans âme."
    ]
  },
  {
    "term": "GAULES",
    "part": "n.",
    "definition": "Quel profit remarquable eurent les Romains à prendre les Gaules ? -- La facilité d\'abattre les noix."
  },
  {
    "term": "GÊNE",
    "part": "n.",
    "definition": "Quel est le peuple le moins bien dans ses affaires ? --Ce sont les Gênois, qui vivent constamment dans l\'État de Gênes."
  },
  {
    "term": "GLACÉS",
    "part": "adj.",
    "definition": "Un galant, présentant à une dame une paire de gants glacés, lui disait : -- C\'est ce que j\'ai trouvé de plus frais."
  },
  {
    "term": "GRAND",
    "part": "adj.",
    "definition": "Ce mot change de sens quelquefois en changeant de place: un grand homme n\'est pas toujours un homme grand, et souvent un homme grand n\'est qu\'un petit homme. La grandeur mise en avant est la mesure de l\'âme, mise en arrière elle n\'est que la taille du corps."
  },
  {
    "term": "GRANDESSE",
    "part": "n.",
    "definition": "Quelle est la lettre la plus estimée en Espagne ? -- La grande S."
  },
  {
    "term": "GUET-APENS",
    "part": "n.",
    "definition": "Le roi des Turlupins était M. d\'Armagnac. Ce seigneur se trouvant un jour avec le duc (Henri-Jules), depuis prince de Condé, il lui demanda pourquoi on disait guet-à-paon et non pas guet-à-dinde ? -- Par la même raison, répondit le prince, qu\'on ne dit pas, Monsieur d\'Armagnac est un turluchêne, mais un turlupin."
  }
]
';

print($_GET['callback'] .'('. $data .')');

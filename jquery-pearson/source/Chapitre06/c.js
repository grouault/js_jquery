var entries = [
  {
    "term": "CHAIR",
    "part": "n.",
    "definition": "M. Ch. Monselet, après avoir entendu M. Saisset, dans son cours de philosophie à la Sorbonne, se retira en disant : L'esprit est fort, mais la chaire est faible."
  },
  {
    "term": "CHALEUR",
    "part": "n.",
    "definition": "Bautru se promenait le chapeau à la main, par un soleil ardent, avec Gaston d'Orléans. Ce prince lui ayant dit qu'il aimait ses amis avec chaleur : -- Ma tête s'en aperçoit, répondit Bautru."
  },
  {
    "term": "CHANT",
    "part": "n.",
    "definition": "On dit que le rossignol ne chante plus lorsqu'il est en cage, parce qu'il a perdu la clef des champs."
  },
  {
    "term": "CHAUDRON",
    "part": "n.",
    "definition": "Brunet disait que le vase qu'on appelle chaudron ne s'appelait ainsi que parce qu'il est chaud et rond."
  },
  {
    "term": "CHER",
    "part": "n.",
    "definition": "C'est un département où l'on ne peut pas vivre à bon marché."
  },
  {
    "term": "COMBLÉ",
    "part": "adj.",
    "definition": "Un très-gros homme, arrêté au bord d'un fossé, disait : -- Je le sauterais bien, mais j'aurais peur de tomber dedans. -- Monsieur, lui dit une dame, il serait comblé de vous recevoir."
  }
];

var html = '';

$.each(entries, function() {
  html += '<div class="entry">';
  html += '<h3 class="term">' + this['term'] + '</h3>';
  html += '<div class="part">' + this['part'] + '</div>';
  html += '<div class="definition">' + this['definition'] + '</div>';
  html += '</div>';
});

$('#dictionary').html(html);

<?php

if (strlen($_REQUEST['search-text']) < 1) {
  print '[]';
  exit;
}

$terms = array(
  'accès',
  'action',
  'active',
  'administrateur',
  'administration',
  'affaires',
  'ajax',
  'alfresco',
  'amélioration',
  'application',
  'applications',
  'apprendre',
  'apprentissage',
  'aspnet',
  'astérisque',
  'astuces',
  'authentification',
  'automation',
  'avancé',
  'base de données',
  'basic',
  'bêta',
  'blogs',
  'boîte à outils',
  'bordures',
  'calculatrice',
  'capture',
  'cerise',
  'com',
  'communautaire',
  'communautés',
  'composé',
  'conception',
  'concis',
  'configuration',
  'configurer',
  'conseils',
  'construction',
  'construire',
  'contenu',
  'contrôles',
  'cours',
  'créer',
  'débutant',
  'définitive',
  'démarrer',
  'designer',
  'développement',
  'développeurs',
  'didacticiels',
  'direction',
  'distance',
  'dns',
  'document',
  'domino',
  'dotnet',
  'drupal',
  'e-commerce',
  'édition',
  'effacer',
  'e-learning',
  'email',
  'en ligne',
  'encodage',
  'enfichable',
  'enregistrements',
  'enterprise',
  'espagnol',
  'essentiels',
  'évaluer',
  'exécution',
  'exemples',
  'facile',
  'FAQ',
  'fermer',
  'feuille de calcul',
  'flux',
  'fondation',
  'forums',
  'fusionner',
  'gdi+',
  'google',
  'guide',
  'gwt',
  'hôte',
  'idées',
  'imagemagick',
  'implémentation',
  'implémenter',
  'intégration',
  'intégrer',
  'intelligent',
  'invision',
  'ipcop',
  'iproute2',
  'italien',
  'jakarta',
  'jasperreports',
  'java',
  'joomla',
  'kit',
  'langue',
  'linux',
  'livre',
  'logiciel',
  'lotus',
  'macro',
  'maîtrise',
  'make',
  'mambo',
  'management',
  'manager',
  'meilleur',
  'microsoft',
  'migrer',
  'mise à niveau',
  'modèle',
  'module',
  'modules',
  'mysql',
  'nat',
  'netfilter',
  'networks',
  'notes',
  'numérique',
  'occupé',
  'office',
  'opencms',
  'openofficeorg',
  'openswan',
  'openvpn',
  'outlook',
  'ouvrir',
  'pare-feu',
  'pas à pas',
  'performance',
  'personnalisaction',
  'personnaliser',
  'petit',
  'php',
  'phpbb',
  'phpeclipse',
  'php-nuke',
  'plannifier',
  'poire',
  'portails',
  'portugais',
  'practique',
  'practiques',
  'privé',
  'processus',
  'professionnel',
  'profond',
  'programmer',
  'programmeurs',
  'puissance',
  'python',
  'rapide',
  'rapidement',
  'réactif',
  'recettes',
  'référence',
  'répertoire',
  'sav',
  'sbs',
  'sécurisé',
  'sécurité',
  'serveur',
  'services',
  'site web',
  'source',
  'ssl',
  'structures',
  'sysadmins',
  'systèmes',
  'tableau',
  'tcp/ip',
  'techniques',
  'téléphone',
  'téléphonie',
  'template',
  'terminé',
  'traitement',
  'uml',
  'utilisateur',
  'utiliser',
  'vbnet',
  'vidéo',
  'virtualdub',
  'virtuel',
  'visuel',
  'vpn',
  'web',
  'wiki',
  'windows',
  'wordpress',
  'xaml',
  'xoops',
);

$possibilities = array();

foreach ($terms as $term) {
  if (strpos($term, strtolower($_REQUEST['search-text'])) === 0) {
    $possibilities[] = "'". str_replace("'", "\\'", $term) ."'";
  }
}

print ('['. implode(', ', $possibilities) .']');

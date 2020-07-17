## Notes


## data-i18n
* Attribut HTML5 à positioner sur une balise.
'''
<h1 data-i18n="welcome"></h1>
'''
* Traduction se fait en déclenchant la fonction i18n()
'''
$('body').i18n(); // sur tout le body
$('html').i18n(); // sur tout le document html
'''

## changer la locale
* Pour changer la locale, code à utiliser:
'''
$.i18n().load({
  'en': 'http://localhost/lok/jqi/i18n/en.json',
  'ru': 'http://localhost/lok/jqi/i18n/ru.json'
}).done(function() {
  $('.locale-switcher').on('click', 'a', function(e) {
    e.preventDefault();
    console.log($(this).data('locale'));
    $.i18n().locale = $(this).data('locale');
    do_translate();
  });
'''
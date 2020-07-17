jQuery(document).ready(function() {

    var update_texts = function() {
        $('body').i18n();
        $('#messages').text($.i18n('message_from', 'Ann', 1, 'female'));
    };

    // chargement des traductions
    $.i18n().load({
        en: 'i18n/messages_en.json',
        fr: 'i18n/messages_fr.json'
    }).done(function () {

        // lancement des traductions.
        update_texts();

    });

    // action bouton changement de langues
    $('.lang-switch').click(function(e) {
        e.preventDefault();
        $.i18n().locale = $(this).data('locale');
        update_texts();
    });

});
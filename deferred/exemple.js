                    
var $deferredService = $.Deferred();
// 1- chargement des datas en fonction du data-type
this.loadDataGrid(dataType, $deferredService);

// 2- Affichage des datas.
$.when($deferredService).done(
    function (datas) {
        console.log('[deferred-service]-[resolve]- datas = ', datas);
        this.rebuildGrid(datas);
    }.bind(this)
).fail(
    function (message) {
        console.log('[deferred-service]-[fail]');
        this.destroyGrid(message);
    }.bind(this)
);
                    

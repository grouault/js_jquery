// recuperation de l'identifiant de la ligne
var myGrid = $('#list'),
selRowId = myGrid.jqGrid ('getGridParam', 'selrow'),
celValue = myGrid.jqGrid ('getCell', selRowId, 'columnName');


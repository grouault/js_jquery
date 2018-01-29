/**
 * Created by grouault on 21/10/2017.
 */
$(function () {

    var $contentForm = $('.form-content').hide();

    var mydata = [
            { id: "1",  race: "20 Mar 2010 10:40 Normal 1 1000", name: "test",   online: true },
            { id: "2",  race: "20 Mar 2010 10:40 Normal 1 1000", name: "test2",  online: true },
            { id: "3",  race: "20 Mar 2010 10:40 Normal 1 1000", name: "test3",  online: true },
            { id: "4",  race: "22 Mar 2010 10:40 Bad 1 1000",    name: "test4",  online: true },
            { id: "5",  race: "22 Mar 2010 10:40 Bad 1 1000",    name: "test5",  online: true },
            { id: "6",  race: "22 Mar 2010 10:40 Bad 1 1000",    name: "test6",  online: true },
            { id: "7",  race: "20 Mar 2010 10:40 Good 1 1000",   name: "test7",  online: true },
            { id: "8",  race: "20 Mar 2010 10:40 Good 1 1000",   name: "test8",  online: true },
            { id: "9",  race: "12 Mar 2010 10:40 Normal 1 1000", name: "test9",  online: true },
            { id: "10", race: "12 Mar 2009 10:40 Normal 1 1000", name: "test10", online: true },
            { id: "11", race: "16 Mar 2009 10:40 Good 1 1000",   name: "test11", online: true },
            { id: "12", race: "16 Mar 2009 10:40 Good 1 1000",   name: "test12", online: true }
        ],
        lastSel,
        grid = $("#List1"),
        getColumnIndexByName = function (grid, columnName) {
            var cm = grid.jqGrid('getGridParam', 'colModel'), i, l = cm.length;
            for (i = 0; i < l; i++) {
                if (cm[i].name === columnName) {
                    return i; // return the index
                }
            }
            return -1;
        },
        myDelOptions = {
            // because I use "local" data I don't want to send the changes to the server
            // so I use "processing:true" setting and delete the row manually in onclickSubmit
            onclickSubmit: function (options, rowid) {
                var $this = $(this), gridIdSelector = $.jgrid.jqID(this.id), newPage = this.p.page;

                // reset the value of processing option to true to
                // skip the ajax request to 'clientArray'.
                options.processing = true;

                // we can use onclickSubmit function as "onclick" on "Delete" button
                // delete row
                $this.jqGrid('delRowData', rowid);
                $.jgrid.hideModal("#delmod" + gridIdSelector, {
                    gb: options.gbox ? options.gbox : "#gbox_" + gridIdSelector,
                    jqm: options.jqModal,
                    onClose: options.onClose
                });

                if (this.p.lastpage > 1) {// on the multipage grid reload the grid
                    if (this.p.reccount === 0 && newPage === this.p.lastpage) {
                        // if after deliting there are no rows on the current page
                        // which is the last page of the grid
                        newPage--; // go to the previous page
                    }
                    // reload grid to make the row from the next page visable.
                    $this.trigger("reloadGrid", [{page: newPage}]);
                }

                return true;
            },
            processing: true
        };

    grid.jqGrid({
        datatype: "local",
        data: mydata,
        colNames: ['', 'Id', 'Race', 'Name', 'Online'],
        colModel: [
            { name: 'id', index: 'id', width: 70, align: 'center', sorttype: 'int', searchoptions: { sopt: ['eq', 'ne'] }, hidden: true },
            { name: 'race', index: 'race', width: 240, editable: false },
            { name: 'name', index: 'name', editable: true, width: 100, editrules: { required: true} },
            { name: 'online', index: 'online', width: 60, align: 'center', editable: true, formatter: 'checkbox',
                edittype: "checkbox", editoptions: { value: "Yes:No", defaultValue: "Yes" },
                stype: "select", searchoptions: { sopt: ['eq', 'ne'], value: ":All;true:Yes;false:No" }
            },
            { name: 'act', index: 'act', width: 75, align: 'center', sortable: false, formatter: 'actions',
                formatoptions: {
                    keys: true, // we want use [Enter] key to save the row and [Esc] to cancel editing.
                    editbutton: false,
                    delOptions: myDelOptions
                }
            }
        ],
        rowNum: 10,
        rowList: [5, 10, 20],
        pager: '#Pager1',
        gridview: true,
        rownumbers: true,
        ignoreCase: true,
        sortname: 'invdate',
        viewrecords: true,
        sortorder: "desc",
        caption: "How to use custom 'action' button",
        height: "100%",
        editurl: 'clientArray',
        ondblClickRow: function (id) {
            // edit the row and save it on press "enter" key
            $(this).jqGrid('editRow', id, true, null, null, 'clientArray');
        },
        onSelectRow: function (id) {
            if (id && id !== lastSel) {
                // cancel editing of the previous selected row if it was in editing state.
                // jqGrid hold intern savedRow array inside of jqGrid object,
                // so it is safe to call restoreRow method with any id parameter
                // if jqGrid not in editing state
                if (typeof lastSel !== "undefined") {
                    $(this).jqGrid('restoreRow', lastSel);
                }
                lastSel = id;
                var actionLine = ".action-line";
                var articleClass = ".action-line-" + id;
                $(actionLine).hide();
                $(articleClass).show();
                $contentForm.hide();
            }
        },
        ondblClickRow: function(id){
            var actionLine = ".action-line";
            var articleClass = ".action-line-" + id;
            $(actionLine).hide();
            $(articleClass).show();
            $contentForm.show();
        },
        loadComplete: function () {
            var iCol = getColumnIndexByName(grid, 'act');
            $(this).find(">tbody>tr.jqgrow>td:nth-child(" + (iCol + 1) + ")")
                .each( function(index, value) {
                    console.log('index = ', index);
                    console.log('value = ', value);
                    $("<div>", {
                            title: "Custom",
                            mouseover: function() {
                                $(this).addClass('ui-state-hover');
                            },
                            mouseout: function() {
                                $(this).removeClass('ui-state-hover');
                            },
                            click: function(e) {
                                alert("'Custom' button is clicked in the rowid="+
                                    $(e.target).closest("tr.jqgrow").attr("id") +" !");
                                // charger data et afficher le form.
                                $contentForm.show();
                                return false;
                            }
                        }
                    ).css({"margin-right": "5px", float: "left", cursor: "pointer"})
                        .addClass("ui-pg-div ui-inline-custom action-line action-line-" + (index + 1))
                        .append('<span class="ui-icon ui-icon-document"></span>')
                        .prependTo($(this).children("div"))
                        .hide();
                });
        }
    }).jqGrid('navGrid', '#Pager1', { add: true, edit: false }, {}, {},
        myDelOptions, { multipleSearch: true, overlay: false });
});

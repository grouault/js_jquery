/**
 * Created by grouault on 23/04/2018.
 */
var applicationGrid = $("#application-list"),
    myData = [
        {id: 10, internship_url: "dummy", title: "title1", company: "company1", created_at: "2014-07-27", expire_date: "2018-12-31", internship_status: "bla bla", application_count: 12, follow: "f1"},
        {id: 20, internship_url: "dummy", title: "title2", company: "company1", created_at: "2014-07-21", expire_date: "2018-12-31", internship_status: "bla bla", application_count: 123, follow: "f2"},
        {id: 20, internship_url: "dummy", title: "title3", company: "company1", created_at: "2014-07-29", expire_date: "2018-12-31", internship_status: "bla bla", application_count: 10, follow: "f3"},
    ];

applicationGrid.jqGrid({
    datatype: "local",
    data: myData,
    colNames: ['Internship Url', 'Internship Title', 'Company', 'Applied On', 'Application Status', 'Expire Date', 'Internship Status', '# Applications', 'Follow up', 'Name', 'College', 'Phone', 'Email'],
    colModel: [
        { name: 'internship_url', hidden: true },
        { name: 'title', width: 350 },
        { name: 'company', width: 200 },
        { name: 'created_at', width: 120, align: 'center', sorttype: 'date' },
        { name: 'status', width: 120, edittype: 'textarea' },
        { name: 'expire_date', hidden: true },
        { name: 'internship_status', width: 120, edittype: 'textarea' },
        { name: 'application_count', width: 120, align: 'center',
            cellattr: function() {
                return "title=\"Total number of applications received for this internship to help you gauge competition.\"";
            }},
        { name: 'follow', width: 150,
            formatter: function(cellvalue) {
                return '<span class="pointer_with_line">' + cellvalue + '</span>';
            }},
        { name: 'name', hidden: true },
        { name: 'college', hidden: true },
        { name: 'phone', hidden: true },
        { name: 'email', hidden: true }
    ],
    rowNum: 10,
    rowList: [5, 10, 20],
    pager: '#application-list-pager',
    gridview: true,
    rownumbers: true,
    autoencode: true,
    ignoreCase: true,
    sortname: 'created_at',
    viewrecords: true,
    sortorder: 'desc',
    autowidth: true,
    height: 'auto',
    caption: 'Your Applications',
});

$(window).on("resize", function () {
    console.log('debut');
    var newWidth = $("#application-list").closest(".ui-jqgrid").parent().width();
    applicationGrid.jqGrid("setGridWidth", newWidth, true);
    console.log('fin');
});
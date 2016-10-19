var InitiateSimpleDataTable = function () {
    return {
        init: function () {
            $('#simpledatatable').dataTable( {
                data:[
                 [1,'hgjghj',15.52, 174000 ,435134,'2014-07-27 22:25:05',10,100,100],
                 [2,'2',15.52, 174000 ,435134,'2014-07-27 22:25:05',10,100,100],
                 [3,'3',15.52, 174000 ,435134,'2014-07-27 22:25:05',10,100,100]
                 ],
                "columnDefs": [
                      // {
                      //   "targets": [ 2 ],
                      //   "visible": false,
                      //   "searchable": false,
                      //   'bSortable': false
                      // },
                      // {
                      //   "targets": [ 3 ],
                      //   "visible": false
                      // }
                 ],
                 dom: 'Bfrtip',
                 buttons: 
                 [
                    {
                        extend: 'copy',
                        text: '复制'
                    },

                    'excel',
                    {
                        extend: 'print',
                        text: '打印'
                    },
                    {
                        extend: 'colvis',
                        text: '设置列'
                    },                    
                    'pageLength'
                 ],
                "oLanguage": $.scParameter.datatable_lang
            });
        }

    };

}();

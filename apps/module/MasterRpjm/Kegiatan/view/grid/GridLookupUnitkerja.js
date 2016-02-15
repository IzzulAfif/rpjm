Ext.define('RPJM.module.MasterRpjm.Kegiatan.view.grid.GridLookupUnitkerja', {
    extend      : 'Ext.grid.Panel',
    store       : 'RPJM.module.MasterRpjm.Kegiatan.store.LookupUnitkerja',
    requires    : ['RPJM.module.MasterRpjm.Kegiatan.store.LookupUnitkerja'],
    iconCls     : 'icon-grid',
    alias       : 'widget.gridlookupunitkerja',
    id          : 'gridlookupunitkerja',
    border      : true,
    frame       : true,
    margins     : '3px', 
    selModel    : {
        selType     : 'checkboxmodel',
        mode        : 'SINGLE',
        checkOnly   : true,
        width       : '3%',
        action      : 'selected',
    },
    dockedItems: [{
        // xtype       : 'pagingtoolbar',
        store       : 'RPJM.module.MasterRpjm.Kegiatan.store.LookupUnitkerja',
        dock        : 'bottom'
    }], 
    columns  : [
        {
            text        : 'No',
            xtype       : 'rownumberer',
            width       : '7%',
            hidden      : true
        },
        {
            text        : 'Kode Unitkerja',
            dataIndex   : 'kode_unitkerja',
            width       : '15%'
        },
        {
            text        : 'Unitkerja',
            dataIndex   : 'unitkerja',
            width       : '50%'
        }
    ],
    tbar: [
         {
            xtype               : 'textfield',
            name                : 'cariunitkerja',
            id                  : 'cariunitkerja',
            emptyText           : 'Type a keyword Press Enter',
            width               : '90%',
            enableKeyEvents     : true,
            listeners           : {
                'keypress' : function(grid, e, evt, opts){
                    var value       = Ext.getCmp('cariunitkerja').getValue();
                    Ext.Ajax.request({
                        url     : BASE_URL + 'kegiatan/c_kegiatan/searchLookupUnitkerja',
                        method  : 'POST',
                        params  : {name : value},
                        success : function(response){
                            var data    = Ext.JSON.decode(response.responseText);
                            if(data.success){
                                    var storeApproval = Ext.getStore('RPJM.module.MasterRpjm.Kegiatan.store.LookupUnitkerja');
                                    storeApproval.removeAll();
                                    storeApproval.add(data.data);
                            }
                        }
                    });
                }
            }
        }
    ]
});
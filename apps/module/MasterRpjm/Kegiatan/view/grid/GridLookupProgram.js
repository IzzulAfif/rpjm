Ext.define('RPJM.module.MasterRpjm.Kegiatan.view.grid.GridLookupProgram', {
    extend      : 'Ext.grid.Panel',
    store       : 'RPJM.module.MasterRpjm.Kegiatan.store.LookupProgram',
    requires    : ['RPJM.module.MasterRpjm.Kegiatan.store.LookupProgram'],
    iconCls     : 'icon-grid',
    alias       : 'widget.gridlookupprogram',
    id          : 'gridlookupprogram',
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
        store       : 'RPJM.module.MasterRpjm.Kegiatan.store.LookupProgram',
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
            text        : 'Kode Program',
            dataIndex   : 'kode_programrpjm',
            width       : '15%'
        },
        {
            text        : 'Program',
            dataIndex   : 'programrpjm',
            width       : '50%'
        }
    ],
    tbar: [
         {
            xtype               : 'textfield',
            name                : 'cariprogram',
            id                  : 'cariprogram',
            emptyText           : 'Type a keyword Press Enter',
            width               : '90%',
            enableKeyEvents     : true,
            listeners           : {
                'keypress' : function(grid, e, evt, opts){
                    var value       = Ext.getCmp('cariprogram').getValue();
                    Ext.Ajax.request({
                        url     : BASE_URL + 'kegiatan/c_kegiatan/searchLookupProgram',
                        method  : 'POST',
                        params  : {name : value},
                        success : function(response){
                            var data    = Ext.JSON.decode(response.responseText);
                            if(data.success){
                                    var storeApproval = Ext.getStore('RPJM.module.MasterRpjm.Kegiatan.store.LookupProgram');
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
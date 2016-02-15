Ext.define('RPJM.module.Renja.TransaksiRenja.view.grid.GridLookupKegiatanKecamatan', {
    extend      : 'Ext.grid.Panel',
    store       : 'RPJM.module.Renja.TransaksiRenja.store.LookupKegiatanKecamatan',
    requires    : ['RPJM.module.Renja.TransaksiRenja.store.LookupKegiatanKecamatan'],
    iconCls     : 'icon-grid',
    alias       : 'widget.gridlookupkegiatankecamatan',
    id          : 'gridlookupkegiatankecamatan',
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
        store       : 'RPJM.module.Renja.TransaksiRenja.store.LookupKegiatanKecamatan',
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
            text        : 'Kode Kegiatan',
            dataIndex   : 'kode_kegiatanrpjm',
            width       : '15%'
        },
        {
            text        : 'Kegiatan',
            dataIndex   : 'kegiatan',
            width       : '50%'
        }
    ],
    tbar: [
        {
            xtype       : 'button',
            text        : 'Reset',
            iconCls     : 'icon-refresh',
            handler     : function(btn){
                 Ext.ComponentQuery.query('#gridlookupkegiatankecamatan')[0].getStore('RPJM.module.Renja.TransaksiRenja.store.LookupKegiatanKecamatan').reload(); 
            }
        },
         {
            xtype               : 'textfield',
            name                : 'carikegiatan',
            id                  : 'carikegiatan',
            emptyText           : 'Type a keyword Press Enter',
            width               : '90%',
            enableKeyEvents     : true,
            listeners           : {
                'keypress' : function(grid, e, evt, opts){
                    var value       = Ext.getCmp('carikegiatan').getValue();
                    Ext.Ajax.request({
                        url     : BASE_URL + 'transaksirenja/c_transaksirenja/searchLookupKegiatanKecamatan',
                        method  : 'POST',
                        params  : {name : value},
                        success : function(response){
                            var data    = Ext.JSON.decode(response.responseText);
                            if(data.success){
                                    var storeApproval = Ext.getStore('RPJM.module.Renja.TransaksiRenja.store.LookupKegiatanKecamatan');
                                    // storeApproval.removeAll();
                                    storeApproval.loadData([],false);
                                    storeApproval.add(data.data);
                            }
                        }
                    });
                }
            }
        }
    ]
});
Ext.define('RPJM.module.MasterRpjm.Kegiatan.view.grid.GridKegiatan', {
    extend   : 'Ext.grid.Panel',
    store    : 'RPJM.module.MasterRpjm.Kegiatan.store.Kegiatan',
    requires : ['RPJM.module.MasterRpjm.Kegiatan.store.Kegiatan'],
    title    : 'Grid Kegiatan',
    iconCls  : 'icon-grid',
    alias    : 'widget.gridkegiatan',
    id       : 'gridkegiatan',
    border   : true,
    frame    : true,
        margins     : '3px', 
    selModel: {
        selType     : 'checkboxmodel',
        mode        : 'SINGLE',
        checkOnly   : true,
        width       : '3%',
        action      : 'selected',
    },
    dockedItems: [{
        xtype       : 'pagingtoolbar',
        store       : 'RPJM.module.MasterRpjm.Kegiatan.store.Kegiatan',
        dock        : 'bottom'
    }], 
    columns  : [
        {
            text    : 'No',
            xtype   : 'rownumberer',
            width   : '5%'
        },
        {
            text     : 'Program',
            dataIndex: 'programrpjm',
            width    : '20%'
        },
        {
            text     : 'Kegiatan',
            dataIndex: 'kegiatan',
            width    : '75%'
        },
        {
            text     : 'No Urut',
            dataIndex: 'no_urut',
            width    : '8%'
        }
    ],
    tbar: [
         // { xtype: 'button', iconCls: 'icon-excel', text: 'Print', action : 'print' },
        {
            xtype               : 'combobox',
            emptyText           : 'Program',
            name                : 'kode_programrpjm',
            id                  : 'kode_programrpjm',
            width               : '30%',
            store               : Ext.create('RPJM.module.MasterRpjm.Kegiatan.store.LookupProgram'),
            enableKeyEvents     : true,
            displayField        : 'programrpjm',
            valueField          : 'kode_programrpjm',
            listeners           : {
                'select' : function(combo, records, e, evt, opts){
                    var value       = Ext.getCmp('kode_programrpjm').getValue();
                    Ext.Ajax.request({
                        url             : BASE_URL + 'kegiatan/c_kegiatan/getKegiatanFilter',
                        method          : 'POST',
                        params          : {
                            value : Ext.JSON.encode(value)
                        },
                        success         : function(response){
                            var data    = Ext.JSON.decode(response.responseText);
                            var storeMenu = Ext.getStore('RPJM.module.MasterRpjm.Kegiatan.store.Kegiatan');
                            storeMenu.loadData([],false);
                            storeMenu.add(data.data);
                        }
                    });
                }
            }
        },
        {
            xtype               : 'button',
            fieldLabel          : 'Program',
            text                : 'Load Program',
            iconCls             : 'icon-lookup',
            action              : 'lookupProgram',
            flex                : 0.5
        },
        {
            xtype               : 'textfield',
            emptyText           : 'Type a keyword Press Enter',
            width               : '45%',
            enableKeyEvents     : true,
            action              : 'search'
        },
        {   xtype               : 'button', 
            iconCls             : 'icon-delete', 
            text                : 'Delete', 
            action              : 'delete', 
            disabled            : deleteKegiatan 
        }
    ]
});
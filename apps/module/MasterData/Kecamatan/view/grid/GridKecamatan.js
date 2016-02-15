Ext.define('RPJM.module.MasterData.Kecamatan.view.grid.GridKecamatan', {
    extend   : 'Ext.grid.Panel',
    store    : 'RPJM.module.MasterData.Kecamatan.store.Kecamatan',
    requires : ['RPJM.module.MasterData.Kecamatan.store.Kecamatan'],
    title    : 'Grid Kecamatan',
    iconCls  : 'icon-grid',
    alias    : 'widget.gridkecamatan',
    id       : 'gridkecamatan',
    border   : true,
    frame    : true,
    margins  : '3px', 
    selModel: {
        selType     : 'checkboxmodel',
        mode        : 'SINGLE',
        checkOnly   : true,
        width       : '3%',
        action      : 'selected',
    },
    dockedItems: [{
        xtype       : 'pagingtoolbar',
        store       : 'RPJM.module.MasterData.Kecamatan.store.Kecamatan',
        dock        : 'bottom'
    }], 
    columns  : [
        {
            text    : 'No',
            xtype   : 'rownumberer',
            width   : '7%'
        },
        {
            text     : 'Kabupaten',
            dataIndex: 'kabupaten',
            width    : '30%'
        },
        {
            text     : 'Kecamatan',
            dataIndex: 'kecamatan',
            width    : '45%'
        }
    ],
    tbar: [
         { xtype: 'button', iconCls: 'icon-delete', text: 'Delete', action : 'delete', disabled : deleteKecamatan },
         // { xtype: 'button', iconCls: 'icon-excel', text: 'Print', action : 'print' },
         {
            xtype               : 'textfield',
            emptyText           : 'Type a keyword Press Enter',
            width               : '75%',
            enableKeyEvents     : true,
            action              : 'search'
        }
    ]
});
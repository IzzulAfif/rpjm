Ext.define('RPJM.module.MasterData.Kabupaten.view.grid.GridKabupaten', {
    extend   : 'Ext.grid.Panel',
    store    : 'RPJM.module.MasterData.Kabupaten.store.Kabupaten',
    requires : ['RPJM.module.MasterData.Kabupaten.store.Kabupaten'],
    title    : 'Grid Kabupaten',
    iconCls  : 'icon-grid',
    alias    : 'widget.gridkabupaten',
    id       : 'gridkabupaten',
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
        store       : 'RPJM.module.MasterData.Kabupaten.store.Kabupaten',
        dock        : 'bottom'
    }], 
    columns  : [
        {
            text    : 'No',
            xtype   : 'rownumberer',
            width   : '7%'
        },
        {
            text     : 'Kode Kab',
            dataIndex: 'kode_kab',
            width    : '10%'
        },
        {
            text     : 'Kabupaten',
            dataIndex: 'kabupaten',
            width    : '35%'
        },
        {
            text     : 'Provinsi',
            dataIndex: 'provinsi',
            width    : '35%'
        }
    ],
    tbar: [
         { xtype: 'button', iconCls: 'icon-delete', text: 'Delete', action : 'delete', disabled : deleteKabupaten },
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
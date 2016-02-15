Ext.define('RPJM.module.MasterData.Jabatan.view.grid.GridJabatan', {
    extend   : 'Ext.grid.Panel',
    store    : 'RPJM.module.MasterData.Jabatan.store.Jabatan',
    requires : ['RPJM.module.MasterData.Jabatan.store.Jabatan'],
    title    : 'Grid Jabatan',
    iconCls  : 'icon-grid',
    alias    : 'widget.gridjabatan',
    id       : 'gridjabatan',
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
        store       : 'RPJM.module.MasterData.Jabatan.store.Jabatan',
        dock        : 'bottom'
    }], 
    columns  : [
        {
            text    : 'No',
            xtype   : 'rownumberer',
            width   : '7%'
        },
        {
            text     : 'Kode',
            dataIndex: 'kode',
            width    : '15%'
        },
        {
            text     : 'Jabatan',
            dataIndex: 'jabatan',
            width    : '60%'
        }
    ],
    tbar: [
         { xtype: 'button', iconCls: 'icon-delete', text: 'Delete', action : 'delete', disabled : deleteJabatan },
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
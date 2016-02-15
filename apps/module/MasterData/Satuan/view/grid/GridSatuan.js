Ext.define('RPJM.module.MasterData.Satuan.view.grid.GridSatuan', {
    extend   : 'Ext.grid.Panel',
    store    : 'RPJM.module.MasterData.Satuan.store.Satuan',
    requires : ['RPJM.module.MasterData.Satuan.store.Satuan'],
    title    : 'Grid Satuan',
    iconCls  : 'icon-grid',
    alias    : 'widget.gridsatuan',
    id       : 'gridsatuan',
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
        store       : 'RPJM.module.MasterData.Satuan.store.Satuan',
        dock        : 'bottom'
    }], 
    columns  : [
        {
            text    : 'No',
            xtype   : 'rownumberer',
            width   : '10%'
        },
        {
            text     : 'Kode Satuan',
            dataIndex: 'kode_satuan',
            width    : '30%'
        },
        {
            text     : 'Satuan',
            dataIndex: 'satuan',
            width    : '40%'
        }
    ],
    tbar: [
         { xtype: 'button', iconCls: 'icon-delete', text: 'Delete', action : 'delete', disabled : deleteSatuan },
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
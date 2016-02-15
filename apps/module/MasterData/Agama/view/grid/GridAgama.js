Ext.define('RPJM.module.MasterData.Agama.view.grid.GridAgama', {
    extend   : 'Ext.grid.Panel',
    store    : 'RPJM.module.MasterData.Agama.store.Agama',
    requires : ['RPJM.module.MasterData.Agama.store.Agama'],
    title    : 'Grid Agama',
    iconCls  : 'icon-grid',
    alias    : 'widget.gridagama',
    id       : 'gridagama',
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
        store       : 'RPJM.module.MasterData.Agama.store.Agama',
        dock        : 'bottom'
    }], 
    columns  : [
        {
            text    : 'No',
            xtype   : 'rownumberer',
            width   : '10%'
        },
        {
            text     : 'Kode Agama',
            dataIndex: 'kode_agama',
            width    : '15%'
        },
        {
            text     : 'Agama',
            dataIndex: 'agama',
            width    : '15%'
        }
    ],
    tbar: [
         { xtype: 'button', iconCls: 'icon-delete', text: 'Delete', action : 'delete', disabled : deleteAgama },
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
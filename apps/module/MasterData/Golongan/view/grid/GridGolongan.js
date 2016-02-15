Ext.define('RPJM.module.MasterData.Golongan.view.grid.GridGolongan', {
    extend   : 'Ext.grid.Panel',
    store    : 'RPJM.module.MasterData.Golongan.store.Golongan',
    requires : ['RPJM.module.MasterData.Golongan.store.Golongan'],
    title    : 'Grid Golongan',
    iconCls  : 'icon-grid',
    alias    : 'widget.gridgolongan',
    id       : 'gridgolongan',
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
        store       : 'RPJM.module.MasterData.Golongan.store.Golongan',
        dock        : 'bottom'
    }], 
    columns  : [
        {
            text    : 'No',
            xtype   : 'rownumberer',
            width   : '10%'
        },
        {
            text     : 'Kode Golongan',
            dataIndex: 'kode_golongan',
            width    : '15%'
        },
        {
            text     : 'Golongan',
            dataIndex: 'golongan',
            width    : '15%'
        }
    ],
    tbar: [
         { xtype: 'button', iconCls: 'icon-delete', text: 'Delete', action : 'delete', disabled : deleteGolongan },
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
Ext.define('RPJM.module.MasterData.Skpd.view.grid.GridSkpd', {
    extend   : 'Ext.grid.Panel',
    store    : 'RPJM.module.MasterData.Skpd.store.Skpd',
    requires : ['RPJM.module.MasterData.Skpd.store.Skpd'],
    title    : 'Grid Skpd',
    iconCls  : 'icon-grid',
    alias    : 'widget.gridskpd',
    id       : 'gridskpd',
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
        store       : 'RPJM.module.MasterData.Skpd.store.Skpd',
        dock        : 'bottom'
    }], 
    columns  : [
        {
            text    : 'No',
            xtype   : 'rownumberer',
            width   : '10%'
        },
        {
            text     : 'Kode Skpd',
            dataIndex: 'kode_skpd',
            width    : '30%'
        },
        {
            text     : 'Skpd',
            dataIndex: 'skpd',
            width    : '40%'
        }
    ],
    tbar: [
         { xtype: 'button', iconCls: 'icon-delete', text: 'Delete', action : 'delete', disabled : deleteSkpd },
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
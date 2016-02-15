Ext.define('RPJM.module.MasterData.Eselon.view.grid.GridEselon', {
    extend   : 'Ext.grid.Panel',
    store    : 'RPJM.module.MasterData.Eselon.store.Eselon',
    requires : ['RPJM.module.MasterData.Eselon.store.Eselon'],
    title    : 'Grid Eselon',
    iconCls  : 'icon-grid',
    alias    : 'widget.grideselon',
    id       : 'grideselon',
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
        store       : 'RPJM.module.MasterData.Eselon.store.Eselon',
        dock        : 'bottom'
    }], 
    columns  : [
        {
            text    : 'No',
            xtype   : 'rownumberer',
            width   : '10%'
        },
        {
            text     : 'Kode Eselon',
            dataIndex: 'kode_eselon',
            width    : '15%'
        },
        {
            text     : 'Eselon',
            dataIndex: 'eselon',
            width    : '15%'
        }
    ],
    tbar: [
         { xtype: 'button', iconCls: 'icon-delete', text: 'Delete', action : 'delete', disabled : deleteEselon },
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
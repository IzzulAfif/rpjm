Ext.define('RPJM.module.MasterData.Prioritas.view.grid.GridPrioritas', {
    extend   : 'Ext.grid.Panel',
    //store    : 'RPJM.module.MasterData.Prioritas.store.Prioritas',
    requires : ['RPJM.module.MasterData.Prioritas.store.Prioritas'],
    title    : 'Grid Prioritas',
    iconCls  : 'icon-grid',
    alias    : 'widget.gridprioritas',
    id       : 'gridprioritas',
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
        //store       : 'RPJM.module.MasterData.Prioritas.store.Prioritas',
        dock        : 'bottom'
    }], 
    columns  : [
        {
            text    : 'No',
            xtype   : 'rownumberer',
            width   : '10%'
        },
        {
            text     : 'Kode Prioritas',
            dataIndex: 'kode_prioritas',
            width    : '30%'
        },
        {
            text     : 'Prioritas',
            dataIndex: 'prioritas',
            width    : '50%'
        }
    ],
    tbar: [
         { xtype: 'button', iconCls: 'icon-delete', text: 'Delete', action : 'delete', disabled : deletePrioritas },
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
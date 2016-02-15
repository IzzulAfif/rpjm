Ext.define('RPJM.module.MasterData.Kedudukan.view.grid.GridKedudukan', {
    extend   : 'Ext.grid.Panel',
    //store    : 'RPJM.module.MasterData.Kedudukan.store.Kedudukan',
    //requires : ['RPJM.module.MasterData.Kedudukan.store.Kedudukan'],
    title    : 'Grid Kedudukan',
    iconCls  : 'icon-grid',
    alias    : 'widget.gridkedudukan',
    id       : 'gridkedudukan',
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
        //store       : 'RPJM.module.MasterData.Kedudukan.store.Kedudukan',
        dock        : 'bottom'
    }], 
    columns  : [
        {
            text    : 'No',
            xtype   : 'rownumberer',
            width   : '10%'
        },
        {
            text     : 'Kabupaten',
            dataIndex: 'kabupaten',
            width    : '50%'
        },
        {
            text     : 'Kedudukan',
            dataIndex: 'kedudukan',
            width    : '40%'
        }
    ],
    tbar: [
         { xtype: 'button', iconCls: 'icon-delete', text: 'Delete', action : 'delete', disabled : deleteKedudukan },
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
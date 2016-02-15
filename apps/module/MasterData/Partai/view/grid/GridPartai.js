Ext.define('RPJM.module.MasterData.Partai.view.grid.GridPartai', {
    extend   : 'Ext.grid.Panel',
    store    : 'RPJM.module.MasterData.Partai.store.Partai',
    requires : ['RPJM.module.MasterData.Partai.store.Partai'],
    title    : 'Grid Partai',
    iconCls  : 'icon-grid',
    alias    : 'widget.gridpartai',
    id       : 'gridpartai',
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
        store       : 'RPJM.module.MasterData.Partai.store.Partai',
        dock        : 'bottom'
    }], 
    columns  : [
        {
            text     : 'Nama Partai',
            dataIndex: 'partai',
            width    : '80%'
        }
    ],
    tbar: [
         { xtype: 'button', iconCls: 'icon-delete', text: 'Delete', action : 'delete', disabled : deletePartai },
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
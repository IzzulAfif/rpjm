Ext.define('RPJM.module.GeneralSetup.User.view.grid.GridUsers', {
    extend   : 'Ext.grid.Panel',
    store    : 'RPJM.module.GeneralSetup.User.store.Users',
    title    : 'Grid Users',
    iconCls  : 'icon-grid',
    alias    : 'widget.gridusers',
    id       : 'gridusers',
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
        store       : 'RPJM.module.GeneralSetup.User.store.Users',
        dock        : 'bottom'
    }], 
    columns  : [
        {
            text    : 'No',
            xtype   : 'rownumberer',
            width   : '8%'
        },
        {
            text     : 'Nama',
            dataIndex: 'name',
            width    : '25%'
        },
        {
            text     : 'Username',
            dataIndex: 'username',
            width    : '15%'
        },
        {
            text     : 'Unit Kerja',
            dataIndex: 'unitkerja',
            width    : '40%'
        }
    ],
    tbar: [
         { xtype: 'button', iconCls: 'icon-delete', text: 'Delete', action : 'delete', disabled : deleteUsers },
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
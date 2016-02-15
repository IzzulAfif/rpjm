Ext.define('RPJM.module.MasterData.SubBidangSkpd.view.grid.GridSubBidangSkpd', {
    extend   : 'Ext.grid.Panel',
    store    : 'RPJM.module.MasterData.SubBidangSkpd.store.SubBidangSkpd',
    requires : ['RPJM.module.MasterData.SubBidangSkpd.store.SubBidangSkpd'],
    title    : 'Grid SubBidangSkpd',
    iconCls  : 'icon-grid',
    alias    : 'widget.gridsubbidangskpd',
    id       : 'gridsubbidangskpd',
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
        store       : 'RPJM.module.MasterData.SubBidangSkpd.store.SubBidangSkpd',
        dock        : 'bottom'
    }], 
    columns  : [
        {
            text    : 'No',
            xtype   : 'rownumberer',
            width   : '10%'
        },
        {
            text     : 'Kode Bidang Skpd',
            dataIndex: 'kode_bidangskpd',
            width    : '20%'
        },
        {
            text     : 'Kode Sub Bidang Skpd',
            dataIndex: 'kode_subbidangskpd',
            width    : '30%'
        },
        {
            text     : 'Sub Bidang Skpd',
            dataIndex: 'subbidangskpd',
            width    : '40%'
        }
    ],
    tbar: [
         { xtype: 'button', iconCls: 'icon-delete', text: 'Delete', action : 'delete', disabled : deleteSubBidangSkpd },
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
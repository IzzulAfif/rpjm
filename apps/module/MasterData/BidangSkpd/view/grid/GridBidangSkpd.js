Ext.define('RPJM.module.MasterData.BidangSkpd.view.grid.GridBidangSkpd', {
    extend   : 'Ext.grid.Panel',
    store    : 'RPJM.module.MasterData.BidangSkpd.store.BidangSkpd',
    requires : ['RPJM.module.MasterData.BidangSkpd.store.BidangSkpd'],
    title    : 'Grid BidangSkpd',
    iconCls  : 'icon-grid',
    alias    : 'widget.gridbidangskpd',
    id       : 'gridbidangskpd',
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
        store       : 'RPJM.module.MasterData.BidangSkpd.store.BidangSkpd',
        dock        : 'bottom'
    }], 
    columns  : [
        {
            text    : 'No',
            xtype   : 'rownumberer',
            width   : '15%'
        },
        {
            text     : 'Kode Skp',
            dataIndex: 'kode_skpd',
            width    : '15%'
        },
        {
            text     : 'Kode Bidang Skpd',
            dataIndex: 'kode_bidangskpd',
            width    : '15%'
        },
         {
            text     : 'Bidang Skpd',
            dataIndex: 'bidangskpd',
            width    : '15%'
        }
    ],
    tbar: [
         { xtype: 'button', iconCls: 'icon-delete', text: 'Delete', action : 'delete', disabled : deleteBidangSkpd },
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
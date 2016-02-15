Ext.define('RPJM.module.MasterData.BidangDesa.view.grid.GridBidangDesa', {
    extend   : 'Ext.grid.Panel',
    store    : 'RPJM.module.MasterData.BidangDesa.store.BidangDesa',
    requires : ['RPJM.module.MasterData.BidangDesa.store.BidangDesa'],
    title    : 'Grid BidangDesa',
    iconCls  : 'icon-grid',
    alias    : 'widget.gridbidangdesa',
    id       : 'gridbidangdesa',
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
        store       : 'RPJM.module.MasterData.BidangDesa.store.BidangDesa',
        dock        : 'bottom'
    }], 
    columns  : [
        {
            text    : 'No',
            xtype   : 'rownumberer',
            width   : '15%'
        },
        {
            text     : 'Kode Bidang Desa',
            dataIndex: 'kode_bidangdesa',
            width    : '15%'
        },
        {
            text     : 'Bidang Desa',
            dataIndex: 'bidangdesa',
            width    : '15%'
        }
    ],
    tbar: [
         { xtype: 'button', iconCls: 'icon-delete', text: 'Delete', action : 'delete', disabled : deleteBidangDesa },
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
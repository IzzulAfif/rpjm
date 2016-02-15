Ext.define('RPJM.module.MasterData.LingkupBidang.view.grid.GridLingkupBidang', {
    extend   : 'Ext.grid.Panel',
    //store    : 'RPJM.module.MasterData.LingkupBidang.store.LingkupBidang',
    requires : ['RPJM.module.MasterData.LingkupBidang.store.LingkupBidang'],
    title    : 'Grid LingkupBidang',
    iconCls  : 'icon-grid',
    alias    : 'widget.gridlingkupbidang',
    id       : 'gridlingkupbidang',
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
        //store       : 'RPJM.module.MasterData.LingkupBidang.store.LingkupBidang',
        dock        : 'bottom'
    }], 
    columns  : [
        {
            text    : 'No',
            xtype   : 'rownumberer',
            width   : '10%'
        },
        {
            text     : 'Kode Lingkup Bidang',
            dataIndex: 'kode_lingbidang',
            width    : '20%'
        },
        {
            text     : 'Lingkup Bidang',
            dataIndex: 'ling_bidang',
            width    : '60%'
        }
    ],
    tbar: [
         { xtype: 'button', iconCls: 'icon-delete', text: 'Delete', action : 'delete', disabled : deleteLingkupBidang },
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
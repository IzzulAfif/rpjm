Ext.define('RPJM.module.MasterData.Bidang.view.grid.GridBidang', {
    extend   : 'Ext.grid.Panel',
    store    : 'RPJM.module.MasterData.Bidang.store.Bidang',
    requires : ['RPJM.module.MasterData.Bidang.store.Bidang'],
    title    : 'Grid Bidang',
    iconCls  : 'icon-grid',
    alias    : 'widget.gridbidang',
    id       : 'gridbidang',
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
        store       : 'RPJM.module.MasterData.Bidang.store.Bidang',
        dock        : 'bottom'
    }], 
    columns  : [
        {
            text    : 'No',
            xtype   : 'rownumberer',
            width   : '10%'
        },
        {
            text     : 'Kode Bidang',
            dataIndex: 'kode_bidang',
            width    : '15%'
        },
        {
            text     : 'Nama Bidang',
            dataIndex: 'nama_bidang',
            width    : '15%'
        },
        {
            text     : 'Nomor Bidang',
            dataIndex: 'no_bidang',
            width    : '15%'
        },
        {
            text     : 'Kode Sub Pilihanurusan',
            dataIndex: 'kode_subpilihanurusan',
            width    : '15%'
        },
        {
            text     : 'Kode Pilihanurusan',
            dataIndex: 'kode_pilihanurusan',
            width    : '15%'
        }

    ],
    tbar: [
         { xtype: 'button', iconCls: 'icon-delete', text: 'Delete', action : 'delete', disabled : deleteBidang },
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
Ext.define('RPJM.module.MasterRpjm.BidangUrusanPenunjang.view.grid.GridUrusan', {
    extend      : 'Ext.grid.Panel',
    store       : 'RPJM.module.MasterRpjm.BidangUrusanPenunjang.store.Urusan2',
    requires    : ['RPJM.module.MasterRpjm.BidangUrusanPenunjang.store.Urusan2'],
    title       : 'Grid Sub Urusan',
    iconCls     : 'icon-grid',
    alias       : 'widget.gridurusan',
    id          : 'gridurusan',
    border      : true,
    frame       : true,
    margins     : '3px', 
    selModel    : {
        selType     : 'checkboxmodel',
        mode        : 'SINGLE',
        checkOnly   : true,
        width       : '3%',
        action      : 'selected',
    },
    dockedItems: [{
        xtype       : 'pagingtoolbar',
        store       : 'RPJM.module.MasterRpjm.BidangUrusanPenunjang.store.Urusan2',
        dock        : 'bottom'
    }], 
    columns  : [
        {
            text        : 'No',
            xtype       : 'rownumberer',
            width       : '7%',
            hidden      : true
        },
        {
            text        : 'No Urusan',
            dataIndex   : 'no_urusan',
            width       : '15%'
        },
        {
            text        : 'Kode',
            dataIndex   : 'kode_urusan',
            width       : '10%',
            hidden      : true
        },
        {
            text        : 'Kode',
            dataIndex   : 'kode_urusan',
            width       : '10%',
            hidden      : true
        },
        {
            text        : 'Nama Urusan',
            dataIndex   : 'nama_urusan',
            width       : '75%'
        }
    ],
    tbar: [
         {
            xtype               : 'textfield',
            emptyText           : 'Type a keyword Press Enter',
            width               : '90%',
            enableKeyEvents     : true,
            action              : 'search'
        }
    ]
});
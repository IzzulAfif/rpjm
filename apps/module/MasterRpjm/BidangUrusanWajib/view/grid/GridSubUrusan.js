Ext.define('RPJM.module.MasterRpjm.BidangUrusanWajib.view.grid.GridSubUrusan', {
    extend      : 'Ext.grid.Panel',
    store       : 'RPJM.module.MasterRpjm.BidangUrusanWajib.store.SubUrusan2',
    requires    : ['RPJM.module.MasterRpjm.BidangUrusanWajib.store.SubUrusan2'],
    title       : 'Grid Sub Urusan',
    iconCls     : 'icon-grid',
    alias       : 'widget.gridsuburusan',
    id          : 'gridsuburusan',
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
        store       : 'RPJM.module.MasterRpjm.BidangUrusanWajib.store.SubUrusan2',
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
            dataIndex   : 'no_suburusan',
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
            dataIndex   : 'kode_suburusan',
            width       : '10%',
            hidden      : true
        },
        {
            text        : 'Nama Sub Urusan',
            dataIndex   : 'nama_suburusan',
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
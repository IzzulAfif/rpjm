Ext.define('RPJM.module.MasterRpjm.UrusanPemerintah.view.grid.GridUrusanPemerintah', {
    extend   : 'Ext.grid.Panel',
    store    : 'RPJM.module.MasterRpjm.UrusanPemerintah.store.UrusanPemerintah',
    requires : ['RPJM.module.MasterRpjm.UrusanPemerintah.store.UrusanPemerintah'],
    title    : 'Grid UrusanPemerintah',
    iconCls  : 'icon-grid',
    alias    : 'widget.gridurusanpemerintah',
    id       : 'gridurusanpemerintah',
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
        store       : 'RPJM.module.MasterRpjm.UrusanPemerintah.store.UrusanPemerintah',
        dock        : 'bottom'
    }], 
    columns  : [
        {
            text    : 'No',
            xtype   : 'rownumberer',
            width   : '7%'
        },
        {
            text     : 'Kode',
            dataIndex: 'kode_urusan_uu',
            width    : '10%'
        }, 
        {
            text     : 'Nama Urusan',
            dataIndex: 'nama_urusan_uu',
            width    : '50%'
        },
        {
            text     : 'No Urusan',
            dataIndex: 'no_urusan_uu',
            width    : '10%'
        }
    ],
    tbar: [
         { xtype: 'button', iconCls: 'icon-delete', text: 'Delete', action : 'delete', disabled : deleteUrusanPemerintah },
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
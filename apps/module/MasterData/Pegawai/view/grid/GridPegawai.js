Ext.define('RPJM.module.MasterData.Pegawai.view.grid.GridPegawai', {
    extend   : 'Ext.grid.Panel',
    //store    : 'RPJM.module.MasterData.Pegawai.store.Pegawai',
    //requires : ['RPJM.module.MasterData.Pegawai.store.Pegawai'],
    title    : 'Grid Pegawai',
    iconCls  : 'icon-grid',
    alias    : 'widget.gridpegawai',
    id       : 'gridpegawai',
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
        //store       : 'RPJM.module.MasterData.Pegawai.store.Pegawai',
        dock        : 'bottom'
    }], 
    columns  : [
        {
            text    : 'No',
            xtype   : 'rownumberer',
            width   : '10%'
        },
        {
            text     : 'NIP',
            dataIndex: 'nip',
            width    : '20%'
        },
        {
            text     : 'Pegawai',
            dataIndex: 'pegawai',
            width    : '50%'
        },
        {
            text     : 'Status Pegawai',
            dataIndex: 'status',
            width    : '20%'
        },
        {
            text     : 'Kode Desa',
            dataIndex: 'desa',
            width    : '20%'
        },
        {
            text     : 'Kode Kedudukan',
            dataIndex: 'kedudukan',
            width    : '20%'
        }
    ],
    tbar: [
         { xtype: 'button', iconCls: 'icon-delete', text: 'Delete', action : 'delete', disabled : deletePegawai },
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
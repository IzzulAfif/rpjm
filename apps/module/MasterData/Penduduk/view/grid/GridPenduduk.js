Ext.define('RPJM.module.MasterData.Penduduk.view.grid.GridPenduduk', {
    extend   : 'Ext.grid.Panel',
    //store    : 'RPJM.module.MasterData.Penduduk.store.Penduduk',
    //requires : ['RPJM.module.MasterData.Penduduk.store.Penduduk'],
    title    : 'Grid Penduduk',
    iconCls  : 'icon-grid',
    alias    : 'widget.gridpenduduk',
    id       : 'gridpenduduk',
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
        //store       : 'RPJM.module.MasterData.Penduduk.store.Penduduk',
        dock        : 'bottom'
    }], 
    columns  : [
        {
            text    : 'No',
            xtype   : 'rownumberer',
            width   : '10%'
        },
        {
            text     : 'Kode Penduduk',
            dataIndex: 'kode',
            width    : '20%'
        },
        {
            text     : 'Nama Lengkap',
            dataIndex: 'nama_lengkap',
            width    : '35%'
        },
        {
            text     : 'Pendidikan',
            dataIndex: 'pendidikan',
            width    : '25%'
        },
        {
            text     : 'Pekerjaan',
            dataIndex: 'pekerjaan',
            width    : '35%'
        },
        {
            text     : 'No. Hp',
            dataIndex: 'no_hp',
            width    : '25%'
        },
        {
            text     : 'ID Partai',
            dataIndex: 'id_partai',
            width    : '35%'
        }
    ],
    tbar: [
         { xtype: 'button', iconCls: 'icon-delete', text: 'Delete', action : 'delete', disabled : deletePenduduk },
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
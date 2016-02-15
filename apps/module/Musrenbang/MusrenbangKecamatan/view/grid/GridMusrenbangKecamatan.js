Ext.define('RPJM.module.Musrenbang.MusrenbangKecamatan.view.grid.GridMusrenbangKecamatan', {
    extend   : 'Ext.grid.Panel',
    store    : 'RPJM.module.Musrenbang.MusrenbangKecamatan.store.MusrenbangKecamatan',
    requires : ['RPJM.module.Musrenbang.MusrenbangKecamatan.store.MusrenbangKecamatan'],
    title    : 'Grid MusrenbangKecamatan',
    iconCls  : 'icon-grid',
    alias    : 'widget.gridmusrenbangkecamatan',
    id       : 'gridmusrenbangkecamatan',
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
        store       : 'RPJM.module.Musrenbang.MusrenbangKecamatan.store.MusrenbangKecamatan',
        dock        : 'bottom'
    }], 
    columns  : [
        {
            text    : 'No',
            xtype   : 'rownumberer',
            width   : '10%'
        },
        {
            text     : 'Id Musrenbang',
            dataIndex: 'id_musrenbang',
            width    : '15%'
        },
        {
            text     : 'Tahun',
            dataIndex: 'tahun',
            width    : '15%'
        },
        {
            text     : 'Kode Musrenbang',
            dataIndex: 'kode_musrenbang',
            width    : '15%',
            hidden   : true,
        },
        {
            text     : 'Kegiatan',
            dataIndex: 'kegiatan',
            width    : '15%'
        },
        {
            text     : 'Lokasi',
            dataIndex: 'lokasi',
            width    : '15%'
        },
        {
            text     : 'Volume',
            dataIndex: 'volume',
            width    : '15%'
        },
        {
            text     : 'Satuan',
            dataIndex: 'satuan',
            width    : '15%'
        },
        {
            text     : 'Swadana',
            dataIndex: 'swadana',
            width    : '15%'
        },
        {
            text     : 'APDB Kab',
            dataIndex: 'apbd_kab',
            width    : '15%'
        },
        {
            text     : 'APDB Prov',
            dataIndex: 'apbd_prov',
            width    : '15%'
        },
        {
            text     : 'APBN',
            dataIndex: 'apbn',
            width    : '15%'
        },
        {
            text     : 'Prioritas',
            dataIndex: 'prioritas_kecamatan',
            width    : '15%'
        },
    ],
    tbar: [
         { xtype: 'button', iconCls: 'icon-delete', text: 'Delete', action : 'delete', disabled : deleteMusrenbangKecamatan },
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